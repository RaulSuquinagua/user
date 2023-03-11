import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../environments/environment.prod'
import { AlertController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { take } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  //maps
  address2: any = {};
  key: any = '';
  isEdit = false;
  map: any;
  marker: any;
  lat: any;
  lng: any;
  googleAutocomplete: any;
  //cart
  flag = false;
  total = 0;
  currentAddress: any = {};
  currentName: '';
  currentMobile: '';
  cart = [];
  finalPrice = 0;
  addresses: any = [];
  addressIndex = 0;
  address: any = {};
  currency: any = '';
  today = new Date().toISOString().substring(0, 10);
  isSubscribe = false;
  order: any = {};
  numbers = Array(30).fill(0).map((x, i) => i + 1);

  constructor(
    private cartService: CartService,
    private afdb: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private zone: NgZone,
    private alertCtrl: AlertController,
    private common: CommonService,
    private geolocation: Geolocation,
    private route: ActivatedRoute,
    private chRef: ChangeDetectorRef,

  ) {

    this.afdb.list('users/' + this.afAuth.auth.currentUser.uid).snapshotChanges().subscribe((data: any) => {
      let tmp = [];
      data.forEach(c => tmp.push(c.payload.val()));
      this.currentName = tmp[tmp.length-4];
      this.currentMobile = tmp[tmp.length-5];
      console.log("name");
      console.log(this.currentName);

      this.key = this.route.snapshot.paramMap.get('id');
      console.log(this.key);
      if (this.key != '' && this.key != null) {
        this.isEdit = true;
        this.getAddress();
      }
      else {
        this.geolocation.getCurrentPosition().then((resp) => {
          this.lat = resp.coords.latitude;
          this.lng = resp.coords.longitude;
          this.loadMap();
        }).catch((error) => {
          //this.common.showToast("Error de localización");
          console.log('Error getting location', error);
        });
      }
  
      this.getAddress();
      
      
    });


    
    this.currency = environment.currency;
    console.log(this.today);

    this.cartService.calculateTotal().subscribe(data => {

      this.zone.run(() => {
        console.log(this.finalPrice);
        this.finalPrice = data.finalPrice;
        console.log(this.finalPrice);
      })
    })
    



  }



  ionViewWillEnter() {

    this.cart = this.cartService.get();
    this.total = this.cart.length;

    this.cartService.calculateTotal().subscribe(data => {
      this.finalPrice = data.finalPrice;
      this.total = data.totalQty;
    });
  }

  swapMethod() {

    this.isSubscribe = !this.isSubscribe;
    console.log(this.isSubscribe);
  }

  increase(index) {
    this.cartService.increase(index);
  }

  decrease(index) {
    this.cartService.decrease(index);
  }

  getAddress() {
    this.afdb.list('users/' + this.afAuth.auth.currentUser.uid + '/address')
      .snapshotChanges().subscribe((data: any) => {
        this.addresses = [];
        data.forEach(address => this.addresses.push({ key: address.key, ...address.payload.val() }));
      });
  }

  updateAddress() { 
    
    //this.addresses = [];

   


    console.log(this.addresses);
    
    if (this.addresses[this.addressIndex] != undefined)
      this.address = this.addresses[this.addressIndex]
  }

  checkout() {
    //this.address = this.addresses[0];
    console.log(this.address);
    if (Object.keys(this.address).length != 0) {
      this.alertCtrl.create({
        message: '¿Esta seguro de ordenar?',
        buttons: [
          { text: 'Confirmar', handler: () => this.assignToDriver() },
          { text: 'Cancelar' },
        ]
      }).then(r => r.present());
    }
    else {
      this.alertCtrl.create({ message: "Por favor escoja una dirección" }).then(r => r.present());
    }
  }

  assignToDriver() {
    this.common.showLoader();

    this.afdb.list('drivers', ref => ref.orderByChild("pincodes/" + this.address.pin).equalTo(true))
      .snapshotChanges().pipe(take(1)).subscribe((drivers: any) => {
        console.log(drivers);
        let driverId = '';

        if (drivers != null && drivers != undefined && drivers.length != 0)
          driverId = drivers[0].key
        else
          driverId = '';

        console.log(driverId);


        

        let orderInput = {};


        orderInput = {
          createdAt: new Date().getTime(),
          userId: this.afAuth.auth.currentUser.uid,
          cart: this.cart,
          finalPrice: this.finalPrice,
          orderStatus: 'ordered',
          address: this.address,
          driverId: driverId,
          userName: this.currentName,
        }


        this.afdb.list('orders').push(orderInput).then(() => {
          this.common.hideLoader();

          this.cartService.clear();
          this.cart = [];
          this.total = 0;
          this.currentName = '';
          this.cartService.calculateTotal();
          

          this.common.showToast("Ordenado correctamente");
        }).catch(err => {
          console.log(err);
          this.common.hideLoader();
          this.common.showToast("Algo ocurrio mal");
        })

      })
  }

  loadMap() {

    let latLng = new google.maps.LatLng(this.lat, this.lng);
    // get center's address
    this.findPlace(latLng);

    this.map.addListener('center_changed', (event) => {
      let center = this.map.getCenter();
      this.findPlace(center);
    })
  }


  // find address by LatLng
  findPlace(latLng) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latLng }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log(results);
        this.address2.address = results[0].formatted_address;

        results[0].address_components.forEach(data => {
          if (data.types[0] == "postal_code") {
            this.address2.pin = data.long_name;
          }
        })

        this.address2.lat = this.lat;
        this.address2.lng = this.lng;
        this.address2.pin = "0102";
        this.address2.tag = "Dir. actual";
        this.address2.landmark = "habitual";
        this.address2.mobile = this.currentMobile;

        this.addresses.push(this.address2);
        this.flag = true;
        console.log(this.address2.tag);
        
        this.chRef.detectChanges();
      }
    });
  }





}
