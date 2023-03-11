(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons  class = \"flecha\" slot=\"start\">\n      <ion-back-button style=\"background-color: #facd2a;\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n\n      <ion-input placeholder=\"¿Que necesitas?\"type=\"text\" routerLink = \"/tabs/tab4\"><hr></ion-input>\n\n    \n    </ion-title>\n  \n  </ion-toolbar>\n</ion-header>\n<div>\n  <hr>\n</div>\n\n<ion-content>\n  \n  <ion-grid *ngIf = \"flag == true\">\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let product of products\" class=\"product-card\">\n        <img src=\"{{product.photoURL}}\" />\n        <h3 class=\"product-name\">{{currency}} {{product.price}}</h3>\n        <div class=\"add-cart\">\n          <p class=\"product-price\">{{product.name}}</p>\n          <ion-button size=\"small\" fill=\"solid\" (click)=\"addToCart(product)\">+</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!--\n-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");







var routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
    }
];
var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());



/***/ }),

/***/ "./src/app/products/products.page.scss":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer {\n  padding: 10px 20px;\n  text-align: center;\n  color: #3880ff;\n  font-size: x-large;\n}\n\nion-col {\n  padding: 0.5%;\n}\n\nion-row {\n  padding: 1%;\n}\n\nion-button {\n  --border-radius: 4px;\n}\n\nion-badge {\n  position: absolute;\n  margin-top: -0.3rem;\n}\n\n.slide {\n  margin: 4px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n.category-slides {\n  padding-top: 20px;\n  overflow: auto;\n  white-space: nowrap;\n}\n\n.category-slide {\n  margin: 4px;\n}\n\n.pide {\n  height: 100px;\n  width: 100px;\n  border-radius: 200px;\n  padding: 2px;\n  border: 2px solid #0076fd;\n}\n\n.category-slide img {\n  height: 80px;\n  width: 80px;\n}\n\n.category-slide h3 {\n  font-size: 12px;\n  margin: 8px 0px;\n}\n\n.category-slide img {\n  border-radius: 200px;\n  padding: 2px;\n  border: 2px solid #0076fd;\n}\n\n.product-card img {\n  border-radius: 10px;\n}\n\n.product-card img {\n  height: 80%;\n  width: 100%;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-height: 190px;\n}\n\n.product-card h3 {\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: -8px;\n  margin-top: -20px;\n  color: #4caf50;\n  text-align: right;\n}\n\n.product-card p {\n  margin: 0px 0px;\n  font-weight: 600;\n  font-size: 14px;\n  color: #333;\n}\n\n.add-cart {\n  margin-top: 4px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.filter-card {\n  padding-top: 90%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.filter-card p {\n  margin: 0px 0px;\n  color: #777;\n}\n\nhr {\n  height: 2px;\n  background-color: #3880ff;\n}\n\nion-header {\n  --ion-background-color: #facd2a;\n}\n\nion-title {\n  padding-bottom: 15px;\n  text-align: center;\n  color: #3880ff;\n  font-size: 20px;\n}\n\nion-title ion-input {\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvRTpcXFBST0pFQ1RcXFNob3BwaW4gQXBwXFxzaG9wcGluZ1xcZG93bmxvYWRmaWxlLTJcXGlmc3ItMS4wLjFcXHVzZXIvc3JjXFxhcHBcXHByb2R1Y3RzXFxwcm9kdWN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLRTtFQUNFLGFBQUE7QUNGSjs7QURJRTtFQUNFLFdBQUE7QUNESjs7QURJRTtFQUNFLG9CQUFBO0FDREo7O0FESUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUU7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtBQ0RKOztBREtFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURJRTtFQUNDLFdBQUE7QUNESDs7QURTRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNOSjs7QURRRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDTEo7O0FET0U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0pKOztBRE1FO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNISjs7QURNRTtFQUNFLG1CQUFBO0FDSEo7O0FETUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxpQkFBQTtBQ0hOOztBRE9FO0VBQ0UsZ0JBQUE7RUFFQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRE9FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNKSjs7QURRRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0xKOztBRE9FO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0pKOztBRE9FO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNKSjs7QURNRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ0hKOztBREtFO0VBQ0UsK0JBQUE7QUNGSjs7QURJRTtFQUdFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE9JO0VBQ0UsbUJBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuICBcclxuICBpb24tZm9vdGVye1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMzODgwZmY7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb2x7XHJcbiAgICBwYWRkaW5nOiAwLjUlOy8vMTJcclxuICB9XHJcbiAgaW9uLXJvd3tcclxuICAgIHBhZGRpbmc6IDElOy8vMTJcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tYmFkZ2V7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMC4zcmVtO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGV7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuY2F0ZWdvcnktc2xpZGVze1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIC5jYXRlZ29yeS1zbGlkZXtcclxuICAgbWFyZ2luOiA0cHg7XHJcbiAgIC8vXHJcbiAgIC8vZGlzcGxheTppbmxpbmUtZmxleCA7Ly9cclxuICAgLy9mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIC8vanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5waWRle1xyXG4gICAgaGVpZ2h0OiAxMDBweDsvLzYwcHhcclxuICAgIHdpZHRoOiAxMDBweDsvLzYwcHhcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNzZmZDsvL2ZkY2MwMFxyXG4gIH1cclxuICAuY2F0ZWdvcnktc2xpZGUgaW1ne1xyXG4gICAgaGVpZ2h0OiA4MHB4Oy8vNjBweFxyXG4gICAgd2lkdGg6IDgwcHg7Ly82MHB4XHJcbiAgfVxyXG4gIC5jYXRlZ29yeS1zbGlkZSBoM3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjo4cHggMHB4O1xyXG4gIH1cclxuICAuY2F0ZWdvcnktc2xpZGUgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA3NmZkOy8vZmRjYzAwXHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LWNhcmQgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbiAgfVxyXG4gIC5wcm9kdWN0LWNhcmR7XHJcbiAgICBpbWd7XHJcbiAgICAgIGhlaWdodDogODAlOy8vNjBweFxyXG4gICAgICB3aWR0aDogMTAwJTsvLzYwcHhcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7Ly8tMTBcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDE5MHB4O1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgLnByb2R1Y3QtY2FyZCBoM3tcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgXHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7Ly8tMTBcclxuICAgIGNvbG9yOiM0Y2FmNTA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLnByb2R1Y3QtY2FyZCBwe1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLmFkZC1jYXJ0e1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuZmlsdGVyLWNhcmR7XHJcbiAgICBwYWRkaW5nLXRvcDogOTAlOy8vOTBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgLmZpbHRlci1jYXJkIHB7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICB9XHJcbiAgaHIge1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzODgwZmY7XHJcbiAgfVxyXG4gIGlvbi1oZWFkZXJ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmFjZDJhO1xyXG4gIH1cclxuICBpb24tdGl0bGV7XHJcbiAgICAvL3BhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IzM4ODBmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIFxyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmO1xyXG4gICAgXHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuICB9XHJcbiAgIiwiaW9uLWZvb3RlciB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzM4ODBmZjtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMC41JTtcbn1cblxuaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDElO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTAuM3JlbTtcbn1cblxuLnNsaWRlIHtcbiAgbWFyZ2luOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uY2F0ZWdvcnktc2xpZGVzIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2F0ZWdvcnktc2xpZGUge1xuICBtYXJnaW46IDRweDtcbn1cblxuLnBpZGUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDc2ZmQ7XG59XG5cbi5jYXRlZ29yeS1zbGlkZSBpbWcge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4uY2F0ZWdvcnktc2xpZGUgaDMge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogOHB4IDBweDtcbn1cblxuLmNhdGVnb3J5LXNsaWRlIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDc2ZmQ7XG59XG5cbi5wcm9kdWN0LWNhcmQgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnByb2R1Y3QtY2FyZCBpbWcge1xuICBoZWlnaHQ6IDgwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWF4LWhlaWdodDogMTkwcHg7XG59XG5cbi5wcm9kdWN0LWNhcmQgaDMge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBjb2xvcjogIzRjYWY1MDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wcm9kdWN0LWNhcmQgcCB7XG4gIG1hcmdpbjogMHB4IDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmFkZC1jYXJ0IHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5maWx0ZXItY2FyZCB7XG4gIHBhZGRpbmctdG9wOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZpbHRlci1jYXJkIHAge1xuICBtYXJnaW46IDBweCAwcHg7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG5ociB7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZhY2QyYTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzODgwZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbmlvbi10aXRsZSBpb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/products/products.page.ts":
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");







var ProductsPage = /** @class */ (function () {
    function ProductsPage(route, afAuth, cartService, afdb, zone) {
        var _this = this;
        this.route = route;
        this.afAuth = afAuth;
        this.cartService = cartService;
        this.afdb = afdb;
        this.zone = zone;
        this.key = '';
        this.flag = false;
        this.name = [];
        this.allProducts = [];
        this.products = [];
        this.currency = '';
        this.cartCount = 0;
        this.categories = [];
        this.categories2 = [];
        this.banners = [];
        this.selectedCategory = '';
        //this.key = this.route.snapshot.paramMap.get('id');
        this.key = this.route.snapshot.paramMap.get('key');
        console.log("aqui");
        console.log(this.key);
        this.afAuth.auth.onAuthStateChanged(function (user) {
            if (user != null) {
                _this.getProducts();
                _this.currency = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].currency;
                _this.cartService.calculateTotal().subscribe(function (data) { return _this.zone.run(function () { return _this.cartCount = data.totalQty; }); });
            }
        });
    }
    ProductsPage.prototype.ngOnInit = function () {
    };
    ProductsPage.prototype.getProducts = function () {
        var _this = this;
        this.afdb.list('/products').snapshotChanges().subscribe(function (data) {
            var tmp = [];
            data.forEach(function (product) {
                var p = product.payload.val();
                if (p.isAvail == true || p.isAvail == "true") {
                    tmp.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: product.key }, product.payload.val()));
                }
            });
            _this.allProducts = tmp;
            _this.products = tmp;
            _this.fetchCategory();
        });
    };
    ProductsPage.prototype.fetchCategory = function () {
        var _this = this;
        this.afdb.list('categories/').snapshotChanges().subscribe(function (res) {
            console.log(res);
            var tmp = [];
            res.forEach(function (c) { return tmp.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.key }, c.payload.val())); });
            _this.categories = tmp;
            console.log("vvvvv");
            console.log(_this.categories);
            console.log("pvvvvv");
            _this.filter();
        });
    };
    ProductsPage.prototype.filter = function () {
        var _this = this;
        console.log("categories");
        console.log(this.categories);
        this.products = this.allProducts;
        //this.selectedCategory = "comida";
        this.products = this.products.filter(function (p) { return p.category == _this.key; });
        this.flag = true;
        console.log("products");
        console.log(this.products);
    };
    ProductsPage.prototype.addToCart = function (product) {
        this.cartService.add(product);
    };
    ProductsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html"),
            styles: [__webpack_require__(/*! ./products.page.scss */ "./src/app/products/products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], ProductsPage);
    return ProductsPage;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module-es5.js.map