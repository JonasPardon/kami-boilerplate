(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "../../kami-packages/kami-core/src/resources/js/pages/media/Index.vue":
/*!**********************************************************************************************!*\
  !*** /Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/media/Index.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_73011f56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=73011f56& */ "../../kami-packages/kami-core/src/resources/js/pages/media/Index.vue?vue&type=template&id=73011f56&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "../../kami-packages/kami-core/src/resources/js/pages/media/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _kami_websites_kami_boilerplate_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../kami-websites/kami-boilerplate/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_73011f56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_73011f56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "kami-packages/kami-core/src/resources/js/pages/media/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../kami-packages/kami-core/src/resources/js/pages/media/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** /Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/media/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kami_websites_kami_boilerplate_node_modules_babel_loader_lib_index_js_ref_4_0_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../kami-websites/kami-boilerplate/node_modules/babel-loader/lib??ref--4-0!../../../../../../../kami-websites/kami-boilerplate/node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../../kami-packages/kami-core/src/resources/js/pages/media/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_kami_websites_kami_boilerplate_node_modules_babel_loader_lib_index_js_ref_4_0_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../../kami-packages/kami-core/src/resources/js/pages/media/Index.vue?vue&type=template&id=73011f56&":
/*!*****************************************************************************************************************************!*\
  !*** /Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/media/Index.vue?vue&type=template&id=73011f56& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kami_websites_kami_boilerplate_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_73011f56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../kami-websites/kami-boilerplate/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../kami-websites/kami-boilerplate/node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=73011f56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../../kami-packages/kami-core/src/resources/js/pages/media/Index.vue?vue&type=template&id=73011f56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _kami_websites_kami_boilerplate_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_73011f56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _kami_websites_kami_boilerplate_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_kami_websites_kami_boilerplate_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_73011f56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../../kami-packages/kami-core/src/resources/js/pages/media/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!/Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/media/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "../../kami-packages/kami-core/node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "../../kami-packages/kami-core/node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_toastMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../mixins/toastMixin */ "../../kami-packages/kami-core/src/resources/js/mixins/toastMixin.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: 'media-library',
  components: {
    'vue-dropzone': vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  mixins: [_mixins_toastMixin__WEBPACK_IMPORTED_MODULE_2__["default"]],
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      tableHeaders: [{
        label: 'Image',
        key: 'image_url',
        type: 'image'
      }, {
        label: 'Name',
        key: 'name'
      }, {
        label: 'File name',
        key: 'file_name'
      }, {
        label: 'Type',
        key: 'mime_type'
      }, {
        label: 'Created',
        key: 'created_at'
      }],
      media: [],
      mappedMedia: [],
      dropzoneOptions: {
        url: '/admin/media',
        thumbnailWidth: 150,
        maxFilesize: 1.5,
        headers: {
          "X-CSRF-TOKEN": window.laravel.csrfToken
        }
      }
    };
  },
  created: function created() {
    this.media = this.data;
    this.mapMedia();
  },
  methods: {
    mapMedia: function mapMedia() {
      this.mappedMedia = this.media.map(function (img) {
        return _objectSpread({}, img, {
          image_url: "/storage/".concat(img.id, "/").concat(img.file_name)
        });
      });
    },
    dropzoneFileAdded: function dropzoneFileAdded(file, response) {
      this.$refs.dropzone.removeAllFiles();
      this.media.unshift(response);
      this.mapMedia();
      this.successToast('Successfully uploaded');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../../kami-packages/kami-core/src/resources/js/pages/media/Index.vue?vue&type=template&id=73011f56&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!/Users/jonaspardon/code/kami-packages/kami-core/src/resources/js/pages/media/Index.vue?vue&type=template&id=73011f56& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
      _c("h1", { staticClass: "title" }, [_vm._v("Media library")]),
      _vm._v(" "),
      _c("vue-dropzone", {
        ref: "dropzone",
        attrs: { id: "dropzone", options: _vm.dropzoneOptions },
        on: { "vdropzone-success": _vm.dropzoneFileAdded }
      }),
      _vm._v(" "),
      _c("data-table", {
        attrs: {
          headers: _vm.tableHeaders,
          data: _vm.mappedMedia,
          editable: "",
          deletable: ""
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