(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <ion-input placeholder=\"¿Que necesitas?\"type=\"text\" routerLink = \"/tabs/tab4\"><hr></ion-input>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-slides pager=\"true\">\n    <ion-slide *ngFor=\"let j of indexes; let k = index\">\n      <div *ngIf=\"categories.length != 0\">\n        <div class=\"category-slide\" *ngFor=\"let c of categories; let i = index\" routerLink=\"/products/{{c.key}}\">\n          <img *ngIf=\"i ==0+7*k\" src=\"{{c.photoURL}}\" style=\"position:absolute; margin-top: 8.5%;margin-left: 4%;\"/>\n          <img *ngIf=\"i ==1+7*k\" src=\"{{c.photoURL}}\" style=\"position:absolute; margin-top: 10%;margin-left: -20%;\"/>\n          <img *ngIf=\"i ==2+7*k\" src=\"{{c.photoURL}}\" style=\"position:absolute; margin-top: -8%;margin-left: -35.5%;\"/>\n          <img *ngIf=\"i ==3+7*k\" src=\"{{c.photoURL}}\" style=\"position:absolute; margin-top: -32%;margin-left: -32%;\"/>\n          <img *ngIf=\"i ==4+7*k\" src=\"{{c.photoURL}}\" style=\"position:absolute; margin-top: -43%;margin-left: -11%;\"/>\n          <img *ngIf=\"i ==5+7*k\" src=\"{{c.photoURL}}\" style=\"position:absolute; margin-top: -33%;margin-left: 11%;\"/>\n          <img *ngIf=\"i ==6+7*k\" src=\"{{c.photoURL}}\" style=\"position:absolute; margin-top: -11%;margin-left: 18%;\"/>\n        </div>\n      </div>\n    \n      <div>\n       <a href=\"https://api.whatsapp.com/send?phone=593986698739\"><img class = \"pide\" src=\"./assets/images/pide2.png\"   style=\"position:absolute; margin-top: -18%;margin-left: -14%;\"/></a> \n      </div>\n      <!--\n    -->\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n<ion-footer>\n  <img src=\"./assets/images/pidenos2.png\" width=\"200px\"/>\n</ion-footer>"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nion-content {\n  --ion-background-color: #facd2a;\n}\n\nion-title {\n  background-color: #facd2a;\n  padding-bottom: 15px;\n  text-align: center;\n  color: #3880ff;\n  font-size: 20px;\n}\n\nion-title ion-input {\n  border-radius: 25px;\n}\n\nion-footer {\n  padding: 10px 20px;\n  text-align: center;\n  color: #3880ff;\n  font-size: x-large;\n  background-color: #facd2a;\n}\n\nion-col {\n  padding: 0.5%;\n}\n\nion-row {\n  padding: 1%;\n}\n\nion-button {\n  --border-radius: 4px;\n}\n\nion-badge {\n  position: absolute;\n  margin-top: -0.3rem;\n}\n\n.category-slides {\n  padding-top: 20px;\n  overflow: auto;\n  white-space: nowrap;\n}\n\n.category-slide {\n  margin: 4px;\n}\n\n.pide {\n  height: 100px;\n  width: 100px;\n  border-radius: 200px;\n  padding: 2px;\n}\n\n.category-slide img {\n  height: 80px;\n  width: 80px;\n}\n\n.category-slide h3 {\n  font-size: 12px;\n  margin: 8px 0px;\n}\n\n.category-slide img {\n  border-radius: 200px;\n  padding: 2px;\n  border: 2px solid #ffff;\n}\n\n.product-card img {\n  border-radius: 10px;\n}\n\n.product-card img {\n  height: 80%;\n  width: 100%;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-height: 190px;\n}\n\n.product-card h3 {\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: -8px;\n  margin-top: -20px;\n  color: #4caf50;\n  text-align: right;\n}\n\n.product-card p {\n  margin: 0px 0px;\n  font-weight: 600;\n  font-size: 14px;\n  color: #333;\n}\n\n.add-cart {\n  margin-top: 4px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.filter-card {\n  padding-top: 90%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.filter-card p {\n  margin: 0px 0px;\n  color: #777;\n}\n\nhr {\n  height: 2px;\n  background-color: #3880ff;\n}\n\n.header-md:after, .footer-md:before {\n  background-image: none;\n}\n\nion-slides {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9FOlxcUFJPSkVDVFxcU2hvcHBpbiBBcHBcXHNob3BwaW5nXFxkb3dubG9hZGZpbGUtMlxcaWZzci0xLjAuMVxcdXNlci9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBRENBO0VBRUUseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDRjs7QURHRTtFQUNFLG1CQUFBO0FDREo7O0FET0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNKRjs7QURPQTtFQUNFLGFBQUE7QUNKRjs7QURNQTtFQUNFLFdBQUE7QUNIRjs7QURNQTtFQUNFLG9CQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0hGOztBREtBO0VBQ0MsV0FBQTtBQ0ZEOztBRFVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNQRjs7QURVQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDUEY7O0FEU0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ05GOztBRFFBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNMRjs7QURRQTtFQUNFLG1CQUFBO0FDTEY7O0FEUUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFNBO0VBQ0UsZ0JBQUE7RUFFQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ1BGOztBRFNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNORjs7QURVQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1BGOztBRFNBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ05GOztBRFNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNORjs7QURRQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ0xGOztBRFdBO0VBQ0ksc0JBQUE7QUNSSjs7QURVQTtFQUNJLFlBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmFjZDJhO1xyXG59XHJcbmlvbi10aXRsZXtcclxuICAvL3BhZGRpbmctdG9wOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2QyYTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IzM4ODBmZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgXHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmO1xyXG4gIFxyXG4gIGlvbi1pbnB1dHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG5cclxufVxyXG5cclxuaW9uLWZvb3RlcntcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMzg4MGZmO1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjZDJhO1xyXG59XHJcblxyXG5pb24tY29se1xyXG4gIHBhZGRpbmc6IDAuNSU7Ly8xMlxyXG59XHJcbmlvbi1yb3d7XHJcbiAgcGFkZGluZzogMSU7Ly8xMlxyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5pb24tYmFkZ2V7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IC0wLjNyZW07XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1zbGlkZXN7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uY2F0ZWdvcnktc2xpZGV7XHJcbiBtYXJnaW46IDRweDtcclxuIC8vXHJcbiAvL2Rpc3BsYXk6aW5saW5lLWZsZXggOy8vXHJcbiAvL2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAvL2p1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucGlkZXtcclxuICBoZWlnaHQ6IDEwMHB4Oy8vNjBweFxyXG4gIHdpZHRoOiAxMDBweDsvLzYwcHhcclxuICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgLy9ib3JkZXI6IDJweCBzb2xpZCAjZmZmOy8vIzAwNzZmZFxyXG59XHJcbi5jYXRlZ29yeS1zbGlkZSBpbWd7XHJcbiAgaGVpZ2h0OiA4MHB4Oy8vNjBweFxyXG4gIHdpZHRoOiA4MHB4Oy8vNjBweFxyXG59XHJcbi5jYXRlZ29yeS1zbGlkZSBoM3tcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOjhweCAwcHg7XHJcbn1cclxuLmNhdGVnb3J5LXNsaWRlIGltZ3tcclxuICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmY7Ly9mZGNjMDBcclxufVxyXG5cclxuLnByb2R1Y3QtY2FyZCBpbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbn1cclxuLnByb2R1Y3QtY2FyZHtcclxuICBpbWd7XHJcbiAgICBoZWlnaHQ6IDgwJTsvLzYwcHhcclxuICAgIHdpZHRoOiAxMDAlOy8vNjBweFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4Oy8vLTEwXHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG1heC1oZWlnaHQ6IDE5MHB4O1xyXG4gICAgXHJcbiAgfVxyXG59XHJcbi5wcm9kdWN0LWNhcmQgaDN7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7Ly8tMTBcclxuICBjb2xvcjojNGNhZjUwO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5wcm9kdWN0LWNhcmQgcHtcclxuICBtYXJnaW46IDBweCAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiBcclxufVxyXG5cclxuLmFkZC1jYXJ0e1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZpbHRlci1jYXJke1xyXG4gIHBhZGRpbmctdG9wOiA5MCU7Ly85MFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuLmZpbHRlci1jYXJkIHB7XHJcbiAgbWFyZ2luOiAwcHggMHB4O1xyXG4gIGNvbG9yOiAjNzc3O1xyXG59XHJcbmhyIHtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMzODgwZmY7XHJcbn1cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9AZXh0ZW5kXHJcblxyXG4uaGVhZGVyLW1kOmFmdGVyLC5mb290ZXItbWQ6YmVmb3Jle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5pb24tc2xpZGVze1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbn1cclxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWNkMmE7XG59XG5cbmlvbi10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWNkMmE7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzg4MGZmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5pb24tdGl0bGUgaW9uLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzM4ODBmZjtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjZDJhO1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMC41JTtcbn1cblxuaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDElO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTAuM3JlbTtcbn1cblxuLmNhdGVnb3J5LXNsaWRlcyB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNhdGVnb3J5LXNsaWRlIHtcbiAgbWFyZ2luOiA0cHg7XG59XG5cbi5waWRlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uY2F0ZWdvcnktc2xpZGUgaW1nIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbn1cblxuLmNhdGVnb3J5LXNsaWRlIGgzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDhweCAwcHg7XG59XG5cbi5jYXRlZ29yeS1zbGlkZSBpbWcge1xuICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZjtcbn1cblxuLnByb2R1Y3QtY2FyZCBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucHJvZHVjdC1jYXJkIGltZyB7XG4gIGhlaWdodDogODAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXgtaGVpZ2h0OiAxOTBweDtcbn1cblxuLnByb2R1Y3QtY2FyZCBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGNvbG9yOiAjNGNhZjUwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnByb2R1Y3QtY2FyZCBwIHtcbiAgbWFyZ2luOiAwcHggMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uYWRkLWNhcnQge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZpbHRlci1jYXJkIHtcbiAgcGFkZGluZy10b3A6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmlsdGVyLWNhcmQgcCB7XG4gIG1hcmdpbjogMHB4IDBweDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XG59XG5cbi5oZWFkZXItbWQ6YWZ0ZXIsIC5mb290ZXItbWQ6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let Tab1Page = class Tab1Page {
    constructor(afdb, cartService, common, zone, afAuth, router) {
        this.afdb = afdb;
        this.cartService = cartService;
        this.common = common;
        this.zone = zone;
        this.afAuth = afAuth;
        this.router = router;
        this.indexes = [];
        this.allProducts = [];
        this.products = [];
        this.currency = '';
        this.cartCount = 0;
        this.categories = [];
        this.categories2 = [];
        this.banners = [];
        this.selectedCategory = '';
        this.options = {
            content: 'Menu',
            isOpen: false,
            toggleOnClick: true,
            items: [
                {
                    content: 'About',
                    onclick: function () { console.log('About'); }
                }
            ]
        };
        this.afAuth.auth.onAuthStateChanged(user => {
            if (user != null) {
                this.getProducts();
                this.currency = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].currency;
                this.cartService.calculateTotal().subscribe(data => this.zone.run(() => this.cartCount = data.totalQty));
            }
        });
    }
    getProducts() {
        this.afdb.list('/products').snapshotChanges().subscribe((data) => {
            let tmp = [];
            data.forEach(product => {
                let p = product.payload.val();
                if (p.isAvail == true || p.isAvail == "true") {
                    tmp.push(Object.assign({ key: product.key }, product.payload.val()));
                }
            });
            this.allProducts = tmp;
            this.products = tmp;
            this.fetchCategory();
        });
    }
    fetchCategory() {
        this.afdb.list('categories/').snapshotChanges().subscribe((res) => {
            console.log(res);
            let tmp = [];
            res.forEach(c => tmp.push(Object.assign({ key: c.key }, c.payload.val())));
            this.categories = tmp;
            let nCat = this.categories.length / 7;
            let rCat = ((this.categories.length % 7) / 7);
            let flag = [];
            console.log("fff");
            console.log(rCat);
            console.log(nCat);
            console.log("fff");
            if (rCat > 0) {
                nCat = nCat - rCat;
                nCat = nCat + 1;
            }
            console.log("fff");
            console.log(rCat);
            console.log("fff");
            for (var i = 0; i < nCat; i++) {
                flag.push("1");
            }
            this.indexes = flag;
            this.fetchBanners();
        });
    }
    fetchBanners() {
        this.afdb.list('banners/').snapshotChanges().subscribe((res) => {
            console.log(res);
            this.banners = [];
            res.forEach(c => this.banners.push(Object.assign({ key: c.key }, c.payload.val())));
        });
    }
    addToCart(product) {
        this.cartService.add(product);
    }
    filter(c) {
        this.categories2 = c;
        console.log(this.categories);
        this.products = this.allProducts;
        this.selectedCategory = c.name;
        this.products = this.products.filter(p => p.category == c.key);
    }
    resetProduct() {
        this.products = this.allProducts;
    }
    skip() {
        localStorage.setItem('displaySlider', "false");
        this.router.navigateByUrl('/tabs/tab1');
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map