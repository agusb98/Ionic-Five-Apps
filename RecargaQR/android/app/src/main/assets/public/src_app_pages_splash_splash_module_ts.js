(self["webpackChunkRecargaQR"] = self["webpackChunkRecargaQR"] || []).push([["src_app_pages_splash_splash_module_ts"],{

/***/ 1148:
/*!*******************************************************!*\
  !*** ./src/app/pages/splash/splash-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageRoutingModule": () => (/* binding */ SplashPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash.page */ 9137);




const routes = [
    {
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_0__.SplashPage
    }
];
let SplashPageRoutingModule = class SplashPageRoutingModule {
};
SplashPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SplashPageRoutingModule);



/***/ }),

/***/ 1203:
/*!***********************************************!*\
  !*** ./src/app/pages/splash/splash.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageModule": () => (/* binding */ SplashPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash-routing.module */ 1148);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page */ 9137);







let SplashPageModule = class SplashPageModule {
};
SplashPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplashPageRoutingModule
        ],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_1__.SplashPage]
    })
], SplashPageModule);



/***/ }),

/***/ 9137:
/*!*********************************************!*\
  !*** ./src/app/pages/splash/splash.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPage": () => (/* binding */ SplashPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./splash.page.html */ 9666);
/* harmony import */ var _splash_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page.scss */ 9572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let SplashPage = class SplashPage {
    constructor(router) {
        this.router = router;
        setTimeout(() => {
            this.router.navigateByUrl('/home');
        }, 6000);
    }
};
SplashPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SplashPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-splash',
        template: _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_splash_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SplashPage);



/***/ }),

/***/ 9572:
/*!***********************************************!*\
  !*** ./src/app/pages/splash/splash.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container-img {\n  width: 100%;\n  text-align: center;\n  justify-content: center;\n  margin-bottom: 50%;\n}\n.container-img img {\n  width: 70%;\n}\n.container-img #icon {\n  position: absolute;\n  top: 25%;\n  left: 24%;\n}\n.container-img #icon {\n  width: 50%;\n}\np {\n  font-size: 2rem;\n}\nion-footer {\n  text-align: center;\n}\n.fade-in {\n  animation: fade-in 3s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUFKO0FBR0U7RUFDRSxVQUFBO0FBREo7QUFLQTtFQUNFLGVBQUE7QUFGRjtBQUtBO0VBQ0Usa0JBQUE7QUFGRjtBQUtBO0VBQTZFLDhEQUFBO0FBQTdFO0FBQ3dEO0VBQW1CO0lBQUcsVUFBQTtFQVk1RTtFQVpzRjtJQUFLLFVBQUE7RUFlM0Y7QUFDRiIsImZpbGUiOiJzcGxhc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1MCU7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxuXHJcbiAgI2ljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICBsZWZ0OiAyNCU7XHJcbiAgfVxyXG5cclxuICAjaWNvbiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mYWRlLWluey13ZWJraXQtYW5pbWF0aW9uOmZhZGUtaW4gM3MgY3ViaWMtYmV6aWVyKC4zOSwuNTc1LC41NjUsMS4wMDApIGJvdGg7YW5pbWF0aW9uOmZhZGUtaW4gM3MgY3ViaWMtYmV6aWVyKC4zOSwuNTc1LC41NjUsMS4wMDApIGJvdGh9XHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBmYWRlLWluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 9666:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/splash/splash.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <p class=\"fade-in\">Baez Nuñez Agustin</p>\r\n\r\n  <div class=\"container-img\">\r\n    <img class=\"fade-in\" id=\"logo\" src=\"assets/img/mylogo.png\" />\r\n    <img class=\"bounce-in-bck\" id=\"icon\" src=\"assets/img/icon.png\" />\r\n  </div>\r\n\r\n  <p class=\"fade-in\"> ~ División: 4A ~ </p>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar transparent>\r\n    <p class=\"fade-in\">Carga de Crédito</p>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_splash_splash_module_ts.js.map