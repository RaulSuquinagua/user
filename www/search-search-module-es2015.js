(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar>\n    <ion-searchbar showCancelButton=\"never\" (ionInput)=\"filterList($event)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<!--\n  -->\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor = \"let item of goalList\" class=\"product-card\">\n      <img src=\"{{item.photoURL}}\" />\n      <h3 class=\"product-name\"> {{item.name}} $ {{item.price}} </h3>\n      <div class=\"add-cart\"> \n        <p class=\"product-price\"></p>\n        <ion-button size=\"small\" fill=\"solid\" (click)=\"addToCart(item)\">+</ion-button>\n      </div>\n        \n      \n    </ion-item>\n  </ion-list>\n\n\n\n<!--\n<ion-grid >\n  <ion-row>\n    <ion-col size=\"6\" *ngFor=\"let item of goalList\" class=\"product-card\">\n      <img src=\"{{item.photoURL}}\" />\n      <h3 class=\"product-name\">{{currency}} {{item.price}}</h3>\n      <div class=\"add-cart\">\n        <p class=\"product-price\">{{item.name}}</p>\n        <ion-button size=\"small\" fill=\"solid\" (click)=\"addToCart(item)\">+</ion-button>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");








const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_7__["SearchPage"]
    }
];
let SearchPageModule = class SearchPageModule {
};
SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_7__["SearchPage"]]
    })
], SearchPageModule);



/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-card img {\n  border-radius: 10px;\n}\n\n.product-card img {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  max-height: 190px;\n  position: relative;\n}\n\n.product-card h3 {\n  padding-top: 125px;\n  font-size: 20px;\n  padding-left: 40px;\n  color: #0076fd;\n  position: absolute;\n  -webkit-text-stroke: 1px black;\n  color: #a4c2e6;\n  font-weight: bold;\n}\n\n.product-card p {\n  font-weight: 600;\n  margin: 0;\n  font-size: 20px;\n  color: #4caf50;\n}\n\n.add-cart {\n  position: absolute;\n}\n\nion-button {\n  --border-radius: 4px;\n  margin-top: 165px;\n  right: 36px !important;\n  left: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0U6XFxQUk9KRUNUXFxTaG9wcGluIEFwcFxcc2hvcHBpbmdcXGRvd25sb2FkZmlsZS0yXFxpZnNyLTEuMC4xXFx1c2VyL3NyY1xcYXBwXFxzZWFyY2hcXHNlYXJjaC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0FOOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBREtFO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNGSjs7QURNRTtFQU1FLGtCQUFBO0FDUko7O0FEV0U7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1jYXJkIGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxyXG4gIH1cclxuICAucHJvZHVjdC1jYXJke1xyXG4gICAgaW1ne1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7Ly82MHB4XHJcbiAgICAgIHdpZHRoOiAxMDAlOy8vNjBweFxyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDsvLy0xMFxyXG4gICAgICAvL29iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxOTBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LWNhcmQgaDN7XHJcbiAgICBwYWRkaW5nLXRvcDogMTI1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBjb2xvcjogIzAwNzZmZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCBibGFjaztcclxuICAgIGNvbG9yOiAjYTRjMmU2OyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICAgIC8vZm9udC1mYW1pbHk6IHZlcmRhbmE7XHJcbiAgfVxyXG4gIC5wcm9kdWN0LWNhcmQgcHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjojNGNhZjUwO1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGQtY2FydHtcclxuICAgIFxyXG4gICAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gICAgLy9hbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAvL2ZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAvL2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b257XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi10b3A6IDE2NXB4O1xyXG4gICAgcmlnaHQ6IDM2cHggIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgLy9wYWRkaW5nLXRvcDogMTBweDtcclxuICAgIFxyXG4gIH1cclxuIiwiLnByb2R1Y3QtY2FyZCBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucHJvZHVjdC1jYXJkIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXgtaGVpZ2h0OiAxOTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZHVjdC1jYXJkIGgzIHtcbiAgcGFkZGluZy10b3A6IDEyNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgY29sb3I6ICMwMDc2ZmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrO1xuICBjb2xvcjogI2E0YzJlNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9kdWN0LWNhcmQgcCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzRjYWY1MDtcbn1cblxuLmFkZC1jYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi10b3A6IDE2NXB4O1xuICByaWdodDogMzZweCAhaW1wb3J0YW50O1xuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");




let SearchPage = class SearchPage {
    constructor(afdb, cartService) {
        this.afdb = afdb;
        this.cartService = cartService;
        this.goalList = [];
        this.loadedGoalList = [];
    }
    ngOnInit() {
        this.afdb.list('/products').snapshotChanges().subscribe((data) => {
            let tmp = [];
            data.forEach(product => {
                let p = product.payload.val();
                tmp.push(Object.assign({ key: product.key }, product.payload.val()));
            });
            this.goalList = tmp;
            this.loadedGoalList = tmp;
        });
    }
    initializeItems() {
        this.goalList = this.loadedGoalList;
    }
    filterList(evt) {
        this.initializeItems();
        const searchTerm = evt.srcElement.value;
        if (!searchTerm) {
            return;
        }
        this.goalList = this.goalList.filter(currentGoal => {
            if (currentGoal.name && searchTerm) {
                if (currentGoal.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    }
    addToCart(product) {
        this.cartService.add(product);
    }
    ;
};
SearchPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.page.html"),
        styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
], SearchPage);



/***/ })

}]);
//# sourceMappingURL=search-search-module-es2015.js.map