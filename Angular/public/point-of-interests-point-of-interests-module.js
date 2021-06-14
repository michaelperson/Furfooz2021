(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["point-of-interests-point-of-interests-module"],{

/***/ "4rkx":
/*!************************************************************!*\
  !*** ./node_modules/leaflet/dist/images/marker-shadow.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "marker-shadow.png");

/***/ }),

/***/ "8LeW":
/*!************************************************************************!*\
  !*** ./src/app/features/admin/point-of-interests/add/add.component.ts ***!
  \************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_poi_form_poi_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/poi-form/poi-form.component */ "V5M5");



class AddComponent {
    constructor() { }
    ngOnInit() {
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(); };
AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add"]], decls: 3, vars: 0, template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nouveau Point d'int\u00E9r\u00EAt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-poi-form");
    } }, directives: [_components_poi_form_poi_form_component__WEBPACK_IMPORTED_MODULE_1__["PoiFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3BvaW50LW9mLWludGVyZXN0cy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add',
                templateUrl: './add.component.html',
                styleUrls: ['./add.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "CadD":
/*!***********************************************************************************!*\
  !*** ./src/app/features/admin/point-of-interests/point-of-interests.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PointOfInterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointOfInterestsComponent", function() { return PointOfInterestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PointOfInterestsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PointOfInterestsComponent.ɵfac = function PointOfInterestsComponent_Factory(t) { return new (t || PointOfInterestsComponent)(); };
PointOfInterestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PointOfInterestsComponent, selectors: [["app-point-of-interests"]], decls: 5, vars: 0, consts: [[1, "card"], [1, "card-body"]], template: function PointOfInterestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Points d'int\u00E9r\u00EAts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3BvaW50LW9mLWludGVyZXN0cy9wb2ludC1vZi1pbnRlcmVzdHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PointOfInterestsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-point-of-interests',
                templateUrl: './point-of-interests.component.html',
                styleUrls: ['./point-of-interests.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QSnS":
/*!****************************************************************************!*\
  !*** ./src/app/features/admin/point-of-interests/index/index.component.ts ***!
  \****************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_point_of_interests_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/point-of-interests/category.service */ "s8VL");
/* harmony import */ var src_app_core_services_point_of_interests_point_of_interests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/point-of-interests/point-of-interests.service */ "yL6R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-select2 */ "eSIH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_poi_form_poi_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/poi-form/poi-form.component */ "V5M5");
/* harmony import */ var _shared_pipes_select2_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/pipes/select2.pipe */ "mWwX");










function IndexComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ng-select2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndexComponent_div_0_div_9_Template_ng_select2_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.selectedPoiId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "select2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.selectedPoiId)("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 3, ctx_r1.pointOfInterests, "Id", "Name_fr"))("allowClear", true);
} }
function IndexComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-poi-form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edition de \u00AB", ctx_r2.selectedPoi.Name_fr, "\u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r2.selectedPoi);
} }
function IndexComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ng-select2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndexComponent_div_0_Template_ng_select2_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.selectedCategories = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "select2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IndexComponent_div_0_div_9_Template, 4, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IndexComponent_div_0_div_10_Template, 4, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 6, ctx_r0.categories, "Id", "Name_fr"))("ngModel", ctx_r0.selectedCategories)("allowClear", true)("options", ctx_r0.selectMultipleOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pointOfInterests == null ? null : ctx_r0.pointOfInterests.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedPoi);
} }
class IndexComponent {
    constructor(categoryService, poiService) {
        this.categoryService = categoryService;
        this.poiService = poiService;
        this.selectTemplate = (state) => {
            if (!state.id)
                return state.text;
            let item = this.categories.find(x => x.Id == state.id);
            return $(`<span><span style="display:inline-block;width:10px;height:10px;background-color: ${item.PinColor}"></span> ${item.Name_fr}</span>`);
        };
        this.selectMultipleOptions = {
            multiple: true,
            templateResult: this.selectTemplate,
            templateSelection: this.selectTemplate,
        };
    }
    set selectedPoiId(value) {
        if (value) {
            this.selectedPoi = this.poiService.context$.value.find(x => x.Id == value);
        }
    }
    set selectedCategories(ids) {
        if (ids === null || ids === void 0 ? void 0 : ids.length) {
            this.pointOfInterests = this.poiService.context$.value.filter(x => ids.find(id => x.Category_id == id));
        }
    }
    ngOnInit() {
        this.categoryService.context$.subscribe(data => {
            this.categories = data;
        });
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_point_of_interests_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_point_of_interests_point_of_interests_service__WEBPACK_IMPORTED_MODULE_2__["PointOfInterestsService"])); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 1, vars: 1, consts: [["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], [1, "form-group", "text-right"], ["routerLink", "/admin/point-of-interests/add", 1, "btn", "btn-large", "btn-danger"], [1, "fas", "fa-plus"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["placeholder", "Veuillez choisir une categorie", "width", "100%", 3, "data", "ngModel", "allowClear", "options", "ngModelChange"], ["class", "col-md-6", 4, "ngIf"], [4, "ngIf"], ["placeholder", "Veuillez choisir un point d'int\u00E9r\u00EAt", "width", "100%", 3, "ngModel", "data", "allowClear", "ngModelChange"], [3, "model"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IndexComponent_div_0_Template, 11, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], ng_select2__WEBPACK_IMPORTED_MODULE_5__["NgSelect2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _components_poi_form_poi_form_component__WEBPACK_IMPORTED_MODULE_7__["PoiFormComponent"]], pipes: [_shared_pipes_select2_pipe__WEBPACK_IMPORTED_MODULE_8__["Select2Pipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3BvaW50LW9mLWludGVyZXN0cy9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_point_of_interests_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"] }, { type: src_app_core_services_point_of_interests_point_of_interests_service__WEBPACK_IMPORTED_MODULE_2__["PointOfInterestsService"] }]; }, null); })();


/***/ }),

/***/ "QX6Z":
/*!**********************************************************************************!*\
  !*** ./src/app/features/admin/point-of-interests/category/category.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CategoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(); };
CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-category-add"]], decls: 2, vars: 0, template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "category-add works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3BvaW50LW9mLWludGVyZXN0cy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-add',
                templateUrl: './category.component.html',
                styleUrls: ['./category.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "V5M5":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/admin/point-of-interests/components/poi-form/poi-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PoiFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoiFormComponent", function() { return PoiFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "4rkx");
/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "Y5fm");
/* harmony import */ var leaflet_dist_images_marker_icon_2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ "WE1v");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_core_services_point_of_interests_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/point-of-interests/category.service */ "s8VL");
/* harmony import */ var src_app_core_services_point_of_interests_point_of_interests_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/point-of-interests/point-of-interests.service */ "yL6R");
/* harmony import */ var src_app_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/toastr.service */ "nCHe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "fB2i");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-select2 */ "eSIH");
/* harmony import */ var _shared_pipes_env_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/pipes/env.pipe */ "zeSd");
/* harmony import */ var _shared_pipes_select2_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/pipes/select2.pipe */ "mWwX");
/* harmony import */ var _shared_pipes_img_default_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../shared/pipes/img-default.pipe */ "+x2l");



















class PoiFormComponent {
    constructor(categoryService, poiService, toastr, router) {
        this.categoryService = categoryService;
        this.poiService = poiService;
        this.toastr = toastr;
        this.router = router;
        this.marker = new leaflet__WEBPACK_IMPORTED_MODULE_3__["Marker"]([0, 0]);
        this.editorOptions = {
            width: '100%',
            height: 400,
            mobile: { theme: 'mobile' }
        };
        this.selectTemplate = (state) => {
            if (!state.id)
                return state.text;
            let item = this.categories.find(x => x.Id == state.id);
            return jquery__WEBPACK_IMPORTED_MODULE_2__(`<span><span style="display:inline-block;width:10px;height:10px;background-color: ${item.PinColor}"></span> ${item.Name_fr}</span>`);
        };
        this.selectOptions = {
            templateResult: this.selectTemplate,
            templateSelection: this.selectTemplate,
            classes: 'form-control'
        };
    }
    set model(item) {
        this.addFormValues(item);
        this.moveMarker(item.Latitude, item.Longitude);
    }
    ;
    ngOnInit() {
        this.initMap();
        this.categoryService.context$.subscribe(data => {
            this.categories = data;
        });
        this.initForm();
    }
    addFormValues(item) {
        this.initForm();
        if (item.ImageUrl) {
            this.imageSource = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].BASE_API_URI + item.ImageUrl;
        }
        this.fg.addControl('Id', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item.Id, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.fg.patchValue(item);
    }
    initForm() {
        if (this.fg)
            return;
        this.fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            Name_fr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Name_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name_nl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Description_fr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Description_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Description_nl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            IsDeleted: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            mimeType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Interval: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            StartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            EndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
    }
    initMap() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_3__["map"]('map').setView([50.2132, 4.9540], 12);
        this.setBounds();
        this.map.setMinZoom(this.map.getZoom() + 1);
        this.marker.addTo(this.map);
        leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"]('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
        this.map.addEventListener('click', (e) => {
            this.moveMarker(e.latlng.lat, e.latlng.lng);
            console.log(e);
        });
    }
    moveMarker(latitude, longitude) {
        if (latitude && longitude) {
            this.marker.setLatLng([latitude, longitude]);
            this.fg.controls['Latitude'].setValue(latitude);
            this.fg.controls['Longitude'].setValue(longitude);
        }
    }
    refreshMarker() {
        let latitude = this.fg.controls['Latitude'].value;
        let longitude = this.fg.controls['Longitude'].value;
        if (latitude && longitude) {
            this.marker.setLatLng([latitude, longitude]);
        }
    }
    setBounds() {
        this.map.fitBounds([
            [src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].MAP_BOUNDS_SOUTH, src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].MAP_BOUNDS_WEST],
            [src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].MAP_BOUNDS_NORTH, src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].MAP_BOUNDS_EAST]
        ]);
    }
    fileChange(event) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = e => {
            let args = e.target.result.split(",");
            this.fg.get("Image").setValue(args[1]);
            this.fg.get("mimeType").setValue(args[0].replace('data:', '').replace(';base64', ''));
            this.imageSource = e.target.result;
        };
    }
    submit() {
        this.fg.controls["Category_id"].setValue(parseInt(this.fg.controls["Category_id"].value));
        if (this.fg.value.Id) {
            this.poiService.update(this.fg.value).subscribe(data => {
                this.toastr.success('Update OK');
            }, e => {
                this.toastr.error(e);
            });
        }
        else {
            this.poiService.add(this.fg.value).subscribe(data => {
                this.toastr.success('Add OK');
                this.router.navigateByUrl('/admin/point-of-interests');
            }, e => {
                this.toastr.error(e);
            });
        }
    }
}
PoiFormComponent.ɵfac = function PoiFormComponent_Factory(t) { return new (t || PoiFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_point_of_interests_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_point_of_interests_point_of_interests_service__WEBPACK_IMPORTED_MODULE_9__["PointOfInterestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"])); };
PoiFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PoiFormComponent, selectors: [["app-poi-form"]], inputs: { model: "model" }, decls: 97, vars: 22, consts: [[3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-12"], [1, "form-group"], [1, "custom-control", "custom-switch"], ["type", "checkbox", "id", "customSwitches", "formControlName", "IsDeleted", 1, "custom-control-input"], ["for", "customSwitches", 1, "custom-control-label"], [1, "col-md-12", "d-flex", "align-items-center", "justify-content-between"], [1, "form-group", "col-md-4"], ["type", "text", "formControlName", "Name_fr", 1, "form-control"], ["type", "text", "formControlName", "Name_en", 1, "form-control"], ["type", "text", "formControlName", "Name_nl", 1, "form-control"], [1, "form-group", "col-md-12"], ["type", "button", "data-toggle", "collapse", "data-target", "#editor_fr", 1, "btn", "btn-info", "btn-block", "mb-1"], ["id", "editor_fr", 1, "collapse", "show"], ["formControlName", "Description_fr", 3, "apiKey", "init"], ["type", "button", "data-toggle", "collapse", "data-target", "#editor_en", 1, "btn", "btn-info", "btn-block", "mb-1"], ["id", "editor_en", 1, "collapse"], ["formControlName", "Description_en", 3, "apiKey", "init"], ["type", "button", "data-toggle", "collapse", "data-target", "#editor_nl", 1, "btn", "btn-info", "btn-block", "mb-1"], ["id", "editor_nl", 1, "collapse"], ["formControlName", "Description_nl", 3, "apiKey", "init"], ["formControlName", "Category_id", "placeholder", "Veuillez choisir une categorie", "width", "100%", 3, "data", "options"], [1, "form-group", "col-md-6"], ["type", "date", "formControlName", "StartDate", 1, "form-control"], ["type", "date", "formControlName", "EndDate", 1, "form-control"], [1, "row", "mb-3"], ["type", "number", "formControlName", "Latitude", 1, "form-control", 3, "input"], ["type", "number", "formControlName", "Longitude", 1, "form-control", 3, "input"], ["type", "button", "data-toggle", "collapse", "data-target", "#map-container", 1, "btn", "btn-primary", "btn-block", "mb-1"], ["id", "map-container", 1, "collapse", "show"], ["id", "map"], ["type", "button", "id", "focus", 3, "click"], [1, "fas", "fa-bullseye"], ["hidden", "", "type", "file", 3, "change"], ["fileInput", ""], [1, "col-md-6", 3, "click"], [1, "poiImageContainer"], [3, "src"], [1, "col-md-6"], ["id", "cropper"], [1, "col-md-12", "text-right", "my-2"], [1, "btn", "btn-danger", "btn-block"]], template: function PoiFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PoiFormComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "D\u00E9sactiver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Titre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fran\u00E7ais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Anglais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "N\u00E9erlandais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Afficher/Cacher en fran\u00E7ais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "editor", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "env");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Afficher/Cacher en anglais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "editor", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "env");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Afficher/Cacher en n\u00E9erlandais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "editor", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "env");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Cat\u00E9gorie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "ng-select2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "select2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Dates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Date de d\u00E9but");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Date de fin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Coordonn\u00E9es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Latitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PoiFormComponent_Template_input_input_72_listener() { return ctx.refreshMarker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Longitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PoiFormComponent_Template_input_input_76_listener() { return ctx.refreshMarker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Afficher/Cacher la carte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PoiFormComponent_Template_button_click_82_listener() { return ctx.setBounds(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PoiFormComponent_Template_input_change_85_listener($event) { return ctx.fileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PoiFormComponent_Template_div_click_87_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](86); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "imgDefault");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Sauvegarder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("apiKey", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 10, "TINYMCE_KEY"))("init", ctx.editorOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("apiKey", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 12, "TINYMCE_KEY"))("init", ctx.editorOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("apiKey", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 14, "TINYMCE_KEY"))("init", ctx.editorOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](52, 16, ctx.categories, "Id", "Name_fr"))("options", ctx.selectOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](90, 20, ctx.imageSource), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_12__["EditorComponent"], ng_select2__WEBPACK_IMPORTED_MODULE_13__["NgSelect2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], pipes: [_shared_pipes_env_pipe__WEBPACK_IMPORTED_MODULE_14__["EnvPipe"], _shared_pipes_select2_pipe__WEBPACK_IMPORTED_MODULE_15__["Select2Pipe"], _shared_pipes_img_default_pipe__WEBPACK_IMPORTED_MODULE_16__["ImgDefaultPipe"]], styles: ["[_nghost-%COMP%]   #map[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 100%;\n}\n[_nghost-%COMP%]   #map-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   #focus[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid gray;\n  color: gray;\n  border-radius: 3px;\n  height: 30px;\n  width: 30px;\n  z-index: 400;\n}\n[_nghost-%COMP%]   #focus[_ngcontent-%COMP%]:hover {\n  color: darkgray;\n  border-color: darkgray;\n}\n[_nghost-%COMP%]   .poiImageContainer[_ngcontent-%COMP%] {\n  border: 3px solid gray;\n  border-radius: 3px;\n  padding: 20px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n[_nghost-%COMP%]   .poiImageContainer[_ngcontent-%COMP%]:hover {\n  border-color: #00b12c;\n}\n[_nghost-%COMP%]   .poiImageContainer[_ngcontent-%COMP%]:hover    > img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n[_nghost-%COMP%]   .poiImageContainer[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcG9pbnQtb2YtaW50ZXJlc3RzL2NvbXBvbmVudHMvcG9pLWZvcm0vcG9pLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQURSO0FBR0k7RUFDSSxrQkFBQTtBQURSO0FBR0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURSO0FBRVE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7QUFBWjtBQUdJO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFEUjtBQUVRO0VBQ0kscUJDN0JIO0FENkJUO0FBQ1k7RUFDSSxzQkFBQTtBQUNoQjtBQUVRO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFaIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcG9pbnQtb2YtaW50ZXJlc3RzL2NvbXBvbmVudHMvcG9pLWZvcm0vcG9pLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcbjpob3N0IHtcclxuICAgICNtYXAge1xyXG4gICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgIH1cclxuICAgICNtYXAtY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAjZm9jdXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICB6LWluZGV4OiA0MDA7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBkYXJrZ3JheTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZ3JheTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucG9pSW1hZ2VDb250YWluZXIge1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGdyZWVuMjtcclxuICAgICAgICAgICAgPmltZyB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgID5pbWcge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRkYXJrMTogcmdiKDMwLDQwLDQ0KTtcclxuJGRhcmsyOiByZ2IoNDQsNTUsNjApO1xyXG4kbGlnaHQxOiByZ2IoMjU1LDI1NSwyNTUpO1xyXG4kbGlnaHQyOiByZ2IoMjM2LDI0MCwyNDUpO1xyXG4kZ3JlZW4xOiByZ2IoMCwxNDEsNzYpO1xyXG4kZ3JlZW4yOiByZ2IoMCwgMTc3LCA0NCk7ICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PoiFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-poi-form',
                templateUrl: './poi-form.component.html',
                styleUrls: ['./poi-form.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_point_of_interests_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"] }, { type: src_app_core_services_point_of_interests_point_of_interests_service__WEBPACK_IMPORTED_MODULE_9__["PointOfInterestsService"] }, { type: src_app_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }]; }, { model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "WE1v":
/*!*************************************************************!*\
  !*** ./node_modules/leaflet/dist/images/marker-icon-2x.png ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "marker-icon-2x.png");

/***/ }),

/***/ "Y5fm":
/*!**********************************************************!*\
  !*** ./node_modules/leaflet/dist/images/marker-icon.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "marker-icon.png");

/***/ }),

/***/ "eSIH":
/*!*********************************************************************!*\
  !*** ./node_modules/ng-select2/__ivy_ngcc__/fesm2015/ng-select2.js ***!
  \*********************************************************************/
/*! exports provided: NgSelect2Component, NgSelect2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelect2Component", function() { return NgSelect2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelect2Module", function() { return NgSelect2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




/// <reference types="select2" />


const _c0 = ["selector"];
const _c1 = [[["option"], ["optgroup"]]];
const _c2 = ["option, optgroup"];
class NgSelect2Component {
    // private style = `CSS`;
    constructor(renderer, zone, _element) {
        this.renderer = renderer;
        this.zone = zone;
        this._element = _element;
        // value for placeholder
        this.placeholder = '';
        this.dropdownParent = '';
        this.allowClear = false;
        // enable / disable select2
        this.disabled = false;
        // emitter when value is changed
        this.valueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = undefined;
        this.check = false;
        this.propagateChange = (value) => { };
    }
    ngDoCheck() {
        if (!this.element) {
            return;
        }
    }
    ngOnInit() {
        // if (this.cssImport) {
        //   const head = document.getElementsByTagName('head')[0];
        //   const link: any = head.children[head.children.length - 1];
        //   if (!link.version) {
        //     const newLink = this.renderer.createElement(head, 'style');
        //     this.renderer.setElementProperty(newLink, 'type', 'text/css');
        //     this.renderer.setElementProperty(newLink, 'version', 'select2');
        //     this.renderer.setElementProperty(newLink, 'innerHTML', this.style);
        //   }
        // }
    }
    ngOnChanges(changes) {
        if (!this.element) {
            return;
        }
        if (changes['data'] && JSON.stringify(changes['data'].previousValue) !== JSON.stringify(changes['data'].currentValue)) {
            this.initPlugin();
            const newValue = this.value;
            this.setElementValue(newValue);
            this.valueChanged.emit(newValue);
            this.propagateChange(newValue);
        }
        if (changes['value'] && changes['value'].previousValue !== changes['value'].currentValue) {
            const newValue = changes['value'].currentValue;
            this.setElementValue(newValue);
            this.valueChanged.emit(newValue);
            this.propagateChange(newValue);
        }
        if (changes['disabled'] && changes['disabled'].previousValue !== changes['disabled'].currentValue) {
            this.renderer.setProperty(this.selector.nativeElement, 'disabled', this.disabled);
        }
        if (changes['placeholder'] && changes['placeholder'].previousValue !== changes['placeholder'].currentValue) {
            this.element.data('select2').$container.find('.select2-selection__placeholder').text(this.placeholder);
        }
        if (changes['dropdownParent'] && changes['dropdownParent'].previousValue !== changes['dropdownParent'].currentValue) {
            this.renderer.setAttribute(this.selector.nativeElement, 'data-dropdownParent', this.dropdownParent);
        }
        if (changes['allowClear'] && changes['allowClear'].previousValue !== changes['allowClear'].currentValue) {
            this.renderer.setAttribute(this.selector.nativeElement, 'data-allow-clear', this.allowClear.toString());
        }
    }
    ngAfterViewInit() {
        this.element = jQuery(this.selector.nativeElement);
        this.renderer.setAttribute(this.selector.nativeElement, 'data-dropdownParent', this.dropdownParent);
        this.renderer.setAttribute(this.selector.nativeElement, 'data-allow-clear', this.allowClear.toString());
        // console.log(this.selector.nativeElement);
        this.initPlugin();
        if (typeof this.value !== 'undefined') {
            this.setElementValue(this.value);
        }
        this.element.on('select2:select select2:unselect', (e) => {
            // const newValue: string = (e.type === 'select2:unselect') ? '' : this.element.val();
            const newValue = this.element.val();
            this.valueChanged.emit(newValue);
            this.propagateChange(newValue);
        });
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.off('select2:select');
        }
    }
    initPlugin() {
        if (!this.element.select2) {
            if (!this.check) {
                this.check = true;
                console.log('Please add Select2 library (js file) to the project.' +
                    'You can download it from https://github.com/select2/select2/tree/master/dist/js.');
            }
            return;
        }
        // If select2 already initialized remove him and remove all tags inside
        if (this.element.hasClass('select2-hidden-accessible') === true) {
            this.element.select2('destroy');
            this.renderer.setProperty(this.selector.nativeElement, 'innerHTML', '');
        }
        let options = {
            data: this.data,
            width: (this.width) ? this.width : 'resolve',
            placeholder: this.placeholder
        };
        if (this.dropdownParent) {
            options = {
                data: this.data,
                width: (this.width) ? this.width : 'resolve',
                dropdownParent: jQuery('#' + this.dropdownParent),
            };
        }
        Object.assign(options, this.options);
        if (options.matcher) {
            jQuery.fn.select2.amd.require(['select2/compat/matcher'], (oldMatcher) => {
                options.matcher = oldMatcher(options.matcher);
                this.element.select2(options);
                if (typeof this.value !== 'undefined') {
                    this.setElementValue(this.value);
                }
            });
        }
        else {
            this.element.select2(options);
        }
        this.renderer.setProperty(this.selector.nativeElement, 'disabled', this.disabled);
    }
    setElementValue(newValue) {
        // this.zone.run(() => {
        if (Array.isArray(newValue)) {
            for (const option of this.selector.nativeElement.options) {
                this.renderer.setProperty(option, 'selected', (newValue.indexOf(option.value) > -1));
            }
        }
        else {
            this.renderer.setProperty(this.selector.nativeElement, 'value', newValue);
        }
        if (this.element) {
            this.element.trigger('change.select2');
        }
        // });
    }
    writeValue(value) {
        if (value !== undefined) {
            this.value = value;
            this.setElementValue(value);
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() {
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.renderer.setProperty(this.selector.nativeElement, 'disabled', this.disabled);
    }
}
NgSelect2Component.ɵfac = function NgSelect2Component_Factory(t) { return new (t || NgSelect2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NgSelect2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgSelect2Component, selectors: [["ng-select2"]], viewQuery: function NgSelect2Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selector = _t.first);
    } }, inputs: { placeholder: "placeholder", dropdownParent: "dropdownParent", allowClear: "allowClear", disabled: "disabled", value: "value", data: "data", width: "width", options: "options" }, outputs: { valueChanged: "valueChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => NgSelect2Component),
                multi: true
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 3, vars: 0, consts: [["selector", ""]], template: function NgSelect2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
NgSelect2Component.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NgSelect2Component.propDecorators = {
    selector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['selector', { static: true },] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dropdownParent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    allowClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    valueChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelect2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-select2',
                template: "<select #selector>\r\n  <ng-content select=\"option, optgroup\">\r\n  </ng-content>\r\n</select>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => NgSelect2Component),
                        multi: true
                    },
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dropdownParent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['selector', { static: true }]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class NgSelect2Module {
}
NgSelect2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgSelect2Module });
NgSelect2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgSelect2Module_Factory(t) { return new (t || NgSelect2Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgSelect2Module, { declarations: function () { return [NgSelect2Component]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [NgSelect2Component]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelect2Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                declarations: [NgSelect2Component],
                exports: [NgSelect2Component]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-select2
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-select2.js.map

/***/ }),

/***/ "fCFQ":
/*!****************************************************************************************!*\
  !*** ./src/app/features/admin/point-of-interests/point-of-interests-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: PointOfInterestsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointOfInterestsRoutingModule", function() { return PointOfInterestsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add.component */ "8LeW");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/category.component */ "QX6Z");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "QSnS");
/* harmony import */ var _point_of_interests_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./point-of-interests.component */ "CadD");








const routes = [{ path: '', component: _point_of_interests_component__WEBPACK_IMPORTED_MODULE_5__["PointOfInterestsComponent"], children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"] },
            { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"] },
            { path: 'category', component: _category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"] },
        ] }];
class PointOfInterestsRoutingModule {
}
PointOfInterestsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PointOfInterestsRoutingModule });
PointOfInterestsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PointOfInterestsRoutingModule_Factory(t) { return new (t || PointOfInterestsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PointOfInterestsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PointOfInterestsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kHGq":
/*!********************************************************************************!*\
  !*** ./src/app/features/admin/point-of-interests/point-of-interests.module.ts ***!
  \********************************************************************************/
/*! exports provided: PointOfInterestsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointOfInterestsModule", function() { return PointOfInterestsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _point_of_interests_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point-of-interests-routing.module */ "fCFQ");
/* harmony import */ var _point_of_interests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point-of-interests.component */ "CadD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "QSnS");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/add.component */ "8LeW");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "fB2i");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category/category.component */ "QX6Z");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-select2 */ "eSIH");
/* harmony import */ var _components_poi_form_poi_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/poi-form/poi-form.component */ "V5M5");













class PointOfInterestsModule {
}
PointOfInterestsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PointOfInterestsModule });
PointOfInterestsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PointOfInterestsModule_Factory(t) { return new (t || PointOfInterestsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _point_of_interests_routing_module__WEBPACK_IMPORTED_MODULE_2__["PointOfInterestsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ng_select2__WEBPACK_IMPORTED_MODULE_10__["NgSelect2Module"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_7__["EditorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PointOfInterestsModule, { declarations: [_point_of_interests_component__WEBPACK_IMPORTED_MODULE_3__["PointOfInterestsComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"], _components_poi_form_poi_form_component__WEBPACK_IMPORTED_MODULE_11__["PoiFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        _point_of_interests_routing_module__WEBPACK_IMPORTED_MODULE_2__["PointOfInterestsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ng_select2__WEBPACK_IMPORTED_MODULE_10__["NgSelect2Module"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_7__["EditorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PointOfInterestsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_point_of_interests_component__WEBPACK_IMPORTED_MODULE_3__["PointOfInterestsComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"], _components_poi_form_poi_form_component__WEBPACK_IMPORTED_MODULE_11__["PoiFormComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    _point_of_interests_routing_module__WEBPACK_IMPORTED_MODULE_2__["PointOfInterestsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    ng_select2__WEBPACK_IMPORTED_MODULE_10__["NgSelect2Module"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_7__["EditorModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "s8VL":
/*!**********************************************************************!*\
  !*** ./src/app/core/services/point-of-interests/category.service.ts ***!
  \**********************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class CategoryService {
    constructor(http) {
        this.http = http;
        this.context$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.refresh();
    }
    refresh() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_API_URI + 'category').subscribe(data => {
            this.context$.next(data);
        });
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "yL6R":
/*!********************************************************************************!*\
  !*** ./src/app/core/services/point-of-interests/point-of-interests.service.ts ***!
  \********************************************************************************/
/*! exports provided: PointOfInterestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointOfInterestsService", function() { return PointOfInterestsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class PointOfInterestsService {
    constructor(http) {
        this.http = http;
        this.context$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.refresh();
    }
    refresh() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_API_URI + 'pointinteret')
            .subscribe(data => {
            this.context$.next(data);
        });
    }
    update(model) {
        console.log("toto");
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_API_URI + 'pointinteret', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => { this.refresh(); }));
    }
    add(model) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_API_URI + 'pointinteret', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => { this.refresh(); }));
    }
}
PointOfInterestsService.ɵfac = function PointOfInterestsService_Factory(t) { return new (t || PointOfInterestsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PointOfInterestsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PointOfInterestsService, factory: PointOfInterestsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PointOfInterestsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=point-of-interests-point-of-interests-module.js.map