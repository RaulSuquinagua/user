(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!--\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  -->\r\n    <ion-title>\r\n      CARRITO\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div class=\"not-found\" *ngIf=\"total == 0\">\r\n    <img src=\"./assets/images/nodata2.png\" />\r\n    <p>{{ 'NO_ITEMS_FOUND' | translate }}</p>\r\n    <ion-button expand=\"block\"  routerLink=\"/tabs/tab1\">Regresar al inicio</ion-button>\r\n  </div>\r\n\r\n  <ion-list lines=\"none\">\r\n    <ion-item *ngFor=\"let item of cart; let i = index\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"{{item.photoURL}}\" style=\"border-radius: 8px;\" />\r\n      </ion-thumbnail>\r\n      <ion-label style=\" text-align: center;\">\r\n        <ion-text>\r\n          <h3>{{item.name}}</h3>\r\n        </ion-text>\r\n        <ion-button class=\"cart-button\" color=\"primary\" fill=\"solid\" size=\"small\" (click)=\"increase(i)\">+</ion-button>\r\n        <ion-button fill=\"clear\" color=\"secondary\">{{item.qty}}</ion-button>\r\n        <ion-button class=\"cart-button\" color=\"primary\" fill=\"solid\" size=\"small\" (click)=\"decrease(i)\">-</ion-button>\r\n      </ion-label>\r\n      \r\n      <ion-text slot=\"end\">\r\n        {{currency}} {{item.qty * item.price}}\r\n      </ion-text>\r\n    \r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n<ion-footer *ngIf=\"total != 0\" class=\"ion-padding\">\r\n  <ion-toolbar>\r\n    <ion-list lines=\"none\">\r\n      \r\n      <ion-item>\r\n        <ion-label>\r\n          Total\r\n        </ion-label>\r\n        <ion-text slot=\"end\" class=\"final-price\">\r\n          {{currency}} {{finalPrice}}\r\n        </ion-text>\r\n      </ion-item>\r\n    \r\n      <ion-item>\r\n        <ion-text class=\"deliberyTo\">\r\n          {{ 'DELIVER_TO' | translate }}\r\n        </ion-text>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <label *ngIf=\"flag == false\">\r\n          Cargando direcciones ...\r\n        </label>\r\n      </ion-item>\r\n          <!--\r\n      <ion-item *ngFor=\"let address of addresses\">\r\n        <ion-label>\r\n          <ion-text>\r\n            <h3>{{address.tag}}</h3>\r\n          </ion-text>\r\n          <ion-text>\r\n            <p>{{address.address}}</p>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-button fill=\"clear\" slot=\"end\" routerLink=\"/address/edit/{{address.key}}\">\r\n          <ion-icon name=\"create\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n        \r\n        <ion-item *ngIf=\"addresses.length == 0\">\r\n          <ion-label>\r\n            <ion-text>\r\n              <h3>{{address.tag}}</h3>\r\n            </ion-text>\r\n            <ion-text>\r\n              <p>{{address.address}}</p>\r\n            </ion-text>\r\n          </ion-label>\r\n          <ion-button fill=\"clear\"  slot=\"end\" routerLink=\"/addaddress\">\r\n            Select</ion-button>\r\n        </ion-item>\r\n      -->\r\n          \r\n          \r\n        \r\n      \r\n      \r\n    </ion-list>\r\n\r\n    <!--*ngIf=\"addresses.length != 0\"-->\r\n    <div>\r\n      <ion-select  *ngIf=\"flag == true\" slot=\"end\"  [(ngModel)]=\"addressIndex\" (ionChange)=\"updateAddress()\"\r\n      placeholder=\"select\">\r\n      <ion-select-option *ngFor=\"let address of addresses; let i=index\" value=\"{{i}}\">{{address.tag}}\r\n      </ion-select-option>\r\n    </ion-select>\r\n    </div>\r\n    \r\n  \r\n  \r\n    <p style=\"font-size: 12px;\" *ngIf=\"address.address != undefined\">{{ address.address }}</p>\r\n    \r\n    <ion-button fill=\"solid\" *ngIf=\"!isSubscribe\" expand=\"block\" (click)=\"checkout() \">\r\n      {{ 'CHECKOUT' | translate }}\r\n    </ion-button>\r\n  \r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkout {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 4px 16px;\n}\n\n.cart-button {\n  height: 24px !important;\n  width: 24px !important;\n  font-size: 12px;\n  border-radius: 40px;\n}\n\n.deliberyTo {\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.final-price {\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.footer-md:before {\n  background: none;\n}\n\n/*\n.list-dir{\n    padding-block: 10px;\n}*/\n\nion-title {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n  color: #3880ff;\n  font-size: x-large;\n  background-color: #facd2a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9FOlxcUFJPSkVDVFxcU2hvcHBpbiBBcHBcXHNob3BwaW5nXFxkb3dubG9hZGZpbGUtMlxcaWZzci0xLjAuMVxcdXNlci9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTs7O0VBQUE7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja291dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xyXG59XHJcblxyXG4uY2FydC1idXR0b257XHJcbiAgICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG4uZGVsaWJlcnlUb3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5maW5hbC1wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5mb290ZXItbWQ6YmVmb3Jle1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4vKlxyXG4ubGlzdC1kaXJ7XHJcbiAgICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xyXG59Ki9cclxuaW9uLXRpdGxle1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2QyYTtcclxuICBcclxuICB9XHJcblxyXG4iLCIuY2hlY2tvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRweCAxNnB4O1xufVxuXG4uY2FydC1idXR0b24ge1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDI0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xufVxuXG4uZGVsaWJlcnlUbyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZpbmFsLXByaWNlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZm9vdGVyLW1kOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi8qXG4ubGlzdC1kaXJ7XG4gICAgcGFkZGluZy1ibG9jazogMTBweDtcbn0qL1xuaW9uLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzg4MGZmO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWNkMmE7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");











let Tab2Page = class Tab2Page {
    constructor(cartService, afdb, afAuth, zone, alertCtrl, common, geolocation, route, chRef) {
        this.cartService = cartService;
        this.afdb = afdb;
        this.afAuth = afAuth;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.common = common;
        this.geolocation = geolocation;
        this.route = route;
        this.chRef = chRef;
        //maps
        this.address2 = {};
        this.key = '';
        this.isEdit = false;
        //cart
        this.flag = false;
        this.total = 0;
        this.currentAddress = {};
        this.cart = [];
        this.finalPrice = 0;
        this.addresses = [];
        this.addressIndex = 0;
        this.address = {};
        this.currency = '';
        this.today = new Date().toISOString().substring(0, 10);
        this.isSubscribe = false;
        this.order = {};
        this.numbers = Array(30).fill(0).map((x, i) => i + 1);
        this.afdb.list('users/' + this.afAuth.auth.currentUser.uid).snapshotChanges().subscribe((data) => {
            let tmp = [];
            data.forEach(c => tmp.push(c.payload.val()));
            this.currentName = tmp[tmp.length - 4];
            this.currentMobile = tmp[tmp.length - 5];
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
        this.currency = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].currency;
        console.log(this.today);
        this.cartService.calculateTotal().subscribe(data => {
            this.zone.run(() => {
                console.log(this.finalPrice);
                this.finalPrice = data.finalPrice;
                console.log(this.finalPrice);
            });
        });
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
            .snapshotChanges().subscribe((data) => {
            this.addresses = [];
            data.forEach(address => this.addresses.push(Object.assign({ key: address.key }, address.payload.val())));
        });
    }
    updateAddress() {
        //this.addresses = [];
        console.log(this.addresses);
        if (this.addresses[this.addressIndex] != undefined)
            this.address = this.addresses[this.addressIndex];
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
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe((drivers) => {
            console.log(drivers);
            let driverId = '';
            if (drivers != null && drivers != undefined && drivers.length != 0)
                driverId = drivers[0].key;
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
            };
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
            });
        });
    }
    loadMap() {
        let latLng = new google.maps.LatLng(this.lat, this.lng);
        // get center's address
        this.findPlace(latLng);
        this.map.addListener('center_changed', (event) => {
            let center = this.map.getCenter();
            this.findPlace(center);
        });
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
                });
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
};
Tab2Page.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map