require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ForgotPassword.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //import * as http from "http";

var httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

var dialogs = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");

var appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");

appSettings.setString('appURL', "http://192.168.0.112:8000"); //https://LoNote.tsertec.io , http://192.168.0.83:8000

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      isLoggingIn: true,
      processing: false,
      user: {
        email: ""
      },
      Token: ""
    };
  },

  created() {},

  mounted() {
    setTimeout(() => {
      this.onStart();
    }, 1000);
  },

  methods: {
    onStart() {},

    reset() {
      var appURL = appSettings.getString('appURL');
      httpModule.request({
        url: appURL + '/api/reset-password',
        //"http://192.168.0.83:8000/api/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        content: JSON.stringify({
          email: this.user.email
        })
      }).then(response => {
        this.processing = false;

        if (response.statusCode === 200) {
          //good login
          alert('please check your email');
          this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_0__["default"], {
            clearHistory: true
          });
        } else {
          alert('Email does not exist');
        }
      }, e => {
        this.processing = false;
        alert(e.message);
      });
    },

    backToLogin() {
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Post.vue");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

var appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {},
  watch: {
    location() {
      this.getNotes();
    }

  },

  created() {
    nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2__["enableLocationRequest"](true).then(() => {
      nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2__["isEnabled"]().then(isLocationEnabled => {
        console.log('result is ' + isLocationEnabled);

        if (!isLocationEnabled) {
          this.needLocation = false;
          this.locationFailure = true; // potentially do more then just end here...

          return;
        } // MUST pass empty object!!


        nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2__["getCurrentLocation"]({}).then(result => {
          console.log('loc result', result);
          this.needLocation = false;
          this.location = result;
        }).catch(e => {
          console.log('loc error', e);
        });
      });
    });
    setTimeout(() => {
      this.onStart();
    }, 500);
  },

  data() {
    return {
      needLocation: true,
      locationFailure: false,
      location: null,
      drawerToggle: false,
      drawer1: "",
      drawer2: "",
      mainColor: "#1aa3ff",
      APIURL: "",
      name: "",
      notes: []
    };
  },

  methods: {
    onStart() {
      this.name = appSettings.getString('name', '');
    },

    selectNote(id) {
      alert(id);
    },

    getNotes() {
      console.log('getting notes');
      var userToken = appSettings.getString('userToken', 0);
      var appURL = appSettings.getString('appURL', 0);
      this.APIURL = appURL;
      httpModule.request({
        url: appURL + '/api/notes?lat=' + this.location.latitude + '&lng=' + this.location.longitude,
        method: "Get",
        headers: {
          "Accept": "application/json",
          "Authorization": "Bearer " + userToken
        }
      }).then(response => {
        var result = response.content.toJSON();
        this.notes = result.notes;
      }, error => {
        console.error(error);
      });
    },

    onPullToRefreshInitiated(_ref) {
      var {
        object
      } = _ref;
      this.$nextTick(() => {
        this.getNotes();
        object.notifyPullToRefreshFinished();
      });
    },

    onDrawerClosed() {
      this.drawerToggle = false;
    },

    onDrawerOpened() {
      this.drawerToggle = true;
    },

    toggleDrawer() {
      this.$refs.drawer.nativeView.toggleDrawerState();
    },

    homeTap() {},

    profileTap() {
      this.$navigateTo(Profile, {
        animated: false,
        clearHistory: true
      });
    },

    postTap() {
      this.$navigateTo(_Post__WEBPACK_IMPORTED_MODULE_1__["default"], {
        animated: false,
        clearHistory: true
      });
    },

    conversationsTap() {
      this.$navigateTo(Convs, {
        animated: false,
        clearHistory: true
      });
    },

    logout() {
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true
      });
    },

    searchSubmited() {
      this.$navigateTo(Search, {
        animated: {
          name: 'fade',
          duration: 200
        },
        clearHistory: true,
        props: {
          searchValue: this.searchValue
        }
      });
    },

    notificationsTap() {
      var userToken = appSettings.remove('userToken');
      var appURL = appSettings.remove('appURL');
      this.$navigateTo(Notification, {
        clearHistory: true
      });
    },

    showDetails() {}

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _ForgotPassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ForgotPassword.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 //import * as http from "http";

var httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

var dialogs = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");

var appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");

appSettings.setString('appURL', "http://192.168.0.112:8000"); //https://LoNote.tsertec.io , http://192.168.0.83:8000

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      isLoggingIn: true,
      processing: false,
      user: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        forgotEmail: ""
      },
      Token: ""
    };
  },

  created() {},

  mounted() {
    setTimeout(() => {
      this.onStart();
    }, 1000);
  },

  methods: {
    onStart() {},

    changeAPI() {
      dialogs.prompt({
        title: "API server URL",
        message: "please provide the url to the api server",
        inputType: "text",
        defaultText: "",
        okButtonText: "Ok",
        defaultText: "",
        cancelButtonText: "Cancel"
      }).then(data => {
        appSettings.setString('appURL', data.text);
        forgotPassword;
      });
    },

    toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
    },

    submit() {
      if (!this.user.email || !this.user.password) {
        alert("Please provide both an email address and password.");
        return;
      }

      this.processing = true;

      if (this.isLoggingIn) {
        this.login();
      } else {
        this.register();
      }
    },

    login() {
      var appURL = appSettings.getString('appURL');
      httpModule.request({
        url: appURL + '/api/login',
        //"http://192.168.0.83:8000/api/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        content: JSON.stringify({
          email: this.user.email,
          password: this.user.password
        })
      }).then(response => {
        this.processing = false;

        if (response.statusCode === 200) {
          //good login
          var result = response.content.toJSON();
          console.log(result);
          appSettings.setString('userToken', result.success.token);
          appSettings.setString('name', result.success.name);
          this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
            clearHistory: true
          });
        } else if (response.statusCode === 401) {
          //failed logn
          alert('The login details you have provided are not correct');
        } else {
          alert('Unexpected error');
        }
      }, e => {
        this.processing = false;
        alert(e.message);
      });
    },

    register() {
      if (this.user.password != this.user.confirmPassword) {
        alert("Your passwords do not match.");
        this.processing = false;
        return;
      } else if (this.user.password.length <= 7) {
        alert("Your password must be atlease 8 characters");
        this.processing = false;
        return;
      } else if (!this.user.name) {
        alert('all fields are required.');
        this.processing = false;
        return;
      }

      var appURL = appSettings.getString('appURL');
      httpModule.request({
        url: appURL + '/api/register',
        //"http://192.168.0.83:8000/api/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        content: JSON.stringify({
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          c_password: this.user.confirmPassword
        })
      }).then(response => {
        this.processing = false;
        console.log(response.content.toJSON());

        if (response.statusCode === 200) {
          //good login
          var result = response.content.toJSON();
          console.log(result);
          alert('Please verify your email to login');
          this.isLoggingIn = true;
        } else if (response.statusCode === 422) {
          //failed logn
          alert('The following error happened Username or email already taken or password length is to short.');
          console.log(response.content);
          console.log('------------------------');
          console.log(response);
        } else {
          alert('Unexpected error');
        }
      }, e => {
        this.processing = false;
        alert(e.message);
      });
    },

    focusPassword() {
      this.$refs.password.nativeView.focus();
    },

    focusConfirmPassword() {
      if (!this.isLoggingIn) {
        this.$refs.confirmPassword.nativeView.focus();
      }
    },

    forgotPassword() {
      this.$navigateTo(_ForgotPassword__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Post.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Post.vue");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

var appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {},

  created() {
    nativescript_geolocation__WEBPACK_IMPORTED_MODULE_3__["enableLocationRequest"](true).then(() => {
      nativescript_geolocation__WEBPACK_IMPORTED_MODULE_3__["isEnabled"]().then(isLocationEnabled => {
        console.log('result is ' + isLocationEnabled);

        if (!isLocationEnabled) {
          this.needLocation = false;
          this.locationFailure = true; // potentially do more then just end here...

          return;
        } // MUST pass empty object!!


        nativescript_geolocation__WEBPACK_IMPORTED_MODULE_3__["getCurrentLocation"]({}).then(result => {
          console.log('loc result', result);
          this.needLocation = false;
          this.location = result;
        }).catch(e => {
          console.log('loc error', e);
        });
      });
    });
  },

  data() {
    return {
      needLocation: true,
      locationFailure: false,
      location: null,
      noteTitle: "",
      noteBody: "",
      searchValue: '',
      drawerToggle: false,
      drawer1: "",
      drawer2: "",
      mainColor: "#1aa3ff",
      APIURL: "",
      homePosts: []
    };
  },

  computed: {
    locationDescription() {
      return "You are at ".concat(this.location.latitude, ", ").concat(this.location.longitude, ". Your altitude is ").concat(this.location.altitude, ".");
    },

    name() {
      return appSettings.getString('name', '');
    }

  },
  methods: {
    onStart() {},

    submitPost() {
      var userToken = appSettings.getString('userToken', 0);
      var appURL = appSettings.getString('appURL', 0);
      this.APIURL = appURL;
      httpModule.request({
        url: appURL + '/api/notes',
        //"http://192.168.0.83:8000/api/home",
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Bearer " + userToken
        },
        content: JSON.stringify({
          title: this.noteTitle,
          description: this.noteBody,
          lat: this.location.latitude,
          lng: this.location.longitude
        })
      }).then(response => {
        console.log(response);

        if (response.statusCode === 200) {
          this.noteTitle = '';
          this.noteBody = '';
          alert('note added to location');
        } else {
          alert('Something has gone wrong');
        }
      }, error => {
        console.error(error);
      });
    },

    onDrawerClosed() {
      this.drawerToggle = false;
    },

    onDrawerOpened() {
      this.drawerToggle = true;
    },

    toggleDrawer() {
      this.$refs.drawer.nativeView.toggleDrawerState();
    },

    homeTap() {
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
        animated: false,
        clearHistory: true
      });
    },

    postTap() {
      this.$navigateTo(_Post__WEBPACK_IMPORTED_MODULE_2__["default"], {
        animated: false,
        clearHistory: true
      });
    },

    logout() {
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
        clearHistory: true
      });
    },

    notificationsTap() {
      this.$navigateTo(Notification, {
        clearHistory: true
      });
    },

    showDetails() {}

  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/ForgotPassword.vue?vue&type=style&index=0&id=241d39f9&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page[data-v-241d39f9] {\n    align-items: center;\n    flex-direction: column;\n}\n.form[data-v-241d39f9] {\n    margin-left: 30;\n    margin-right: 30;\n    flex-grow: 2;\n    vertical-align: middle;\n}\n.logo[data-v-241d39f9] {\n    margin-bottom: 12;\n    height: 90;\n    font-weight: bold;\n}\n.header[data-v-241d39f9] {\n    horizontal-align: center;\n    font-size: 25;\n    font-weight: 600;\n    margin-bottom: 70;\n    text-align: center;\n    color: #D51A1A;\n}\n.input-field[data-v-241d39f9] {\n    margin-bottom: 25;\n}\n.input[data-v-241d39f9] {\n    font-size: 18;\n    placeholder-color: #A8A8A8;\n}\n.input[data-v-241d39f9]:disabled {\n    background-color: white;\n    opacity: 0.5;\n}\n.btn-primary[data-v-241d39f9] {\n    margin: 30 5 15 5;\n}\n.login-label[data-v-241d39f9] {\n    horizontal-align: center;\n    color: #A8A8A8;\n    font-size: 16;\n}\n.sign-up-label[data-v-241d39f9] {\n    margin-bottom: 20;\n}\n.bold[data-v-241d39f9] {\n    color: #000000;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/ForgotPassword.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page[data-v-c27482c4] {\n    align-items: center;\n    flex-direction: column;\n}\n.form[data-v-c27482c4] {\n    margin-left: 30;\n    margin-right: 30;\n    flex-grow: 2;\n    vertical-align: middle;\n}\n.logo[data-v-c27482c4] {\n    margin-bottom: 12;\n    height: 90;\n    font-weight: bold;\n}\n.header[data-v-c27482c4] {\n    horizontal-align: center;\n    font-size: 25;\n    font-weight: 600;\n    margin-bottom: 70;\n    text-align: center;\n    color: #D51A1A;\n}\n.input-field[data-v-c27482c4] {\n    margin-bottom: 25;\n}\n.input[data-v-c27482c4] {\n    font-size: 18;\n    placeholder-color: #A8A8A8;\n}\n.input[data-v-c27482c4]:disabled {\n    background-color: white;\n    opacity: 0.5;\n}\n.btn-primary[data-v-c27482c4] {\n    margin: 30 5 15 5;\n}\n.login-label[data-v-c27482c4] {\n    horizontal-align: center;\n    color: #A8A8A8;\n    font-size: 16;\n}\n.sign-up-label[data-v-c27482c4] {\n    margin-bottom: 20;\n}\n.bold[data-v-c27482c4] {\n    color: #000000;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Login.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ForgotPassword.vue?vue&type=template&id=241d39f9&scoped=true&":
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
    "Page",
    { attrs: { actionBarHidden: "true" } },
    [
      _c(
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c(
            "StackLayout",
            { staticClass: "form" },
            [
              _c("Image", {
                staticClass: "logo",
                attrs: { src: "~/images/logo.png" }
              }),
              _c(
                "GridLayout",
                { attrs: { rows: "auto" } },
                [
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "1" } },
                    [
                      _c("TextField", {
                        staticClass: "input",
                        attrs: {
                          hint: "Email",
                          isEnabled: !_vm.processing,
                          keyboardType: "email",
                          autocorrect: "false",
                          autocapitalizationType: "none",
                          returnKeyType: "next",
                          text: _vm.user.email
                        },
                        on: {
                          returnPress: _vm.focusPassword,
                          textChange: function($event) {
                            return _vm.$set(_vm.user, "email", $event.value)
                          }
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c("ActivityIndicator", {
                    attrs: { rowSpan: "3", busy: _vm.processing }
                  })
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn btn-dark m-t-20",
                attrs: { text: "Reset", isEnabled: !_vm.processing },
                on: { tap: _vm.reset }
              }),
              _c("Label", {
                staticClass: "login-label",
                attrs: { "*v-show": "isLoggingIn", text: "Go Back to Login" },
                on: {
                  tap: function($event) {
                    return _vm.backToLogin()
                  }
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
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
    "Page",
    { staticClass: "page" },
    [
      _c(
        "ActionBar",
        {
          staticClass: "action-bar header",
          staticStyle: { backgroundColor: "black" },
          attrs: { title: "" }
        },
        [
          _c(
            "StackLayout",
            {
              staticClass: "actionBarContainer",
              attrs: {
                orientation: "horizontal",
                height: "38",
                alignItems: "left"
              }
            },
            [
              _c(
                "StackLayout",
                {
                  staticClass: "HLeft",
                  staticStyle: { marginTop: "10" },
                  on: {
                    tap: function($event) {
                      return _vm.toggleDrawer()
                    }
                  }
                },
                [
                  _c("Label", {
                    staticClass: "font-awesome",
                    staticStyle: { fontSize: "27", color: "#fff" },
                    attrs: {
                      text: _vm.drawerToggle ? _vm.drawer2 : _vm.drawer1
                    }
                  })
                ],
                1
              ),
              _c("StackLayout", {
                staticClass: "HMid",
                attrs: { alignItems: "left" }
              }),
              _c("StackLayout", { staticClass: "HRight" })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "RadSideDrawer",
        {
          ref: "drawer",
          on: {
            drawerOpened: function($event) {
              return _vm.onDrawerOpened()
            },
            drawerClosed: function($event) {
              return _vm.onDrawerClosed()
            }
          }
        },
        [
          _c(
            "StackLayout",
            {
              directives: [
                {
                  name: "view",
                  rawName: "v-view:drawerContent",
                  arg: "drawerContent",
                  modifiers: {}
                }
              ],
              attrs: { backgroundColor: "#eee" }
            },
            [
              _c(
                "StackLayout",
                {},
                [
                  _c("Label", {
                    staticClass: "drawerItemText font-awesome",
                    attrs: {
                      text: _vm.name,
                      paddingLeft: "30%",
                      color: "black",
                      margin: "10"
                    }
                  })
                ],
                1
              ),
              _c("StackLayout", { attrs: { height: "80%" } }),
              _c(
                "StackLayout",
                {},
                [
                  _c("Label", {
                    staticClass: "drawerItemText font-awesome",
                    attrs: {
                      text: "  Log out",
                      paddingLeft: "30%",
                      color: "black",
                      margin: "10"
                    },
                    on: { tap: _vm.logout }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "StackLayout",
            {
              directives: [
                {
                  name: "view",
                  rawName: "v-view:mainContent",
                  arg: "mainContent",
                  modifiers: {}
                }
              ]
            },
            [
              _c(
                "DockLayout",
                [
                  _c(
                    "StackLayout",
                    { attrs: { dock: "top", height: "90%", width: "100%" } },
                    [
                      _c(
                        "RadListView",
                        {
                          key: _vm.index,
                          ref: "listView",
                          attrs: {
                            pullToRefresh: "true",
                            height: "100%",
                            backgroundColor: "#E8E8E8",
                            separatorColor: "transparent",
                            id: "listView",
                            items: _vm.notes,
                            "+alias": "note"
                          },
                          on: {
                            pullToRefreshInitiated: _vm.onPullToRefreshInitiated
                          }
                        },
                        [
                          _c("v-template", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var note = ref.note
                                  var $index = ref.$index
                                  var $even = ref.$even
                                  var $odd = ref.$odd
                                  return _c(
                                    "StackLayout",
                                    {
                                      attrs: {
                                        paddingTop: "5",
                                        backgroundColor: "#E8E8E8"
                                      },
                                      on: {
                                        tap: function($event) {
                                          return _vm.selectNote(_vm.item.id)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "StackLayout",
                                        { staticClass: "noteContainer" },
                                        [
                                          _c(
                                            "StackLayout",
                                            {
                                              attrs: {
                                                orientation: "horizontal",
                                                padding: "10"
                                              }
                                            },
                                            [
                                              _c(
                                                "StackLayout",
                                                [
                                                  _c("Label", {
                                                    staticClass:
                                                      "postAuthotName",
                                                    attrs: { text: note.title }
                                                  }),
                                                  _c("Label", {
                                                    staticClass:
                                                      "postDateSmall",
                                                    attrs: {
                                                      text:
                                                        (
                                                          +note.distance * 100
                                                        ).toFixed(3) +
                                                        " meters away"
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
                                      )
                                    ],
                                    1
                                  )
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    {
                      staticStyle: {
                        borderColor: "#E4E4E4",
                        borderWidth: "1",
                        background: "#fff"
                      },
                      attrs: { dock: "bottom", height: "10%" }
                    },
                    [
                      _c(
                        "GridLayout",
                        {
                          attrs: { columns: "*, *", verticalAlignment: "top" }
                        },
                        [
                          _c(
                            "StackLayout",
                            {
                              staticClass: "navItem",
                              attrs: { col: "0" },
                              on: {
                                tap: function($event) {
                                  return _vm.homeTap()
                                }
                              }
                            },
                            [
                              _c("Label", {
                                attrs: {
                                  text: "",
                                  "android:class": "notificationAndroid",
                                  "ios:class": "notification",
                                  opacity: "0"
                                }
                              }),
                              _c("Label", {
                                staticClass: "font-awesome",
                                attrs: {
                                  text: "",
                                  color: _vm.mainColor,
                                  "android:style":
                                    "font-size:18;margin-top:-15",
                                  "ios:style": "font-size:30;margin-top:-15"
                                }
                              }),
                              _c("Label", {
                                staticStyle: { fontSize: "10" },
                                attrs: { text: "Home", color: _vm.mainColor }
                              })
                            ],
                            1
                          ),
                          _c(
                            "StackLayout",
                            {
                              staticClass: "navItem",
                              attrs: { col: "1" },
                              on: {
                                tap: function($event) {
                                  return _vm.postTap()
                                }
                              }
                            },
                            [
                              _c("Label", {
                                attrs: {
                                  text: "df",
                                  "android:class": "notificationAndroid",
                                  "ios:class": "notification",
                                  opacity: "0"
                                }
                              }),
                              _c("Label", {
                                staticClass: "font-awesome",
                                attrs: {
                                  text: "",
                                  "android:style":
                                    "font-size:18;margin-top:-15",
                                  "ios:style": "font-size:30;margin-top:-15"
                                }
                              }),
                              _c("Label", {
                                staticStyle: { fontSize: "10" },
                                attrs: { text: "Add Note" }
                              })
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
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
    "Page",
    { attrs: { actionBarHidden: "true" } },
    [
      _c(
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c(
            "StackLayout",
            { staticClass: "form" },
            [
              _c("Image", {
                staticClass: "logo",
                attrs: { src: "~/images/logo.png" }
              }),
              _c(
                "GridLayout",
                { attrs: { rows: "auto, auto, auto, auto, auto, auto" } },
                [
                  _c(
                    "StackLayout",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.isLoggingIn,
                          expression: "!isLoggingIn"
                        }
                      ],
                      staticClass: "input-field",
                      attrs: { row: "0" }
                    },
                    [
                      _c("TextField", {
                        staticClass: "input",
                        attrs: {
                          hint: "Name",
                          isEnabled: !_vm.processing,
                          keyboardType: "text",
                          autocorrect: "false",
                          autocapitalizationType: "none",
                          returnKeyType: "next",
                          text: _vm.user.name
                        },
                        on: {
                          textChange: function($event) {
                            return _vm.$set(_vm.user, "name", $event.value)
                          }
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "1" } },
                    [
                      _c("TextField", {
                        staticClass: "input",
                        attrs: {
                          hint: "Email",
                          isEnabled: !_vm.processing,
                          keyboardType: "email",
                          autocorrect: "false",
                          autocapitalizationType: "none",
                          returnKeyType: "next",
                          text: _vm.user.email
                        },
                        on: {
                          returnPress: _vm.focusPassword,
                          textChange: function($event) {
                            return _vm.$set(_vm.user, "email", $event.value)
                          }
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "2" } },
                    [
                      _c("TextField", {
                        ref: "password",
                        staticClass: "input",
                        attrs: {
                          isEnabled: !_vm.processing,
                          hint: "Password",
                          secure: "true",
                          returnKeyType: _vm.isLoggingIn ? "done" : "next",
                          text: _vm.user.password
                        },
                        on: {
                          returnPress: _vm.focusConfirmPassword,
                          textChange: function($event) {
                            return _vm.$set(_vm.user, "password", $event.value)
                          }
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.isLoggingIn,
                          expression: "!isLoggingIn"
                        }
                      ],
                      staticClass: "input-field",
                      attrs: { row: "3" }
                    },
                    [
                      _c("TextField", {
                        ref: "confirmPassword",
                        staticClass: "input",
                        attrs: {
                          isEnabled: !_vm.processing,
                          hint: "Confirm password",
                          secure: "true",
                          returnKeyType: "done",
                          text: _vm.user.confirmPassword
                        },
                        on: {
                          textChange: function($event) {
                            return _vm.$set(
                              _vm.user,
                              "confirmPassword",
                              $event.value
                            )
                          }
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c("ActivityIndicator", {
                    attrs: { rowSpan: "3", busy: _vm.processing }
                  })
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn btn-dark m-t-20",
                attrs: {
                  text: _vm.isLoggingIn ? "Log In" : "Sign Up",
                  isEnabled: !_vm.processing
                },
                on: { tap: _vm.submit }
              }),
              _c("Label", {
                staticClass: "login-label",
                attrs: {
                  "*v-show": "isLoggingIn",
                  text: "Forgot your password?"
                },
                on: {
                  tap: function($event) {
                    return _vm.forgotPassword()
                  }
                }
              })
            ],
            1
          ),
          _c(
            "Label",
            {
              staticClass: "login-label sign-up-label",
              on: { tap: _vm.toggleForm }
            },
            [
              _c(
                "FormattedString",
                [
                  _c("Span", {
                    attrs: {
                      text: _vm.isLoggingIn
                        ? "Don’t have an account? "
                        : "Back to Login"
                    }
                  }),
                  _c("Span", {
                    staticClass: "bold",
                    attrs: { text: _vm.isLoggingIn ? "Sign up" : "" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "Label",
            {
              staticClass: "login-label sign-up-label",
              on: { tap: _vm.changeAPI }
            },
            [
              _c(
                "FormattedString",
                [
                  _c("Span", [_vm._v("Change the default API server ")]),
                  _c("Span", { staticClass: "bold" }, [_vm._v("Change")])
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Post.vue?vue&type=template&id=9d4a2b0a&scoped=true&":
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
    "Page",
    { staticClass: "page" },
    [
      _c(
        "ActionBar",
        {
          staticClass: "action-bar header",
          staticStyle: { backgroundColor: "black" },
          attrs: { title: "" }
        },
        [
          _c(
            "StackLayout",
            {
              staticClass: "actionBarContainer",
              attrs: {
                orientation: "horizontal",
                height: "38",
                alignItems: "left"
              }
            },
            [
              _c(
                "StackLayout",
                {
                  staticClass: "HLeft",
                  staticStyle: { marginTop: "10" },
                  on: {
                    tap: function($event) {
                      return _vm.toggleDrawer()
                    }
                  }
                },
                [
                  _c("Label", {
                    staticClass: "font-awesome",
                    staticStyle: { fontSize: "27", color: "#fff" },
                    attrs: {
                      text: _vm.drawerToggle ? _vm.drawer2 : _vm.drawer1
                    }
                  })
                ],
                1
              ),
              _c("StackLayout", {
                staticClass: "HMid",
                attrs: { alignItems: "left" }
              }),
              _c("StackLayout", { staticClass: "HRight" })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "RadSideDrawer",
        {
          ref: "drawer",
          on: {
            drawerOpened: function($event) {
              return _vm.onDrawerOpened()
            },
            drawerClosed: function($event) {
              return _vm.onDrawerClosed()
            }
          }
        },
        [
          _c(
            "StackLayout",
            {
              directives: [
                {
                  name: "view",
                  rawName: "v-view:drawerContent",
                  arg: "drawerContent",
                  modifiers: {}
                }
              ],
              attrs: { backgroundColor: "#eee" }
            },
            [
              _c(
                "StackLayout",
                {},
                [
                  _c("Label", {
                    staticClass: "drawerItemText font-awesome",
                    attrs: {
                      text: _vm.name,
                      paddingLeft: "30%",
                      color: "black",
                      margin: "10"
                    }
                  })
                ],
                1
              ),
              _c("StackLayout", { attrs: { height: "80%" } }),
              _c(
                "StackLayout",
                {},
                [
                  _c("Label", {
                    staticClass: "drawerItemText font-awesome",
                    attrs: {
                      text: "  Log out",
                      paddingLeft: "30%",
                      color: "black",
                      margin: "10"
                    },
                    on: { tap: _vm.logout }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "StackLayout",
            {
              directives: [
                {
                  name: "view",
                  rawName: "v-view:mainContent",
                  arg: "mainContent",
                  modifiers: {}
                }
              ]
            },
            [
              _c(
                "DockLayout",
                [
                  _c(
                    "StackLayout",
                    {
                      staticStyle: { padding: "30" },
                      attrs: { dock: "top", height: "90%", width: "100%" }
                    },
                    [
                      _c("TextField", {
                        attrs: { hint: "Write a title", text: _vm.noteTitle },
                        on: {
                          textChange: function($event) {
                            _vm.noteTitle = $event.value
                          }
                        }
                      }),
                      _c("TextField", {
                        staticStyle: { height: "100" },
                        attrs: { hint: "Write a note", text: _vm.noteBody },
                        on: {
                          textChange: function($event) {
                            _vm.noteBody = $event.value
                          }
                        }
                      }),
                      _c("Button", {
                        attrs: { text: "Submit Post" },
                        on: {
                          tap: function($event) {
                            return _vm.submitPost()
                          }
                        }
                      }),
                      _vm.needLocation
                        ? _c("Label", {
                            attrs: { text: "Looking up your location..." }
                          })
                        : _vm._e(),
                      _vm.locationFailure
                        ? _c("Label", {
                            attrs: { text: "Can't find current location" }
                          })
                        : _vm._e(),
                      _vm.location
                        ? _c("Label", {
                            attrs: {
                              text: _vm.locationDescription,
                              textWrap: "true"
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    {
                      staticStyle: {
                        borderColor: "#E4E4E4",
                        borderWidth: "1",
                        background: "#fff"
                      },
                      attrs: { dock: "bottom", height: "10%" }
                    },
                    [
                      _c(
                        "GridLayout",
                        {
                          attrs: { columns: "*, *", verticalAlignment: "top" }
                        },
                        [
                          _c(
                            "StackLayout",
                            {
                              staticClass: "navItem",
                              attrs: { col: "0" },
                              on: {
                                tap: function($event) {
                                  return _vm.homeTap()
                                }
                              }
                            },
                            [
                              _c("Label", {
                                attrs: {
                                  text: "",
                                  "android:class": "notificationAndroid",
                                  "ios:class": "notification",
                                  opacity: "0"
                                }
                              }),
                              _c("Label", {
                                staticClass: "font-awesome",
                                attrs: {
                                  text: "",
                                  "android:style":
                                    "font-size:18;margin-top:-15",
                                  "ios:style": "font-size:30;margin-top:-15"
                                }
                              }),
                              _c("Label", {
                                staticStyle: { fontSize: "10" },
                                attrs: { text: "Home" }
                              })
                            ],
                            1
                          ),
                          _c(
                            "StackLayout",
                            {
                              staticClass: "navItem",
                              attrs: { col: "1" },
                              on: {
                                tap: function($event) {
                                  return _vm.postTap()
                                }
                              }
                            },
                            [
                              _c("Label", {
                                attrs: {
                                  text: "df",
                                  "android:class": "notificationAndroid",
                                  "ios:class": "notification",
                                  opacity: "0"
                                }
                              }),
                              _c("Label", {
                                staticClass: "font-awesome",
                                attrs: {
                                  text: "",
                                  color: _vm.mainColor,
                                  "android:style":
                                    "font-size:18;margin-top:-15",
                                  "ios:style": "font-size:30;margin-top:-15"
                                }
                              }),
                              _c("Label", {
                                staticStyle: { fontSize: "10" },
                                attrs: {
                                  text: "Add Note",
                                  color: _vm.mainColor
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

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./routes/index.js": "./routes/index.js",
	"./services/backend-service.js": "./services/backend-service.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\nThe imported CSS rules must precede all other types of rules.\n"},{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"},{"type":"rule","selectors":["#searchField"],"declarations":[{"type":"declaration","property":"placeholder-color","value":"white"}]},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":[".actionBarContainer"],"declarations":[{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"float","value":"left"}]},{"type":"rule","selectors":[".convFriendName"],"declarations":[{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"font-size","value":"19"}]},{"type":"rule","selectors":[".convDateOut"],"declarations":[{"type":"declaration","property":"font-size","value":"15"},{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".convTextOut"],"declarations":[{"type":"declaration","property":"font-size","value":"15"},{"type":"declaration","property":"margin-top","value":"8"}]},{"type":"rule","selectors":[".notRead"],"declarations":[{"type":"declaration","property":"color","value":"#000"},{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".read"],"declarations":[{"type":"declaration","property":"color","value":"#6C6C6C"}]},{"type":"rule","selectors":[".conImg"],"declarations":[{"type":"declaration","property":"width","value":"60"},{"type":"declaration","property":"height","value":"60"},{"type":"declaration","property":"border-radius","value":"30"}]},{"type":"rule","selectors":[".header"],"declarations":[{"type":"declaration","property":"background","value":"#1aa3ff"}]},{"type":"rule","selectors":[".aboutRow"],"declarations":[{"type":"declaration","property":"margin-top","value":"10"}]},{"type":"rule","selectors":[".postTitle"],"declarations":[{"type":"declaration","property":"font-size","value":"17"},{"type":"declaration","property":"height","value":"20"},{"type":"declaration","property":"color","value":"#000"}]},{"type":"rule","selectors":[".drawerItemText"],"declarations":[{"type":"declaration","property":"font-size","value":"19"},{"type":"declaration","property":"color","value":"#000"},{"type":"declaration","property":"height","value":"22"}]},{"type":"rule","selectors":[".sideDrawerContainer"],"declarations":[{"type":"declaration","property":"background","value":"#fff"}]},{"type":"rule","selectors":[".profilePic"],"declarations":[{"type":"declaration","property":"width","value":"150"},{"type":"declaration","property":"height","value":"150"},{"type":"declaration","property":"border-radius","value":"100"},{"type":"declaration","property":"margin","value":"20"},{"type":"declaration","property":"border-color","value":"#4db8ff"},{"type":"declaration","property":"border-width","value":"1"}]},{"type":"rule","selectors":[".postContainer"],"declarations":[{"type":"declaration","property":"margin-top","value":"10"},{"type":"declaration","property":"background","value":"#fff"}]},{"type":"rule","selectors":[".aboutContainer"],"declarations":[{"type":"declaration","property":"width","value":"85%"},{"type":"declaration","property":"border-radius","value":"15"},{"type":"declaration","property":"background","value":"#eeeeee"},{"type":"declaration","property":"margin-top","value":"20"},{"type":"declaration","property":"padding-top","value":"20"},{"type":"declaration","property":"padding-bottom","value":"20"},{"type":"declaration","property":"padding-left","value":"20"},{"type":"declaration","property":"padding-right","value":"20"}]},{"type":"rule","selectors":[".postDateSmall"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"color","value":"#858585"}]},{"type":"rule","selectors":[".postAuthotName"],"declarations":[{"type":"declaration","property":"font-size","value":"17"},{"type":"declaration","property":"color","value":"#000"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"margin-top","value":"2"}]},{"type":"rule","selectors":[".postImageSmall"],"declarations":[{"type":"declaration","property":"width","value":"40"},{"type":"declaration","property":"height","value":"40"},{"type":"declaration","property":"border-radius","value":"40"},{"type":"declaration","property":"border-width","value":"0.5"},{"type":"declaration","property":"border-color","value":"#c4c4c4"}]},{"type":"rule","selectors":[".listImage"],"declarations":[{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#fff"}]},{"type":"rule","selectors":[".notification"],"declarations":[{"type":"declaration","property":"background","value":"red"},{"type":"declaration","property":"width","value":"25"},{"type":"declaration","property":"height","value":"25"},{"type":"declaration","property":"margin-top","value":"8%"},{"type":"declaration","property":"margin-left","value":"25"},{"type":"declaration","property":"border-radius","value":"30"},{"type":"declaration","property":"z-index","value":"100"},{"type":"declaration","property":"color","value":"#fff"},{"type":"declaration","property":"font-size","value":"13"}]},{"type":"rule","selectors":[".notificationAndroid"],"declarations":[{"type":"declaration","property":"background","value":"red"},{"type":"declaration","property":"width","value":"22"},{"type":"declaration","property":"height","value":"22"},{"type":"declaration","property":"margin-top","value":"12%"},{"type":"declaration","property":"margin-left","value":"25"},{"type":"declaration","property":"border-radius","value":"30"},{"type":"declaration","property":"z-index","value":"100"},{"type":"declaration","property":"color","value":"#fff"},{"type":"declaration","property":"font-size","value":"13"},{"type":"declaration","property":"padding-top","value":"1"}]},{"type":"rule","selectors":[".navItem"],"declarations":[{"type":"declaration","property":"width","value":"24%"},{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".followersTxt"],"declarations":[{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"height","value":"20"}]},{"type":"rule","selectors":[".followersTxtValue"],"declarations":[{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"margin-top","value":"10"},{"type":"declaration","property":"height","value":"25"},{"type":"declaration","property":"font-size","value":"22"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"color","value":"#000"}]},{"type":"rule","selectors":[".followersContainer"],"declarations":[{"type":"declaration","property":"width","value":"90%"}]},{"type":"rule","selectors":[".HLeft"],"declarations":[{"type":"declaration","property":"width","value":"10%"},{"type":"declaration","property":"float","value":"left"},{"type":"declaration","property":"border","value":"1px solid red"},{"type":"declaration","property":"margin-left","value":"5.5%"}]},{"type":"rule","selectors":[".HMid"],"declarations":[{"type":"declaration","property":"width","value":"70%"}]},{"type":"rule","selectors":[".HRight"],"declarations":[{"type":"declaration","property":"width","value":"19%"}]},{"type":"rule","selectors":[".searchField"],"declarations":[{"type":"declaration","property":"border-bottom-width","value":"1"},{"type":"declaration","property":"border-bottom-color","value":"#fff"},{"type":"declaration","property":"height","value":"40"},{"type":"declaration","property":"text-decoration","value":"none"}]},{"type":"rule","selectors":[".font-awesome"],"declarations":[{"type":"declaration","property":"font-family","value":"\"FontAwesome\""}]},{"type":"rule","selectors":[".home-panel"],"declarations":[{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"margin","value":"15"}]},{"type":"rule","selectors":[".description-label"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"15"}]},{"type":"rule","selectors":[".mainTab"],"declarations":[{"type":"declaration","property":"font-size","value":"30"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"height","value":"50"},{"type":"declaration","property":"background-color","value":"#D51A1A"},{"type":"declaration","property":"border-radius","value":"5"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"font-weight","value":"600"}]},{"type":"rule","selectors":[".btn-primary:disabled"],"declarations":[{"type":"declaration","property":"opacity","value":"0.5"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./routes/index.js");
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-listview/vue/index.js");
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_2__);

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        
 //import BackendService from "./services/backend-service";
// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.silent = false; //set to false to see output logs

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement('RadSideDrawer', () => __webpack_require__("../node_modules/nativescript-ui-sidedrawer/ui-sidedrawer.js").RadSideDrawer);

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_2___default.a); // const backendService = new BackendService();
// Vue.prototype.$backendService = backendService;

new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h("frame", [h(_routes__WEBPACK_IMPORTED_MODULE_1__["default"].login)])
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/ForgotPassword.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_241d39f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ForgotPassword.vue?vue&type=template&id=241d39f9&scoped=true&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ForgotPassword_vue_vue_type_style_index_0_id_241d39f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/ForgotPassword.vue?vue&type=style&index=0&id=241d39f9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForgotPassword_vue_vue_type_template_id_241d39f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForgotPassword_vue_vue_type_template_id_241d39f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "241d39f9",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('241d39f9')) {
      api.createRecord('241d39f9', component.options)
    } else {
      api.reload('241d39f9', component.options)
    }
    module.hot.accept("./components/ForgotPassword.vue?vue&type=template&id=241d39f9&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ForgotPassword_vue_vue_type_template_id_241d39f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ForgotPassword.vue?vue&type=template&id=241d39f9&scoped=true&");
(function () {
      api.rerender('241d39f9', {
        render: _ForgotPassword_vue_vue_type_template_id_241d39f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ForgotPassword_vue_vue_type_template_id_241d39f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/ForgotPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/ForgotPassword.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/ForgotPassword.vue?vue&type=style&index=0&id=241d39f9&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_241d39f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/ForgotPassword.vue?vue&type=style&index=0&id=241d39f9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_241d39f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_241d39f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_241d39f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_241d39f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_241d39f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/ForgotPassword.vue?vue&type=template&id=241d39f9&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_241d39f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ForgotPassword.vue?vue&type=template&id=241d39f9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_241d39f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_241d39f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67410f3a",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('67410f3a')) {
      api.createRecord('67410f3a', component.options)
    } else {
      api.reload('67410f3a', component.options)
    }
    module.hot.accept("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
(function () {
      api.rerender('67410f3a', {
        render: _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c27482c4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c27482c4')) {
      api.createRecord('c27482c4', component.options)
    } else {
      api.reload('c27482c4', component.options)
    }
    module.hot.accept("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
(function () {
      api.rerender('c27482c4', {
        render: _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Post.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Post_vue_vue_type_template_id_9d4a2b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Post.vue?vue&type=template&id=9d4a2b0a&scoped=true&");
/* harmony import */ var _Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Post.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Post_vue_vue_type_template_id_9d4a2b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Post_vue_vue_type_template_id_9d4a2b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9d4a2b0a",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('9d4a2b0a')) {
      api.createRecord('9d4a2b0a', component.options)
    } else {
      api.reload('9d4a2b0a', component.options)
    }
    module.hot.accept("./components/Post.vue?vue&type=template&id=9d4a2b0a&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Post_vue_vue_type_template_id_9d4a2b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Post.vue?vue&type=template&id=9d4a2b0a&scoped=true&");
(function () {
      api.rerender('9d4a2b0a', {
        render: _Post_vue_vue_type_template_id_9d4a2b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Post_vue_vue_type_template_id_9d4a2b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Post.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Post.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Post.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Post.vue?vue&type=template&id=9d4a2b0a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_9d4a2b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Post.vue?vue&type=template&id=9d4a2b0a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_9d4a2b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_9d4a2b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"android\":{\"v8Flags\":\"--expose_gc\",\"forceLog\":true,\"markingMode\":\"none\"},\"main\":\"app.js\",\"name\":\"tns-template-vue\",\"version\":\"3.2.0\"}");

/***/ }),

/***/ "./routes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");


var routes = {
  login: _components_Login__WEBPACK_IMPORTED_MODULE_0__["default"],
  home: _components_Home__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./services/backend-service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackendService; });
/* harmony import */ var kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/kinvey-nativescript-sdk/lib/nativescript/index.js");
/* harmony import */ var kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__);
// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["init"]({
  appKey: "kid_SyY8LYO8M",
  appSecret: "09282985d7c540f7b076a9c7fd884c77"
});
class BackendService {
  isLoggedIn() {
    return !!kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].getActiveUser();
  }

  login(user) {
    return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].login(user.email, user.password);
  }

  logout() {
    return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].logout();
  }

  register(user) {
    return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].signup({
      username: user.email,
      password: user.password
    });
  }

}

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTG9naW4udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1Bvc3QudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmQudnVlP2M4NmIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/MDE0NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkLnZ1ZT8wMWU5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/NDk5ZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT8zY2U4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdC52dWU/MTM0ZiIsIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZC52dWU/ODQzMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkLnZ1ZT80ZWJlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmQudnVlPzMxZTgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzU2MjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT8yYzM1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlP2U2MDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/MjEyNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT9mYjRmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0LnZ1ZT84OGM4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdC52dWU/MzlhZCIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYmFja2VuZC1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsIlZ1ZSIsImNvbmZpZyIsInJlZ2lzdGVyRWxlbWVudCIsIlJhZExpc3RWaWV3IiwidXNlIiwicmVuZGVyIiwiaCIsImxvZ2luIiwiJHN0YXJ0IiwiTG9naW4iLCJob21lIiwiSG9tZSIsIktpbnZleSIsImFwcEtleSIsImFwcFNlY3JldCIsIkJhY2tlbmRTZXJ2aWNlIiwiaXNMb2dnZWRJbiIsImdldEFjdGl2ZVVzZXIiLCJ1c2VyIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ291dCIsInJlZ2lzdGVyIiwic2lnbnVwIiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWdDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQSw2RCxDQUFBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEsdUJBRkE7QUFHQTtBQUNBO0FBREEsT0FIQTtBQU1BO0FBTkE7QUFRQSxHQVZBOztBQVdBLGFBQ0EsQ0FaQTs7QUFhQTtBQUVBO0FBQ0E7QUFDQSxLQUZBLEVBRUEsSUFGQTtBQUlBLEdBbkJBOztBQW9CQTtBQUNBLGVBQ0EsQ0FGQTs7QUFLQTtBQUNBO0FBRUE7QUFDQSwyQ0FEQTtBQUNBO0FBQ0Esc0JBRkE7QUFH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QUUsNkRBQTZELEVBQUUsK0RBQStELEVBQUUsMERBQTBELEVBQUUsMkRBQTJELEVBQUUsOERBQThELEVBQUUsNERBQTRELEVBQUUsNkRBQTZELEVBQUUsRUFBRSw4REFBOEQseURBQXlELEVBQUUsMkRBQTJELEVBQUUsMERBQTBELEVBQUUsRUFBRSwrREFBK0QseURBQXlELEVBQUUsdURBQXVELEVBQUUsMkRBQTJELEVBQUUseURBQXlELEVBQUUsRUFBRSwrREFBK0QscURBQXFELEVBQUUsc0RBQXNELEVBQUUsNkRBQTZELEVBQUUsNkRBQTZELEVBQUUsaUVBQWlFLEVBQUUsRUFBRSwwREFBMEQsMkRBQTJELEVBQUUsOERBQThELEVBQUUsRUFBRSw2REFBNkQsMkRBQTJELEVBQUUscURBQXFELEVBQUUsc0RBQXNELEVBQUUsMERBQTBELEVBQUUsMkRBQTJELEVBQUUsNkRBQTZELEVBQUUsd0RBQXdELEVBQUUsdURBQXVELEVBQUUseURBQXlELEVBQUUsRUFBRSxvRUFBb0UsMkRBQTJELEVBQUUscURBQXFELEVBQUUsc0RBQXNELEVBQUUsMkRBQTJELEVBQUUsMkRBQTJELEVBQUUsNkRBQTZELEVBQUUsd0RBQXdELEVBQUUsdURBQXVELEVBQUUseURBQXlELEVBQUUsMERBQTBELEVBQUUsRUFBRSx3REFBd0Qsc0RBQXNELEVBQUUsOERBQThELEVBQUUsRUFBRSw2REFBNkQsOERBQThELEVBQUUseURBQXlELEVBQUUsc0RBQXNELEVBQUUsRUFBRSxrRUFBa0UsOERBQThELEVBQUUsMERBQTBELEVBQUUsc0RBQXNELEVBQUUseURBQXlELEVBQUUsNkRBQTZELEVBQUUsdURBQXVELEVBQUUsRUFBRSxtRUFBbUUsc0RBQXNELEVBQUUsRUFBRSxzREFBc0Qsc0RBQXNELEVBQUUsdURBQXVELEVBQUUsaUVBQWlFLEVBQUUsNkRBQTZELEVBQUUsRUFBRSxxREFBcUQsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQsc0RBQXNELEVBQUUsRUFBRSw0REFBNEQsa0VBQWtFLEVBQUUscUVBQXFFLEVBQUUsc0RBQXNELEVBQUUsaUVBQWlFLEVBQUUsRUFBRSw2REFBNkQsd0VBQXdFLEVBQUUsRUFBRSwyREFBMkQsa0VBQWtFLEVBQUUseURBQXlELEVBQUUsc0RBQXNELEVBQUUsRUFBRSxrRUFBa0UsNkRBQTZELEVBQUUsRUFBRSx3REFBd0QseURBQXlELEVBQUUsRUFBRSw0REFBNEQsc0RBQXNELEVBQUUscUVBQXFFLEVBQUUsNERBQTRELEVBQUUseURBQXlELEVBQUUsNERBQTRELEVBQUUsRUFBRSxxRUFBcUUsd0RBQXdELEVBQUU7QUFDaCtTLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLG1DQUFtQztBQUNsRSxTQUFTO0FBQ1Q7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE9BQU9BLE1BQVAsTUFBbUIsVUFBbkIsQyxDQUNBO0FBRUE7QUFDQTs7QUFHQUMsR0FBRyxDQUFDQyxLQUFzQjs7QUFDMUJELEdBQUcsQ0FBQ0UsSUFBSjtBQUNBLE9BQU9DLHdCQUFQO0FBQ0FILEdBQUcsQ0FBQ0ksR0FBSixDQUFRRCxJQUVSO0FBQ0E7O0FBRUEsSUFBSUgsR0FBSixDQUFRO0FBQ05LLFFBQU0sRUFBRUMsQ0FBQyxJQUFJQSxDQUFDLENBQUMsT0FBRCxFQUFVLENBQUNBLENBQUMsQ0FBQ1AsTUFBTSxDQUFDUSxLQUFSLENBQUYsQ0FBVjtBQURSLENBQVIsRUFFR0MsTUFGSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUc7QUFDdkM7QUFDTDtBQUNxQzs7O0FBR2xHO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQStFO0FBQ25HLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLDRFQUFpRSxFQUFFO0FBQUE7QUFDekY7QUFDQSxnQkFBZ0IscUdBQU07QUFDdEIseUJBQXlCLDhHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBOEssQ0FBZ0Isa1BBQUcsRUFBQyxDOzs7Ozs7OztBQ0FsTTtBQUFBO0FBQUE7QUFBQTtBQUErWSxDQUFnQiw4YkFBRyxFQUFDLEM7Ozs7Ozs7O0FDQW5hO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRjtBQUN2QztBQUNMOzs7QUFHbkQ7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxvR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBK0U7QUFDbkcsY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0Isa0VBQXVELEVBQUU7QUFBQTtBQUMvRTtBQUNBLGdCQUFnQiwyRkFBTTtBQUN0Qix5QkFBeUIsb0dBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFvSyxDQUFnQix3T0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQXhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3FDOzs7QUFHekY7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBK0U7QUFDbkcsY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsbUVBQXdELEVBQUU7QUFBQTtBQUNoRjtBQUNBLGdCQUFnQiw0RkFBTTtBQUN0Qix5QkFBeUIscUdBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFxSyxDQUFnQix5T0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQXpMO0FBQUE7QUFBQTtBQUFBO0FBQXNZLENBQWdCLHFiQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBMVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUErRjtBQUN2QztBQUNMOzs7QUFHbkQ7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxvR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBK0U7QUFDbkcsY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0Isa0VBQXVELEVBQUU7QUFBQTtBQUMvRTtBQUNBLGdCQUFnQiwyRkFBTTtBQUN0Qix5QkFBeUIsb0dBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFvSyxDQUFnQix3T0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQXhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNVCxNQUFNLEdBQUc7QUFDWFEsT0FBSyxFQUFFRSx5REFESTtBQUVYQyxNQUFJLEVBQUVDLHdEQUFJQTtBQUZDLENBQWY7QUFJZVoscUVBQWYsRTs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBYSw0REFBQSxDQUFZO0FBQ1JDLFFBQU0sRUFBRSxlQURBO0FBRVJDLFdBQVMsRUFBRTtBQUZILENBQVo7QUFLZSxNQUFNQyxjQUFOLENBQXFCO0FBRWhDQyxZQUFVLEdBQUc7QUFDVCxXQUFPLENBQUMsQ0FBQ0osNERBQUEsQ0FBWUssYUFBWixFQUFUO0FBQ0g7O0FBRURWLE9BQUssQ0FBQ1csSUFBRCxFQUFPO0FBQ1IsV0FBT04sNERBQUEsQ0FBWUwsS0FBWixDQUFrQlcsSUFBSSxDQUFDQyxLQUF2QixFQUE4QkQsSUFBSSxDQUFDRSxRQUFuQyxDQUFQO0FBQ0g7O0FBRURDLFFBQU0sR0FBRztBQUNMLFdBQU9ULDREQUFBLENBQVlTLE1BQVosRUFBUDtBQUNIOztBQUVEQyxVQUFRLENBQUNKLElBQUQsRUFBTztBQUNYLFdBQU9OLDREQUFBLENBQVlXLE1BQVosQ0FBbUI7QUFBRUMsY0FBUSxFQUFFTixJQUFJLENBQUNDLEtBQWpCO0FBQXdCQyxjQUFRLEVBQUVGLElBQUksQ0FBQ0U7QUFBdkMsS0FBbkIsQ0FBUDtBQUNIOztBQWhCK0IsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIiA+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzPVwibG9nb1wiIHNyYz1cIn4vaW1hZ2VzL2xvZ28ucG5nXCI+PC9JbWFnZT5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjFcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiRW1haWxcIiA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cImVtYWlsXCIgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIiB2LW1vZGVsPVwidXNlci5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIiBAcmV0dXJuUHJlc3M9XCJmb2N1c1Bhc3N3b3JkXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XCIzXCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJSZXNldFwiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJyZXNldFwiIGNsYXNzPVwiYnRuIGJ0bi1kYXJrIG0tdC0yMFwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxMYWJlbCAqdi1zaG93PVwiaXNMb2dnaW5nSW5cIiB0ZXh0PVwiR28gQmFjayB0byBMb2dpblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4tbGFiZWxcIiBAdGFwPVwiYmFja1RvTG9naW4oKVwiPjwvTGFiZWw+XG5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XG4gICAgLy9pbXBvcnQgKiBhcyBodHRwIGZyb20gXCJodHRwXCI7XG5cbiAgICBjb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZShcImh0dHBcIik7XG4gICAgY29uc3QgZGlhbG9ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG4gICAgY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuICAgIGFwcFNldHRpbmdzLnNldFN0cmluZygnYXBwVVJMJyxcImh0dHA6Ly8xOTIuMTY4LjAuMTEyOjgwMDBcIik7IC8vaHR0cHM6Ly9Mb05vdGUudHNlcnRlYy5pbyAsIGh0dHA6Ly8xOTIuMTY4LjAuODM6ODAwMFxuXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBUb2tlbjpcIlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3RhcnQoKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uU3RhcnQoKXtcbiAgICAgICAgICAgIH0sXG5cblxuICAgICAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcHBVUkwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ2FwcFVSTCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGh0dHBNb2R1bGUucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGFwcFVSTCsnL2FwaS9yZXNldC1wYXNzd29yZCcsLy9cImh0dHA6Ly8xOTIuMTY4LjAuODM6ODAwMC9hcGkvbG9naW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDIwMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9nb29kIGxvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ3BsZWFzZSBjaGVjayB5b3VyIGVtYWlsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnRW1haWwgZG9lcyBub3QgZXhpc3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYWNrVG9Mb2dpbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luKTtcbiAgICAgICAgICAgIH0sXG5cblxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIC5wYWdlIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuZm9ybSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMDtcbiAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTI7XG4gICAgICAgIGhlaWdodDogOTA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDcwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjRDUxQTFBO1xuICAgIH1cblxuICAgIC5pbnB1dC1maWVsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1O1xuICAgIH1cblxuICAgIC5pbnB1dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTg7XG4gICAgICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjQThBOEE4O1xuICAgIH1cblxuICAgIC5pbnB1dDpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuXG4gICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgbWFyZ2luOiAzMCA1IDE1IDU7XG4gICAgfVxuXG4gICAgLmxvZ2luLWxhYmVsIHtcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI0E4QThBODtcbiAgICAgICAgZm9udC1zaXplOiAxNjtcbiAgICB9XG5cbiAgICAuc2lnbi11cC1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwO1xuICAgIH1cblxuICAgIC5ib2xkIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cblxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiXCIgY2xhc3M9XCJhY3Rpb24tYmFyIGhlYWRlclwiICBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjpibGFjazsnPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIGhlaWdodD1cIjM4XCIgYWxpZ25JdGVtcz1cImxlZnRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYWN0aW9uQmFyQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiSExlZnRcIiBzdHlsZT1cIm1hcmdpbi10b3A6MTA7XCIgQHRhcD1cInRvZ2dsZURyYXdlcigpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImRyYXdlclRvZ2dsZSA/IGRyYXdlcjI6IGRyYXdlcjFcIiBzdHlsZT1cImZvbnQtc2l6ZToyNztjb2xvcjojZmZmO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQtYXdlc29tZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIkhNaWRcIiBhbGlnbkl0ZW1zPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJIUmlnaHRcIj5cblxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L0FjdGlvbkJhcj5cblxuICAgICAgICA8UmFkU2lkZURyYXdlciByZWY9XCJkcmF3ZXJcIiBAZHJhd2VyT3BlbmVkPVwib25EcmF3ZXJPcGVuZWQoKVwiXG4gICAgICAgICAgICBAZHJhd2VyQ2xvc2VkPVwib25EcmF3ZXJDbG9zZWQoKVwiPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IH5kcmF3ZXJDb250ZW50IGJhY2tncm91bmRDb2xvcj1cIiNlZWVcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibmFtZVwiIHBhZGRpbmdMZWZ0PVwiMzAlXCIgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRyYXdlckl0ZW1UZXh0IGZvbnQtYXdlc29tZVwiIG1hcmdpbj1cIjEwXCIvPlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGhlaWdodD1cIjgwJVwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwi74KLICBMb2cgb3V0XCIgcGFkZGluZ0xlZnQ9XCIzMCVcIiBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJhd2VySXRlbVRleHQgZm9udC1hd2Vzb21lXCIgbWFyZ2luPVwiMTBcIiBAdGFwPVwibG9nb3V0XCIvPlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgfm1haW5Db250ZW50PlxuXG4gICAgICAgICAgICAgICAgPERvY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGRvY2s9XCJ0b3BcIiBoZWlnaHQ9XCI5MCVcIiB3aWR0aD1cIjEwMCVcIiBzdHlsZT1cIlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkTGlzdFZpZXcgcmVmPVwibGlzdFZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cIm5vdGUgaW4gbm90ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1bGxUb1JlZnJlc2g9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIiBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjRThFOEU4XCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsaXN0Vmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHB1bGxUb1JlZnJlc2hJbml0aWF0ZWQ9XCJvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBwYWRkaW5nVG9wPVwiNVwiIGJhY2tncm91bmRDb2xvcj1cIiNFOEU4RThcIiBAdGFwPVwic2VsZWN0Tm90ZShpdGVtLmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibm90ZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPVwiMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibm90ZS50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwb3N0QXV0aG90TmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCIoK25vdGUuZGlzdGFuY2UgKiAxMDApLnRvRml4ZWQoMykgKycgbWV0ZXJzIGF3YXknXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInBvc3REYXRlU21hbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRMaXN0Vmlldz5cblxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGRvY2s9XCJib3R0b21cIiBoZWlnaHQ9XCIxMCVcIiBzdHlsZT1cImJvcmRlci1jb2xvcjojRTRFNEU0O2JvcmRlci13aWR0aDoxO2JhY2tncm91bmQ6I2ZmZjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIiosICpcIiB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIwXCIgY2xhc3M9XCJuYXZJdGVtXCIgQHRhcD1cImhvbWVUYXAoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlwiIGFuZHJvaWQ6Y2xhc3M9XCJub3RpZmljYXRpb25BbmRyb2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvczpjbGFzcz1cIm5vdGlmaWNhdGlvblwiIG9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCLvh6pcIiA6Y29sb3I9XCJtYWluQ29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kcm9pZDpzdHlsZT1cImZvbnQtc2l6ZToxODttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb3M6c3R5bGU9XCJmb250LXNpemU6MzA7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb250LWF3ZXNvbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkhvbWVcIiBzdHlsZT1cImZvbnQtc2l6ZToxMDtcIiA6Y29sb3I9XCJtYWluQ29sb3JcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjFcIiBjbGFzcz1cIm5hdkl0ZW1cIiBAdGFwPVwicG9zdFRhcCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiZGZcIiBhbmRyb2lkOmNsYXNzPVwibm90aWZpY2F0aW9uQW5kcm9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb3M6Y2xhc3M9XCJub3RpZmljYXRpb25cIiBvcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwi74GEXCIgYW5kcm9pZDpzdHlsZT1cImZvbnQtc2l6ZToxODttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb3M6c3R5bGU9XCJmb250LXNpemU6MzA7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb250LWF3ZXNvbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkFkZCBOb3RlXCIgc3R5bGU9XCJmb250LXNpemU6MTA7XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICA8L0RvY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvUmFkU2lkZURyYXdlcj5cblxuICAgIDwvcGFnZT5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xuICAgIGltcG9ydCBQb3N0IGZyb20gXCIuL1Bvc3RcIjtcblxuICAgIGNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKFwiaHR0cFwiKTtcbiAgICBjb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuICAgIGltcG9ydCAqIGFzIEdlb2xvY2F0aW9uIGZyb20gJ25hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvbic7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBsb2NhdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE5vdGVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICBHZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QodHJ1ZSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBHZW9sb2NhdGlvbi5pc0VuYWJsZWQoKS50aGVuKGlzTG9jYXRpb25FbmFibGVkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdCBpcyAnK2lzTG9jYXRpb25FbmFibGVkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWlzTG9jYXRpb25FbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lZWRMb2NhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbkZhaWx1cmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG90ZW50aWFsbHkgZG8gbW9yZSB0aGVuIGp1c3QgZW5kIGhlcmUuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE1VU1QgcGFzcyBlbXB0eSBvYmplY3QhIVxuICAgICAgICAgICAgICAgICAgICBHZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oe30pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jIHJlc3VsdCcsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lZWRMb2NhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IHJlc3VsdDtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25TdGFydCgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmVlZExvY2F0aW9uOnRydWUsXG4gICAgICAgICAgICAgICAgbG9jYXRpb25GYWlsdXJlOmZhbHNlLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOm51bGwsXG4gICAgICAgICAgICAgICAgZHJhd2VyVG9nZ2xlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkcmF3ZXIxOiBcIu+FglwiLFxuICAgICAgICAgICAgICAgIGRyYXdlcjI6IFwi74WBXCIsXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBcIiMxYWEzZmZcIixcbiAgICAgICAgICAgICAgICBBUElVUkw6IFwiXCIsXG4gICAgICAgICAgICAgICAgbmFtZTpcIlwiLFxuICAgICAgICAgICAgICAgIG5vdGVzOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uU3RhcnQoKXtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ25hbWUnLCcnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3ROb3RlKGlkKXtcbiAgICAgICAgICAgICAgICBhbGVydChpZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0Tm90ZXMoKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0dGluZyBub3RlcycpO1xuICAgICAgICAgICAgICAgIHZhciB1c2VyVG9rZW4gPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ3VzZXJUb2tlbicsMCk7XG4gICAgICAgICAgICAgICAgdmFyIGFwcFVSTCA9IGFwcFNldHRpbmdzLmdldFN0cmluZygnYXBwVVJMJywwKTtcbiAgICAgICAgICAgICAgICB0aGlzLkFQSVVSTCA9IGFwcFVSTDtcblxuICAgICAgICAgICAgICAgIGh0dHBNb2R1bGUucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYXBwVVJMKycvYXBpL25vdGVzP2xhdD0nK3RoaXMubG9jYXRpb24ubGF0aXR1ZGUrJyZsbmc9Jyt0aGlzLmxvY2F0aW9uLmxvbmdpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdldFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiK3VzZXJUb2tlblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPXJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90ZXMgPSByZXN1bHQubm90ZXM7XG5cbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkKHsgb2JqZWN0IH0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXROb3RlcygpO1xuXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkRyYXdlckNsb3NlZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdlclRvZ2dsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRHJhd2VyT3BlbmVkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2VyVG9nZ2xlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVEcmF3ZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5kcmF3ZXIubmF0aXZlVmlldy50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhvbWVUYXAoKSB7fSxcbiAgICAgICAgICAgIHByb2ZpbGVUYXAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhQcm9maWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcG9zdFRhcCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFBvc3QsIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb252ZXJzYXRpb25zVGFwKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oQ29udnMsIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2dvdXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWFyY2hTdWJtaXRlZCgpe1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhTZWFyY2gsIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6J2ZhZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZTogdGhpcy5zZWFyY2hWYWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sXG5cblxuXG4gICAgICAgICAgICBub3RpZmljYXRpb25zVGFwKCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHVzZXJUb2tlbiA9IGFwcFNldHRpbmdzLnJlbW92ZSgndXNlclRva2VuJyk7XG4gICAgICAgICAgICAgICAgdmFyIGFwcFVSTCA9IGFwcFNldHRpbmdzLnJlbW92ZSgnYXBwVVJMJyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhOb3RpZmljYXRpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0RldGFpbHMoKSB7fVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiID5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3M9XCJsb2dvXCIgc3JjPVwifi9pbWFnZXMvbG9nby5wbmdcIj48L0ltYWdlPlxuXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cImF1dG8sIGF1dG8sIGF1dG8sIGF1dG8sIGF1dG8sIGF1dG9cIj5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMFwiIHYtc2hvdz1cIiFpc0xvZ2dpbmdJblwiICBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiTmFtZVwiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwidGV4dFwiIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgdi1tb2RlbD1cInVzZXIubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMVwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJFbWFpbFwiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwiZW1haWxcIiBhdXRvY29ycmVjdD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiIEByZXR1cm5QcmVzcz1cImZvY3VzUGFzc3dvcmRcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMlwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIHJlZj1cInBhc3N3b3JkXCIgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiUGFzc3dvcmRcIiBzZWN1cmU9XCJ0cnVlXCIgdi1tb2RlbD1cInVzZXIucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZXR1cm5LZXlUeXBlPVwiaXNMb2dnaW5nSW4gPyAnZG9uZScgOiAnbmV4dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZXR1cm5QcmVzcz1cImZvY3VzQ29uZmlybVBhc3N3b3JkXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjNcIiB2LXNob3c9XCIhaXNMb2dnaW5nSW5cIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiByZWY9XCJjb25maXJtUGFzc3dvcmRcIiA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJDb25maXJtIHBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiIHYtbW9kZWw9XCJ1c2VyLmNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cImRvbmVcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igcm93U3Bhbj1cIjNcIiA6YnVzeT1cInByb2Nlc3NpbmdcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnTG9nIEluJyA6ICdTaWduIFVwJ1wiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tZGFyayBtLXQtMjBcIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgKnYtc2hvdz1cImlzTG9nZ2luZ0luXCIgdGV4dD1cIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4tbGFiZWxcIiBAdGFwPVwiZm9yZ290UGFzc3dvcmQoKVwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIgQHRhcD1cInRvZ2dsZUZvcm1cIj5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ0RvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyAnIDogJ0JhY2sgdG8gTG9naW4nXCI+PC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJydcIiBjbGFzcz1cImJvbGRcIj48L1NwYW4+XG4gICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICA8L0xhYmVsPlxuXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIgQHRhcD1cImNoYW5nZUFQSVwiPlxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFuPkNoYW5nZSB0aGUgZGVmYXVsdCBBUEkgc2VydmVyIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJib2xkXCI+Q2hhbmdlPC9TcGFuPlxuICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuICAgIGltcG9ydCBGb3Jnb3RQYXNzd29yZCBmcm9tIFwiLi9Gb3Jnb3RQYXNzd29yZFwiO1xuICAgIC8vaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xuXG4gICAgY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoXCJodHRwXCIpO1xuICAgIGNvbnN0IGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xuICAgIGNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbiAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ2FwcFVSTCcsXCJodHRwOi8vMTkyLjE2OC4wLjExMjo4MDAwXCIpOyAvL2h0dHBzOi8vTG9Ob3RlLnRzZXJ0ZWMuaW8gLCBodHRwOi8vMTkyLjE2OC4wLjgzOjgwMDBcblxuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmb3Jnb3RFbWFpbDogXCJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFRva2VuOlwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3RhcnQoKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uU3RhcnQoKXtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNoYW5nZUFQSSgpe1xuXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIkFQSSBzZXJ2ZXIgVVJMXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6XCJwbGVhc2UgcHJvdmlkZSB0aGUgdXJsIHRvIHRoZSBhcGkgc2VydmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRUZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ2FwcFVSTCcsZGF0YS50ZXh0KTtmb3Jnb3RQYXNzd29yZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZUZvcm0oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc3VibWl0KCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5cIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGxvZ2luKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXBwVVJMID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCdhcHBVUkwnKTtcblxuICAgICAgICAgICAgICAgICAgICBodHRwTW9kdWxlLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBhcHBVUkwrJy9hcGkvbG9naW4nLC8vXCJodHRwOi8vMTkyLjE2OC4wLjgzOjgwMDAvYXBpL2xvZ2luXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDIwMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9nb29kIGxvZ2luXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZygndXNlclRva2VuJyxyZXN1bHQuc3VjY2Vzcy50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCduYW1lJyxyZXN1bHQuc3VjY2Vzcy5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gNDAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZhaWxlZCBsb2duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RoZSBsb2dpbiBkZXRhaWxzIHlvdSBoYXZlIHByb3ZpZGVkIGFyZSBub3QgY29ycmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1VuZXhwZWN0ZWQgZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIucGFzc3dvcmQgIT0gdGhpcy51c2VyLmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy51c2VyLnBhc3N3b3JkLmxlbmd0aCA8PTcgKXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZb3VyIHBhc3N3b3JkIG11c3QgYmUgYXRsZWFzZSA4IGNoYXJhY3RlcnNcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoIXRoaXMudXNlci5uYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2FsbCBmaWVsZHMgYXJlIHJlcXVpcmVkLicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBhcHBVUkwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ2FwcFVSTCcpO1xuXG4gICAgICAgICAgICAgICAgaHR0cE1vZHVsZS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBhcHBVUkwrJy9hcGkvcmVnaXN0ZXInLC8vXCJodHRwOi8vMTkyLjE2OC4wLjgzOjgwMDAvYXBpL2xvZ2luXCIsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMudXNlci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMudXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjX3Bhc3N3b3JkOiB0aGlzLnVzZXIuY29uZmlybVBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuY29udGVudC50b0pTT04oKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMjAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZ29vZCBsb2dpblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnUGxlYXNlIHZlcmlmeSB5b3VyIGVtYWlsIHRvIGxvZ2luJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXNwb25zZS5zdGF0dXNDb2RlID09PSA0MjIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9mYWlsZWQgbG9nblxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RoZSBmb2xsb3dpbmcgZXJyb3IgaGFwcGVuZWQgVXNlcm5hbWUgb3IgZW1haWwgYWxyZWFkeSB0YWtlbiBvciBwYXNzd29yZCBsZW5ndGggaXMgdG8gc2hvcnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnVW5leHBlY3RlZCBlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuY29uZmlybVBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhGb3Jnb3RQYXNzd29yZCk7XG4gICAgICAgICAgICB9LFxuXG5cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAucGFnZSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmZvcm0ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzA7XG4gICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEyO1xuICAgICAgICBoZWlnaHQ6IDkwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDI1O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA3MDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI0Q1MUExQTtcbiAgICB9XG5cbiAgICAuaW5wdXQtZmllbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNTtcbiAgICB9XG5cbiAgICAuaW5wdXQge1xuICAgICAgICBmb250LXNpemU6IDE4O1xuICAgICAgICBwbGFjZWhvbGRlci1jb2xvcjogI0E4QThBODtcbiAgICB9XG5cbiAgICAuaW5wdXQ6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cblxuICAgIC5idG4tcHJpbWFyeSB7XG4gICAgICAgIG1hcmdpbjogMzAgNSAxNSA1O1xuICAgIH1cblxuICAgIC5sb2dpbi1sYWJlbCB7XG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNBOEE4QTg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTY7XG4gICAgfVxuXG4gICAgLnNpZ24tdXAtbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDtcbiAgICB9XG5cbiAgICAuYm9sZCB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgY2xhc3M9XCJwYWdlXCI+XG5cblxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiXCIgY2xhc3M9XCJhY3Rpb24tYmFyIGhlYWRlclwiICBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjpibGFjazsnPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIGhlaWdodD1cIjM4XCIgYWxpZ25JdGVtcz1cImxlZnRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYWN0aW9uQmFyQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiSExlZnRcIiBzdHlsZT1cIm1hcmdpbi10b3A6MTA7XCIgQHRhcD1cInRvZ2dsZURyYXdlcigpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImRyYXdlclRvZ2dsZSA/IGRyYXdlcjI6IGRyYXdlcjFcIiBzdHlsZT1cImZvbnQtc2l6ZToyNztjb2xvcjojZmZmO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQtYXdlc29tZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIkhNaWRcIiBhbGlnbkl0ZW1zPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJIUmlnaHRcIj5cblxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L0FjdGlvbkJhcj5cblxuICAgICAgICA8UmFkU2lkZURyYXdlciByZWY9XCJkcmF3ZXJcIiBAZHJhd2VyT3BlbmVkPVwib25EcmF3ZXJPcGVuZWQoKVwiXG4gICAgICAgICAgICBAZHJhd2VyQ2xvc2VkPVwib25EcmF3ZXJDbG9zZWQoKVwiPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IH5kcmF3ZXJDb250ZW50IGJhY2tncm91bmRDb2xvcj1cIiNlZWVcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibmFtZVwiIHBhZGRpbmdMZWZ0PVwiMzAlXCIgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRyYXdlckl0ZW1UZXh0IGZvbnQtYXdlc29tZVwiIG1hcmdpbj1cIjEwXCIvPlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGhlaWdodD1cIjgwJVwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwi74KLICBMb2cgb3V0XCIgcGFkZGluZ0xlZnQ9XCIzMCVcIiBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJhd2VySXRlbVRleHQgZm9udC1hd2Vzb21lXCIgbWFyZ2luPVwiMTBcIiBAdGFwPVwibG9nb3V0XCIvPlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgfm1haW5Db250ZW50PlxuXG4gICAgICAgICAgICAgICAgPERvY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGRvY2s9XCJ0b3BcIiBoZWlnaHQ9XCI5MCVcIiB3aWR0aD1cIjEwMCVcIiBzdHlsZT1cInBhZGRpbmc6MzA7XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdi1tb2RlbD1cIm5vdGVUaXRsZVwiIGhpbnQ9XCJXcml0ZSBhIHRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdi1tb2RlbD1cIm5vdGVCb2R5XCIgaGludD1cIldyaXRlIGEgbm90ZVwiIHN0eWxlPVwiaGVpZ2h0OjEwMDtcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTdWJtaXQgUG9zdFwiIEB0YXA9XCJzdWJtaXRQb3N0KClcIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHYtaWY9XCJuZWVkTG9jYXRpb25cIiB0ZXh0PVwiTG9va2luZyB1cCB5b3VyIGxvY2F0aW9uLi4uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB2LWlmPVwibG9jYXRpb25GYWlsdXJlXCIgdGV4dD1cIkNhbid0IGZpbmQgY3VycmVudCBsb2NhdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdi1pZj1cImxvY2F0aW9uXCIgOnRleHQ9XCJsb2NhdGlvbkRlc2NyaXB0aW9uXCIgdGV4dFdyYXA9XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGRvY2s9XCJib3R0b21cIiBoZWlnaHQ9XCIxMCVcIiBzdHlsZT1cImJvcmRlci1jb2xvcjojRTRFNEU0O2JvcmRlci13aWR0aDoxO2JhY2tncm91bmQ6I2ZmZjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIiosICpcIiB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIwXCIgY2xhc3M9XCJuYXZJdGVtXCIgQHRhcD1cImhvbWVUYXAoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlwiIGFuZHJvaWQ6Y2xhc3M9XCJub3RpZmljYXRpb25BbmRyb2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvczpjbGFzcz1cIm5vdGlmaWNhdGlvblwiIG9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCLvh6pcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kcm9pZDpzdHlsZT1cImZvbnQtc2l6ZToxODttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb3M6c3R5bGU9XCJmb250LXNpemU6MzA7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb250LWF3ZXNvbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkhvbWVcIiBzdHlsZT1cImZvbnQtc2l6ZToxMDtcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVwiMVwiIGNsYXNzPVwibmF2SXRlbVwiIEB0YXA9XCJwb3N0VGFwKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJkZlwiIGFuZHJvaWQ6Y2xhc3M9XCJub3RpZmljYXRpb25BbmRyb2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvczpjbGFzcz1cIm5vdGlmaWNhdGlvblwiIG9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCLvgYRcIiA6Y29sb3I9XCJtYWluQ29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kcm9pZDpzdHlsZT1cImZvbnQtc2l6ZToxODttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb3M6c3R5bGU9XCJmb250LXNpemU6MzA7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb250LWF3ZXNvbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkFkZCBOb3RlXCIgc3R5bGU9XCJmb250LXNpemU6MTA7XCIgOmNvbG9yPVwibWFpbkNvbG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICA8L0RvY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvUmFkU2lkZURyYXdlcj5cblxuICAgIDwvcGFnZT5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcbiAgICBpbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcbiAgICBpbXBvcnQgUG9zdCBmcm9tIFwiLi9Qb3N0XCI7XG4gICAgaW1wb3J0ICogYXMgR2VvbG9jYXRpb24gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcblxuICAgIGNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKFwiaHR0cFwiKTtcbiAgICBjb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICB3YXRjaDoge30sXG5cbiAgICAgICAgY3JlYXRlZCgpIHtcblxuICAgICAgICAgICAgR2VvbG9jYXRpb24uZW5hYmxlTG9jYXRpb25SZXF1ZXN0KHRydWUpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgR2VvbG9jYXRpb24uaXNFbmFibGVkKCkudGhlbihpc0xvY2F0aW9uRW5hYmxlZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQgaXMgJytpc0xvY2F0aW9uRW5hYmxlZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFpc0xvY2F0aW9uRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWVkTG9jYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb25GYWlsdXJlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBvdGVudGlhbGx5IGRvIG1vcmUgdGhlbiBqdXN0IGVuZCBoZXJlLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBNVVNUIHBhc3MgZW1wdHkgb2JqZWN0ISFcbiAgICAgICAgICAgICAgICAgICAgR2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHt9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvYyByZXN1bHQnLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWVkTG9jYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb24gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2MgZXJyb3InLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmVlZExvY2F0aW9uOnRydWUsXG4gICAgICAgICAgICAgICAgbG9jYXRpb25GYWlsdXJlOmZhbHNlLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOm51bGwsXG4gICAgICAgICAgICAgICAgbm90ZVRpdGxlOlwiXCIsXG4gICAgICAgICAgICAgICAgbm90ZUJvZHk6XCJcIixcbiAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZTogJycsXG4gICAgICAgICAgICAgICAgZHJhd2VyVG9nZ2xlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkcmF3ZXIxOiBcIu+FglwiLFxuICAgICAgICAgICAgICAgIGRyYXdlcjI6IFwi74WBXCIsXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBcIiMxYWEzZmZcIixcbiAgICAgICAgICAgICAgICBBUElVUkw6IFwiXCIsXG4gICAgICAgICAgICAgICAgaG9tZVBvc3RzOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGxvY2F0aW9uRGVzY3JpcHRpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBZb3UgYXJlIGF0ICR7dGhpcy5sb2NhdGlvbi5sYXRpdHVkZX0sICR7dGhpcy5sb2NhdGlvbi5sb25naXR1ZGV9LiBZb3VyIGFsdGl0dWRlIGlzICR7dGhpcy5sb2NhdGlvbi5hbHRpdHVkZX0uYDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYW1lKCl7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCduYW1lJywnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uU3RhcnQoKXtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdFBvc3QoKXtcbiAgICAgICAgICAgICAgICB2YXIgdXNlclRva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCd1c2VyVG9rZW4nLDApO1xuICAgICAgICAgICAgICAgIHZhciBhcHBVUkwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ2FwcFVSTCcsMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5BUElVUkwgPSBhcHBVUkw7XG5cbiAgICAgICAgICAgICAgICBodHRwTW9kdWxlLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGFwcFVSTCsnL2FwaS9ub3RlcycsLy9cImh0dHA6Ly8xOTIuMTY4LjAuODM6ODAwMC9hcGkvaG9tZVwiLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUG9zdFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIrdXNlclRva2VuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOnRoaXMubm90ZVRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMubm90ZUJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXQ6dGhpcy5sb2NhdGlvbi5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxuZzp0aGlzLmxvY2F0aW9uLmxvbmdpdHVkZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDIwMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGVUaXRsZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RlQm9keSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ25vdGUgYWRkZWQgdG8gbG9jYXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIGhhcyBnb25lIHdyb25nJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkRyYXdlckNsb3NlZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdlclRvZ2dsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRHJhd2VyT3BlbmVkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2VyVG9nZ2xlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVEcmF3ZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5kcmF3ZXIubmF0aXZlVmlldy50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhvbWVUYXAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcG9zdFRhcCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFBvc3QsIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2dvdXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbnNUYXAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhOb3RpZmljYXRpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0RldGFpbHMoKSB7fVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnBhZ2VbZGF0YS12LTI0MWQzOWY5XSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtW2RhdGEtdi0yNDFkMzlmOV0ge1xcbiAgICBtYXJnaW4tbGVmdDogMzA7XFxuICAgIG1hcmdpbi1yaWdodDogMzA7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmxvZ29bZGF0YS12LTI0MWQzOWY5XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEyO1xcbiAgICBoZWlnaHQ6IDkwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhlYWRlcltkYXRhLXYtMjQxZDM5ZjldIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA3MDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0Q1MUExQTtcXG59XFxuLmlucHV0LWZpZWxkW2RhdGEtdi0yNDFkMzlmOV0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNTtcXG59XFxuLmlucHV0W2RhdGEtdi0yNDFkMzlmOV0ge1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBwbGFjZWhvbGRlci1jb2xvcjogI0E4QThBODtcXG59XFxuLmlucHV0W2RhdGEtdi0yNDFkMzlmOV06ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG4uYnRuLXByaW1hcnlbZGF0YS12LTI0MWQzOWY5XSB7XFxuICAgIG1hcmdpbjogMzAgNSAxNSA1O1xcbn1cXG4ubG9naW4tbGFiZWxbZGF0YS12LTI0MWQzOWY5XSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNBOEE4QTg7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxufVxcbi5zaWduLXVwLWxhYmVsW2RhdGEtdi0yNDFkMzlmOV0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDtcXG59XFxuLmJvbGRbZGF0YS12LTI0MWQzOWY5XSB7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmQudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5wYWdlW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZm9ybVtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgICBmbGV4LWdyb3c6IDI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5sb2dvW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMjtcXG4gICAgaGVpZ2h0OiA5MDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5oZWFkZXJbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNzA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNENTFBMUE7XFxufVxcbi5pbnB1dC1maWVsZFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjU7XFxufVxcbi5pbnB1dFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgZm9udC1zaXplOiAxODtcXG4gICAgcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7XFxufVxcbi5pbnB1dFtkYXRhLXYtYzI3NDgyYzRdOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuLmJ0bi1wcmltYXJ5W2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW46IDMwIDUgMTUgNTtcXG59XFxuLmxvZ2luLWxhYmVsW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjQThBOEE4O1xcbiAgICBmb250LXNpemU6IDE2O1xcbn1cXG4uc2lnbi11cC1sYWJlbFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjA7XFxufVxcbi5ib2xkW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0xvZ2luLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJ0cnVlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nb1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJ+L2ltYWdlcy9sb2dvLnBuZ1wiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93czogXCJhdXRvXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgcm93OiBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJFbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ6ICFfdm0ucHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0OiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcIm5leHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnVzZXIuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5QcmVzczogX3ZtLmZvY3VzUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChfdm0udXNlciwgXCJlbWFpbFwiLCAkZXZlbnQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJBY3Rpdml0eUluZGljYXRvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd1NwYW46IFwiM1wiLCBidXN5OiBfdm0ucHJvY2Vzc2luZyB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYXJrIG0tdC0yMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiUmVzZXRcIiwgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5yZXNldCB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1sYWJlbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiKnYtc2hvd1wiOiBcImlzTG9nZ2luZ0luXCIsIHRleHQ6IFwiR28gQmFjayB0byBMb2dpblwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYmFja1RvTG9naW4oKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyIGhlYWRlclwiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbkJhckNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzhcIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImxlZnRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiSExlZnRcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpblRvcDogXCIxMFwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlRHJhd2VyKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvbnQtYXdlc29tZVwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmb250U2l6ZTogXCIyN1wiLCBjb2xvcjogXCIjZmZmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uZHJhd2VyVG9nZ2xlID8gX3ZtLmRyYXdlcjIgOiBfdm0uZHJhd2VyMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJITWlkXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgYWxpZ25JdGVtczogXCJsZWZ0XCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcIkhSaWdodFwiIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlJhZFNpZGVEcmF3ZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJkcmF3ZXJcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgZHJhd2VyT3BlbmVkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkRyYXdlck9wZW5lZCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHJhd2VyQ2xvc2VkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkRyYXdlckNsb3NlZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12aWV3OmRyYXdlckNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgIGFyZzogXCJkcmF3ZXJDb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VlZVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJhd2VySXRlbVRleHQgZm9udC1hd2Vzb21lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMzAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgYXR0cnM6IHsgaGVpZ2h0OiBcIjgwJVwiIH0gfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJhd2VySXRlbVRleHQgZm9udC1hd2Vzb21lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLvgosgIExvZyBvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIzMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmxvZ291dCB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12aWV3Om1haW5Db250ZW50XCIsXG4gICAgICAgICAgICAgICAgICBhcmc6IFwibWFpbkNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczoge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiRG9ja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZG9jazogXCJ0b3BcIiwgaGVpZ2h0OiBcIjkwJVwiLCB3aWR0aDogXCIxMDAlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlJhZExpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogX3ZtLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwibGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWxsVG9SZWZyZXNoOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRThFOEU4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJsaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ubm90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJub3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWxsVG9SZWZyZXNoSW5pdGlhdGVkOiBfdm0ub25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm90ZSA9IHJlZi5ub3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRThFOEU4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3ROb3RlKF92bS5pdGVtLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibm90ZUNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvc3RBdXRob3ROYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogbm90ZS50aXRsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicG9zdERhdGVTbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK25vdGUuZGlzdGFuY2UgKiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0ZpeGVkKDMpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgbWV0ZXJzIGF3YXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjRTRFNEU0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZG9jazogXCJib3R0b21cIiwgaGVpZ2h0OiBcIjEwJVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiKiwgKlwiLCB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhvbWVUYXAoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5kcm9pZDpjbGFzc1wiOiBcIm5vdGlmaWNhdGlvbkFuZHJvaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlvczpjbGFzc1wiOiBcIm5vdGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvbnQtYXdlc29tZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi74eqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5tYWluQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmRyb2lkOnN0eWxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZToxODttYXJnaW4tdG9wOi0xNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW9zOnN0eWxlXCI6IFwiZm9udC1zaXplOjMwO21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZm9udFNpemU6IFwiMTBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkhvbWVcIiwgY29sb3I6IF92bS5tYWluQ29sb3IgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wb3N0VGFwKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJkZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5kcm9pZDpjbGFzc1wiOiBcIm5vdGlmaWNhdGlvbkFuZHJvaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlvczpjbGFzc1wiOiBcIm5vdGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvbnQtYXdlc29tZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi74GEXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmRyb2lkOnN0eWxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZToxODttYXJnaW4tdG9wOi0xNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW9zOnN0eWxlXCI6IFwiZm9udC1zaXplOjMwO21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZm9udFNpemU6IFwiMTBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkFkZCBOb3RlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ29cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwifi9pbWFnZXMvbG9nby5wbmdcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiYXV0bywgYXV0bywgYXV0bywgYXV0bywgYXV0bywgYXV0b1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNMb2dnaW5nSW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWlzTG9nZ2luZ0luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjBcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogXCJuZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS51c2VyLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoX3ZtLnVzZXIsIFwibmFtZVwiLCAkZXZlbnQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyByb3c6IFwiMVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwibmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0udXNlci5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblByZXNzOiBfdm0uZm9jdXNQYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KF92bS51c2VyLCBcImVtYWlsXCIsICRldmVudC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IHJvdzogXCIyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogX3ZtLmlzTG9nZ2luZ0luID8gXCJkb25lXCIgOiBcIm5leHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnVzZXIucGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5QcmVzczogX3ZtLmZvY3VzQ29uZmlybVBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoX3ZtLnVzZXIsIFwicGFzc3dvcmRcIiwgJGV2ZW50LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5pc0xvZ2dpbmdJbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhaXNMb2dnaW5nSW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiM1wiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJjb25maXJtUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ6ICFfdm0ucHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJDb25maXJtIHBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwiZG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0udXNlci5jb25maXJtUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZmlybVBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJBY3Rpdml0eUluZGljYXRvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd1NwYW46IFwiM1wiLCBidXN5OiBfdm0ucHJvY2Vzc2luZyB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYXJrIG0tdC0yMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXNMb2dnaW5nSW4gPyBcIkxvZyBJblwiIDogXCJTaWduIFVwXCIsXG4gICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ6ICFfdm0ucHJvY2Vzc2luZ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc3VibWl0IH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIFwiKnYtc2hvd1wiOiBcImlzTG9nZ2luZ0luXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mb3Jnb3RQYXNzd29yZCgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIsXG4gICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnRvZ2dsZUZvcm0gfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pc0xvZ2dpbmdJblxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkRvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkJhY2sgdG8gTG9naW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmlzTG9nZ2luZ0luID8gXCJTaWduIHVwXCIgOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiLFxuICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5jaGFuZ2VBUEkgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgW192bS5fdihcIkNoYW5nZSB0aGUgZGVmYXVsdCBBUEkgc2VydmVyIFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm9sZFwiIH0sIFtfdm0uX3YoXCJDaGFuZ2VcIildKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhciBoZWFkZXJcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiB9LFxuICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIlwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb25CYXJDb250YWluZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM4XCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJsZWZ0XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIkhMZWZ0XCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW5Ub3A6IFwiMTBcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvZ2dsZURyYXdlcigpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb250LWF3ZXNvbWVcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZm9udFNpemU6IFwiMjdcIiwgY29sb3I6IFwiI2ZmZlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmRyYXdlclRvZ2dsZSA/IF92bS5kcmF3ZXIyIDogX3ZtLmRyYXdlcjFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiSE1pZFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFsaWduSXRlbXM6IFwibGVmdFwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJIUmlnaHRcIiB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJSYWRTaWRlRHJhd2VyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwiZHJhd2VyXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGRyYXdlck9wZW5lZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0ub25EcmF3ZXJPcGVuZWQoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRyYXdlckNsb3NlZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0ub25EcmF3ZXJDbG9zZWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmlldzpkcmF3ZXJDb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICBhcmc6IFwiZHJhd2VyQ29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcIiNlZWVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyYXdlckl0ZW1UZXh0IGZvbnQtYXdlc29tZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjMwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IGF0dHJzOiB7IGhlaWdodDogXCI4MCVcIiB9IH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyYXdlckl0ZW1UZXh0IGZvbnQtYXdlc29tZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi74KLICBMb2cgb3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMzAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5sb2dvdXQgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmlldzptYWluQ29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgYXJnOiBcIm1haW5Db250ZW50XCIsXG4gICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkRvY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgcGFkZGluZzogXCIzMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZG9jazogXCJ0b3BcIiwgaGVpZ2h0OiBcIjkwJVwiLCB3aWR0aDogXCIxMDAlXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaGludDogXCJXcml0ZSBhIHRpdGxlXCIsIHRleHQ6IF92bS5ub3RlVGl0bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ub3RlVGl0bGUgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaGludDogXCJXcml0ZSBhIG5vdGVcIiwgdGV4dDogX3ZtLm5vdGVCb2R5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubm90ZUJvZHkgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU3VibWl0IFBvc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdFBvc3QoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm5lZWRMb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxvb2tpbmcgdXAgeW91ciBsb2NhdGlvbi4uLlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvY2F0aW9uRmFpbHVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNhbid0IGZpbmQgY3VycmVudCBsb2NhdGlvblwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0ubG9jYXRpb25EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI0U0RTRFNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRvY2s6IFwiYm90dG9tXCIsIGhlaWdodDogXCIxMCVcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW5zOiBcIiosICpcIiwgdmVydGljYWxBbGlnbm1lbnQ6IFwidG9wXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5ob21lVGFwKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFuZHJvaWQ6Y2xhc3NcIjogXCJub3RpZmljYXRpb25BbmRyb2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpb3M6Y2xhc3NcIjogXCJub3RpZmljYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb250LWF3ZXNvbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIu+HqlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5kcm9pZDpzdHlsZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemU6MTg7bWFyZ2luLXRvcDotMTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlvczpzdHlsZVwiOiBcImZvbnQtc2l6ZTozMDttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGZvbnRTaXplOiBcIjEwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJIb21lXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wb3N0VGFwKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJkZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5kcm9pZDpjbGFzc1wiOiBcIm5vdGlmaWNhdGlvbkFuZHJvaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlvczpjbGFzc1wiOiBcIm5vdGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvbnQtYXdlc29tZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi74GEXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5tYWluQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmRyb2lkOnN0eWxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZToxODttYXJnaW4tdG9wOi0xNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW9zOnN0eWxlXCI6IFwiZm9udC1zaXplOjMwO21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZm9udFNpemU6IFwiMTBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQWRkIE5vdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLm1haW5Db2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCIsXG5cdFwiLi9yb3V0ZXMvaW5kZXguanNcIjogXCIuL3JvdXRlcy9pbmRleC5qc1wiLFxuXHRcIi4vc2VydmljZXMvYmFja2VuZC1zZXJ2aWNlLmpzXCI6IFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2UuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXG5cXG4vKlxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBGb3IgYSBmdWxsIGxpc3Qgb2YgY2xhc3MgbmFtZXMgaW4gdGhlIHRoZW1lXFxucmVmZXIgdG8gaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS90aGVtZS5cXG5UaGUgaW1wb3J0ZWQgQ1NTIHJ1bGVzIG11c3QgcHJlY2VkZSBhbGwgb3RoZXIgdHlwZXMgb2YgcnVsZXMuXFxuXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzcydcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiI3NlYXJjaEZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGxhY2Vob2xkZXItY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5hY3Rpb25CYXJDb250YWluZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmbG9hdFwiLFwidmFsdWVcIjpcImxlZnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuY29udkZyaWVuZE5hbWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jb252RGF0ZU91dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jb252VGV4dE91dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubm90UmVhZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5yZWFkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNkM2QzZDXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmNvbkltZ1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiNjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI2MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oZWFkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiIzFhYTNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5hYm91dFJvd1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wb3N0VGl0bGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxN1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRyYXdlckl0ZW1UZXh0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIyMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlRHJhd2VyQ29udGFpbmVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucHJvZmlsZVBpY1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMTUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjEwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzRkYjhmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucG9zdENvbnRhaW5lclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFib3V0Q29udGFpbmVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI4NSVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiI2VlZWVlZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucG9zdERhdGVTbWFsbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIxMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzg1ODU4NVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wb3N0QXV0aG90TmFtZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIxMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBvc3RJbWFnZVNtYWxsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI0MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjQwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMC41XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2M0YzRjNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5saXN0SW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ub3RpZmljYXRpb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwicmVkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIyNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjglXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIyNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCIzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInotaW5kZXhcIixcInZhbHVlXCI6XCIxMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxM1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ub3RpZmljYXRpb25BbmRyb2lkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcInJlZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMjJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIyMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxMiVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiei1pbmRleFwiLFwidmFsdWVcIjpcIjEwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjEzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIxXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5hdkl0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjI0JVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9sbG93ZXJzVHh0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9sbG93ZXJzVHh0VmFsdWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjEwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb2xsb3dlcnNDb250YWluZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjkwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ITGVmdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMTAlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZmxvYXRcIixcInZhbHVlXCI6XCJsZWZ0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyXCIsXCJ2YWx1ZVwiOlwiMXB4IHNvbGlkIHJlZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiNS41JVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ITWlkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI3MCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuSFJpZ2h0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxOSVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2VhcmNoRmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1ib3R0b20tY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWRlY29yYXRpb25cIixcInZhbHVlXCI6XCJub25lXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZvbnQtYXdlc29tZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiXFxcIkZvbnRBd2Vzb21lXFxcIlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ob21lLXBhbmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRlc2NyaXB0aW9uLWxhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1haW5UYWJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNENTFBMUFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI2MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLXByaW1hcnk6ZGlzYWJsZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMC41XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcblxuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXNcIjtcbi8vaW1wb3J0IEJhY2tlbmRTZXJ2aWNlIGZyb20gXCIuL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZVwiO1xuXG4vLyBVbmNvbW1tZW50IHRoZSBmb2xsb3dpbmcgdG8gc2VlIE5hdGl2ZVNjcmlwdC1WdWUgb3V0cHV0IGxvZ3Ncbi8vIFZ1ZS5jb25maWcuc2lsZW50ID0gZmFsc2U7XG5cblxuVnVlLmNvbmZpZy5zaWxlbnQgPSBmYWxzZTsvL3NldCB0byBmYWxzZSB0byBzZWUgb3V0cHV0IGxvZ3NcblZ1ZS5yZWdpc3RlckVsZW1lbnQoJ1JhZFNpZGVEcmF3ZXInLCAoKSA9PiByZXF1aXJlKCduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcicpLlJhZFNpZGVEcmF3ZXIpXG5pbXBvcnQgUmFkTGlzdFZpZXcgZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L3Z1ZSc7XG5WdWUudXNlKFJhZExpc3RWaWV3KTtcblxuLy8gY29uc3QgYmFja2VuZFNlcnZpY2UgPSBuZXcgQmFja2VuZFNlcnZpY2UoKTtcbi8vIFZ1ZS5wcm90b3R5cGUuJGJhY2tlbmRTZXJ2aWNlID0gYmFja2VuZFNlcnZpY2U7XG5cbm5ldyBWdWUoe1xuICByZW5kZXI6IGggPT4gaChcImZyYW1lXCIsIFtoKHJvdXRlcy5sb2dpbildKVxufSkuJHN0YXJ0KCk7XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZvcmdvdFBhc3N3b3JkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNDFkMzlmOSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Gb3Jnb3RQYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZvcmdvdFBhc3N3b3JkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Gb3Jnb3RQYXNzd29yZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNDFkMzlmOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjQxZDM5ZjlcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9oZW5kcmlrdXMvUmVwby9Mb05vVEUgYXBwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI0MWQzOWY5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI0MWQzOWY5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI0MWQzOWY5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Gb3Jnb3RQYXNzd29yZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjQxZDM5Zjkmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjQxZDM5ZjknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvRm9yZ290UGFzc3dvcmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZvcmdvdFBhc3N3b3JkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZvcmdvdFBhc3N3b3JkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9yZ290UGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjQxZDM5Zjkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9yZ290UGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjQxZDM5Zjkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9yZ290UGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0MWQzOWY5JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjY3NDEwZjNhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvaGVuZHJpa3VzL1JlcG8vTG9Ob1RFIGFwcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NzQxMGYzYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2Emc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjc0MTBmM2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvSG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjMjc0ODJjNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2hlbmRyaWt1cy9SZXBvL0xvTm9URSBhcHAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzI3NDgyYzQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzI3NDgyYzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzI3NDgyYzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjMjc0ODJjNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9Mb2dpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Bvc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlkNGEyYjBhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Bvc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qb3N0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOWQ0YTJiMGFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9oZW5kcmlrdXMvUmVwby9Mb05vVEUgYXBwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzlkNGEyYjBhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzlkNGEyYjBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzlkNGEyYjBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qb3N0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZDRhMmIwYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5ZDRhMmIwYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9Qb3N0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlkNGEyYjBhJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ2luXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lXCI7XG5cbmNvbnN0IHJvdXRlcyA9IHtcbiAgICBsb2dpbjogTG9naW4sXG4gICAgaG9tZTogSG9tZVxufVxuZXhwb3J0IGRlZmF1bHQgcm91dGVzOyIsIi8vIFRoZSBmb2xsb3dpbmcgaXMgYSBzYW1wbGUgaW1wbGVtZW50YXRpb24gb2YgYSBiYWNrZW5kIHNlcnZpY2UgdXNpbmcgUHJvZ3Jlc3MgS2ludmV5IChodHRwczovL3d3dy5wcm9ncmVzcy5jb20va2ludmV5KS5cbi8vIEZlZWwgZnJlZSB0byBzd2FwIGluIHlvdXIgb3duIHNlcnZpY2UgLyBBUElzIC8gZXRjIGhlcmUgZm9yIHlvdXIgb3duIGFwcHMuXG5cbmltcG9ydCAqIGFzIEtpbnZleSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcblxuS2ludmV5LmluaXQoe1xuICAgIGFwcEtleTogXCJraWRfU3lZOExZTzhNXCIsXG4gICAgYXBwU2VjcmV0OiBcIjA5MjgyOTg1ZDdjNTQwZjdiMDc2YTljN2ZkODg0Yzc3XCJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gISFLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCk7XG4gICAgfVxuXG4gICAgbG9naW4odXNlcikge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIubG9naW4odXNlci5lbWFpbCwgdXNlci5wYXNzd29yZCk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIodXNlcikge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIuc2lnbnVwKHsgdXNlcm5hbWU6IHVzZXIuZW1haWwsIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkIH0pO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==