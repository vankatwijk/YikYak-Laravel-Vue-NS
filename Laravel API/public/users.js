(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserAccount.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UserAccount.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      account_name: this.$store.state.user,
      account_email: "",
      entity_name: this.$store.state.entity_name,
      valid: true,
      name: '',
      nameRules: [function (v) {
        return !!v || 'Name is required';
      } //v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+\..+/.test(v) || 'E-mail must be valid';
      }],
      select: null
    };
  },
  methods: {
    saveAccountData: function saveAccountData() {
      // Base Url of App
      var baseUrl = localStorage.getItem('appUrl'); // Custom Url for Api Call

      var accountUrl = baseUrl + '/api/details/'; // Session Token

      var token = localStorage.getItem('session_token'); // Headers

      var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      };
      this.$http.get(accountUrl, {
        headers: headers
      }).then(function (result) {
        console.log(result);
      });
    },
    validate: function validate() {
      this.$refs.form.validate();
      this.saveAccountData();
    },
    reset: function reset() {
      this.$refs.form.reset();
    },
    resetValidation: function resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      username_id: this.$store.state.user_id,
      entity_name: this.$store.state.entity_name,
      dialog: false,
      messagechatinfo: "",
      new_user: {
        username: "",
        email: "",
        password: "",
        password_confirm: ""
      },
      textbox_message: "",
      users_list: this.$store.state.entity_users,
      users_chat: []
    };
  },
  methods: {
    isSender: function isSender(user_id, rec_id) {
      console.log(user_id);
      console.log(rec_id);

      if (user_id === user_id) {
        return "sender";
      }

      if (rec_id === rec_id) {
        return "other";
      }
    },
    createUser: function createUser() {
      var _this = this;

      // Base Url of App
      var baseUrl = localStorage.getItem('appUrl'); // Custom Url for Api Call

      var registerUrl = baseUrl + '/api/adduser'; // Session Token
      //const token = this.$store.data.token;

      var token = localStorage.getItem('session_token'); // Header to post Request 

      var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }; // Data to send for Registration

      var data = {
        'name': this.new_user.username,
        'email': this.new_user.email,
        'password': this.new_user.password,
        'password-confirm': this.new_user.password_confirm
      };
      console.log(data);
      this.$http.post(registerUrl, data, {
        headers: headers
      }).then(function (result) {
        console.log(result);

        _this.users_list.unshift(result.data.success);
      });
    },
    // getUserChat : function(item) {
    //     console.log(item.id);
    // }
    getUserChat: function getUserChat(item) {
      var _this2 = this;

      //console.log('this is the element i clicked: ', item.id);
      // Base Url of App
      var baseUrl = localStorage.getItem('appUrl'); // Custom Url for Api Call

      var singleChatUrl = baseUrl + '/api/usermessanger/' + item.id; // Save item Id to Storage for use in send message function

      localStorage.setItem('chat-id', item.id); // Session Token
      //const token = this.$store.data.token;

      var token = localStorage.getItem('session_token'); // Header to post Request 

      var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      };
      this.$http.get(singleChatUrl, {
        headers: headers
      }).then(function (result) {
        console.log(result);

        if (result.data.success == '') {
          console.log('no messages'); // this.messagechatinfo = 'no message'
        } else {
          _this2.users_chat = result.data.success;
        }
      });
    },
    postUserMessage: function postUserMessage() {
      var _this3 = this;

      var chatId = localStorage.getItem('chat-id');
      console.log(chatId); // Base Url of App

      var baseUrl = localStorage.getItem('appUrl'); // Custom Url for Api Call

      var singleChatUrl = baseUrl + '/api/usermessanger/' + chatId; // Session Token
      //const token = this.$store.data.token;

      var token = localStorage.getItem('session_token'); // Header to post Request 

      var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      };
      var data = {
        message: this.textbox_message
      };
      this.$http.post(singleChatUrl, data, {
        headers: headers
      }).then(function (result) {
        console.log(result); //this.users_chat = result.data

        _this3.users_chat.push(result.data.success); // if(result.data.success == '') {
        //     console.log('no messages');
        //     this.messagechatinfo = 'no message'
        // } else {
        //     this.users_chat = result.data
        // }

      });
    }
  },
  mounted: function mounted() {//this.getUsersList() get users list on load
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users.vue?vue&type=style&index=0&id=e2911f0e&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users.vue?vue&type=style&index=0&id=e2911f0e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.message-chat-container[data-v-e2911f0e] {\n    padding: 1.5rem;\n}\n.message-chat-container .message-input-container[data-v-e2911f0e] {\n    position: absolute;\n    left: 15px;\n    right: 15px;\n    bottom: 15px;\n}\n.message-chat-container .message-input-container .col[data-v-e2911f0e] {\n    padding-top: 0;\n    padding-bottom: 0;\n}\n.message-chat-container .message-chat-list[data-v-e2911f0e] {\n    padding: 0 2rem;\n    height: 63vh;\n    overflow-y: scroll;\n    overflow-x: hidden;\n}\n.message-chat-container .message-chat-list .single-message[data-v-e2911f0e] {\n    margin: .75rem;\n    max-width: 90%;\n    background-color : rgba(25, 118, 210, 0.16)\n}\n\n/* .message-chat-container .message-chat-list .sender {\n    margin: .75rem;\n    max-width: 90%;\n    background-color : rgba(25, 118, 210, 1)\n} */\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users.vue?vue&type=style&index=0&id=e2911f0e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users.vue?vue&type=style&index=0&id=e2911f0e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=style&index=0&id=e2911f0e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users.vue?vue&type=style&index=0&id=e2911f0e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserAccount.vue?vue&type=template&id=42f5ca93&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UserAccount.vue?vue&type=template&id=42f5ca93& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    { staticClass: "page-container page-account" },
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
                { attrs: { align: "center", justify: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "8", md: "5" } },
                    [
                      _c(
                        "v-form",
                        {
                          ref: "form",
                          attrs: { "lazy-validation": "" },
                          model: {
                            value: _vm.valid,
                            callback: function($$v) {
                              _vm.valid = $$v
                            },
                            expression: "valid"
                          }
                        },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: _vm.nameRules,
                              label: "Name",
                              required: ""
                            },
                            model: {
                              value: _vm.account_name,
                              callback: function($$v) {
                                _vm.account_name = $$v
                              },
                              expression: "account_name"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: _vm.emailRules,
                              label: "E-mail",
                              required: ""
                            },
                            model: {
                              value: _vm.account_email,
                              callback: function($$v) {
                                _vm.account_email = $$v
                              },
                              expression: "account_email"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: _vm.nameRules,
                              label: "Company Name",
                              required: ""
                            },
                            model: {
                              value: _vm.entity_name,
                              callback: function($$v) {
                                _vm.entity_name = $$v
                              },
                              expression: "entity_name"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "mr-4",
                              attrs: {
                                block: "",
                                disabled: !_vm.valid,
                                color: "success"
                              },
                              on: { click: _vm.validate }
                            },
                            [
                              _vm._v(
                                "\n                            Save\n                            "
                              )
                            ]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users.vue?vue&type=template&id=e2911f0e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users.vue?vue&type=template&id=e2911f0e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
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
                                              label: "Username",
                                              name: "username",
                                              "prepend-icon":
                                                "mdi-account-outline",
                                              type: "text",
                                              autocomplete: "off"
                                            },
                                            model: {
                                              value: _vm.new_user.username,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.new_user,
                                                  "username",
                                                  $$v
                                                )
                                              },
                                              expression: "new_user.username"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              id: "email",
                                              label: "Email",
                                              name: "email",
                                              "prepend-icon":
                                                "mdi-email-outline",
                                              type: "email",
                                              autocomplete: "off"
                                            },
                                            model: {
                                              value: _vm.new_user.email,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.new_user,
                                                  "email",
                                                  $$v
                                                )
                                              },
                                              expression: "new_user.email"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              id: "password",
                                              label: "Password",
                                              name: "password",
                                              "prepend-icon": "mdi-lock",
                                              type: "password",
                                              autocomplete: "off"
                                            },
                                            model: {
                                              value: _vm.new_user.password,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.new_user,
                                                  "password",
                                                  $$v
                                                )
                                              },
                                              expression: "new_user.password"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              id: "password-confirmation",
                                              label: "Confirm Password",
                                              name: "confirm-password",
                                              "prepend-icon": "mdi-lock",
                                              type: "password",
                                              autocomplete: "off"
                                            },
                                            model: {
                                              value:
                                                _vm.new_user.password_confirm,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.new_user,
                                                  "password_confirm",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "new_user.password_confirm"
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
                                              on: { click: _vm.createUser }
                                            },
                                            [_vm._v("Add User ")]
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
                        [
                          _c(
                            "v-list",
                            {
                              staticClass: "list-scrollable",
                              attrs: { subheader: "", dense: "" }
                            },
                            [
                              _c("v-subheader", [
                                _vm._v(_vm._s(_vm.entity_name) + " Users List")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.users_list, function(item, i) {
                                return _c(
                                  "v-list-item",
                                  { key: i },
                                  [
                                    _c(
                                      "v-list-item-avatar",
                                      [
                                        item.avatar_path
                                          ? [
                                              _c("v-img", {
                                                attrs: { src: item.avatar_path }
                                              })
                                            ]
                                          : [
                                              _c("v-icon", [
                                                _vm._v(
                                                  "mdi-account-supervisor-circle"
                                                )
                                              ])
                                            ]
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", {
                                          domProps: {
                                            textContent: _vm._s(item.name)
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
                                                ;(_vm.dialog = true),
                                                  _vm.getUserChat(item)
                                              }
                                            }
                                          },
                                          [_vm._v("Chat")]
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
                        { staticClass: "message-chat-list" },
                        _vm._l(_vm.users_chat, function(item, i) {
                          return _c(
                            "v-list",
                            { key: i, staticClass: "single-message" },
                            [
                              _c(
                                "v-list-item",
                                {
                                  class: _vm.isSender(
                                    item.from_user_id,
                                    item.to_user_id
                                  ),
                                  domProps: {
                                    textContent: _vm._s(item.message)
                                  }
                                },
                                [
                                  _c(
                                    "v-list-item-avatar",
                                    [
                                      _c("v-img", {
                                        attrs: { src: item.avatar }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c("v-list-item-title", {
                                        domProps: {
                                          innerHTML: _vm._s(item.message)
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
                        }),
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
                                  _c("v-textarea", {
                                    attrs: {
                                      outlined: "",
                                      name: "message-textarea",
                                      label: "Message",
                                      value: "Type here your message"
                                    },
                                    model: {
                                      value: _vm.textbox_message,
                                      callback: function($$v) {
                                        _vm.textbox_message = $$v
                                      },
                                      expression: "textbox_message"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
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
                                      },
                                      on: { click: _vm.postUserMessage }
                                    },
                                    [_vm._v("Send Message")]
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

/***/ "./resources/js/views/UserAccount.vue":
/*!********************************************!*\
  !*** ./resources/js/views/UserAccount.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserAccount_vue_vue_type_template_id_42f5ca93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAccount.vue?vue&type=template&id=42f5ca93& */ "./resources/js/views/UserAccount.vue?vue&type=template&id=42f5ca93&");
/* harmony import */ var _UserAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAccount.vue?vue&type=script&lang=js& */ "./resources/js/views/UserAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserAccount_vue_vue_type_template_id_42f5ca93___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserAccount_vue_vue_type_template_id_42f5ca93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UserAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/UserAccount.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/UserAccount.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/UserAccount.vue?vue&type=template&id=42f5ca93&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/UserAccount.vue?vue&type=template&id=42f5ca93& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccount_vue_vue_type_template_id_42f5ca93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UserAccount.vue?vue&type=template&id=42f5ca93& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserAccount.vue?vue&type=template&id=42f5ca93&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccount_vue_vue_type_template_id_42f5ca93___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccount_vue_vue_type_template_id_42f5ca93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Users.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Users.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_e2911f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=e2911f0e&scoped=true& */ "./resources/js/views/Users.vue?vue&type=template&id=e2911f0e&scoped=true&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/views/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Users_vue_vue_type_style_index_0_id_e2911f0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Users.vue?vue&type=style&index=0&id=e2911f0e&scoped=true&lang=css& */ "./resources/js/views/Users.vue?vue&type=style&index=0&id=e2911f0e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_e2911f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_e2911f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e2911f0e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Users.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Users.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Users.vue?vue&type=style&index=0&id=e2911f0e&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/Users.vue?vue&type=style&index=0&id=e2911f0e&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_e2911f0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=style&index=0&id=e2911f0e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users.vue?vue&type=style&index=0&id=e2911f0e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_e2911f0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_e2911f0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_e2911f0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_e2911f0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_e2911f0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Users.vue?vue&type=template&id=e2911f0e&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Users.vue?vue&type=template&id=e2911f0e&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_e2911f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=e2911f0e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users.vue?vue&type=template&id=e2911f0e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_e2911f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_e2911f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);