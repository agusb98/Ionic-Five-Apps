(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-splash-splash-module"],{

/***/ "7JAH":
/*!***********************************************!*\
  !*** ./src/app/pages/splash/splash.module.ts ***!
  \***********************************************/
/*! exports provided: SplashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageModule", function() { return SplashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./splash-routing.module */ "vcjj");
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splash.page */ "OvIv");







let SplashPageModule = class SplashPageModule {
};
SplashPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__["SplashPageRoutingModule"]
        ],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_6__["SplashPage"]]
    })
], SplashPageModule);



/***/ }),

/***/ "CyD1":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/splash/splash.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <p>Baez Nuñez Agustin</p>\r\n\r\n  <img class=\"trian slide-in-fwd-center\" src=\"assets/img/mylogo.png\" />\r\n  <img class=\"heartbeat\" src=\"assets/img/icon.png\" />\r\n\r\n  <p>División: 4A</p>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar transparent>\r\n    <p>Conversando en el Aula</p>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "OvIv":
/*!*********************************************!*\
  !*** ./src/app/pages/splash/splash.page.ts ***!
  \*********************************************/
/*! exports provided: SplashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPage", function() { return SplashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./splash.page.html */ "CyD1");
/* harmony import */ var _splash_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash.page.scss */ "keRv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let SplashPage = class SplashPage {
    constructor(router) {
        this.router = router;
        setTimeout(() => {
            this.router.navigate(['user/login']);
        }, 6000);
    }
};
SplashPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SplashPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-splash',
        template: _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_splash_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SplashPage);



/***/ }),

/***/ "keRv":
/*!***********************************************!*\
  !*** ./src/app/pages/splash/splash.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  position: absolute;\n  width: 50%;\n  animation-name: animacionLogo;\n  animation-duration: 7s;\n  top: 35%;\n  left: 30%;\n}\n\n.trian {\n  top: 38%;\n  left: 21.5%;\n}\n\np {\n  font-size: 2rem;\n  animation-duration: 4s;\n  animation-name: fadeIn;\n}\n\nion-footer {\n  text-align: center;\n}\n\n.slide-in-fwd-center {\n  animation: slide-in-fwd-center 3s ease-out 3s both;\n}\n\n@keyframes slide-in-fwd-center {\n  0% {\n    transform: translateZ(-1400px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateZ(0);\n    opacity: 1;\n  }\n}\n\n.heartbeat {\n  animation: heartbeat 1s linear 2s 2 both;\n}\n\n@keyframes heartbeat {\n  from {\n    transform: scale(1);\n    transform-origin: center center;\n    animation-timing-function: ease-out;\n  }\n  10% {\n    transform: scale(0.91);\n    animation-timing-function: ease-in;\n  }\n  17% {\n    transform: scale(0.98);\n    animation-timing-function: ease-out;\n  }\n  33% {\n    transform: scale(0.87);\n    animation-timing-function: ease-in;\n  }\n  45% {\n    transform: scale(1);\n    animation-timing-function: ease-out;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzcGxhc2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxRQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFBK0Usa0RBQUE7QUFHL0U7O0FBRmdNO0VBQStCO0lBQXlDLDhCQUFBO0lBQThCLFVBQUE7RUFxQnBTO0VBckI4UztJQUFxQyx3QkFBQTtJQUF3QixVQUFBO0VBMEIzVztBQUNGOztBQXpCQTtFQUEyRCx3Q0FBQTtBQTZCM0Q7O0FBNUI2dUI7RUFBcUI7SUFBZ0MsbUJBQUE7SUFBMEQsK0JBQUE7SUFBMEUsbUNBQUE7RUF3RXA2QjtFQXhFdThCO0lBQWlDLHNCQUFBO0lBQStELGtDQUFBO0VBOEV2aUM7RUE5RXlrQztJQUFpQyxzQkFBQTtJQUFnRSxtQ0FBQTtFQW9GMXFDO0VBcEY2c0M7SUFBaUMsc0JBQUE7SUFBK0Qsa0NBQUE7RUEwRjd5QztFQTFGKzBDO0lBQStCLG1CQUFBO0lBQThELG1DQUFBO0VBZ0c1NkM7QUFDRiIsImZpbGUiOiJzcGxhc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBhbmltYXRpb24tbmFtZTogYW5pbWFjaW9uTG9nbztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDdzO1xyXG4gIHRvcDogMzUlO1xyXG4gIGxlZnQ6IDMwJTtcclxufVxyXG5cclxuLnRyaWFue1xyXG4gIHRvcDogMzglO1xyXG4gIGxlZnQ6IDIxLjUlO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG59XHJcblxyXG5pb24tZm9vdGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlLWluLWZ3ZC1jZW50ZXJ7LXdlYmtpdC1hbmltYXRpb246c2xpZGUtaW4tZndkLWNlbnRlciAzcyBlYXNlLW91dCAzcyBib3RoO2FuaW1hdGlvbjpzbGlkZS1pbi1md2QtY2VudGVyIDNzIGVhc2Utb3V0IDNzIGJvdGh9XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbi1md2QtY2VudGVyezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooLTE0MDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooLTE0MDBweCk7b3BhY2l0eTowfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc2xpZGUtaW4tZndkLWNlbnRlcnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKC0xNDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVaKC0xNDAwcHgpO29wYWNpdHk6MH0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7b3BhY2l0eToxfX1cclxuXHJcbi5oZWFydGJlYXR7LXdlYmtpdC1hbmltYXRpb246aGVhcnRiZWF0IDFzIGxpbmVhciAycyAyIGJvdGg7YW5pbWF0aW9uOmhlYXJ0YmVhdCAxcyBsaW5lYXIgMnMgMiBib3RofVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgaGVhcnRiZWF0e2Zyb217LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH0xMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjkxKTt0cmFuc2Zvcm06c2NhbGUoLjkxKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59MTcley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45OCk7dHJhbnNmb3JtOnNjYWxlKC45OCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9MzMley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC44Nyk7dHJhbnNmb3JtOnNjYWxlKC44Nyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufTQ1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9fUBrZXlmcmFtZXMgaGVhcnRiZWF0e2Zyb217LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH0xMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjkxKTt0cmFuc2Zvcm06c2NhbGUoLjkxKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59MTcley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45OCk7dHJhbnNmb3JtOnNjYWxlKC45OCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9MzMley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC44Nyk7dHJhbnNmb3JtOnNjYWxlKC44Nyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufTQ1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9fSJdfQ== */");

/***/ }),

/***/ "vcjj":
/*!*******************************************************!*\
  !*** ./src/app/pages/splash/splash-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SplashPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageRoutingModule", function() { return SplashPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splash.page */ "OvIv");




const routes = [
    {
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_3__["SplashPage"]
    }
];
let SplashPageRoutingModule = class SplashPageRoutingModule {
};
SplashPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SplashPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-splash-splash-module.js.map