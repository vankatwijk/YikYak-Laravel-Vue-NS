(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["channels"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/MapLf.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/widgets/MapLf.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-leaflet */ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");
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
// import LeafletMapComponent from '@/components/widgets/LeafletMap.vue';


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      note_title: "",
      note_address: "",
      note_description: "",
      note_map_lat: "",
      note_map_lng: "",
      cos_radians_lat: "",
      // Not Used
      radians_lng: "",
      // Not Used
      sin_radians_lat: "",
      // Not Used
      zoom: 14,
      center: leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.latLng(47.413220, -1.219482),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markers: [// L.latLng(47.412, -1.218),
        // L.latLng(47.413220, -1.219482),
        // L.latLng(47.414, -1.22),
      ],
      show_related: false,
      address: '',
      addressList: []
    };
  },
  props: ['title'],
  components: {
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LTileLayer"],
    LMarker: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LMarker"]
  },
  methods: {
    doSomethingOnReady: function doSomethingOnReady() {
      var _this = this;

      this.$nextTick(function () {
        _this.map = _this.$refs.myMap.mapObject;
      });
    },
    removeMarker: function removeMarker(index) {
      this.markers.splice(index, 1);
    },
    addMarker: function addMarker(event) {
      this.markers.push(event.latlng);
      this.note_map_lat = event.latlng.lat;
      this.note_map_lng = event.latlng.lng; // console.log(event.latlng.lat);
      // console.log(event.latlng.lng);
    },
    addressSearch: function addressSearch() {
      var _this2 = this;

      // Custom Url for Api Call
      var searchUrl = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + this.note_address;
      this.$http.get(searchUrl).then(function (result) {
        console.log(result);

        if (result.status == 200 && result.request.readyState == 4) {
          _this2.addressList = result.data;
          _this2.show_related = true;
        } // console.log('email reset');

      });
    },
    selectLocation: function selectLocation(lat, lon) {
      //console.log(lat+'----'+lon);
      this.markers = []; //reset all markers

      this.markers.push(leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.latLng(lat, lon));
      this.center = leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.latLng(lat, lon);
      this.show_related = false;
      this.note_map_lat = lat;
      this.note_map_lng = lon;
    },
    addNewNotes: function addNewNotes() {
      var _this3 = this;

      // Base Url of App
      var baseUrl = localStorage.getItem('appUrl'); // Channel Id from Local

      var channelId = localStorage.getItem('current-channel-id'); // Custom Url for Api Call

      var addNewNoteUrl = baseUrl + '/api/channelmessanger/' + channelId; // Session Token

      var token = localStorage.getItem('session_token'); // Data to Post

      var data = {
        title: this.note_title,
        description: this.note_description,
        lat: this.note_map_lat,
        lng: this.note_map_lng
      };
      console.log(data); // Header to post Request 

      var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      };
      this.$http.post(addNewNoteUrl, data, {
        headers: headers
      }).then(function (result) {
        console.log(result);

        _this3.updateList(); //this.item_channel.push(result.data.success)

      });
    },
    updateList: function updateList() {
      var data = {
        title: this.note_title,
        description: this.note_description,
        lat: this.note_map_lat,
        lng: this.note_map_lng
      };
      this.$emit('updateUserList', data); //console.log(data);
    }
  },
  computed: {
    addressListSelect: function addressListSelect() {
      return this.addressList;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ChannelsAdd.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ChannelsAdd.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      channel_name: "",
      channel_list: [] //channel_list: this.$store.state.entity.entity_channel,

    };
  },
  components: {},
  methods: {
    createChannel: function createChannel() {
      var _this = this;

      // Base Url of App
      var baseUrl = localStorage.getItem('appUrl'); // Custom Url for Api Call

      var channelUrl = baseUrl + '/api/channels'; // Data to send

      var data = {
        name: this.channel_name
      }; // Session Token

      var token = localStorage.getItem('session_token'); // Header

      var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      };
      this.$http.post(channelUrl, data, {
        headers: headers
      }).then(function (result) {
        console.log(result);

        _this.channel_list.unshift(result.data.success);
      }); //this.$router.push('/login');
    },
    listChannels: function listChannels() {
      var _this2 = this;

      // Base Url of App
      var baseUrl = localStorage.getItem('appUrl'); // Custom Url for Api Call

      var channelUrl = baseUrl + '/api/channels'; // Session Token

      var token = localStorage.getItem('session_token'); // Header

      var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      };
      this.$http.get(channelUrl, {
        headers: headers
      }).then(function (result) {
        _this2.channel_list = result.data.data;
      });
    },
    saveChannelId: function saveChannelId(item) {
      // Save current channel to localstorage
      var channelId = item.id;
      localStorage.setItem('current-channel-id', channelId);
      this.$router.push('/channels-notes');
    }
  },
  mounted: function mounted() {
    // Get Channels List on Load
    this.listChannels();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ChannelsNotes.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ChannelsNotes.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-leaflet */ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");
/* harmony import */ var _components_widgets_MapLf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/widgets/MapLf */ "./resources/js/components/widgets/MapLf.vue");
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
//

 //import LeafletMapComponent from '@/components/widgets/LeafletMap.vue';


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      markers: [leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.latLng(47.412, -1.218), leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.latLng(47.413220, -1.219482), leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.latLng(47.414, -1.22)],
      dialog: false,
      zoom: 14,
      center: leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.latLng(47.413220, -1.219482),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      // note_title : "",
      // note_address : "",
      // note_description : "",
      // note_map_lag : "",
      // note_map_lng : "",
      item_channel: [{
        title: 'test',
        description: 'test',
        lat: '47.413220',
        lng: '-1.219482'
      }]
    };
  },
  components: {
    //'leaflet-map-component': LeafletMapComponent,
    'leaflet-map-component': _components_widgets_MapLf__WEBPACK_IMPORTED_MODULE_2__["default"],
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LTileLayer"],
    LMarker: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LMarker"]
  },
  methods: {
    onResize: function onResize() {
      this.$refs.map[0].mapObject._onResize();
    },
    getNotesHistory: function getNotesHistory() {
      var _this = this;

      // Base Url of App
      var baseUrl = localStorage.getItem('appUrl'); // Channel Id from Local

      var channelId = localStorage.getItem('current-channel-id'); // Custom Url for Api Call

      var channelMsgUrl = baseUrl + '/api/channelmessanger/' + channelId; //const channelMsgUrl = baseUrl + '/api/channelmessanger/46';
      //const token = this.$store.data.token;

      var token = localStorage.getItem('session_token'); // Header to post Request 

      var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      };
      this.$http.get(channelMsgUrl, {
        headers: headers
      }).then(function (result) {
        _this.item_channel = result.data.success;
      });
    },
    updateHistoryComponent: function updateHistoryComponent(data) {
      //console.log('parent'+opt);
      this.item_channel.unshift(data);
    }
  },
  mounted: function mounted() {
    this.getNotesHistory();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/MapLf.vue?vue&type=style&index=0&id=11bd858a&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/widgets/MapLf.vue?vue&type=style&index=0&id=11bd858a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.map-container[data-v-11bd858a] {\n    /* z-index:1; */\n}\n.map-container .map-box[data-v-11bd858a] {\n    width: 100%;\n    height: 250px;\n    overflow: hidden;\n    z-index:1;\n}\n.address-list[data-v-11bd858a] {\n    padding: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ChannelsNotes.vue?vue&type=style&index=0&id=493289c2&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ChannelsNotes.vue?vue&type=style&index=0&id=493289c2&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.map-container[data-v-493289c2] {\n    /* z-index:1; */\n}\n.map-box[data-v-493289c2] {\n    /* width: 100%; */\n    width:450px!important;\n    height: 450px!important;\n    /* overflow: hidden; */\n    /* z-index:1; */\n}\n.address-list[data-v-493289c2] {\n    padding: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/MapLf.vue?vue&type=style&index=0&id=11bd858a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/widgets/MapLf.vue?vue&type=style&index=0&id=11bd858a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MapLf.vue?vue&type=style&index=0&id=11bd858a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/MapLf.vue?vue&type=style&index=0&id=11bd858a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ChannelsNotes.vue?vue&type=style&index=0&id=493289c2&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ChannelsNotes.vue?vue&type=style&index=0&id=493289c2&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelsNotes.vue?vue&type=style&index=0&id=493289c2&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ChannelsNotes.vue?vue&type=style&index=0&id=493289c2&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/MapLf.vue?vue&type=template&id=11bd858a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/widgets/MapLf.vue?vue&type=template&id=11bd858a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "map-container" },
    [
      _c(
        "v-row",
        { attrs: { justify: "space-between" } },
        [
          _c(
            "v-col",
            { attrs: { xl: "12" } },
            [
              _c(
                "LMap",
                {
                  staticClass: "map-box",
                  attrs: { id: "dd2", zoom: _vm.zoom, center: _vm.center },
                  on: { click: _vm.addMarker }
                },
                [
                  _c("LTileLayer", {
                    attrs: { url: _vm.url, attribution: _vm.attribution }
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.markers, function(marker, index) {
                    return _c("LMarker", {
                      key: "marker" + index,
                      attrs: { "lat-lng": marker },
                      on: {
                        click: function($event) {
                          return _vm.removeMarker(index)
                        }
                      }
                    })
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "hidden-field",
                attrs: { label: "", name: "map_lat", type: "hidden" },
                model: {
                  value: _vm.note_map_lat,
                  callback: function($$v) {
                    _vm.note_map_lat = $$v
                  },
                  expression: "note_map_lat"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "hidden-field",
                attrs: { label: "", name: "map_lng", type: "hidden" },
                model: {
                  value: _vm.note_map_lng,
                  callback: function($$v) {
                    _vm.note_map_lng = $$v
                  },
                  expression: "note_map_lng"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "hidden-field",
                attrs: {
                  label: "",
                  name: "map_cos_radians_lat",
                  type: "hidden"
                },
                model: {
                  value: _vm.cos_radians_lat,
                  callback: function($$v) {
                    _vm.cos_radians_lat = $$v
                  },
                  expression: "cos_radians_lat"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "hidden-field",
                attrs: { label: "", name: "map_radians_lng", type: "hidden" },
                model: {
                  value: _vm.radians_lng,
                  callback: function($$v) {
                    _vm.radians_lng = $$v
                  },
                  expression: "radians_lng"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "hidden-field",
                attrs: {
                  label: "",
                  name: "map_sin_radians_lat",
                  type: "hidden"
                },
                model: {
                  value: _vm.sin_radians_lat,
                  callback: function($$v) {
                    _vm.sin_radians_lat = $$v
                  },
                  expression: "sin_radians_lat"
                }
              }),
              _vm._v(" "),
              _c(
                "v-form",
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Title",
                      name: "title",
                      "prepend-icon": "mdi-format-color-text",
                      type: "text"
                    },
                    model: {
                      value: _vm.note_title,
                      callback: function($$v) {
                        _vm.note_title = $$v
                      },
                      expression: "note_title"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "Address",
                      name: "address",
                      hint: "Type address for show custom results",
                      "prepend-icon": "mdi-map-marker",
                      type: "text",
                      autocomplete: "off"
                    },
                    on: {
                      keyup: function($event) {
                        return _vm.addressSearch()
                      }
                    },
                    model: {
                      value: _vm.note_address,
                      callback: function($$v) {
                        _vm.note_address = $$v
                      },
                      expression: "note_address"
                    }
                  }),
                  _vm._v(" "),
                  _vm.show_related
                    ? _c(
                        "v-card",
                        { staticClass: "mx-auto", attrs: { tile: "" } },
                        [
                          _c(
                            "v-list",
                            { staticClass: "address-list" },
                            [
                              _c(
                                "v-list-item-group",
                                { attrs: { color: "primary" } },
                                _vm._l(_vm.addressListSelect, function(
                                  item,
                                  index
                                ) {
                                  return _c(
                                    "v-list-item",
                                    {
                                      key: "addresslist-" + index,
                                      on: {
                                        click: function($event) {
                                          return _vm.selectLocation(
                                            item.lat,
                                            item.lon
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-list-item-content",
                                        [
                                          _c("v-list-item-title", [
                                            _vm._v(_vm._s(item.display_name))
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-textarea", {
                    attrs: {
                      "prepend-icon": "mdi-comment",
                      name: "description",
                      label: "Description",
                      "auto-grow": "",
                      value: ""
                    },
                    model: {
                      value: _vm.note_description,
                      callback: function($$v) {
                        _vm.note_description = $$v
                      },
                      expression: "note_description"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", "x-large": "", block: "" },
                      on: { click: _vm.addNewNotes }
                    },
                    [_vm._v("Add Note")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ChannelsAdd.vue?vue&type=template&id=7e2ae9e2&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ChannelsAdd.vue?vue&type=template&id=7e2ae9e2&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "page-container" },
    [
      _c("header-global"),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    {
                      attrs: { xs: "12", sm: "12", md: "6", lg: "5", xl: "4" }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-container",
                            [
                              _c(
                                "v-row",
                                { attrs: { justify: "space-between" } },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { xl: "12" } },
                                    [
                                      _c(
                                        "v-form",
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Group Name",
                                              name: "channel-name",
                                              "prepend-icon":
                                                "mdi-format-color-text",
                                              type: "text"
                                            },
                                            model: {
                                              value: _vm.channel_name,
                                              callback: function($$v) {
                                                _vm.channel_name = $$v
                                              },
                                              expression: "channel_name"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "primary",
                                                "x-large": "",
                                                block: ""
                                              },
                                              on: { click: _vm.createChannel }
                                            },
                                            [_vm._v("Add Group")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      attrs: { xs: "12", sm: "12", md: "6", lg: "7", xl: "8" }
                    },
                    [
                      _c(
                        "v-card",
                        { staticClass: "list-scrollable" },
                        [
                          _c("v-subheader", [_vm._v("Channels List")]),
                          _vm._v(" "),
                          _vm._l(_vm.channel_list, function(item, i) {
                            return _c(
                              "v-list",
                              { key: i },
                              [
                                _c(
                                  "v-list-item",
                                  { attrs: { id: item.id } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", {
                                          domProps: {
                                            innerHTML: _vm._s(item.name)
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-action",
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              id: item.id,
                                              color: "primary"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.saveChannelId(item)
                                              }
                                            }
                                          },
                                          [_vm._v("Add Note")]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          })
                        ],
                        2
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ChannelsNotes.vue?vue&type=template&id=493289c2&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ChannelsNotes.vue?vue&type=template&id=493289c2&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "page-container" },
    [
      _c("header-global"),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            [
              _c(
                "v-toolbar",
                { attrs: { dense: "", flat: "" } },
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        outlined: "",
                        color: "primary",
                        to: "/channels-add",
                        link: ""
                      }
                    },
                    [_vm._v("Group List")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    {
                      attrs: { xs: "12", sm: "12", md: "6", lg: "5", xl: "4" }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-container",
                            [
                              _c("leaflet-map-component", {
                                on: {
                                  updateUserList: _vm.updateHistoryComponent
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      attrs: { xs: "12", sm: "12", md: "6", lg: "7", xl: "8" }
                    },
                    [
                      _c(
                        "v-card",
                        { staticClass: "list-scrollable-mid" },
                        [
                          _c("v-subheader", [_vm._v("History Notes")]),
                          _vm._v(" "),
                          _vm._l(_vm.item_channel, function(item, i) {
                            return _c(
                              "v-list",
                              { key: i, attrs: { id: item.id } },
                              [
                                _c(
                                  "v-list-item-group",
                                  { attrs: { color: "primary" } },
                                  [
                                    _c(
                                      "v-list-item",
                                      [
                                        _c(
                                          "v-list-item-content",
                                          [
                                            _c("v-list-item-title", {
                                              domProps: {
                                                innerHTML: _vm._s(item.title)
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("v-list-item-subtitle", {
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  item.description
                                                )
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item-action",
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  id: item.id,
                                                  color: "primary"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.dialog = true
                                                  }
                                                }
                                              },
                                              [_vm._v("See Details")]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          })
                        ],
                        2
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: {
                    fullscreen: "",
                    "hide-overlay": "",
                    transition: "dialog-bottom-transition"
                  },
                  model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                      _vm.dialog = $$v
                    },
                    expression: "dialog"
                  }
                },
                [
                  _c(
                    "v-card",
                    { staticClass: "message-chat-container" },
                    [
                      _c(
                        "v-toolbar",
                        { attrs: { dark: "", color: "primary" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "", dark: "" },
                              on: {
                                click: function($event) {
                                  _vm.dialog = false
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-close")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-toolbar-title", [_vm._v("Chat")]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c("v-toolbar-items")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "LMap",
                            {
                              directives: [
                                {
                                  name: "resize",
                                  rawName: "v-resize",
                                  value: _vm.onResize,
                                  expression: "onResize"
                                }
                              ],
                              ref: "map"
                            },
                            [
                              _c("LTileLayer", {
                                attrs: {
                                  url: _vm.url,
                                  attribution: _vm.attribution
                                }
                              }),
                              _vm._v(" "),
                              _vm._l(_vm.markers, function(marker, index) {
                                return _c("LMarker", {
                                  key: "marker" + index,
                                  attrs: { "lat-lng": marker }
                                })
                              })
                            ],
                            2
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "message-input-container" },
                        [
                          _c(
                            "v-container",
                            { attrs: { fluid: "" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { xl: "12" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        "x-large": "",
                                        block: "",
                                        color: "primary"
                                      }
                                    },
                                    [_vm._v("Save")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/widgets/MapLf.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/widgets/MapLf.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MapLf_vue_vue_type_template_id_11bd858a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapLf.vue?vue&type=template&id=11bd858a&scoped=true& */ "./resources/js/components/widgets/MapLf.vue?vue&type=template&id=11bd858a&scoped=true&");
/* harmony import */ var _MapLf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapLf.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/MapLf.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MapLf_vue_vue_type_style_index_0_id_11bd858a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapLf.vue?vue&type=style&index=0&id=11bd858a&scoped=true&lang=css& */ "./resources/js/components/widgets/MapLf.vue?vue&type=style&index=0&id=11bd858a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MapLf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MapLf_vue_vue_type_template_id_11bd858a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MapLf_vue_vue_type_template_id_11bd858a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "11bd858a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/MapLf.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/MapLf.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/widgets/MapLf.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapLf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MapLf.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/MapLf.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapLf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/MapLf.vue?vue&type=style&index=0&id=11bd858a&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/widgets/MapLf.vue?vue&type=style&index=0&id=11bd858a&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MapLf_vue_vue_type_style_index_0_id_11bd858a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MapLf.vue?vue&type=style&index=0&id=11bd858a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/MapLf.vue?vue&type=style&index=0&id=11bd858a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MapLf_vue_vue_type_style_index_0_id_11bd858a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MapLf_vue_vue_type_style_index_0_id_11bd858a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MapLf_vue_vue_type_style_index_0_id_11bd858a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MapLf_vue_vue_type_style_index_0_id_11bd858a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MapLf_vue_vue_type_style_index_0_id_11bd858a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/widgets/MapLf.vue?vue&type=template&id=11bd858a&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/widgets/MapLf.vue?vue&type=template&id=11bd858a&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapLf_vue_vue_type_template_id_11bd858a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MapLf.vue?vue&type=template&id=11bd858a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/MapLf.vue?vue&type=template&id=11bd858a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapLf_vue_vue_type_template_id_11bd858a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapLf_vue_vue_type_template_id_11bd858a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/ChannelsAdd.vue":
/*!********************************************!*\
  !*** ./resources/js/views/ChannelsAdd.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelsAdd_vue_vue_type_template_id_7e2ae9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelsAdd.vue?vue&type=template&id=7e2ae9e2&scoped=true& */ "./resources/js/views/ChannelsAdd.vue?vue&type=template&id=7e2ae9e2&scoped=true&");
/* harmony import */ var _ChannelsAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelsAdd.vue?vue&type=script&lang=js& */ "./resources/js/views/ChannelsAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelsAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelsAdd_vue_vue_type_template_id_7e2ae9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelsAdd_vue_vue_type_template_id_7e2ae9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7e2ae9e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ChannelsAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ChannelsAdd.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/ChannelsAdd.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelsAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ChannelsAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ChannelsAdd.vue?vue&type=template&id=7e2ae9e2&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/ChannelsAdd.vue?vue&type=template&id=7e2ae9e2&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsAdd_vue_vue_type_template_id_7e2ae9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelsAdd.vue?vue&type=template&id=7e2ae9e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ChannelsAdd.vue?vue&type=template&id=7e2ae9e2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsAdd_vue_vue_type_template_id_7e2ae9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsAdd_vue_vue_type_template_id_7e2ae9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/ChannelsNotes.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/ChannelsNotes.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelsNotes_vue_vue_type_template_id_493289c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelsNotes.vue?vue&type=template&id=493289c2&scoped=true& */ "./resources/js/views/ChannelsNotes.vue?vue&type=template&id=493289c2&scoped=true&");
/* harmony import */ var _ChannelsNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelsNotes.vue?vue&type=script&lang=js& */ "./resources/js/views/ChannelsNotes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChannelsNotes_vue_vue_type_style_index_0_id_493289c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChannelsNotes.vue?vue&type=style&index=0&id=493289c2&scoped=true&lang=css& */ "./resources/js/views/ChannelsNotes.vue?vue&type=style&index=0&id=493289c2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChannelsNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelsNotes_vue_vue_type_template_id_493289c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelsNotes_vue_vue_type_template_id_493289c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "493289c2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ChannelsNotes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ChannelsNotes.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/ChannelsNotes.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelsNotes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ChannelsNotes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ChannelsNotes.vue?vue&type=style&index=0&id=493289c2&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/ChannelsNotes.vue?vue&type=style&index=0&id=493289c2&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsNotes_vue_vue_type_style_index_0_id_493289c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelsNotes.vue?vue&type=style&index=0&id=493289c2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ChannelsNotes.vue?vue&type=style&index=0&id=493289c2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsNotes_vue_vue_type_style_index_0_id_493289c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsNotes_vue_vue_type_style_index_0_id_493289c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsNotes_vue_vue_type_style_index_0_id_493289c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsNotes_vue_vue_type_style_index_0_id_493289c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsNotes_vue_vue_type_style_index_0_id_493289c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/ChannelsNotes.vue?vue&type=template&id=493289c2&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/ChannelsNotes.vue?vue&type=template&id=493289c2&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsNotes_vue_vue_type_template_id_493289c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelsNotes.vue?vue&type=template&id=493289c2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ChannelsNotes.vue?vue&type=template&id=493289c2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsNotes_vue_vue_type_template_id_493289c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsNotes_vue_vue_type_template_id_493289c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);