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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
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
    return Tab2PageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var Tab2Page = /** @class */ (function () {
    function Tab2Page(cartService, afdb, afAuth, zone, alertCtrl, common, geolocation, route, chRef) {
        var _this = this;
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
        this.numbers = Array(30).fill(0).map(function (x, i) { return i + 1; });
        this.afdb.list('users/' + this.afAuth.auth.currentUser.uid).snapshotChanges().subscribe(function (data) {
            var tmp = [];
            data.forEach(function (c) { return tmp.push(c.payload.val()); });
            _this.currentName = tmp[tmp.length - 4];
            _this.currentMobile = tmp[tmp.length - 5];
            console.log("name");
            console.log(_this.currentName);
            _this.key = _this.route.snapshot.paramMap.get('id');
            console.log(_this.key);
            if (_this.key != '' && _this.key != null) {
                _this.isEdit = true;
                _this.getAddress();
            }
            else {
                _this.geolocation.getCurrentPosition().then(function (resp) {
                    _this.lat = resp.coords.latitude;
                    _this.lng = resp.coords.longitude;
                    _this.loadMap();
                }).catch(function (error) {
                    //this.common.showToast("Error de localización");
                    console.log('Error getting location', error);
                });
            }
            _this.getAddress();
        });
        this.currency = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].currency;
        console.log(this.today);
        this.cartService.calculateTotal().subscribe(function (data) {
            _this.zone.run(function () {
                console.log(_this.finalPrice);
                _this.finalPrice = data.finalPrice;
                console.log(_this.finalPrice);
            });
        });
    }
    Tab2Page.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.cart = this.cartService.get();
        this.total = this.cart.length;
        this.cartService.calculateTotal().subscribe(function (data) {
            _this.finalPrice = data.finalPrice;
            _this.total = data.totalQty;
        });
    };
    Tab2Page.prototype.swapMethod = function () {
        this.isSubscribe = !this.isSubscribe;
        console.log(this.isSubscribe);
    };
    Tab2Page.prototype.increase = function (index) {
        this.cartService.increase(index);
    };
    Tab2Page.prototype.decrease = function (index) {
        this.cartService.decrease(index);
    };
    Tab2Page.prototype.getAddress = function () {
        var _this = this;
        this.afdb.list('users/' + this.afAuth.auth.currentUser.uid + '/address')
            .snapshotChanges().subscribe(function (data) {
            _this.addresses = [];
            data.forEach(function (address) { return _this.addresses.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: address.key }, address.payload.val())); });
        });
    };
    Tab2Page.prototype.updateAddress = function () {
        //this.addresses = [];
        console.log(this.addresses);
        if (this.addresses[this.addressIndex] != undefined)
            this.address = this.addresses[this.addressIndex];
    };
    Tab2Page.prototype.checkout = function () {
        var _this = this;
        //this.address = this.addresses[0];
        console.log(this.address);
        if (Object.keys(this.address).length != 0) {
            this.alertCtrl.create({
                message: '¿Esta seguro de ordenar?',
                buttons: [
                    { text: 'Confirmar', handler: function () { return _this.assignToDriver(); } },
                    { text: 'Cancelar' },
                ]
            }).then(function (r) { return r.present(); });
        }
        else {
            this.alertCtrl.create({ message: "Por favor escoja una dirección" }).then(function (r) { return r.present(); });
        }
    };
    Tab2Page.prototype.assignToDriver = function () {
        var _this = this;
        this.common.showLoader();
        this.afdb.list('drivers', function (ref) { return ref.orderByChild("pincodes/" + _this.address.pin).equalTo(true); })
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function (drivers) {
            console.log(drivers);
            var driverId = '';
            if (drivers != null && drivers != undefined && drivers.length != 0)
                driverId = drivers[0].key;
            else
                driverId = '';
            console.log(driverId);
            var orderInput = {};
            orderInput = {
                createdAt: new Date().getTime(),
                userId: _this.afAuth.auth.currentUser.uid,
                cart: _this.cart,
                finalPrice: _this.finalPrice,
                orderStatus: 'ordered',
                address: _this.address,
                driverId: driverId,
                userName: _this.currentName,
            };
            _this.afdb.list('orders').push(orderInput).then(function () {
                _this.common.hideLoader();
                _this.cartService.clear();
                _this.cart = [];
                _this.total = 0;
                _this.currentName = '';
                _this.cartService.calculateTotal();
                _this.common.showToast("Ordenado correctamente");
            }).catch(function (err) {
                console.log(err);
                _this.common.hideLoader();
                _this.common.showToast("Algo ocurrio mal");
            });
        });
    };
    Tab2Page.prototype.loadMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(this.lat, this.lng);
        // get center's address
        this.findPlace(latLng);
        this.map.addListener('center_changed', function (event) {
            var center = _this.map.getCenter();
            _this.findPlace(center);
        });
    };
    // find address by LatLng
    Tab2Page.prototype.findPlace = function (latLng) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'latLng': latLng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                console.log(results);
                _this.address2.address = results[0].formatted_address;
                results[0].address_components.forEach(function (data) {
                    if (data.types[0] == "postal_code") {
                        _this.address2.pin = data.long_name;
                    }
                });
                _this.address2.lat = _this.lat;
                _this.address2.lng = _this.lng;
                _this.address2.pin = "0102";
                _this.address2.tag = "Dir. actual";
                _this.address2.landmark = "habitual";
                _this.address2.mobile = _this.currentMobile;
                _this.addresses.push(_this.address2);
                _this.flag = true;
                console.log(_this.address2.tag);
                _this.chRef.detectChanges();
            }
        });
    };
    Tab2Page.ctorParameters = function () { return [
        { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
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
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map