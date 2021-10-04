(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-room-room-module"],{

/***/ "8+wY":
/*!***************************************************!*\
  !*** ./src/app/pages/room/room-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RoomPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomPageRoutingModule", function() { return RoomPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _room_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room.page */ "Vvux");




const routes = [
    {
        path: '',
        component: _room_page__WEBPACK_IMPORTED_MODULE_3__["RoomPage"]
    }
];
let RoomPageRoutingModule = class RoomPageRoutingModule {
};
RoomPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RoomPageRoutingModule);



/***/ }),

/***/ "Vvux":
/*!*****************************************!*\
  !*** ./src/app/pages/room/room.page.ts ***!
  \*****************************************/
/*! exports provided: RoomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomPage", function() { return RoomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_room_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./room.page.html */ "ozuq");
/* harmony import */ var _room_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room.page.scss */ "pRMh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let RoomPage = class RoomPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    logout() {
        this.router.navigate(['user/logout']);
    }
    classSelected(clase) {
        localStorage.setItem('class', clase);
        this.router.navigate(['chat']);
    }
};
RoomPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RoomPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-room',
        template: _raw_loader_room_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_room_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RoomPage);



/***/ }),

/***/ "bZre":
/*!*******************************************!*\
  !*** ./src/app/pages/room/room.module.ts ***!
  \*******************************************/
/*! exports provided: RoomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomPageModule", function() { return RoomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _room_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room-routing.module */ "8+wY");
/* harmony import */ var _room_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room.page */ "Vvux");







let RoomPageModule = class RoomPageModule {
};
RoomPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _room_routing_module__WEBPACK_IMPORTED_MODULE_5__["RoomPageRoutingModule"]
        ],
        declarations: [_room_page__WEBPACK_IMPORTED_MODULE_6__["RoomPage"]]
    })
], RoomPageModule);



/***/ }),

/***/ "ozuq":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/room/room.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" style=\"text-align: center\">\r\n  <ion-card class=\"room room-a\" (click)=\"classSelected('4A')\">\r\n    <p id=\"p-a\">PPS-4A</p>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"room room-b\" (click)=\"classSelected('4B')\">\r\n    <p id=\"p-b\">PPS-4B</p>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <p>¿Cerrar Sesión?</p>\r\n  <ion-button (click)=\"logout()\" size=\"small\" shape=\"round\" type=\"submit\" fill=\"solid\" class=\"sign-btn\">\r\n    Cerrar</ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "pRMh":
/*!*******************************************!*\
  !*** ./src/app/pages/room/room.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card p {\n  font-size: 2rem;\n  background-color: #cab9ff;\n  padding: 0.5rem;\n  opacity: 0.8;\n}\n\n#p-a {\n  animation-name: rightIn;\n  animation-duration: 2s;\n}\n\n#p-b {\n  animation-name: leftIn;\n  animation-duration: 2s;\n}\n\n.room {\n  width: 100%;\n  height: 50%;\n  margin: inherit;\n}\n\n.room-a {\n  background: linear-gradient(0deg, #6282d8b3, rgba(0, 0, 0, 0.1)), url(\"/assets/img/pps-4a.jpg\") no-repeat center center/cover;\n}\n\n.room-b {\n  background: linear-gradient(0deg, #62d8bbb3, rgba(0, 0, 0, 0.1)), url(\"/assets/img/pps-4b.jpg\") no-repeat center center/cover;\n}\n\nion-footer {\n  position: absolute;\n  top: 94.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyb29tLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUo7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLDZIQUFBO0FBREY7O0FBS0E7RUFDRSw2SEFBQTtBQUZGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBSEYiLCJmaWxlIjoicm9vbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FiOWZmO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxufVxyXG5cclxuI3AtYXtcclxuICBhbmltYXRpb24tbmFtZTogcmlnaHRJbjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG59XHJcblxyXG4jcC1ie1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBsZWZ0SW47XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxufVxyXG5cclxuLnJvb20ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIG1hcmdpbjogaW5oZXJpdDtcclxufVxyXG5cclxuLnJvb20tYSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM2MjgyZDhiMywgcmdiYSgwLCAwLCAwLCAwLjEpKSxcclxuICAgIHVybChcIi9hc3NldHMvaW1nL3Bwcy00YS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxufVxyXG5cclxuLnJvb20tYiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM2MmQ4YmJiMywgcmdiYSgwLCAwLCAwLCAwLjEpKSxcclxuICAgIHVybChcIi9hc3NldHMvaW1nL3Bwcy00Yi5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOTQuNSU7XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=pages-room-room-module.js.map