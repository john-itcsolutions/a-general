(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["applyforleave-applyforleave-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/applyforleave/applyforleave.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/applyforleave/applyforleave.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu/timesheetsleave\"></ion-back-button>\n    </ion-buttons>\n    <ion-text>\n    <ion-title>Apply for Leave</ion-title>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/applyforleave/applyforleave.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/applyforleave/applyforleave.module.ts ***!
  \*************************************************************/
/*! exports provided: ApplyforleavePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyforleavePageModule", function() { return ApplyforleavePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _applyforleave_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./applyforleave.page */ "./src/app/pages/applyforleave/applyforleave.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var routes = [
    {
        path: '',
        component: _applyforleave_page__WEBPACK_IMPORTED_MODULE_5__["ApplyforleavePage"]
    }
];
var ApplyforleavePageModule = /** @class */ (function () {
    function ApplyforleavePageModule() {
    }
    ApplyforleavePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_applyforleave_page__WEBPACK_IMPORTED_MODULE_5__["ApplyforleavePage"]]
        })
    ], ApplyforleavePageModule);
    return ApplyforleavePageModule;
}());



/***/ }),

/***/ "./src/app/pages/applyforleave/applyforleave.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/applyforleave/applyforleave.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-datetime {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-input {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-textarea {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-radio-group {\n  border: solid 1px #662861;\n  border-radius: 5px; }\n\nion-item ion-radio {\n  border: solid 1px #662861;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvaG9tZS9wb3N0Z3Jlcy9QdWJsaWMvYXUuY29tLml0Y3NvbHV0aW9ucy5jaGVpcnJzLjAuMDEvc3JjL2FwcC9wYWdlcy9hcHBseWZvcmxlYXZlL2FwcGx5Zm9ybGVhdmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixrQkFBa0IsRUFBQTs7QUFFekI7RUFFTyx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGtCQUFrQixFQUFBOztBQUcxQjtFQUVRLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsbUJBQW1CLEVBQUE7O0FBRXpCO0VBRU0seUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixtQkFBbUIsRUFBQTs7QUFFekI7RUFFTSx5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBRXhCO0VBRU0seUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXBwbHlmb3JsZWF2ZS9hcHBseWZvcmxlYXZlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICB9XG59aW9uLWl0ZW17XG4gICAgaW9uLWRhdGV0aW1le1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAjZjVjZmI1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxuICAgIH1cbn1cbmlvbi1pdGVte1xuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gfWlvbi1pdGVte1xuICAgIGlvbi10ZXh0YXJlYXtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gfWlvbi1pdGVte1xuICAgIGlvbi1yYWRpby1ncm91cHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiB9aW9uLWl0ZW17XG4gICAgaW9uLXJhZGlve1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiB9Il19 */");

/***/ }),

/***/ "./src/app/pages/applyforleave/applyforleave.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/applyforleave/applyforleave.page.ts ***!
  \***********************************************************/
/*! exports provided: ApplyforleavePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyforleavePage", function() { return ApplyforleavePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ApplyforleavePage = /** @class */ (function () {
    function ApplyforleavePage() {
    }
    ApplyforleavePage.prototype.ngOnInit = function () {
    };
    ApplyforleavePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applyforleave',
            template: __importDefault(__webpack_require__(/*! raw-loader!./applyforleave.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/applyforleave/applyforleave.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./applyforleave.page.scss */ "./src/app/pages/applyforleave/applyforleave.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ApplyforleavePage);
    return ApplyforleavePage;
}());



/***/ })

}]);
//# sourceMappingURL=applyforleave-applyforleave-module.js.map