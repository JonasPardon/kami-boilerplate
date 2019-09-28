(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "../../kami-packages/kami-core/node_modules/core-js/modules/es6.function.name.js":
/*!*********************************************************************************************************!*\
  !*** /Users/jonaspardon/code/kami-packages/kami-core/node_modules/core-js/modules/es6.function.name.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../kami-packages/kami-core/node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "../../kami-packages/kami-core/node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "../../kami-packages/kami-core/src/resources/js/pages/auth/UserDetail.vue":
/*!**************************************************************************************************!*\
  !*** /Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/auth/UserDetail.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserDetail_vue_vue_type_template_id_35ce711e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDetail.vue?vue&type=template&id=35ce711e&scoped=true& */ "../../kami-packages/kami-core/src/resources/js/pages/auth/UserDetail.vue?vue&type=template&id=35ce711e&scoped=true&");
/* harmony import */ var _UserDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDetail.vue?vue&type=script&lang=js& */ "../../kami-packages/kami-core/src/resources/js/pages/auth/UserDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _kami_websites_kami_boilerplate_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../kami-websites/kami-boilerplate/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserDetail_vue_vue_type_template_id_35ce711e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserDetail_vue_vue_type_template_id_35ce711e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "35ce711e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "kami-packages/kami-core/src/resources/js/pages/auth/UserDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../kami-packages/kami-core/src/resources/js/pages/auth/UserDetail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** /Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/auth/UserDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kami_websites_kami_boilerplate_node_modules_babel_loader_lib_index_js_ref_4_0_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../kami-websites/kami-boilerplate/node_modules/babel-loader/lib??ref--4-0!../../../../../../../kami-websites/kami-boilerplate/node_modules/vue-loader/lib??vue-loader-options!./UserDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../../kami-packages/kami-core/src/resources/js/pages/auth/UserDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_kami_websites_kami_boilerplate_node_modules_babel_loader_lib_index_js_ref_4_0_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../../kami-packages/kami-core/src/resources/js/pages/auth/UserDetail.vue?vue&type=template&id=35ce711e&scoped=true&":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/auth/UserDetail.vue?vue&type=template&id=35ce711e&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kami_websites_kami_boilerplate_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_template_id_35ce711e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../kami-websites/kami-boilerplate/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../kami-websites/kami-boilerplate/node_modules/vue-loader/lib??vue-loader-options!./UserDetail.vue?vue&type=template&id=35ce711e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../../kami-packages/kami-core/src/resources/js/pages/auth/UserDetail.vue?vue&type=template&id=35ce711e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _kami_websites_kami_boilerplate_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_template_id_35ce711e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _kami_websites_kami_boilerplate_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_template_id_35ce711e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../../kami-packages/kami-core/src/resources/js/pages/auth/UserDetail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!/Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/auth/UserDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "../../kami-packages/kami-core/node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'users-detail',
  props: {
    data: {
      type: Object
    },
    isCreate: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      user: {},
      title: 'New user',
      userFields: [{
        label: 'Name',
        key: 'name',
        type: 'string'
      }, {
        label: 'E-mail address',
        key: 'email',
        type: 'string'
      }]
    };
  },
  created: function created() {
    if (this.isCreate) {
      this.user = {};
    } else {
      this.user = this.data;
      this.title = "Edit user: ".concat(this.user.name);
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../../kami-packages/kami-core/src/resources/js/pages/auth/UserDetail.vue?vue&type=template&id=35ce711e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!/Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/auth/UserDetail.vue?vue&type=template&id=35ce711e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "layout",
    [
      _c("h1", { staticClass: "title" }, [_vm._v(_vm._s(_vm.title))]),
      _vm._v(" "),
      _c("custom-form", {
        attrs: { fields: _vm.userFields },
        model: {
          value: _vm.user,
          callback: function($$v) {
            _vm.user = $$v
          },
          expression: "user"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);