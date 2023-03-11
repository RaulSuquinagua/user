import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { CartService } from '../services/cart.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  
})
export class ProductsPage implements OnInit {
  key: any = '';
  flag = false;
  name: any = [];
  allProducts: any = [];
  products: any = [];
  currency: any = '';
  cartCount = 0;
  categories: any = [];
  categories2: any = [];
  banners: any = [];
  selectedCategory: any = '';

  constructor(
    private route: ActivatedRoute,
    private afAuth: AngularFireAuth,
    private cartService: CartService,
    private afdb: AngularFireDatabase,
    private zone: NgZone,
    ) { 
    
    //this.key = this.route.snapshot.paramMap.get('id');
    this.key = this.route.snapshot.paramMap.get('key');
    console.log("aqui");
    
    console.log(this.key);

    this.afAuth.auth.onAuthStateChanged(user => {
      if (user != null) {
        this.getProducts();
        this.currency = environment.currency;
        this.cartService.calculateTotal().subscribe(data => this.zone.run(() => this.cartCount = data.totalQty));
      }
    });

  }

  ngOnInit() {
  }

  getProducts() {
    this.afdb.list('/products').snapshotChanges().subscribe((data: any) => {
      let tmp = [];
      data.forEach(product => {
        let p = product.payload.val();
        if (p.isAvail == true || p.isAvail == "true") {
          tmp.push({ key: product.key, ...product.payload.val() });
        }
      })
      this.allProducts = tmp;
      this.products = tmp;
      this.fetchCategory();
    });
  }

  fetchCategory() {
    this.afdb.list('categories/').snapshotChanges().subscribe((res: any) => {
      console.log(res);
      let tmp = [];
      
      res.forEach(c => tmp.push({ key: c.key, ...c.payload.val() }));
      this.categories = tmp;
      console.log("vvvvv");
      console.log(this.categories);
      console.log("pvvvvv");
      this.filter();
    })
  }

  filter() {
    console.log("categories");
    console.log(this.categories);
    
    this.products = this.allProducts;
    //this.selectedCategory = "comida";
    this.products = this.products.filter(p => p.category == this.key)
    this.flag = true;
    console.log("products");
    
    console.log(this.products);
  }

  addToCart(product) {
    this.cartService.add(product);
    
    
    
  }


}
