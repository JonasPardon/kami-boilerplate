(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../../kami-packages/kami-core/src/resources/js/mixins/toastMixin.js":
/*!*********************************************************************************************!*\
  !*** /Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/mixins/toastMixin.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var duration = 5000;
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    successToast: function successToast(message) {
      this.$toasted.show(message, {
        duration: duration,
        className: 'toast toast--success',
        iconPack: 'fontawesome',
        icon: 'check',
        type: 'success',
        singleton: true
      });
    },
    errorToast: function errorToast(message) {
      this.$toasted.show(message, {
        duration: duration,
        className: 'toast toast--error',
        iconPack: 'fontawesome',
        icon: 'times',
        type: 'error',
        singleton: true
      });
    }
  }
});

/***/ }),

/***/ "../../kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue":
/*!***********************************************************************************************!*\
  !*** /Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail_vue_vue_type_template_id_55147dfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=55147dfe&scoped=true& */ "../../kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=template&id=55147dfe&scoped=true&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js& */ "../../kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Detail_vue_vue_type_style_index_0_id_55147dfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detail.vue?vue&type=style&index=0&id=55147dfe&lang=scss&scoped=true& */ "../../kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=style&index=0&id=55147dfe&lang=scss&scoped=true&");
/* harmony import */ var _kami_websites_kami_boilerplate_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kami-websites/kami-boilerplate/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_vue_vue_type_template_id_55147dfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Detail_vue_vue_type_template_id_55147dfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "55147dfe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** /Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kami_websites_kami_boilerplate_node_modules_babel_loader_lib_index_js_ref_4_0_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../kami-websites/kami-boilerplate/node_modules/babel-loader/lib??ref--4-0!../../../../../../../kami-websites/kami-boilerplate/node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../../kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_kami_websites_kami_boilerplate_node_modules_babel_loader_lib_index_js_ref_4_0_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../../kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=style&index=0&id=55147dfe&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=style&index=0&id=55147dfe&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kami_websites_kami_boilerplate_node_modules_style_loader_index_js_kami_websites_kami_boilerplate_node_modules_css_loader_index_js_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_loaders_stylePostLoader_js_kami_websites_kami_boilerplate_node_modules_postcss_loader_src_index_js_ref_7_2_kami_websites_kami_boilerplate_node_modules_sass_loader_dist_cjs_js_ref_7_3_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_55147dfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../kami-websites/kami-boilerplate/node_modules/style-loader!../../../../../../../kami-websites/kami-boilerplate/node_modules/css-loader!../../../../../../../kami-websites/kami-boilerplate/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../kami-websites/kami-boilerplate/node_modules/postcss-loader/src??ref--7-2!../../../../../../../kami-websites/kami-boilerplate/node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../kami-websites/kami-boilerplate/node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=style&index=0&id=55147dfe&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../../kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=style&index=0&id=55147dfe&lang=scss&scoped=true&");
/* harmony import */ var _kami_websites_kami_boilerplate_node_modules_style_loader_index_js_kami_websites_kami_boilerplate_node_modules_css_loader_index_js_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_loaders_stylePostLoader_js_kami_websites_kami_boilerplate_node_modules_postcss_loader_src_index_js_ref_7_2_kami_websites_kami_boilerplate_node_modules_sass_loader_dist_cjs_js_ref_7_3_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_55147dfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kami_websites_kami_boilerplate_node_modules_style_loader_index_js_kami_websites_kami_boilerplate_node_modules_css_loader_index_js_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_loaders_stylePostLoader_js_kami_websites_kami_boilerplate_node_modules_postcss_loader_src_index_js_ref_7_2_kami_websites_kami_boilerplate_node_modules_sass_loader_dist_cjs_js_ref_7_3_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_55147dfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _kami_websites_kami_boilerplate_node_modules_style_loader_index_js_kami_websites_kami_boilerplate_node_modules_css_loader_index_js_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_loaders_stylePostLoader_js_kami_websites_kami_boilerplate_node_modules_postcss_loader_src_index_js_ref_7_2_kami_websites_kami_boilerplate_node_modules_sass_loader_dist_cjs_js_ref_7_3_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_55147dfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _kami_websites_kami_boilerplate_node_modules_style_loader_index_js_kami_websites_kami_boilerplate_node_modules_css_loader_index_js_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_loaders_stylePostLoader_js_kami_websites_kami_boilerplate_node_modules_postcss_loader_src_index_js_ref_7_2_kami_websites_kami_boilerplate_node_modules_sass_loader_dist_cjs_js_ref_7_3_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_55147dfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_kami_websites_kami_boilerplate_node_modules_style_loader_index_js_kami_websites_kami_boilerplate_node_modules_css_loader_index_js_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_loaders_stylePostLoader_js_kami_websites_kami_boilerplate_node_modules_postcss_loader_src_index_js_ref_7_2_kami_websites_kami_boilerplate_node_modules_sass_loader_dist_cjs_js_ref_7_3_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_55147dfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=template&id=55147dfe&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** /Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=template&id=55147dfe&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kami_websites_kami_boilerplate_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_55147dfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../kami-websites/kami-boilerplate/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../kami-websites/kami-boilerplate/node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=template&id=55147dfe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../../kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=template&id=55147dfe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _kami_websites_kami_boilerplate_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_55147dfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _kami_websites_kami_boilerplate_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_55147dfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../../kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!/Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/regenerator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _mixins_toastMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../mixins/toastMixin */ "../../kami-packages/kami-core/src/resources/js/mixins/toastMixin.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'page-detail',
  mixins: [_mixins_toastMixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    data: {
      type: Object
    },
    isCreate: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      page: {},
      title: 'New page',
      pageFields: [{
        label: 'Title',
        key: 'title',
        type: 'string'
      }, {
        label: 'Body',
        key: 'body',
        type: 'text'
      }, {
        label: 'Active',
        key: 'active',
        type: 'boolean'
      }, {
        label: 'Publish at',
        key: 'publish_at',
        type: 'datetime'
      }, {
        label: 'Publish until',
        key: 'publish_until',
        type: 'datetime'
      } // {label: 'Created at', key: 'created_at', type: 'datetime'},
      ],
      preview: null
    };
  },
  created: function created() {
    if (this.isCreate) {
      this.page = {};
    } else {
      this.page = this.data;
      this.title = this.page.title;
    }
  },
  methods: {
    saveSettings: function () {
      var _saveSettings = _asyncToGenerator(
      /*#__PURE__*/
      !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/regenerator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).mark(function _callee() {
        var _this = this;

        var url;
        return !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/regenerator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this.isCreate ? '/admin/pages' : "/admin/pages/".concat(this.page.id);
                axios.post(url, this.page).then(function (response) {
                  _this.successToast('Successfully saved');
                })["catch"](function (error) {
                  _this.errorToast('Something went wrong');
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function saveSettings() {
        return _saveSettings.apply(this, arguments);
      }

      return saveSettings;
    }(),
    showPreview: function showPreview() {
      var _this2 = this;

      axios.post('/admin/preview', {
        target_entity: 'page',
        model: 'App\\Page',
        data: this.page
      }).then(function (response) {
        _this2.preview = response.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    closePreview: function closePreview() {
      this.preview = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../../kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=style&index=0&id=55147dfe&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!/Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=style&index=0&id=55147dfe&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../kami-websites/kami-boilerplate/node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preview[data-v-55147dfe] {\n  position: fixed;\n  top: 10rem;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  background-color: white;\n  z-index: -1;\n  transition: all 0.2s ease;\n}\n.preview iframe[data-v-55147dfe] {\n  width: 100%;\n  height: 100%;\n}\n.preview.active[data-v-55147dfe] {\n  top: 0;\n  opacity: 1;\n  z-index: 999;\n}\n.preview__header[data-v-55147dfe] {\n  font-size: 1.8rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem 3rem;\n  width: 100%;\n  background-color: #394049;\n  color: white;\n}\n.preview__header p[data-v-55147dfe] {\n  margin-bottom: 0;\n}\n.preview__header svg[data-v-55147dfe] {\n  transition: all 0.2s ease;\n}\n.preview__header svg[data-v-55147dfe]:hover {\n  transform: scale(1.2);\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../../kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=style&index=0&id=55147dfe&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!/Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=style&index=0&id=55147dfe&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../kami-websites/kami-boilerplate/node_modules/css-loader!../../../../../../../kami-websites/kami-boilerplate/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../kami-websites/kami-boilerplate/node_modules/postcss-loader/src??ref--7-2!../../../../../../../kami-websites/kami-boilerplate/node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../kami-websites/kami-boilerplate/node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=style&index=0&id=55147dfe&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../../kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=style&index=0&id=55147dfe&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../kami-websites/kami-boilerplate/node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../../kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=template&id=55147dfe&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!/Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/pages/Detail.vue?vue&type=template&id=55147dfe&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "page-actions" }, [
        _c(
          "div",
          { staticClass: "btn-page-action" },
          [
            _c(
              "custom-btn",
              { attrs: { icon: "eye" }, on: { click: _vm.showPreview } },
              [_vm._v("Preview")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-page-action" },
          [
            _c(
              "custom-btn",
              { attrs: { icon: "save" }, on: { click: _vm.saveSettings } },
              [_vm._v("Save")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("custom-form", {
        attrs: { fields: _vm.pageFields },
        model: {
          value: _vm.page,
          callback: function($$v) {
            _vm.page = $$v
          },
          expression: "page"
        }
      }),
      _vm._v(" "),
      _c("div", { class: { preview: true, active: _vm.preview !== null } }, [
        _c(
          "div",
          { staticClass: "preview__header" },
          [
            _c("p", [_vm._v("Page preview")]),
            _vm._v(" "),
            _c("font-awesome-icon", {
              attrs: { icon: "times" },
              on: { click: _vm.closePreview }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("iframe", { attrs: { srcdoc: _vm.preview, frameborder: "0" } })
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);