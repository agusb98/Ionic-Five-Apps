(self["webpackChunkRecargaQR"] = self["webpackChunkRecargaQR"] || []).push([["src_app_pages_user_login_login_module_ts"],{

/***/ 4661:
/*!**********************************************************!*\
  !*** ./src/app/pages/user/login/login-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 2413);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 6887:
/*!**************************************************!*\
  !*** ./src/app/pages/user/login/login.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 4661);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 2413);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 2413:
/*!************************************************!*\
  !*** ./src/app/pages/user/login/login.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6565);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 2509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);








let LoginPage = class LoginPage {
    constructor(formbuider, authService, router, nav) {
        this.formbuider = formbuider;
        this.authService = authService;
        this.router = router;
        this.nav = nav;
        this.listaUsuarios = [
            { "id": 1, "email": "admin@admin.com", "password": "111111", "perfil": "admin", "sexo": "femenino", "name": "admin" },
            { "id": 2, "email": "invitado@invitado.com", "password": "222222", "perfil": "invitado", "sexo": "femenino", "name": "invitado" },
            { "id": 3, "email": "usuario@usuario.com", "password": "333333", "perfil": "usuario", "sexo": "masculino", "name": "usuario" },
            { "id": 4, "email": "anonimo@anonimo.com", "password": "444444", "perfil": "usuario", "sexo": "masculino", "name": "anonimo" },
            { "id": 5, "email": "tester@tester.com", "password": "555555", "perfil": "tester", "sexo": "femenino", "name": "tester" }
        ];
        this.validationUserMessage = {
            email: [
                { type: "required", message: "Por favor, ingrese su correo" },
                { type: "pattern", message: "El correo ingresado es incorrecto, inténtelo de nuevo!" }
            ],
            password: [
                { type: "required", message: "Por favor, ingrese su contraseña" },
                { type: "minlength", message: "La contraseña debe tener 6 caractéres o más" }
            ]
        };
    }
    ngOnInit() { this.validateForm(); }
    validateForm() {
        this.form = this.formbuider.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)
            ]))
        });
    }
    get email() { return this.form.get('email').value; }
    get password() { return this.form.get('password').value; }
    set email(str) { this.form.controls['email'].setValue(str); }
    set password(str) { this.form.controls['password'].setValue(str); }
    clickUser(user) {
        this.email = user.email;
        this.password = user.password;
    }
    onLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = yield this.authService.login(this.email, this.password);
                if (user) {
                    localStorage.setItem('email', this.email); //Save user data in the local storage
                    this.router.navigate(['home']);
                }
            }
            catch (error) { }
        });
    }
    onRegister() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = yield this.authService.register(this.email, this.password);
                if (user) {
                    localStorage.setItem('email', this.email); //Save user data in the local storage
                    this.router.navigate(['/room']);
                }
            }
            catch (error) { }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 2509:
/*!**************************************************!*\
  !*** ./src/app/pages/user/login/login.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".error_message {\n  font-size: 100%;\n}\n\nion-card {\n  box-shadow: none;\n}\n\n.divUsuarios {\n  animation-name: rightIn;\n  animation-duration: 3s;\n}\n\n.divUsuarios ion-icon {\n  font-size: 400%;\n}\n\n.divUsuarios ion-icon:hover {\n  color: red;\n  animation-name: rotate;\n  animation-duration: 1s;\n}\n\nion-item {\n  font-size: 100%;\n  --border-color: #d4d7db;\n  --inner-padding-end: 0;\n}\n\nion-item ion-icon {\n  padding-right: 6px;\n  font-size: 18px;\n}\n\n#icon-user:hover {\n  color: #a01212;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQUk7RUFDSSxlQUFBO0FBRVI7O0FBQUk7RUFDSSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQUVSOztBQUVBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBRUEsc0JBQUE7QUFBSjs7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUFSOztBQVlBO0VBQ0ksY0FBQTtBQVZKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvcl9tZXNzYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmRpdlVzdWFyaW9zIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiByaWdodEluO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDQwMCU7XHJcbiAgICB9XHJcbiAgICBpb24taWNvbjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDRkN2RiO1xyXG4gICAgLy8tLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiAjMTI0OGEwO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taW5wdXQ6aG92ZXIge1xyXG4gICAgICAgIC8vY29sb3I6ICMxMjQ4YTA7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNpY29uLXVzZXIge1xyXG4gICAgLy9jb2xvcjogcmdiKDExMiwgNTMsIDEwNyk7XHJcbn1cclxuXHJcbiNpY29uLXVzZXI6aG92ZXIge1xyXG4gICAgY29sb3I6ICNhMDEyMTI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 6565:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/login/login.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-img src=\"assets/img/login.png\"></ion-img>\n  <ion-card>\n    <ion-card-content>\n\n      <form [formGroup]=\"form\" (ngSubmit)=\"onLogin()\">\n        <div class=\"wrapform\">\n          <ion-item>\n            <ion-input type=\"text\" name=\"email\" formControlName=\"email\" placeholder=\"Email\">\n              <ion-icon name=\"mail-outline\"></ion-icon>\n            </ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let validation of validationUserMessage.email\">\n              <div class=\"error_message\"\n                *ngIf=\"form.get('email').hasError(validation.type) && (form.get('email').dirty || form.get('email').touched)\">\n                <p>{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n\n          <ion-item>\n            <ion-input type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"**************\">\n              <ion-icon name=\"lock-closed\"></ion-icon>\n            </ion-input>\n          </ion-item>\n\n          <div>\n            <ng-container *ngFor=\"let validation of validationUserMessage.password\">\n              <div class=\"error_message\"\n                *ngIf=\"form.get('password').hasError(validation.type) && (form.get('password').dirty || form.get('password').touched)\">\n                <p>{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n\n        </div>\n\n        <ion-button shape=\"round\" type=\"submit\" fill=\"solid\" [disabled]=\"!form.valid\">\n          Ingresar</ion-button>\n\n        <ion-item class=\"divUsuarios\" color=\"none\" lines=\"none\">\n          <ion-icon id=\"icon-user\" name=\"qr-code-sharp\" *ngFor=\"let usuario of listaUsuarios\"\n            (click)=\"clickUser(usuario)\">\n          </ion-icon>\n        </ion-item>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <p>¿No tienes una cuenta?</p>\n  <ion-button (click)=\"onRegister()\" size=\"small\" shape=\"round\" type=\"submit\" fill=\"solid\" class=\"sign-btn\"\n    [disabled]=\"!form.valid\">\n    Regístrate</ion-button>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user_login_login_module_ts.js.map