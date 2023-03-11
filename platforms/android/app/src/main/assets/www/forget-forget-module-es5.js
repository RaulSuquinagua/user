(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forget-forget-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forget/forget.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forget/forget.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{ 'FORGET' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"login-header\">\n    <!--\n    <img src=\"./assets/images/icon.png\" />\n    <h3>{{ 'APP_NAME' | translate}}</h3>\n    <p>{{'APP_SLOGAN' | translate}}</p>\n    -->\n  </div>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'EMAIL' | translate }}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" (click)=\"reset()\">{{ 'RESET_PASSWORD' | translate }}</ion-button>\n    </div>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/forget/forget.module.ts":
/*!*****************************************!*\
  !*** ./src/app/forget/forget.module.ts ***!
  \*****************************************/
/*! exports provided: ForgetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPageModule", function() { return ForgetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forget_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget.page */ "./src/app/forget/forget.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _forget_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPage"]
    }
];
var ForgetPageModule = /** @class */ (function () {
    function ForgetPageModule() {
    }
    ForgetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forget_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPage"]]
        })
    ], ForgetPageModule);
    return ForgetPageModule;
}());



/***/ }),

/***/ "./src/app/forget/forget.page.scss":
/*!*****************************************!*\
  !*** ./src/app/forget/forget.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0L0U6XFxQUk9KRUNUXFxTaG9wcGluIEFwcFxcc2hvcHBpbmdcXGRvd25sb2FkZmlsZS0yXFxpZnNyLTEuMC4xXFx1c2VyL3NyY1xcYXBwXFxmb3JnZXRcXGZvcmdldC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvcmdldC9mb3JnZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdldC9mb3JnZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZDphZnRlcntcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59IiwiLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/forget/forget.page.ts":
/*!***************************************!*\
  !*** ./src/app/forget/forget.page.ts ***!
  \***************************************/
/*! exports provided: ForgetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPage", function() { return ForgetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");




var ForgetPage = /** @class */ (function () {
    function ForgetPage(afAuth, common) {
        this.afAuth = afAuth;
        this.common = common;
    }
    ForgetPage.prototype.ngOnInit = function () {
    };
    ForgetPage.prototype.reset = function () {
        var _this = this;
        var email = ((this.email).toLowerCase().trim());
        this.afAuth.auth.sendPasswordResetEmail(email).then(function () {
            console.log("Sent");
            _this.common.showToast("Por favor revise su inbox para instrucciones");
        }).catch(function (err) {
            console.log(err);
            _this.common.showToast(err.message);
        });
    };
    ForgetPage.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
    ]; };
    ForgetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forget',
            template: __webpack_require__(/*! raw-loader!./forget.page.html */ "./node_modules/raw-loader/index.js!./src/app/forget/forget.page.html"),
            styles: [__webpack_require__(/*! ./forget.page.scss */ "./src/app/forget/forget.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], ForgetPage);
    return ForgetPage;
}());



/***/ })

}]);
//# sourceMappingURL=forget-forget-module-es5.js.map