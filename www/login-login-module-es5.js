(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-select (ionChange)=\"changeLang()\" [(ngModel)]=\"lang\">\n        <ion-select-option value=\"es\">Español</ion-select-option>\n        <ion-select-option value=\"en\">English</ion-select-option>\n        <ion-select-option value=\"ar\">عربى</ion-select-option>\n        \n      </ion-select>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n-->\n\n<ion-content class=\"ion-padding\">\n  <!--\n  <div class=\"login-header\">\n    <img src=\"./assets/images/pide.png\" width=\"100px\"/>\n    <img src=\"./assets/images/pidenos2.png\" width=\"200px\"/>\n    <h3>{{ 'APP_NAME' | translate}}</h3>\n    <p>{{'APP_SLOGAN' | translate}}</p>\n  </div>\n-->\n  <div class=\"login-header\">\n    <!--<img src=\"./assets/images/icono.png\" />\n\t  &nbsp;\n     <p style=\"color:#3880ff\">Entrega Rápido y Seguro ..</p> -->\n  </div>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <!--<ion-label position=\"stacked\">{{ 'EMAIL' | translate }}</ion-label>-->\n      <ion-input placeholder=\"Email\"type=\"text\" [(ngModel)]=\"userInfo.email\"><hr></ion-input>\n    </ion-item>\n    <hr>\n  <ion-item>\n    <!--<ion-label position=\"stacked\">{{ 'PASSWORD' | translate }}</ion-label>-->\n    <ion-input [type]=\"password_type\" placeholder=\"Contraseña\" name=\"password\" [(ngModel)]=\"userInfo.password\" required></ion-input>\n    <ion-icon slot = \"end\" class=\"passwordIcon\" [name]=\"passwordToggleIcon\" (click)=\"togglePasswordMode()\"></ion-icon>\n  </ion-item>\n  <hr>\n\n    <ion-item>\n      <ion-button slot=\"end\" color=\"secondary\" size=\"small\" fill=\"clear\" routerLink=\"/forget\">\n        {{ 'FORGET' | translate }}\n      </ion-button>\n    </ion-item>\n  </ion-list>\n  <div class=\"ion-padding\">\n    <ion-button expand=\"block\" (click)=\"login()\">\n      {{ 'LOGIN' | translate }}\n    </ion-button>\n    &nbsp;&nbsp;\n    <ion-button color=\"secondary\" expand=\"block\" fill=\"clear\" routerLink=\"/register\">\n      {{ 'CREATE_NEW_ACCOUNT' | translate }}</ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background: none !important;\n}\n\nion-list {\n  padding-top: 100px;\n}\n\n.passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 10px !important;\n  margin: 0 auto !important;\n  color: #9ebdf8;\n  background: #ffffff;\n}\n\nion-item {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\nhr {\n  height: 2px;\n  background-color: #9ebdf8;\n}\n\nion-input, ion-textarea {\n  background: #ffffff !important;\n  margin-top: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRTpcXFBST0pFQ1RcXFNob3BwaW4gQXBwXFxzaG9wcGluZ1xcZG93bmxvYWRmaWxlLTJcXGlmc3ItMS4wLjFcXHVzZXIvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUNJSjs7QURGQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ0tGOztBREhBO0VBQ0UsOEJBQUE7RUFDQSwyQkFBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZDphZnRlcntcclxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWxpc3R7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG59XHJcbi5wYXNzd29yZEljb257XHJcbiAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICBjb2xvcjogIzllYmRmODtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmOy8vZWVlXHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbmhyIHtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM5ZWJkZjg7XHJcbn1cclxuaW9uLWlucHV0LCBpb24tdGV4dGFyZWF7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcclxuICAvL2JvcmRlcjogMXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtcclxuICAvL2JvcmRlci1yYWRpdXM6IDRweDtcclxufSIsIi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4ucGFzc3dvcmRJY29uIHtcbiAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICB0b3A6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgY29sb3I6ICM5ZWJkZjg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbmlvbi1pdGVtIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5ociB7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWViZGY4O1xufVxuXG5pb24taW5wdXQsIGlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, common, translate, router, menuCtrl, chRef) {
        this.afAuth = afAuth;
        this.common = common;
        this.translate = translate;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.chRef = chRef;
        this.userInfo = {};
        this.lang = 'es';
        this.passwordToggleIcon = 'eye';
        this.password_type = 'password';
        this.menuCtrl.enable(false);
    }
    LoginPage.prototype.ngOnInit = function () {
        this.lang = localStorage.getItem('lang');
        if (localStorage.getItem('displaySlider') == undefined || localStorage.getItem('displaySlider') == 'true') {
            this.router.navigateByUrl('/welcome');
        }
    };
    LoginPage.prototype.togglePasswordMode = function () {
        this.password_type = this.password_type === 'text' ? 'password' : 'text';
        if (this.passwordToggleIcon == 'eye') {
            this.passwordToggleIcon = 'eye-off';
        }
        else {
            this.passwordToggleIcon = 'eye';
        }
        this.chRef.detectChanges();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.common.showLoader();
        var email = ((this.userInfo.email).toLowerCase().trim());
        this.afAuth.auth.signInWithEmailAndPassword(email, this.userInfo.password).then(function (data) {
            console.log(data);
            _this.common.hideLoader();
        }).catch(function (err) {
            console.log(err);
            _this.common.hideLoader();
            _this.common.showToast(err.message);
        });
    };
    LoginPage.prototype.changeLang = function () {
        console.log(this.lang);
        this.translate.use(this.lang);
        localStorage.setItem('lang', this.lang);
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map