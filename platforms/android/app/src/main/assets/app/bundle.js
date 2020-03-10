require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Background.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Post.vue");
/* harmony import */ var _NoteDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/NoteDetails.vue");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_local_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-local-notifications/local-notifications.js");
/* harmony import */ var nativescript_local_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_local_notifications__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//get external pages and plugins




var httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

var appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");



__webpack_require__("../node_modules/nativescript-local-notifications/local-notifications.js");


nativescript_local_notifications__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"].hasPermission();

var utils = __webpack_require__("../node_modules/tns-core-modules/utils/utils.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {},
  watch: {},

  created() {
    //on creation ensure the user has gps enabled otherwise the app will crash
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
    }); //a delay is is needed to run the inital starting function due to nativescript bug

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
      index: 'list',
      notes: []
    };
  },

  methods: {
    onStart() {},

    selectNote(id) {},

    getNotes() {
      console.log("job has been scheduled !");
      this.scheduleJob();
    },

    scheduleJob() {
      //schedule a background job every 15mins
      var context = utils.ad.getApplicationContext();
      var component = new android.content.ComponentName(context, com.tns.components.notifications.MyJobService.class);
      console.log(component); // Set the id of the job to something meaningful for you

      var builder = new android.app.job.JobInfo.Builder(1, component); // Optional: Set how often the task should be triggered. The minimum is 15min.

      builder.setPeriodic(15 * 60 * 1000); // Optional: Set additional requirements under what conditions your job should be triggered

      builder.setRequiresCharging(false);
      var jobScheduler = context.getSystemService(android.content.Context.JOB_SCHEDULER_SERVICE);
      console.log("Job Scheduled: " + jobScheduler.schedule(builder.build()));
    },

    onPullToRefreshInitiated(_ref) {
      var {
        object
      } = _ref;
      //this method reloads the list of notes when they pull down on the list of available notes
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

    postTap() {
      //navigation home button clicked
      this.$navigateTo(_Post__WEBPACK_IMPORTED_MODULE_1__["default"], {
        animated: false,
        clearHistory: true
      });
    },

    logout() {
      //logout of the current user
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true
      });
    },

    goToLogin() {
      //logout of the current user
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true
      });
    },

    showDetails() {}

  }
});

/***/ }),

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
//get all external pages and plugins


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
      //get all stored variables from the login session
      var appURL = appSettings.getString('appURL'); //make a request to the api server

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
          //success, alert the userr to check there email
          alert('please check your email');
          this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_0__["default"], {
            clearHistory: true
          });
        } else {
          //fail, alert the user
          alert('Email does not exist or to many request');
        }
      }, e => {
        //general error
        this.processing = false;
        alert(e.message);
      });
    },

    backToLogin() {
      //go back to the login screen
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Background.vue");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Post.vue");
/* harmony import */ var _NoteDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/NoteDetails.vue");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//get external pages and plugins





var httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

var appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {},
  watch: {
    location: {
      //if gps location changes reload the notes list, deep watcher is needed
      deep: true,

      handler() {
        console.log('the gps location has changed, notes list reload');
        this.getNotes();
      }

    }
  },

  created() {
    //on creation ensure the user has gps enabled otherwise the app will crash
    nativescript_geolocation__WEBPACK_IMPORTED_MODULE_4__["enableLocationRequest"](true).then(() => {
      nativescript_geolocation__WEBPACK_IMPORTED_MODULE_4__["isEnabled"]().then(isLocationEnabled => {
        console.log('result is ' + isLocationEnabled);

        if (!isLocationEnabled) {
          this.needLocation = false;
          this.locationFailure = true; // potentially do more then just end here...

          return;
        } // MUST pass empty object!!


        nativescript_geolocation__WEBPACK_IMPORTED_MODULE_4__["getCurrentLocation"]({}).then(result => {
          console.log('loc result', result);
          this.needLocation = false;
          this.location = result;
        }).catch(e => {
          console.log('loc error', e);
        });
      });
    }); //a delay is is needed to run the inital starting function due to nativescript bug

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
      index: 'list',
      notes: []
    };
  },

  methods: {
    onStart() {
      //this is the first method to be executed on the app starting
      this.name = appSettings.getString('name', '');
    },

    selectNote(id) {
      //the selected note is stored in the appsettings for later 
      appSettings.setNumber('selectedNote', id);
      this.$navigateTo(_NoteDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
        clearHistory: true
      });
    },

    getNotes() {
      //make a request to the api server and get all the notes in the area
      console.log('getting notes'); //get all stored variables from the login session

      var userToken = appSettings.getString('userToken', 0);
      var appURL = appSettings.getString('appURL', 0);
      this.APIURL = appURL; //debuging show 

      console.log(appURL + '/api/notes?lat=' + this.location.latitude + '&lng=' + this.location.longitude); //send request to api server

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
      //this method reloads the list of notes when they pull down on the list of available notes
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

    postTap() {
      //navigation home button clicked
      this.$navigateTo(_Post__WEBPACK_IMPORTED_MODULE_2__["default"], {
        animated: false,
        clearHistory: true
      });
    },

    backgroundTap() {
      this.$navigateTo(_Background__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true
      });
    },

    logout() {
      appSettings.remove('userToken'); //logout of the current user

      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
//get external pages an plugins



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
      // run the onstart method after the app is ready (nativescript bug)
      this.onStart();
    }, 1000);
  },

  methods: {
    onStart() {
      var token = appSettings.getString('userToken');

      if (token === undefined) {} else {
        if (token.length > 0) {
          this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
            clearHistory: true
          });
        }
      }
    },

    changeAPI() {
      //this method allows you to change the default api url from the app
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
      //switch between login forma nd signup forrm
      this.isLoggingIn = !this.isLoggingIn;
    },

    submit() {
      //then the submit button is click detect if its for the login or signup form
      if (!this.user.email || !this.user.password) {
        alert("Please provide both an email address and password.");
        return;
      } //route to the appropriate method


      this.processing = true;

      if (this.isLoggingIn) {
        this.login();
      } else {
        this.register();
      }
    },

    login() {
      //get the ap server url
      var appURL = appSettings.getString('appURL'); //send a request to the api server with the login information

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
          //good login, redirect to the home page after saving the app settings
          var result = response.content.toJSON();
          console.log(result);
          appSettings.setString('userToken', result.success.token);
          appSettings.setString('name', result.success.user.name);
          appSettings.setNumber('userid', result.success.user.id);
          appSettings.setString('email', result.success.user.email);
          this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
            clearHistory: true
          });
        } else if (response.statusCode === 401) {
          //failed logn
          alert('The login details you have provided are not correct');
        } else {
          // unkown error
          alert('Unexpected error');
        }
      }, e => {
        this.processing = false;
        alert(e.message);
      });
    },

    register() {
      //check if all the validation rules are correct
      if (this.user.password != this.user.confirmPassword) {
        //passwords do not match
        alert("Your passwords do not match.");
        this.processing = false;
        return;
      } else if (this.user.password.length <= 7) {
        //password less than 8 chars
        alert("Your password must be atlease 8 characters");
        this.processing = false;
        return;
      } else if (!this.user.name) {
        //missing fiels
        alert('all fields are required.');
        this.processing = false;
        return;
      } //get api server url


      var appURL = appSettings.getString('appURL'); //make a request to the api server for registering the user

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
          //good registration, alert the user to check there email
          var result = response.content.toJSON();
          console.log(result);
          alert('Please verify your email to login');
          this.isLoggingIn = true;
        } else if (response.statusCode === 422) {
          //failed registration
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
      //redirect the user to the forgot password screen
      this.$refs.password.nativeView.focus();
    },

    focusConfirmPassword() {
      //next button on keyboard clicked, focus on confirm password field
      if (!this.isLoggingIn) {
        this.$refs.confirmPassword.nativeView.focus();
      }
    },

    forgotPassword() {
      //next button on keyboard clicked ,focus on password field
      this.$navigateTo(_ForgotPassword__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/NoteDetails.vue?vue&type=script&lang=js&":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//external pages and plugins





var httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

var appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {},

  created() {
    setTimeout(() => {
      this.onStart();
    }, 500);
  },

  data() {
    return {
      noteTitle: "",
      noteBody: "",
      noteLat: 0,
      noteLng: 0,
      noteUserName: "",
      noteUserId: 0,
      searchValue: '',
      drawerToggle: false,
      drawer1: "",
      drawer2: "",
      mainColor: "#1aa3ff",
      APIURL: "",
      homePosts: [],
      loginUserId: 0
    };
  },

  computed: {
    name() {
      //get the current login user
      return appSettings.getString('name', '');
    }

  },
  methods: {
    onStart() {
      //get all stored variables from the login session
      this.loginUserId = appSettings.getNumber('userid', '');
      var selectedNote = appSettings.getNumber('selectedNote', 0);
      var userToken = appSettings.getString('userToken', 0);
      var appURL = appSettings.getString('appURL', 0);
      this.APIURL = appURL;
      console.log('getting note'); //send request to api server

      httpModule.request({
        url: appURL + '/api/notes/' + selectedNote,
        method: "Get",
        headers: {
          "Accept": "application/json",
          "Authorization": "Bearer " + userToken
        }
      }).then(response => {
        //get all the notes details
        var result = response.content.toJSON();
        this.noteTitle = result.title;
        this.noteBody = result.description;
        this.noteLat = result.lat;
        this.noteLng = result.lng;
        this.noteUserName = result.user.name;
        this.noteUserId = result.user_id;
      }, error => {
        console.error(error);
      });
    },

    deletePost() {
      console.log('delete note'); //get all stored variables from the login session

      var userToken = appSettings.getString('userToken', 0);
      var appURL = appSettings.getString('appURL', 0);
      var selectedNote = appSettings.getNumber('selectedNote', 0);
      this.APIURL = appURL; //send request to api server

      httpModule.request({
        url: appURL + '/api/notes/' + selectedNote,
        method: "delete",
        headers: {
          "Accept": "application/json",
          "Authorization": "Bearer " + userToken
        }
      }).then(response => {
        //if the deletion was successful go to the home screen
        this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
          animated: false,
          clearHistory: true
        });
      }, error => {
        console.error(error);
      });
    },

    editPost() {
      //get all stored variables from the login session
      var userToken = appSettings.getString('userToken', 0);
      var appURL = appSettings.getString('appURL', 0);
      var selectedNote = appSettings.getNumber('selectedNote', 0);
      this.APIURL = appURL; //send request to api server

      httpModule.request({
        url: appURL + '/api/notes/' + selectedNote,
        //"http://192.168.0.83:8000/api/home",
        method: "put",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Bearer " + userToken
        },
        content: JSON.stringify({
          title: this.noteTitle,
          description: this.noteBody,
          lat: this.noteLat,
          lng: this.noteLng
        })
      }).then(response => {
        //if everything was okay with the update an alert is generated
        console.log(response);

        if (response.statusCode === 200) {
          alert('note has been updated');
        } else {
          alert('could not update');
        }
      }, error => {
        console.error(error);
      });
    },

    onMapReady(args) {
      //generate a pointer in the map with information 
      //a timeout is needed to let the api server respond with the marker information
      setTimeout(() => {
        //this marker takes the information from the note details
        args.map.addMarkers([{
          lat: this.noteLat,
          lng: this.noteLng,
          title: this.noteTitle,
          subtitle: this.noteBody
        }]);
      }, 500);
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
      //go to the home screen reseting the selected note variable
      appSettings.setNumber('selectedNote', 0);
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
        animated: false,
        clearHistory: true
      });
    },

    postTap() {
      //go to the new post screen reseting the selected note variable
      appSettings.setNumber('selectedNote', 0);
      this.$navigateTo(_Post__WEBPACK_IMPORTED_MODULE_2__["default"], {
        animated: false,
        clearHistory: true
      });
    },

    logout() {
      //logout resetiing the selected note variable
      appSettings.remove('userToken');
      appSettings.setNumber('selectedNote', 0);
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
        clearHistory: true
      });
    },

    showDetails() {}

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
    //check if gps is enabled on the phone
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
      //display current location
      return "You are at ".concat(this.location.latitude, ", ").concat(this.location.longitude, ". Your altitude is ").concat(this.location.altitude, ".");
    },

    name() {
      //get the name of the current login user to display in the side drawer
      return appSettings.getString('name', '');
    }

  },
  methods: {
    onStart() {},

    submitPost() {
      //get all stored variables from the login session
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
        // the post was saved successfully
        console.log(response);

        if (response.statusCode === 200) {
          this.noteTitle = '';
          this.noteBody = '';
          alert('note added to location');
        } else {
          alert('Something has gone wrong' + response.statusCode);
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
      // navigate home
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
        animated: false,
        clearHistory: true
      });
    },

    postTap() {
      // navigate to the new post screen
      this.$navigateTo(_Post__WEBPACK_IMPORTED_MODULE_2__["default"], {
        animated: false,
        clearHistory: true
      });
    },

    logout() {
      appSettings.remove('userToken'); // logout of the current user

      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Background.vue?vue&type=template&id=39e3f1c9&scoped=true&":
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
                                        backgroundColor: "#E8E8E8",
                                        id: note.id
                                      },
                                      on: {
                                        tap: function($event) {
                                          return _vm.selectNote(note.id)
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
                                  return _vm.goToLogin()
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
                                attrs: { text: "Login", color: _vm.mainColor }
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
                                attrs: { text: "Clear" }
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
                          returnPress: _vm.reset,
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
                      text: "Background",
                      paddingLeft: "30%",
                      color: "black",
                      margin: "10"
                    },
                    on: { tap: _vm.backgroundTap }
                  })
                ],
                1
              ),
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
                                        backgroundColor: "#E8E8E8",
                                        id: note.id
                                      },
                                      on: {
                                        tap: function($event) {
                                          return _vm.selectNote(note.id)
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/NoteDetails.vue?vue&type=template&id=49208fe5&scoped=true&":
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
                      _c("TextView", {
                        attrs: {
                          text: _vm.noteTitle,
                          hint: "Write a title",
                          editable: _vm.loginUserId == _vm.noteUserId,
                          text: _vm.noteTitle
                        },
                        on: {
                          textChange: function($event) {
                            _vm.noteTitle = $event.value
                          }
                        }
                      }),
                      _c("TextView", {
                        staticStyle: { height: "100" },
                        attrs: {
                          text: _vm.noteBody,
                          hint: "Write a note",
                          editable: _vm.loginUserId == _vm.noteUserId,
                          text: _vm.noteBody
                        },
                        on: {
                          textChange: function($event) {
                            _vm.noteBody = $event.value
                          }
                        }
                      }),
                      _vm.loginUserId == _vm.noteUserId
                        ? _c("Button", {
                            staticClass: "btn btn-dark m-t-20",
                            attrs: { text: "Edit note" },
                            on: {
                              tap: function($event) {
                                return _vm.editPost()
                              }
                            }
                          })
                        : _vm._e(),
                      _vm.loginUserId == _vm.noteUserId
                        ? _c("Button", {
                            staticClass: "btn btn-danger m-t-20",
                            attrs: { text: "Delete note" },
                            on: {
                              tap: function($event) {
                                return _vm.deletePost()
                              }
                            }
                          })
                        : _vm._e(),
                      _c("Mapbox", {
                        attrs: {
                          accessToken:
                            "pk.eyJ1IjoidmFua2F0d2lqayIsImEiOiJjazZvNXZmbmswcmY5M25seWRnaWR3amRhIn0.2UyRhsFU7ZdNe1GZyBPzcQ",
                          latitude: _vm.noteLat,
                          longitude: _vm.noteLng,
                          hideCompass: "true",
                          zoomLevel: "12",
                          showUserLocation: "false",
                          disableZoom: "false",
                          disableRotation: "false",
                          disableScroll: "false",
                          disableTilt: "false"
                        },
                        on: {
                          mapReady: function($event) {
                            return _vm.onMapReady($event)
                          }
                        }
                      })
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
	"./components/NotificationIntentService.js": "./components/NotificationIntentService.js",
	"./components/notifications/MyJobService.js": "./components/notifications/MyJobService.js",
	"./components/notifications/job-scheduler.js": "./components/notifications/job-scheduler.js",
	"./components/service-helper.js": "./components/service-helper.js",
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
__webpack_require__("./components/notifications/MyJobService.js");
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
         //simple routing script

 //import BackendService from "./services/backend-service";
// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;
//plugins to be used with this application

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.silent = false; //set to false to see output logs

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement('RadSideDrawer', () => __webpack_require__("../node_modules/nativescript-ui-sidedrawer/ui-sidedrawer.js").RadSideDrawer);
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement("Mapbox", () => __webpack_require__("../node_modules/nativescript-mapbox/mapbox.js").MapboxView);

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_2___default.a); // const backendService = new BackendService();
// Vue.prototype.$backendService = backendService;
//start the vue application

new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h("frame", [h(_routes__WEBPACK_IMPORTED_MODULE_1__["default"].background)])
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/Background.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Background_vue_vue_type_template_id_39e3f1c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Background.vue?vue&type=template&id=39e3f1c9&scoped=true&");
/* harmony import */ var _Background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Background.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Background_vue_vue_type_template_id_39e3f1c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Background_vue_vue_type_template_id_39e3f1c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "39e3f1c9",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('39e3f1c9')) {
      api.createRecord('39e3f1c9', component.options)
    } else {
      api.reload('39e3f1c9', component.options)
    }
    module.hot.accept("./components/Background.vue?vue&type=template&id=39e3f1c9&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Background_vue_vue_type_template_id_39e3f1c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Background.vue?vue&type=template&id=39e3f1c9&scoped=true&");
(function () {
      api.rerender('39e3f1c9', {
        render: _Background_vue_vue_type_template_id_39e3f1c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Background_vue_vue_type_template_id_39e3f1c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Background.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Background.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Background.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Background.vue?vue&type=template&id=39e3f1c9&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Background_vue_vue_type_template_id_39e3f1c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Background.vue?vue&type=template&id=39e3f1c9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Background_vue_vue_type_template_id_39e3f1c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Background_vue_vue_type_template_id_39e3f1c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





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

/***/ "./components/NoteDetails.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NoteDetails_vue_vue_type_template_id_49208fe5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/NoteDetails.vue?vue&type=template&id=49208fe5&scoped=true&");
/* harmony import */ var _NoteDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/NoteDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NoteDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NoteDetails_vue_vue_type_template_id_49208fe5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NoteDetails_vue_vue_type_template_id_49208fe5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49208fe5",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('49208fe5')) {
      api.createRecord('49208fe5', component.options)
    } else {
      api.reload('49208fe5', component.options)
    }
    module.hot.accept("./components/NoteDetails.vue?vue&type=template&id=49208fe5&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _NoteDetails_vue_vue_type_template_id_49208fe5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/NoteDetails.vue?vue&type=template&id=49208fe5&scoped=true&");
(function () {
      api.rerender('49208fe5', {
        render: _NoteDetails_vue_vue_type_template_id_49208fe5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _NoteDetails_vue_vue_type_template_id_49208fe5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/NoteDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/NoteDetails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/NoteDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/NoteDetails.vue?vue&type=template&id=49208fe5&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteDetails_vue_vue_type_template_id_49208fe5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/NoteDetails.vue?vue&type=template&id=49208fe5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteDetails_vue_vue_type_template_id_49208fe5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteDetails_vue_vue_type_template_id_49208fe5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/NotificationIntentService.js":
/***/ (function(module, exports, __webpack_require__) {

android.app.IntentService.extend("com.tns.notifications.NotificationIntentService"
/* give your class a valid name as it will need to be declared in the AndroidManifest later */
, {
  onHandleIntent: function onHandleIntent(intent) {
    var action = intent.getAction();

    if ("ACTION_START" == action) {
      postNotification();
    } else if ("ACTION_STOP" == action) {
      /* get the system alarm manager and cancel all pending alarms, which will stop the service from executing periodically  */
    }

    android.support.v4.content.WakefulBroadcastReceiver.completeWakefulIntent(intent);
  }
});

function postNotification() {
  // Do something. For example, fetch fresh data from backend to create a rich notification?
  var utils = __webpack_require__("../node_modules/tns-core-modules/utils/utils.js");

  var context = utils.ad.getApplicationContext(); // get a reference to the application context in Android

  var builder = new android.app.Notification.Builder(context);
  builder.setContentTitle("Scheduled Notification").setAutoCancel(true).setColor(android.R.color.holo_purple) // optional
  .setContentText("This notification has been triggered by Notification Service").setVibrate([100, 200, 100]) // optional
  .setSmallIcon(android.R.drawable.btn_star_big_on); // will open main NativeScript activity when the notification is pressed

  var mainIntent = new android.content.Intent(context, com.tns.NativeScriptActivity.class);
  var pendingIntent = android.app.PendingIntent.getActivity(context, 1, mainIntent, android.app.PendingIntent.FLAG_UPDATE_CURRENT);
  builder.setContentIntent(pendingIntent);
  builder.setDeleteIntent(getDeleteIntent(context));
  var manager = context.getSystemService(android.content.Context.NOTIFICATION_SERVICE);
  manager.notify(1, builder.build());
}
/* only necessary for dismissing the notification from the Notifications Screen */


function getDeleteIntent(context) {
  var intent = new android.content.Intent(context, com.tns.broadcastreceivers.NotificationEventReceiver.class);
  intent.setAction("ACTION_DELETE_NOTIFICATION");
  return android.app.PendingIntent.getBroadcast(context, 0, intent, android.app.PendingIntent.FLAG_UPDATE_CURRENT);
}

android.support.v4.content.WakefulBroadcastReceiver.extend("com.tns.broadcastreceivers.NotificationEventReceiver", {
  onReceive: function onReceive(context, intent) {
    var action = intent.getAction();
    var serviceIntent;

    if ("ACTION_START_NOTIFICATION_SERVICE" == action) {
      serviceIntent = createIntentStartNotificationService(context);
    } else if ("ACTION_DELETE_NOTIFICATION" == action) {
      serviceIntent = createIntentDeleteNotification(context);
    }

    if (serviceIntent) {
      android.support.v4.content.WakefulBroadcastReceiver.startWakefulService(context, serviceIntent);
    }
  }
});
var Intent = android.content.Intent;

function createIntentStartNotificationService(context) {
  var intent = new Intent(context, com.tns.notifications.NotificationIntentService.class);
  intent.setAction("ACTION_START");
  return intent;
}

function createIntentDeleteNotification(context) {
  /* Similar as above, just with a different action */
}

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

/***/ "./components/notifications/job-scheduler.js":
/***/ (function(module, exports) {

function scheduleJob(context) {
  // Create a component from the JobService that should be triggered
  var component = new android.content.ComponentName(context, com.tns.notifications.MyJobService.class);
  console.log(component); // Set the id of the job to something meaningful for you

  var builder = new android.app.job.JobInfo.Builder(1, component); // Optional: Set how often the task should be triggered. The minimum is 15min.

  builder.setPeriodic(15 * 60 * 1000); // Optional: Set additional requirements under what conditions your job should be triggered

  builder.setRequiresCharging(false);
  var jobScheduler = context.getSystemService(android.content.Context.JOB_SCHEDULER_SERVICE);
  console.log("Job Scheduled: " + jobScheduler.schedule(builder.build()));
}

/***/ }),

/***/ "./components/service-helper.js":
/***/ (function(module, exports) {

function getStartPendingIntent(context) {
  var alarmIntent = new android.content.Intent(context, com.tns.broadcastreceivers.NotificationEventReceiver.class);
  intent.setAction("ACTION_START_NOTIFICATION_SERVICE");
  return android.app.PendingIntent.getBroadcast(context, 0, intent, android.app.PendingIntent.FLAG_UPDATE_CURRENT);
}

function setupAlarm(context) {
  var alarmManager = context.getSystemService(android.content.Context.ALARM_SERVICE);
  var alarmIntent = getStartPendingIntent(context);
  alarmManager.setRepeating(android.app.AlarmManager.RTC_WAKEUP, java.lang.System.currentTimeMillis(), 1000 * 60 * 60 * 24,
  /* alarm will send the `alarmIntent` object every 24h */
  alarmIntent);
}

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"android\":{\"v8Flags\":\"--expose_gc\",\"forceLog\":true,\"markingMode\":\"none\"},\"main\":\"app.js\",\"name\":\"tns-template-vue\",\"version\":\"4.2.0\"}");

/***/ }),

/***/ "./routes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _components_Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Background.vue");



var routes = {
  login: _components_Login__WEBPACK_IMPORTED_MODULE_0__["default"],
  home: _components_Home__WEBPACK_IMPORTED_MODULE_1__["default"],
  background: _components_Background__WEBPACK_IMPORTED_MODULE_2__["default"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9CYWNrZ3JvdW5kLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTG9naW4udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL05vdGVEZXRhaWxzLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Qb3N0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkLnZ1ZT9jODZiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlPzAxNDciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYWNrZ3JvdW5kLnZ1ZT9mMmZhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmQudnVlPzAxZTkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT80OTlmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlPzNjZTgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ob3RlRGV0YWlscy52dWU/NjkyYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QudnVlPzEzNGYiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFja2dyb3VuZC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYWNrZ3JvdW5kLnZ1ZT83NmU4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFja2dyb3VuZC52dWU/ZWRlNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkLnZ1ZT84NDMwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmQudnVlPzRlYmUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZC52dWU/MzFlOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/NTYyNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzJjMzUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/ZTYwNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT8yMTI0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlP2ZiNGYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ob3RlRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ob3RlRGV0YWlscy52dWU/MTYzYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGVEZXRhaWxzLnZ1ZT9lNWQ2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uSW50ZW50U2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdC52dWU/ODhjOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QudnVlPzM5YWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZmljYXRpb25zL2pvYi1zY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXJ2aWNlLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYmFja2VuZC1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsIlZ1ZSIsInJlZ2lzdGVyRWxlbWVudCIsIlJhZExpc3RWaWV3IiwidXNlIiwicmVuZGVyIiwiaCIsImJhY2tncm91bmQiLCIkc3RhcnQiLCJhbmRyb2lkIiwiYXBwIiwiSW50ZW50U2VydmljZSIsImV4dGVuZCIsIm9uSGFuZGxlSW50ZW50IiwiaW50ZW50IiwiYWN0aW9uIiwiZ2V0QWN0aW9uIiwicG9zdE5vdGlmaWNhdGlvbiIsInN1cHBvcnQiLCJ2NCIsImNvbnRlbnQiLCJXYWtlZnVsQnJvYWRjYXN0UmVjZWl2ZXIiLCJjb21wbGV0ZVdha2VmdWxJbnRlbnQiLCJ1dGlscyIsInJlcXVpcmUiLCJjb250ZXh0IiwiYWQiLCJnZXRBcHBsaWNhdGlvbkNvbnRleHQiLCJidWlsZGVyIiwiTm90aWZpY2F0aW9uIiwiQnVpbGRlciIsInNldENvbnRlbnRUaXRsZSIsInNldEF1dG9DYW5jZWwiLCJzZXRDb2xvciIsIlIiLCJjb2xvciIsImhvbG9fcHVycGxlIiwic2V0Q29udGVudFRleHQiLCJzZXRWaWJyYXRlIiwic2V0U21hbGxJY29uIiwiZHJhd2FibGUiLCJidG5fc3Rhcl9iaWdfb24iLCJtYWluSW50ZW50IiwiSW50ZW50IiwiY29tIiwidG5zIiwiTmF0aXZlU2NyaXB0QWN0aXZpdHkiLCJjbGFzcyIsInBlbmRpbmdJbnRlbnQiLCJQZW5kaW5nSW50ZW50IiwiZ2V0QWN0aXZpdHkiLCJGTEFHX1VQREFURV9DVVJSRU5UIiwic2V0Q29udGVudEludGVudCIsInNldERlbGV0ZUludGVudCIsImdldERlbGV0ZUludGVudCIsIm1hbmFnZXIiLCJnZXRTeXN0ZW1TZXJ2aWNlIiwiQ29udGV4dCIsIk5PVElGSUNBVElPTl9TRVJWSUNFIiwibm90aWZ5IiwiYnVpbGQiLCJicm9hZGNhc3RyZWNlaXZlcnMiLCJOb3RpZmljYXRpb25FdmVudFJlY2VpdmVyIiwic2V0QWN0aW9uIiwiZ2V0QnJvYWRjYXN0Iiwib25SZWNlaXZlIiwic2VydmljZUludGVudCIsImNyZWF0ZUludGVudFN0YXJ0Tm90aWZpY2F0aW9uU2VydmljZSIsImNyZWF0ZUludGVudERlbGV0ZU5vdGlmaWNhdGlvbiIsInN0YXJ0V2FrZWZ1bFNlcnZpY2UiLCJub3RpZmljYXRpb25zIiwiTm90aWZpY2F0aW9uSW50ZW50U2VydmljZSIsInNjaGVkdWxlSm9iIiwiY29tcG9uZW50IiwiQ29tcG9uZW50TmFtZSIsIk15Sm9iU2VydmljZSIsImNvbnNvbGUiLCJsb2ciLCJqb2IiLCJKb2JJbmZvIiwic2V0UGVyaW9kaWMiLCJzZXRSZXF1aXJlc0NoYXJnaW5nIiwiam9iU2NoZWR1bGVyIiwiSk9CX1NDSEVEVUxFUl9TRVJWSUNFIiwic2NoZWR1bGUiLCJnZXRTdGFydFBlbmRpbmdJbnRlbnQiLCJhbGFybUludGVudCIsInNldHVwQWxhcm0iLCJhbGFybU1hbmFnZXIiLCJBTEFSTV9TRVJWSUNFIiwic2V0UmVwZWF0aW5nIiwiQWxhcm1NYW5hZ2VyIiwiUlRDX1dBS0VVUCIsImphdmEiLCJsYW5nIiwiU3lzdGVtIiwiY3VycmVudFRpbWVNaWxsaXMiLCJsb2dpbiIsIkxvZ2luIiwiaG9tZSIsIkhvbWUiLCJCYWNrZ3JvdW5kIiwiS2ludmV5IiwiYXBwS2V5IiwiYXBwU2VjcmV0IiwiQmFja2VuZFNlcnZpY2UiLCJpc0xvZ2dlZEluIiwiZ2V0QWN0aXZlVXNlciIsInVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9nb3V0IiwicmVnaXN0ZXIiLCJzaWdudXAiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTtBQUVBOztBQUNBOztBQUdBO0FBQ0EsY0FEQTtBQUdBLFdB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Qzs7Ozs7Ozs7Ozs7Ozs7O0FDWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNdEYsTUFBTSxHQUFHO0FBQ1hpRyxPQUFLLEVBQUVDLHlEQURJO0FBRVhDLE1BQUksRUFBRUMsd0RBRks7QUFHWDdGLFlBQVUsRUFBRThGLDhEQUFVQTtBQUhYLENBQWY7QUFLZXJHLHFFQUFmLEU7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQXNHLDREQUFBLENBQVk7QUFDUkMsUUFBTSxFQUFFLGVBREE7QUFFUkMsV0FBUyxFQUFFO0FBRkgsQ0FBWjtBQUtlLE1BQU1DLGNBQU4sQ0FBcUI7QUFFaENDLFlBQVUsR0FBRztBQUNULFdBQU8sQ0FBQyxDQUFDSiw0REFBQSxDQUFZSyxhQUFaLEVBQVQ7QUFDSDs7QUFFRFYsT0FBSyxDQUFDVyxJQUFELEVBQU87QUFDUixXQUFPTiw0REFBQSxDQUFZTCxLQUFaLENBQWtCVyxJQUFJLENBQUNDLEtBQXZCLEVBQThCRCxJQUFJLENBQUNFLFFBQW5DLENBQVA7QUFDSDs7QUFFREMsUUFBTSxHQUFHO0FBQ0wsV0FBT1QsNERBQUEsQ0FBWVMsTUFBWixFQUFQO0FBQ0g7O0FBRURDLFVBQVEsQ0FBQ0osSUFBRCxFQUFPO0FBQ1gsV0FBT04sNERBQUEsQ0FBWVcsTUFBWixDQUFtQjtBQUFFQyxjQUFRLEVBQUVOLElBQUksQ0FBQ0MsS0FBakI7QUFBd0JDLGNBQVEsRUFBRUYsSUFBSSxDQUFDRTtBQUF2QyxLQUFuQixDQUFQO0FBQ0g7O0FBaEIrQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cblxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiXCIgY2xhc3M9XCJhY3Rpb24tYmFyIGhlYWRlclwiICBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjpibGFjazsnPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIGhlaWdodD1cIjM4XCIgYWxpZ25JdGVtcz1cImxlZnRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYWN0aW9uQmFyQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiSExlZnRcIiBzdHlsZT1cIm1hcmdpbi10b3A6MTA7XCIgQHRhcD1cInRvZ2dsZURyYXdlcigpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImRyYXdlclRvZ2dsZSA/IGRyYXdlcjI6IGRyYXdlcjFcIiBzdHlsZT1cImZvbnQtc2l6ZToyNztjb2xvcjojZmZmO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQtYXdlc29tZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIkhNaWRcIiBhbGlnbkl0ZW1zPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJIUmlnaHRcIj5cblxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L0FjdGlvbkJhcj5cblxuICAgICAgICA8UmFkU2lkZURyYXdlciByZWY9XCJkcmF3ZXJcIiBAZHJhd2VyT3BlbmVkPVwib25EcmF3ZXJPcGVuZWQoKVwiXG4gICAgICAgICAgICBAZHJhd2VyQ2xvc2VkPVwib25EcmF3ZXJDbG9zZWQoKVwiPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IH5kcmF3ZXJDb250ZW50IGJhY2tncm91bmRDb2xvcj1cIiNlZWVcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibmFtZVwiIHBhZGRpbmdMZWZ0PVwiMzAlXCIgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRyYXdlckl0ZW1UZXh0IGZvbnQtYXdlc29tZVwiIG1hcmdpbj1cIjEwXCIvPlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGhlaWdodD1cIjgwJVwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwi74KLICBMb2cgb3V0XCIgcGFkZGluZ0xlZnQ9XCIzMCVcIiBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJhd2VySXRlbVRleHQgZm9udC1hd2Vzb21lXCIgbWFyZ2luPVwiMTBcIiBAdGFwPVwibG9nb3V0XCIvPlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgfm1haW5Db250ZW50PlxuXG4gICAgICAgICAgICAgICAgPERvY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGRvY2s9XCJ0b3BcIiBoZWlnaHQ9XCI5MCVcIiB3aWR0aD1cIjEwMCVcIiBzdHlsZT1cIlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkTGlzdFZpZXcgcmVmPVwibGlzdFZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cIm5vdGUgaW4gbm90ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1bGxUb1JlZnJlc2g9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIiBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjRThFOEU4XCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsaXN0Vmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHB1bGxUb1JlZnJlc2hJbml0aWF0ZWQ9XCJvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBwYWRkaW5nVG9wPVwiNVwiIGJhY2tncm91bmRDb2xvcj1cIiNFOEU4RThcIiA6aWQ9XCJub3RlLmlkXCIgQHRhcD1cInNlbGVjdE5vdGUobm90ZS5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm5vdGVDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZz1cIjEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm5vdGUudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicG9zdEF1dGhvdE5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiKCtub3RlLmRpc3RhbmNlICogMTAwKS50b0ZpeGVkKDMpICsnIG1ldGVycyBhd2F5J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwb3N0RGF0ZVNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkTGlzdFZpZXc+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBkb2NrPVwiYm90dG9tXCIgaGVpZ2h0PVwiMTAlXCIgc3R5bGU9XCJib3JkZXItY29sb3I6I0U0RTRFNDtib3JkZXItd2lkdGg6MTtiYWNrZ3JvdW5kOiNmZmY7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIqLCAqXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVwiMFwiIGNsYXNzPVwibmF2SXRlbVwiIEB0YXA9XCJnb1RvTG9naW4oKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlwiIGFuZHJvaWQ6Y2xhc3M9XCJub3RpZmljYXRpb25BbmRyb2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvczpjbGFzcz1cIm5vdGlmaWNhdGlvblwiIG9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCLvh6pcIiA6Y29sb3I9XCJtYWluQ29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kcm9pZDpzdHlsZT1cImZvbnQtc2l6ZToxODttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb3M6c3R5bGU9XCJmb250LXNpemU6MzA7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb250LWF3ZXNvbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkxvZ2luXCIgc3R5bGU9XCJmb250LXNpemU6MTA7XCIgOmNvbG9yPVwibWFpbkNvbG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIxXCIgY2xhc3M9XCJuYXZJdGVtXCIgQHRhcD1cInBvc3RUYXAoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cImRmXCIgYW5kcm9pZDpjbGFzcz1cIm5vdGlmaWNhdGlvbkFuZHJvaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9zOmNsYXNzPVwibm90aWZpY2F0aW9uXCIgb3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIu+BhFwiIGFuZHJvaWQ6c3R5bGU9XCJmb250LXNpemU6MTg7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9zOnN0eWxlPVwiZm9udC1zaXplOjMwO21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1hd2Vzb21lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJDbGVhclwiIHN0eWxlPVwiZm9udC1zaXplOjEwO1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgPC9Eb2NrTGF5b3V0PlxuXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L1JhZFNpZGVEcmF3ZXI+XG5cbiAgICA8L3BhZ2U+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICAvL2dldCBleHRlcm5hbCBwYWdlcyBhbmQgcGx1Z2luc1xuICAgIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xuICAgIGltcG9ydCBQb3N0IGZyb20gXCIuL1Bvc3RcIjtcbiAgICBpbXBvcnQgTm90ZURldGFpbHMgZnJvbSBcIi4vTm90ZURldGFpbHNcIjtcblxuICAgIGNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKFwiaHR0cFwiKTtcbiAgICBjb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuICAgIGltcG9ydCAqIGFzIEdlb2xvY2F0aW9uIGZyb20gJ25hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvbic7XG4gICAgcmVxdWlyZSAoXCJuYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9uc1wiKTtcbiAgICBpbXBvcnQgeyBMb2NhbE5vdGlmaWNhdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnNcIjtcblxuICAgIExvY2FsTm90aWZpY2F0aW9ucy5oYXNQZXJtaXNzaW9uKCk7XG4gICAgdmFyIHV0aWxzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIik7XG5cblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIC8vb24gY3JlYXRpb24gZW5zdXJlIHRoZSB1c2VyIGhhcyBncHMgZW5hYmxlZCBvdGhlcndpc2UgdGhlIGFwcCB3aWxsIGNyYXNoXG4gICAgICAgICAgICBHZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QodHJ1ZSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBHZW9sb2NhdGlvbi5pc0VuYWJsZWQoKS50aGVuKGlzTG9jYXRpb25FbmFibGVkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdCBpcyAnK2lzTG9jYXRpb25FbmFibGVkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWlzTG9jYXRpb25FbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lZWRMb2NhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbkZhaWx1cmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG90ZW50aWFsbHkgZG8gbW9yZSB0aGVuIGp1c3QgZW5kIGhlcmUuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE1VU1QgcGFzcyBlbXB0eSBvYmplY3QhIVxuICAgICAgICAgICAgICAgICAgICBHZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oe30pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jIHJlc3VsdCcsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lZWRMb2NhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2EgZGVsYXkgaXMgaXMgbmVlZGVkIHRvIHJ1biB0aGUgaW5pdGFsIHN0YXJ0aW5nIGZ1bmN0aW9uIGR1ZSB0byBuYXRpdmVzY3JpcHQgYnVnXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3RhcnQoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5lZWRMb2NhdGlvbjp0cnVlLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uRmFpbHVyZTpmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjpudWxsLFxuICAgICAgICAgICAgICAgIGRyYXdlclRvZ2dsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZHJhd2VyMTogXCLvhYJcIixcbiAgICAgICAgICAgICAgICBkcmF3ZXIyOiBcIu+FgVwiLFxuICAgICAgICAgICAgICAgIG1haW5Db2xvcjogXCIjMWFhM2ZmXCIsXG4gICAgICAgICAgICAgICAgQVBJVVJMOiBcIlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6XCJcIixcbiAgICAgICAgICAgICAgICBpbmRleDogJ2xpc3QnLFxuICAgICAgICAgICAgICAgIG5vdGVzOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uU3RhcnQoKXtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3ROb3RlKGlkKXtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXROb3Rlcygpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiam9iIGhhcyBiZWVuIHNjaGVkdWxlZCAhXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVKb2IoKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVkdWxlSm9iKCkge1xuXG4gICAgICAgICAgICAgICAgLy9zY2hlZHVsZSBhIGJhY2tncm91bmQgam9iIGV2ZXJ5IDE1bWluc1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB1dGlscy5hZC5nZXRBcHBsaWNhdGlvbkNvbnRleHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgYW5kcm9pZC5jb250ZW50LkNvbXBvbmVudE5hbWUoY29udGV4dCwgY29tLnRucy5jb21wb25lbnRzLm5vdGlmaWNhdGlvbnMuTXlKb2JTZXJ2aWNlLmNsYXNzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wb25lbnQpXG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGlkIG9mIHRoZSBqb2IgdG8gc29tZXRoaW5nIG1lYW5pbmdmdWwgZm9yIHlvdVxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1aWxkZXIgPSBuZXcgYW5kcm9pZC5hcHAuam9iLkpvYkluZm8uQnVpbGRlcigxLCBjb21wb25lbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gT3B0aW9uYWw6IFNldCBob3cgb2Z0ZW4gdGhlIHRhc2sgc2hvdWxkIGJlIHRyaWdnZXJlZC4gVGhlIG1pbmltdW0gaXMgMTVtaW4uXG4gICAgICAgICAgICAgICAgYnVpbGRlci5zZXRQZXJpb2RpYygxNSAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gT3B0aW9uYWw6IFNldCBhZGRpdGlvbmFsIHJlcXVpcmVtZW50cyB1bmRlciB3aGF0IGNvbmRpdGlvbnMgeW91ciBqb2Igc2hvdWxkIGJlIHRyaWdnZXJlZFxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuc2V0UmVxdWlyZXNDaGFyZ2luZyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBqb2JTY2hlZHVsZXIgPSBjb250ZXh0LmdldFN5c3RlbVNlcnZpY2UoYW5kcm9pZC5jb250ZW50LkNvbnRleHQuSk9CX1NDSEVEVUxFUl9TRVJWSUNFKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkpvYiBTY2hlZHVsZWQ6IFwiICsgam9iU2NoZWR1bGVyLnNjaGVkdWxlKGJ1aWxkZXIuYnVpbGQoKSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZCh7IG9iamVjdCB9KSB7XG4gICAgICAgICAgICAgICAgLy90aGlzIG1ldGhvZCByZWxvYWRzIHRoZSBsaXN0IG9mIG5vdGVzIHdoZW4gdGhleSBwdWxsIGRvd24gb24gdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIG5vdGVzXG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Tm90ZXMoKTtcblxuICAgICAgICAgICAgICAgICAgICBvYmplY3Qubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25EcmF3ZXJDbG9zZWQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3ZXJUb2dnbGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkRyYXdlck9wZW5lZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdlclRvZ2dsZSA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlRHJhd2VyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZHJhd2VyLm5hdGl2ZVZpZXcudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBob21lVGFwKCkge30sXG4gICAgICAgICAgICBwb3N0VGFwKCkge1xuICAgICAgICAgICAgICAgIC8vbmF2aWdhdGlvbiBob21lIGJ1dHRvbiBjbGlja2VkXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhQb3N0LCB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9nb3V0KCkge1xuICAgICAgICAgICAgICAgIC8vbG9nb3V0IG9mIHRoZSBjdXJyZW50IHVzZXJcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9Mb2dpbigpIHtcbiAgICAgICAgICAgICAgICAvL2xvZ291dCBvZiB0aGUgY3VycmVudCB1c2VyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93RGV0YWlscygpIHt9XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCIgPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzcz1cImxvZ29cIiBzcmM9XCJ+L2ltYWdlcy9sb2dvLnBuZ1wiPjwvSW1hZ2U+XG5cbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiYXV0b1wiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIxXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIkVtYWlsXCIgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJlbWFpbFwiIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCIgQHJldHVyblByZXNzPVwicmVzZXRcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igcm93U3Bhbj1cIjNcIiA6YnVzeT1cInByb2Nlc3NpbmdcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlJlc2V0XCIgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgQHRhcD1cInJlc2V0XCIgY2xhc3M9XCJidG4gYnRuLWRhcmsgbS10LTIwXCI+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPExhYmVsICp2LXNob3c9XCJpc0xvZ2dpbmdJblwiIHRleHQ9XCJHbyBCYWNrIHRvIExvZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsb2dpbi1sYWJlbFwiIEB0YXA9XCJiYWNrVG9Mb2dpbigpXCI+PC9MYWJlbD5cblxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICAvL2dldCBhbGwgZXh0ZXJuYWwgcGFnZXMgYW5kIHBsdWdpbnNcbiAgICBpbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcblxuICAgIGNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKFwiaHR0cFwiKTtcbiAgICBjb25zdCBkaWFsb2dzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbiAgICBjb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG4gICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdhcHBVUkwnLFwiaHR0cDovLzE5Mi4xNjguMC4xMTI6ODAwMFwiKTsgLy9odHRwczovL0xvTm90ZS50c2VydGVjLmlvICwgaHR0cDovLzE5Mi4xNjguMC44Mzo4MDAwXG5cblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nSW46IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFRva2VuOlwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25TdGFydCgpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25TdGFydCgpe1xuICAgICAgICAgICAgfSxcblxuXG4gICAgICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9nZXQgYWxsIHN0b3JlZCB2YXJpYWJsZXMgZnJvbSB0aGUgbG9naW4gc2Vzc2lvblxuICAgICAgICAgICAgICAgICAgICB2YXIgYXBwVVJMID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCdhcHBVUkwnKTtcblxuICAgICAgICAgICAgICAgICAgICAvL21ha2UgYSByZXF1ZXN0IHRvIHRoZSBhcGkgc2VydmVyXG4gICAgICAgICAgICAgICAgICAgIGh0dHBNb2R1bGUucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGFwcFVSTCsnL2FwaS9yZXNldC1wYXNzd29yZCcsLy9cImh0dHA6Ly8xOTIuMTY4LjAuODM6ODAwMC9hcGkvbG9naW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDIwMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdWNjZXNzLCBhbGVydCB0aGUgdXNlcnIgdG8gY2hlY2sgdGhlcmUgZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgncGxlYXNlIGNoZWNrIHlvdXIgZW1haWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZmFpbCwgYWxlcnQgdGhlIHVzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnRW1haWwgZG9lcyBub3QgZXhpc3Qgb3IgdG8gbWFueSByZXF1ZXN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZ2VuZXJhbCBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYWNrVG9Mb2dpbigpIHtcbiAgICAgICAgICAgICAgICAvL2dvIGJhY2sgdG8gdGhlIGxvZ2luIHNjcmVlblxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTG9naW4pO1xuICAgICAgICAgICAgfSxcblxuXG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLnBhZ2Uge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5mb3JtIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwO1xuICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMjtcbiAgICAgICAgaGVpZ2h0OiA5MDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyNTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNENTFBMUE7XG4gICAgfVxuXG4gICAgLmlucHV0LWZpZWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjU7XG4gICAgfVxuXG4gICAgLmlucHV0IHtcbiAgICAgICAgZm9udC1zaXplOiAxODtcbiAgICAgICAgcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7XG4gICAgfVxuXG4gICAgLmlucHV0OmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG5cbiAgICAuYnRuLXByaW1hcnkge1xuICAgICAgICBtYXJnaW46IDMwIDUgMTUgNTtcbiAgICB9XG5cbiAgICAubG9naW4tbGFiZWwge1xuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjQThBOEE4O1xuICAgICAgICBmb250LXNpemU6IDE2O1xuICAgIH1cblxuICAgIC5zaWduLXVwLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjA7XG4gICAgfVxuXG4gICAgLmJvbGQge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxuXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJcIiBjbGFzcz1cImFjdGlvbi1iYXIgaGVhZGVyXCIgIHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrOyc+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgaGVpZ2h0PVwiMzhcIiBhbGlnbkl0ZW1zPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhY3Rpb25CYXJDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJITGVmdFwiIHN0eWxlPVwibWFyZ2luLXRvcDoxMDtcIiBAdGFwPVwidG9nZ2xlRHJhd2VyKClcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZHJhd2VyVG9nZ2xlID8gZHJhd2VyMjogZHJhd2VyMVwiIHN0eWxlPVwiZm9udC1zaXplOjI3O2NvbG9yOiNmZmY7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1hd2Vzb21lXCIgLz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiSE1pZFwiIGFsaWduSXRlbXM9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIkhSaWdodFwiPlxuXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuXG4gICAgICAgIDxSYWRTaWRlRHJhd2VyIHJlZj1cImRyYXdlclwiIEBkcmF3ZXJPcGVuZWQ9XCJvbkRyYXdlck9wZW5lZCgpXCJcbiAgICAgICAgICAgIEBkcmF3ZXJDbG9zZWQ9XCJvbkRyYXdlckNsb3NlZCgpXCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgfmRyYXdlckNvbnRlbnQgYmFja2dyb3VuZENvbG9yPVwiI2VlZVwiPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJuYW1lXCIgcGFkZGluZ0xlZnQ9XCIzMCVcIiBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJhd2VySXRlbVRleHQgZm9udC1hd2Vzb21lXCIgbWFyZ2luPVwiMTBcIi8+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgaGVpZ2h0PVwiODAlXCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJCYWNrZ3JvdW5kXCIgcGFkZGluZ0xlZnQ9XCIzMCVcIiBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJhd2VySXRlbVRleHQgZm9udC1hd2Vzb21lXCIgbWFyZ2luPVwiMTBcIiBAdGFwPVwiYmFja2dyb3VuZFRhcFwiLz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIu+CiyAgTG9nIG91dFwiIHBhZGRpbmdMZWZ0PVwiMzAlXCIgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRyYXdlckl0ZW1UZXh0IGZvbnQtYXdlc29tZVwiIG1hcmdpbj1cIjEwXCIgQHRhcD1cImxvZ291dFwiLz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IH5tYWluQ29udGVudD5cblxuICAgICAgICAgICAgICAgIDxEb2NrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBkb2NrPVwidG9wXCIgaGVpZ2h0PVwiOTAlXCIgd2lkdGg9XCIxMDAlXCIgc3R5bGU9XCJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZExpc3RWaWV3IHJlZj1cImxpc3RWaWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJub3RlIGluIG5vdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWxsVG9SZWZyZXNoPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCIgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiI0U4RThFOFwiIHNlcGFyYXRvckNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGlzdFZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBwdWxsVG9SZWZyZXNoSW5pdGlhdGVkPVwib25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcGFkZGluZ1RvcD1cIjVcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRThFOEU4XCIgOmlkPVwibm90ZS5pZFwiIEB0YXA9XCJzZWxlY3ROb3RlKG5vdGUuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJub3RlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9XCIxMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJub3RlLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInBvc3RBdXRob3ROYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIigrbm90ZS5kaXN0YW5jZSAqIDEwMCkudG9GaXhlZCgzKSArJyBtZXRlcnMgYXdheSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicG9zdERhdGVTbWFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhZExpc3RWaWV3PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgZG9jaz1cImJvdHRvbVwiIGhlaWdodD1cIjEwJVwiIHN0eWxlPVwiYm9yZGVyLWNvbG9yOiNFNEU0RTQ7Ym9yZGVyLXdpZHRoOjE7YmFja2dyb3VuZDojZmZmO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiKiwgKlwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjBcIiBjbGFzcz1cIm5hdkl0ZW1cIiBAdGFwPVwiaG9tZVRhcCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiXCIgYW5kcm9pZDpjbGFzcz1cIm5vdGlmaWNhdGlvbkFuZHJvaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9zOmNsYXNzPVwibm90aWZpY2F0aW9uXCIgb3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIu+HqlwiIDpjb2xvcj1cIm1haW5Db2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmRyb2lkOnN0eWxlPVwiZm9udC1zaXplOjE4O21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvczpzdHlsZT1cImZvbnQtc2l6ZTozMDttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQtYXdlc29tZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiSG9tZVwiIHN0eWxlPVwiZm9udC1zaXplOjEwO1wiIDpjb2xvcj1cIm1haW5Db2xvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVwiMVwiIGNsYXNzPVwibmF2SXRlbVwiIEB0YXA9XCJwb3N0VGFwKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJkZlwiIGFuZHJvaWQ6Y2xhc3M9XCJub3RpZmljYXRpb25BbmRyb2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvczpjbGFzcz1cIm5vdGlmaWNhdGlvblwiIG9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCLvgYRcIiBhbmRyb2lkOnN0eWxlPVwiZm9udC1zaXplOjE4O21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvczpzdHlsZT1cImZvbnQtc2l6ZTozMDttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQtYXdlc29tZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiQWRkIE5vdGVcIiBzdHlsZT1cImZvbnQtc2l6ZToxMDtcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgIDwvRG9ja0xheW91dD5cblxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPC9SYWRTaWRlRHJhd2VyPlxuXG4gICAgPC9wYWdlPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgLy9nZXQgZXh0ZXJuYWwgcGFnZXMgYW5kIHBsdWdpbnNcbiAgICBpbXBvcnQgQmFja2dyb3VuZCBmcm9tIFwiLi9CYWNrZ3JvdW5kXCI7XG4gICAgaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XG4gICAgaW1wb3J0IFBvc3QgZnJvbSBcIi4vUG9zdFwiO1xuICAgIGltcG9ydCBOb3RlRGV0YWlscyBmcm9tIFwiLi9Ob3RlRGV0YWlsc1wiO1xuXG4gICAgY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoXCJodHRwXCIpO1xuICAgIGNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG4gICAgaW1wb3J0ICogYXMgR2VvbG9jYXRpb24gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGxvY2F0aW9uOntcbiAgICAgICAgICAgICAgICAvL2lmIGdwcyBsb2NhdGlvbiBjaGFuZ2VzIHJlbG9hZCB0aGUgbm90ZXMgbGlzdCwgZGVlcCB3YXRjaGVyIGlzIG5lZWRlZFxuICAgICAgICAgICAgICAgIGRlZXA6dHJ1ZSxcblxuICAgICAgICAgICAgICAgIGhhbmRsZXIoKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZSBncHMgbG9jYXRpb24gaGFzIGNoYW5nZWQsIG5vdGVzIGxpc3QgcmVsb2FkJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXROb3RlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIC8vb24gY3JlYXRpb24gZW5zdXJlIHRoZSB1c2VyIGhhcyBncHMgZW5hYmxlZCBvdGhlcndpc2UgdGhlIGFwcCB3aWxsIGNyYXNoXG4gICAgICAgICAgICBHZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QodHJ1ZSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBHZW9sb2NhdGlvbi5pc0VuYWJsZWQoKS50aGVuKGlzTG9jYXRpb25FbmFibGVkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdCBpcyAnK2lzTG9jYXRpb25FbmFibGVkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWlzTG9jYXRpb25FbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lZWRMb2NhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbkZhaWx1cmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG90ZW50aWFsbHkgZG8gbW9yZSB0aGVuIGp1c3QgZW5kIGhlcmUuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE1VU1QgcGFzcyBlbXB0eSBvYmplY3QhIVxuICAgICAgICAgICAgICAgICAgICBHZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oe30pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jIHJlc3VsdCcsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lZWRMb2NhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2EgZGVsYXkgaXMgaXMgbmVlZGVkIHRvIHJ1biB0aGUgaW5pdGFsIHN0YXJ0aW5nIGZ1bmN0aW9uIGR1ZSB0byBuYXRpdmVzY3JpcHQgYnVnXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3RhcnQoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5lZWRMb2NhdGlvbjp0cnVlLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uRmFpbHVyZTpmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjpudWxsLFxuICAgICAgICAgICAgICAgIGRyYXdlclRvZ2dsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZHJhd2VyMTogXCLvhYJcIixcbiAgICAgICAgICAgICAgICBkcmF3ZXIyOiBcIu+FgVwiLFxuICAgICAgICAgICAgICAgIG1haW5Db2xvcjogXCIjMWFhM2ZmXCIsXG4gICAgICAgICAgICAgICAgQVBJVVJMOiBcIlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6XCJcIixcbiAgICAgICAgICAgICAgICBpbmRleDogJ2xpc3QnLFxuICAgICAgICAgICAgICAgIG5vdGVzOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uU3RhcnQoKXtcbiAgICAgICAgICAgICAgICAvL3RoaXMgaXMgdGhlIGZpcnN0IG1ldGhvZCB0byBiZSBleGVjdXRlZCBvbiB0aGUgYXBwIHN0YXJ0aW5nXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCduYW1lJywnJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0Tm90ZShpZCl7XG4gICAgICAgICAgICAgICAgLy90aGUgc2VsZWN0ZWQgbm90ZSBpcyBzdG9yZWQgaW4gdGhlIGFwcHNldHRpbmdzIGZvciBsYXRlciBcbiAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXROdW1iZXIoJ3NlbGVjdGVkTm90ZScsaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTm90ZURldGFpbHMsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldE5vdGVzKCl7XG4gICAgICAgICAgICAgICAgLy9tYWtlIGEgcmVxdWVzdCB0byB0aGUgYXBpIHNlcnZlciBhbmQgZ2V0IGFsbCB0aGUgbm90ZXMgaW4gdGhlIGFyZWFcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0dGluZyBub3RlcycpO1xuICAgICAgICAgICAgICAgIC8vZ2V0IGFsbCBzdG9yZWQgdmFyaWFibGVzIGZyb20gdGhlIGxvZ2luIHNlc3Npb25cbiAgICAgICAgICAgICAgICB2YXIgdXNlclRva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCd1c2VyVG9rZW4nLDApO1xuICAgICAgICAgICAgICAgIHZhciBhcHBVUkwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ2FwcFVSTCcsMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5BUElVUkwgPSBhcHBVUkw7XG5cbiAgICAgICAgICAgICAgICAvL2RlYnVnaW5nIHNob3cgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXBwVVJMKycvYXBpL25vdGVzP2xhdD0nK3RoaXMubG9jYXRpb24ubGF0aXR1ZGUrJyZsbmc9Jyt0aGlzLmxvY2F0aW9uLmxvbmdpdHVkZSk7XG5cbiAgICAgICAgICAgICAgICAvL3NlbmQgcmVxdWVzdCB0byBhcGkgc2VydmVyXG4gICAgICAgICAgICAgICAgaHR0cE1vZHVsZS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBhcHBVUkwrJy9hcGkvbm90ZXM/bGF0PScrdGhpcy5sb2NhdGlvbi5sYXRpdHVkZSsnJmxuZz0nK3RoaXMubG9jYXRpb24ubG9uZ2l0dWRlLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIrdXNlclRva2VuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9cmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RlcyA9IHJlc3VsdC5ub3RlcztcblxuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQoeyBvYmplY3QgfSkge1xuICAgICAgICAgICAgICAgIC8vdGhpcyBtZXRob2QgcmVsb2FkcyB0aGUgbGlzdCBvZiBub3RlcyB3aGVuIHRoZXkgcHVsbCBkb3duIG9uIHRoZSBsaXN0IG9mIGF2YWlsYWJsZSBub3Rlc1xuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE5vdGVzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRHJhd2VyQ2xvc2VkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2VyVG9nZ2xlID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25EcmF3ZXJPcGVuZWQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3ZXJUb2dnbGUgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZURyYXdlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmRyYXdlci5uYXRpdmVWaWV3LnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG9tZVRhcCgpIHt9LFxuICAgICAgICAgICAgcG9zdFRhcCgpIHtcbiAgICAgICAgICAgICAgICAvL25hdmlnYXRpb24gaG9tZSBidXR0b24gY2xpY2tlZFxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUG9zdCwge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhY2tncm91bmRUYXAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhCYWNrZ3JvdW5kLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvZ291dCgpIHtcbiAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5yZW1vdmUoJ3VzZXJUb2tlbicpO1xuICAgICAgICAgICAgICAgIC8vbG9nb3V0IG9mIHRoZSBjdXJyZW50IHVzZXJcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dEZXRhaWxzKCkge31cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIiA+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzPVwibG9nb1wiIHNyYz1cIn4vaW1hZ2VzL2xvZ28ucG5nXCI+PC9JbWFnZT5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLCBhdXRvLCBhdXRvLCBhdXRvLCBhdXRvLCBhdXRvXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjBcIiB2LXNob3c9XCIhaXNMb2dnaW5nSW5cIiAgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIk5hbWVcIiA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cInRleHRcIiBhdXRvY29ycmVjdD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiIHYtbW9kZWw9XCJ1c2VyLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjFcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiRW1haWxcIiA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cImVtYWlsXCIgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIiB2LW1vZGVsPVwidXNlci5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIiBAcmV0dXJuUHJlc3M9XCJmb2N1c1Bhc3N3b3JkXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjJcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiByZWY9XCJwYXNzd29yZFwiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmV0dXJuS2V5VHlwZT1cImlzTG9nZ2luZ0luID8gJ2RvbmUnIDogJ25leHQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcmV0dXJuUHJlc3M9XCJmb2N1c0NvbmZpcm1QYXNzd29yZFwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIzXCIgdi1zaG93PVwiIWlzTG9nZ2luZ0luXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgcmVmPVwiY29uZmlybVBhc3N3b3JkXCIgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiQ29uZmlybSBwYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIiB2LW1vZGVsPVwidXNlci5jb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJkb25lXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XCIzXCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ0xvZyBJbicgOiAnU2lnbiBVcCdcIiA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIlxuICAgICAgICAgICAgICAgICAgICBAdGFwPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRhcmsgbS10LTIwXCI+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPExhYmVsICp2LXNob3c9XCJpc0xvZ2dpbmdJblwiIHRleHQ9XCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvZ2luLWxhYmVsXCIgQHRhcD1cImZvcmdvdFBhc3N3b3JkKClcIj48L0xhYmVsPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiIEB0YXA9XCJ0b2dnbGVGb3JtXCI+XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdEb27igJl0IGhhdmUgYW4gYWNjb3VudD8gJyA6ICdCYWNrIHRvIExvZ2luJ1wiPjwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdTaWduIHVwJyA6ICcnXCIgY2xhc3M9XCJib2xkXCI+PC9TcGFuPlxuICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgPC9MYWJlbD5cblxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiIEB0YXA9XCJjaGFuZ2VBUElcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICA8U3Bhbj5DaGFuZ2UgdGhlIGRlZmF1bHQgQVBJIHNlcnZlciA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiYm9sZFwiPkNoYW5nZTwvU3Bhbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDwvRmxleGJveExheW91dD5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIC8vZ2V0IGV4dGVybmFsIHBhZ2VzIGFuIHBsdWdpbnNcbiAgICBpbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG4gICAgaW1wb3J0IEZvcmdvdFBhc3N3b3JkIGZyb20gXCIuL0ZvcmdvdFBhc3N3b3JkXCI7XG4gICAgY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoXCJodHRwXCIpO1xuICAgIGNvbnN0IGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xuICAgIGNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbiAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ2FwcFVSTCcsXCJodHRwOi8vMTkyLjE2OC4wLjExMjo4MDAwXCIpOyAvL2h0dHBzOi8vTG9Ob3RlLnRzZXJ0ZWMuaW8gLCBodHRwOi8vMTkyLjE2OC4wLjgzOjgwMDBcblxuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmb3Jnb3RFbWFpbDogXCJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFRva2VuOlwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBydW4gdGhlIG9uc3RhcnQgbWV0aG9kIGFmdGVyIHRoZSBhcHAgaXMgcmVhZHkgKG5hdGl2ZXNjcmlwdCBidWcpXG4gICAgICAgICAgICAgICAgdGhpcy5vblN0YXJ0KCk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvblN0YXJ0KCl7XG4gICAgICAgICAgICAgICAgdmFyIHRva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCd1c2VyVG9rZW4nKTtcbiAgICAgICAgICAgICAgICBpZih0b2tlbiA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgaWYodG9rZW4ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY2hhbmdlQVBJKCl7XG4gICAgICAgICAgICAgICAgLy90aGlzIG1ldGhvZCBhbGxvd3MgeW91IHRvIGNoYW5nZSB0aGUgZGVmYXVsdCBhcGkgdXJsIGZyb20gdGhlIGFwcFxuICAgICAgICAgICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJBUEkgc2VydmVyIFVSTFwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOlwicGxlYXNlIHByb3ZpZGUgdGhlIHVybCB0byB0aGUgYXBpIHNlcnZlclwiLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRUZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXG4gICAgICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdhcHBVUkwnLGRhdGEudGV4dCk7Zm9yZ290UGFzc3dvcmRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVGb3JtKCkge1xuICAgICAgICAgICAgICAgIC8vc3dpdGNoIGJldHdlZW4gbG9naW4gZm9ybWEgbmQgc2lnbnVwIGZvcnJtXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc3VibWl0KCkge1xuXG4gICAgICAgICAgICAgICAgLy90aGVuIHRoZSBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrIGRldGVjdCBpZiBpdHMgZm9yIHRoZSBsb2dpbiBvciBzaWdudXAgZm9ybVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsIHx8ICF0aGlzLnVzZXIucGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vcm91dGUgdG8gdGhlIGFwcHJvcHJpYXRlIG1ldGhvZFxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBsb2dpbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9nZXQgdGhlIGFwIHNlcnZlciB1cmxcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFwcFVSTCA9IGFwcFNldHRpbmdzLmdldFN0cmluZygnYXBwVVJMJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9zZW5kIGEgcmVxdWVzdCB0byB0aGUgYXBpIHNlcnZlciB3aXRoIHRoZSBsb2dpbiBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICBodHRwTW9kdWxlLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBhcHBVUkwrJy9hcGkvbG9naW4nLC8vXCJodHRwOi8vMTkyLjE2OC4wLjgzOjgwMDAvYXBpL2xvZ2luXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDIwMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9nb29kIGxvZ2luLCByZWRpcmVjdCB0byB0aGUgaG9tZSBwYWdlIGFmdGVyIHNhdmluZyB0aGUgYXBwIHNldHRpbmdzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZygndXNlclRva2VuJyxyZXN1bHQuc3VjY2Vzcy50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCduYW1lJyxyZXN1bHQuc3VjY2Vzcy51c2VyLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldE51bWJlcigndXNlcmlkJyxyZXN1bHQuc3VjY2Vzcy51c2VyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ2VtYWlsJyxyZXN1bHQuc3VjY2Vzcy51c2VyLmVtYWlsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gNDAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZhaWxlZCBsb2duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RoZSBsb2dpbiBkZXRhaWxzIHlvdSBoYXZlIHByb3ZpZGVkIGFyZSBub3QgY29ycmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdW5rb3duIGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1VuZXhwZWN0ZWQgZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgYWxsIHRoZSB2YWxpZGF0aW9uIHJ1bGVzIGFyZSBjb3JyZWN0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlci5wYXNzd29yZCAhPSB0aGlzLnVzZXIuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vcGFzc3dvcmRzIGRvIG5vdCBtYXRjaFxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy51c2VyLnBhc3N3b3JkLmxlbmd0aCA8PTcgKXtcbiAgICAgICAgICAgICAgICAgICAgLy9wYXNzd29yZCBsZXNzIHRoYW4gOCBjaGFyc1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgcGFzc3dvcmQgbXVzdCBiZSBhdGxlYXNlIDggY2hhcmFjdGVyc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZighdGhpcy51c2VyLm5hbWUpe1xuICAgICAgICAgICAgICAgICAgICAvL21pc3NpbmcgZmllbHNcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2FsbCBmaWVsZHMgYXJlIHJlcXVpcmVkLicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2dldCBhcGkgc2VydmVyIHVybFxuICAgICAgICAgICAgICAgIHZhciBhcHBVUkwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ2FwcFVSTCcpO1xuXG4gICAgICAgICAgICAgICAgLy9tYWtlIGEgcmVxdWVzdCB0byB0aGUgYXBpIHNlcnZlciBmb3IgcmVnaXN0ZXJpbmcgdGhlIHVzZXJcbiAgICAgICAgICAgICAgICBodHRwTW9kdWxlLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGFwcFVSTCsnL2FwaS9yZWdpc3RlcicsLy9cImh0dHA6Ly8xOTIuMTY4LjAuODM6ODAwMC9hcGkvbG9naW5cIixcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy51c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNfcGFzc3dvcmQ6IHRoaXMudXNlci5jb25maXJtUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5jb250ZW50LnRvSlNPTigpKTtcblxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9nb29kIHJlZ2lzdHJhdGlvbiwgYWxlcnQgdGhlIHVzZXIgdG8gY2hlY2sgdGhlcmUgZW1haWxcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSB2ZXJpZnkgeW91ciBlbWFpbCB0byBsb2dpbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gNDIyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZmFpbGVkIHJlZ2lzdHJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RoZSBmb2xsb3dpbmcgZXJyb3IgaGFwcGVuZWQgVXNlcm5hbWUgb3IgZW1haWwgYWxyZWFkeSB0YWtlbiBvciBwYXNzd29yZCBsZW5ndGggaXMgdG8gc2hvcnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnVW5leHBlY3RlZCBlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgICAgICAgICAgICAgLy9yZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgZm9yZ290IHBhc3N3b3JkIHNjcmVlblxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGFzc3dvcmQubmF0aXZlVmlldy5mb2N1cygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xuICAgICAgICAgICAgICAgIC8vbmV4dCBidXR0b24gb24ga2V5Ym9hcmQgY2xpY2tlZCwgZm9jdXMgb24gY29uZmlybSBwYXNzd29yZCBmaWVsZFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcmdvdFBhc3N3b3JkKCkge1xuICAgICAgICAgICAgICAgIC8vbmV4dCBidXR0b24gb24ga2V5Ym9hcmQgY2xpY2tlZCAsZm9jdXMgb24gcGFzc3dvcmQgZmllbGRcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEZvcmdvdFBhc3N3b3JkKTtcbiAgICAgICAgICAgIH0sXG5cblxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIC5wYWdlIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuZm9ybSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMDtcbiAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTI7XG4gICAgICAgIGhlaWdodDogOTA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDcwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjRDUxQTFBO1xuICAgIH1cblxuICAgIC5pbnB1dC1maWVsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1O1xuICAgIH1cblxuICAgIC5pbnB1dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTg7XG4gICAgICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjQThBOEE4O1xuICAgIH1cblxuICAgIC5pbnB1dDpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuXG4gICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgbWFyZ2luOiAzMCA1IDE1IDU7XG4gICAgfVxuXG4gICAgLmxvZ2luLWxhYmVsIHtcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI0E4QThBODtcbiAgICAgICAgZm9udC1zaXplOiAxNjtcbiAgICB9XG5cbiAgICAuc2lnbi11cC1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwO1xuICAgIH1cblxuICAgIC5ib2xkIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cblxuXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJcIiBjbGFzcz1cImFjdGlvbi1iYXIgaGVhZGVyXCIgIHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrOyc+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgaGVpZ2h0PVwiMzhcIiBhbGlnbkl0ZW1zPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhY3Rpb25CYXJDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJITGVmdFwiIHN0eWxlPVwibWFyZ2luLXRvcDoxMDtcIiBAdGFwPVwidG9nZ2xlRHJhd2VyKClcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZHJhd2VyVG9nZ2xlID8gZHJhd2VyMjogZHJhd2VyMVwiIHN0eWxlPVwiZm9udC1zaXplOjI3O2NvbG9yOiNmZmY7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1hd2Vzb21lXCIgLz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiSE1pZFwiIGFsaWduSXRlbXM9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIkhSaWdodFwiPlxuXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuXG4gICAgICAgIDxSYWRTaWRlRHJhd2VyIHJlZj1cImRyYXdlclwiIEBkcmF3ZXJPcGVuZWQ9XCJvbkRyYXdlck9wZW5lZCgpXCJcbiAgICAgICAgICAgIEBkcmF3ZXJDbG9zZWQ9XCJvbkRyYXdlckNsb3NlZCgpXCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgfmRyYXdlckNvbnRlbnQgYmFja2dyb3VuZENvbG9yPVwiI2VlZVwiPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJuYW1lXCIgcGFkZGluZ0xlZnQ9XCIzMCVcIiBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJhd2VySXRlbVRleHQgZm9udC1hd2Vzb21lXCIgbWFyZ2luPVwiMTBcIi8+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgaGVpZ2h0PVwiODAlXCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCLvgosgIExvZyBvdXRcIiBwYWRkaW5nTGVmdD1cIjMwJVwiIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkcmF3ZXJJdGVtVGV4dCBmb250LWF3ZXNvbWVcIiBtYXJnaW49XCIxMFwiIEB0YXA9XCJsb2dvdXRcIi8+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCB+bWFpbkNvbnRlbnQ+XG5cbiAgICAgICAgICAgICAgICA8RG9ja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgZG9jaz1cInRvcFwiIGhlaWdodD1cIjkwJVwiIHdpZHRoPVwiMTAwJVwiIHN0eWxlPVwicGFkZGluZzozMDtcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJub3RlVGl0bGVcIiA6dGV4dD1cIm5vdGVUaXRsZVwiIGhpbnQ9XCJXcml0ZSBhIHRpdGxlXCIgOmVkaXRhYmxlPVwibG9naW5Vc2VySWQ9PW5vdGVVc2VySWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFZpZXcgdi1tb2RlbD1cIm5vdGVCb2R5XCIgOnRleHQ9XCJub3RlQm9keVwiIGhpbnQ9XCJXcml0ZSBhIG5vdGVcIiA6ZWRpdGFibGU9XCJsb2dpblVzZXJJZD09bm90ZVVzZXJJZFwiIHN0eWxlPVwiaGVpZ2h0OjEwMDtcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHYtaWY9XCJsb2dpblVzZXJJZD09bm90ZVVzZXJJZFwiIHRleHQ9XCJFZGl0IG5vdGVcIiBAdGFwPVwiZWRpdFBvc3QoKVwiIGNsYXNzPVwiYnRuIGJ0bi1kYXJrIG0tdC0yMFwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2LWlmPVwibG9naW5Vc2VySWQ9PW5vdGVVc2VySWRcIiB0ZXh0PVwiRGVsZXRlIG5vdGVcIiBAdGFwPVwiZGVsZXRlUG9zdCgpXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBtLXQtMjBcIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1hcGJveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuPVwicGsuZXlKMUlqb2lkbUZ1YTJGMGQybHFheUlzSW1FaU9pSmphelp2TlhabWJtc3djbVk1TTI1c2VXUm5hV1IzYW1SaEluMC4yVXlSaHNGVTdaZE5lMUdaeUJQemNRXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGF0aXR1ZGU9XCJub3RlTGF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bG9uZ2l0dWRlPVwibm90ZUxuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUNvbXBhc3M9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6b29tTGV2ZWw9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1VzZXJMb2NhdGlvbj1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlWm9vbT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUm90YXRpb249XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVNjcm9sbD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVGlsdD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWFwUmVhZHk9XCJvbk1hcFJlYWR5KCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWFwYm94PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBkb2NrPVwiYm90dG9tXCIgaGVpZ2h0PVwiMTAlXCIgc3R5bGU9XCJib3JkZXItY29sb3I6I0U0RTRFNDtib3JkZXItd2lkdGg6MTtiYWNrZ3JvdW5kOiNmZmY7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIqLCAqXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVwiMFwiIGNsYXNzPVwibmF2SXRlbVwiIEB0YXA9XCJob21lVGFwKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJcIiBhbmRyb2lkOmNsYXNzPVwibm90aWZpY2F0aW9uQW5kcm9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb3M6Y2xhc3M9XCJub3RpZmljYXRpb25cIiBvcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwi74eqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZHJvaWQ6c3R5bGU9XCJmb250LXNpemU6MTg7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9zOnN0eWxlPVwiZm9udC1zaXplOjMwO21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1hd2Vzb21lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJIb21lXCIgc3R5bGU9XCJmb250LXNpemU6MTA7XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjFcIiBjbGFzcz1cIm5hdkl0ZW1cIiBAdGFwPVwicG9zdFRhcCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiZGZcIiBhbmRyb2lkOmNsYXNzPVwibm90aWZpY2F0aW9uQW5kcm9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb3M6Y2xhc3M9XCJub3RpZmljYXRpb25cIiBvcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwi74GEXCIgOmNvbG9yPVwibWFpbkNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZHJvaWQ6c3R5bGU9XCJmb250LXNpemU6MTg7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9zOnN0eWxlPVwiZm9udC1zaXplOjMwO21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1hd2Vzb21lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJBZGQgTm90ZVwiIHN0eWxlPVwiZm9udC1zaXplOjEwO1wiIDpjb2xvcj1cIm1haW5Db2xvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICA8L0RvY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvUmFkU2lkZURyYXdlcj5cblxuICAgIDwvcGFnZT5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIC8vZXh0ZXJuYWwgcGFnZXMgYW5kIHBsdWdpbnNcbiAgICBpbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG4gICAgaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XG4gICAgaW1wb3J0IFBvc3QgZnJvbSBcIi4vUG9zdFwiO1xuICAgIGltcG9ydCAqIGFzIEdlb2xvY2F0aW9uIGZyb20gJ25hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvbic7XG4gICAgY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoXCJodHRwXCIpO1xuICAgIGNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHdhdGNoOiB7fSxcblxuICAgICAgICBjcmVhdGVkKCkge1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3RhcnQoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5vdGVUaXRsZTpcIlwiLFxuICAgICAgICAgICAgICAgIG5vdGVCb2R5OlwiXCIsXG4gICAgICAgICAgICAgICAgbm90ZUxhdDowLFxuICAgICAgICAgICAgICAgIG5vdGVMbmc6MCxcbiAgICAgICAgICAgICAgICBub3RlVXNlck5hbWU6XCJcIixcbiAgICAgICAgICAgICAgICBub3RlVXNlcklkOjAsXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgIGRyYXdlclRvZ2dsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZHJhd2VyMTogXCLvhYJcIixcbiAgICAgICAgICAgICAgICBkcmF3ZXIyOiBcIu+FgVwiLFxuICAgICAgICAgICAgICAgIG1haW5Db2xvcjogXCIjMWFhM2ZmXCIsXG4gICAgICAgICAgICAgICAgQVBJVVJMOiBcIlwiLFxuICAgICAgICAgICAgICAgIGhvbWVQb3N0czogW10sXG4gICAgICAgICAgICAgICAgbG9naW5Vc2VySWQ6MCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBuYW1lKCl7XG4gICAgICAgICAgICAgICAgLy9nZXQgdGhlIGN1cnJlbnQgbG9naW4gdXNlclxuICAgICAgICAgICAgICAgIHJldHVybiBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ25hbWUnLCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25TdGFydCgpe1xuICAgICAgICAgICAgICAgIC8vZ2V0IGFsbCBzdG9yZWQgdmFyaWFibGVzIGZyb20gdGhlIGxvZ2luIHNlc3Npb25cbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luVXNlcklkID0gYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCd1c2VyaWQnLCcnKVxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZE5vdGUgPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NlbGVjdGVkTm90ZScsMCk7XG4gICAgICAgICAgICAgICAgdmFyIHVzZXJUb2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZygndXNlclRva2VuJywwKTtcbiAgICAgICAgICAgICAgICB2YXIgYXBwVVJMID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCdhcHBVUkwnLDApO1xuICAgICAgICAgICAgICAgIHRoaXMuQVBJVVJMID0gYXBwVVJMO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldHRpbmcgbm90ZScpO1xuXG4gICAgICAgICAgICAgICAgLy9zZW5kIHJlcXVlc3QgdG8gYXBpIHNlcnZlclxuICAgICAgICAgICAgICAgIGh0dHBNb2R1bGUucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYXBwVVJMKycvYXBpL25vdGVzLycrc2VsZWN0ZWROb3RlLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIrdXNlclRva2VuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9nZXQgYWxsIHRoZSBub3RlcyBkZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPXJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90ZVRpdGxlPXJlc3VsdC50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RlQm9keT1yZXN1bHQuZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90ZUxhdD1yZXN1bHQubGF0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGVMbmc9cmVzdWx0LmxuZztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RlVXNlck5hbWU9cmVzdWx0LnVzZXIubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RlVXNlcklkPXJlc3VsdC51c2VyX2lkO1xuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlUG9zdCgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIG5vdGUnKTtcbiAgICAgICAgICAgICAgICAvL2dldCBhbGwgc3RvcmVkIHZhcmlhYmxlcyBmcm9tIHRoZSBsb2dpbiBzZXNzaW9uXG4gICAgICAgICAgICAgICAgdmFyIHVzZXJUb2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZygndXNlclRva2VuJywwKTtcbiAgICAgICAgICAgICAgICB2YXIgYXBwVVJMID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCdhcHBVUkwnLDApO1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZE5vdGUgPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NlbGVjdGVkTm90ZScsMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5BUElVUkwgPSBhcHBVUkw7XG5cbiAgICAgICAgICAgICAgICAvL3NlbmQgcmVxdWVzdCB0byBhcGkgc2VydmVyXG4gICAgICAgICAgICAgICAgaHR0cE1vZHVsZS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBhcHBVUkwrJy9hcGkvbm90ZXMvJytzZWxlY3RlZE5vdGUsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiICxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIit1c2VyVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2lmIHRoZSBkZWxldGlvbiB3YXMgc3VjY2Vzc2Z1bCBnbyB0byB0aGUgaG9tZSBzY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlZGl0UG9zdCgpe1xuICAgICAgICAgICAgICAgIC8vZ2V0IGFsbCBzdG9yZWQgdmFyaWFibGVzIGZyb20gdGhlIGxvZ2luIHNlc3Npb25cbiAgICAgICAgICAgICAgICB2YXIgdXNlclRva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCd1c2VyVG9rZW4nLDApO1xuICAgICAgICAgICAgICAgIHZhciBhcHBVUkwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ2FwcFVSTCcsMCk7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkTm90ZSA9IGFwcFNldHRpbmdzLmdldE51bWJlcignc2VsZWN0ZWROb3RlJywwKTtcbiAgICAgICAgICAgICAgICB0aGlzLkFQSVVSTCA9IGFwcFVSTDtcblxuICAgICAgICAgICAgICAgIC8vc2VuZCByZXF1ZXN0IHRvIGFwaSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICBodHRwTW9kdWxlLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGFwcFVSTCsnL2FwaS9ub3Rlcy8nK3NlbGVjdGVkTm90ZSwvL1wiaHR0cDovLzE5Mi4xNjguMC44Mzo4MDAwL2FwaS9ob21lXCIsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJwdXRcIixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiK3VzZXJUb2tlblxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTp0aGlzLm5vdGVUaXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLm5vdGVCb2R5LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0OnRoaXMubm90ZUxhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxuZzp0aGlzLm5vdGVMbmdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiBldmVyeXRoaW5nIHdhcyBva2F5IHdpdGggdGhlIHVwZGF0ZSBhbiBhbGVydCBpcyBnZW5lcmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ25vdGUgaGFzIGJlZW4gdXBkYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdjb3VsZCBub3QgdXBkYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbk1hcFJlYWR5KGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAvL2dlbmVyYXRlIGEgcG9pbnRlciBpbiB0aGUgbWFwIHdpdGggaW5mb3JtYXRpb24gXG4gICAgICAgICAgICAgICAgLy9hIHRpbWVvdXQgaXMgbmVlZGVkIHRvIGxldCB0aGUgYXBpIHNlcnZlciByZXNwb25kIHdpdGggdGhlIG1hcmtlciBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMgbWFya2VyIHRha2VzIHRoZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBub3RlIGRldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgYXJncy5tYXAuYWRkTWFya2VycyhbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiB0aGlzLm5vdGVMYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiB0aGlzLm5vdGVMbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMubm90ZVRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlOiB0aGlzLm5vdGVCb2R5XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25EcmF3ZXJDbG9zZWQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3ZXJUb2dnbGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkRyYXdlck9wZW5lZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdlclRvZ2dsZSA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlRHJhd2VyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZHJhd2VyLm5hdGl2ZVZpZXcudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBob21lVGFwKCkge1xuICAgICAgICAgICAgICAgIC8vZ28gdG8gdGhlIGhvbWUgc2NyZWVuIHJlc2V0aW5nIHRoZSBzZWxlY3RlZCBub3RlIHZhcmlhYmxlXG4gICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0TnVtYmVyKCdzZWxlY3RlZE5vdGUnLDApO1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvc3RUYXAoKSB7XG4gICAgICAgICAgICAgICAgLy9nbyB0byB0aGUgbmV3IHBvc3Qgc2NyZWVuIHJlc2V0aW5nIHRoZSBzZWxlY3RlZCBub3RlIHZhcmlhYmxlXG4gICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0TnVtYmVyKCdzZWxlY3RlZE5vdGUnLDApO1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUG9zdCwge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvZ291dCgpIHtcbiAgICAgICAgICAgICAgICAvL2xvZ291dCByZXNldGlpbmcgdGhlIHNlbGVjdGVkIG5vdGUgdmFyaWFibGVcbiAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5yZW1vdmUoJ3VzZXJUb2tlbicpO1xuICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldE51bWJlcignc2VsZWN0ZWROb3RlJywwKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2hvd0RldGFpbHMoKSB7fVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cblxuXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJcIiBjbGFzcz1cImFjdGlvbi1iYXIgaGVhZGVyXCIgIHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrOyc+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgaGVpZ2h0PVwiMzhcIiBhbGlnbkl0ZW1zPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhY3Rpb25CYXJDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJITGVmdFwiIHN0eWxlPVwibWFyZ2luLXRvcDoxMDtcIiBAdGFwPVwidG9nZ2xlRHJhd2VyKClcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZHJhd2VyVG9nZ2xlID8gZHJhd2VyMjogZHJhd2VyMVwiIHN0eWxlPVwiZm9udC1zaXplOjI3O2NvbG9yOiNmZmY7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1hd2Vzb21lXCIgLz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiSE1pZFwiIGFsaWduSXRlbXM9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIkhSaWdodFwiPlxuXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuXG4gICAgICAgIDxSYWRTaWRlRHJhd2VyIHJlZj1cImRyYXdlclwiIEBkcmF3ZXJPcGVuZWQ9XCJvbkRyYXdlck9wZW5lZCgpXCJcbiAgICAgICAgICAgIEBkcmF3ZXJDbG9zZWQ9XCJvbkRyYXdlckNsb3NlZCgpXCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgfmRyYXdlckNvbnRlbnQgYmFja2dyb3VuZENvbG9yPVwiI2VlZVwiPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJuYW1lXCIgcGFkZGluZ0xlZnQ9XCIzMCVcIiBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJhd2VySXRlbVRleHQgZm9udC1hd2Vzb21lXCIgbWFyZ2luPVwiMTBcIi8+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgaGVpZ2h0PVwiODAlXCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCLvgosgIExvZyBvdXRcIiBwYWRkaW5nTGVmdD1cIjMwJVwiIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkcmF3ZXJJdGVtVGV4dCBmb250LWF3ZXNvbWVcIiBtYXJnaW49XCIxMFwiIEB0YXA9XCJsb2dvdXRcIi8+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCB+bWFpbkNvbnRlbnQ+XG5cbiAgICAgICAgICAgICAgICA8RG9ja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgZG9jaz1cInRvcFwiIGhlaWdodD1cIjkwJVwiIHdpZHRoPVwiMTAwJVwiIHN0eWxlPVwicGFkZGluZzozMDtcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwibm90ZVRpdGxlXCIgaGludD1cIldyaXRlIGEgdGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwibm90ZUJvZHlcIiBoaW50PVwiV3JpdGUgYSBub3RlXCIgc3R5bGU9XCJoZWlnaHQ6MTAwO1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlN1Ym1pdCBQb3N0XCIgQHRhcD1cInN1Ym1pdFBvc3QoKVwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdi1pZj1cIm5lZWRMb2NhdGlvblwiIHRleHQ9XCJMb29raW5nIHVwIHlvdXIgbG9jYXRpb24uLi5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHYtaWY9XCJsb2NhdGlvbkZhaWx1cmVcIiB0ZXh0PVwiQ2FuJ3QgZmluZCBjdXJyZW50IGxvY2F0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB2LWlmPVwibG9jYXRpb25cIiA6dGV4dD1cImxvY2F0aW9uRGVzY3JpcHRpb25cIiB0ZXh0V3JhcD1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgZG9jaz1cImJvdHRvbVwiIGhlaWdodD1cIjEwJVwiIHN0eWxlPVwiYm9yZGVyLWNvbG9yOiNFNEU0RTQ7Ym9yZGVyLXdpZHRoOjE7YmFja2dyb3VuZDojZmZmO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiKiwgKlwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjBcIiBjbGFzcz1cIm5hdkl0ZW1cIiBAdGFwPVwiaG9tZVRhcCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiXCIgYW5kcm9pZDpjbGFzcz1cIm5vdGlmaWNhdGlvbkFuZHJvaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9zOmNsYXNzPVwibm90aWZpY2F0aW9uXCIgb3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIu+HqlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmRyb2lkOnN0eWxlPVwiZm9udC1zaXplOjE4O21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvczpzdHlsZT1cImZvbnQtc2l6ZTozMDttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQtYXdlc29tZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiSG9tZVwiIHN0eWxlPVwiZm9udC1zaXplOjEwO1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIxXCIgY2xhc3M9XCJuYXZJdGVtXCIgQHRhcD1cInBvc3RUYXAoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cImRmXCIgYW5kcm9pZDpjbGFzcz1cIm5vdGlmaWNhdGlvbkFuZHJvaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9zOmNsYXNzPVwibm90aWZpY2F0aW9uXCIgb3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIu+BhFwiIDpjb2xvcj1cIm1haW5Db2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmRyb2lkOnN0eWxlPVwiZm9udC1zaXplOjE4O21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvczpzdHlsZT1cImZvbnQtc2l6ZTozMDttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQtYXdlc29tZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiQWRkIE5vdGVcIiBzdHlsZT1cImZvbnQtc2l6ZToxMDtcIiA6Y29sb3I9XCJtYWluQ29sb3JcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgIDwvRG9ja0xheW91dD5cblxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPC9SYWRTaWRlRHJhd2VyPlxuXG4gICAgPC9wYWdlPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuICAgIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xuICAgIGltcG9ydCBQb3N0IGZyb20gXCIuL1Bvc3RcIjtcbiAgICBpbXBvcnQgKiBhcyBHZW9sb2NhdGlvbiBmcm9tICduYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb24nO1xuXG4gICAgY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoXCJodHRwXCIpO1xuICAgIGNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHdhdGNoOiB7fSxcblxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgLy9jaGVjayBpZiBncHMgaXMgZW5hYmxlZCBvbiB0aGUgcGhvbmVcbiAgICAgICAgICAgIEdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCh0cnVlKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIEdlb2xvY2F0aW9uLmlzRW5hYmxlZCgpLnRoZW4oaXNMb2NhdGlvbkVuYWJsZWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0IGlzICcraXNMb2NhdGlvbkVuYWJsZWQpO1xuICAgICAgICAgICAgICAgICAgICBpZighaXNMb2NhdGlvbkVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmVlZExvY2F0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uRmFpbHVyZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3RlbnRpYWxseSBkbyBtb3JlIHRoZW4ganVzdCBlbmQgaGVyZS4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTVVTVCBwYXNzIGVtcHR5IG9iamVjdCEhXG4gICAgICAgICAgICAgICAgICAgIEdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7fSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2MgcmVzdWx0JywgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmVlZExvY2F0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5lZWRMb2NhdGlvbjp0cnVlLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uRmFpbHVyZTpmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjpudWxsLFxuICAgICAgICAgICAgICAgIG5vdGVUaXRsZTpcIlwiLFxuICAgICAgICAgICAgICAgIG5vdGVCb2R5OlwiXCIsXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgIGRyYXdlclRvZ2dsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZHJhd2VyMTogXCLvhYJcIixcbiAgICAgICAgICAgICAgICBkcmF3ZXIyOiBcIu+FgVwiLFxuICAgICAgICAgICAgICAgIG1haW5Db2xvcjogXCIjMWFhM2ZmXCIsXG4gICAgICAgICAgICAgICAgQVBJVVJMOiBcIlwiLFxuICAgICAgICAgICAgICAgIGhvbWVQb3N0czogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBsb2NhdGlvbkRlc2NyaXB0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vZGlzcGxheSBjdXJyZW50IGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBZb3UgYXJlIGF0ICR7dGhpcy5sb2NhdGlvbi5sYXRpdHVkZX0sICR7dGhpcy5sb2NhdGlvbi5sb25naXR1ZGV9LiBZb3VyIGFsdGl0dWRlIGlzICR7dGhpcy5sb2NhdGlvbi5hbHRpdHVkZX0uYDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYW1lKCl7XG4gICAgICAgICAgICAgICAgLy9nZXQgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgbG9naW4gdXNlciB0byBkaXNwbGF5IGluIHRoZSBzaWRlIGRyYXdlclxuICAgICAgICAgICAgICAgIHJldHVybiBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ25hbWUnLCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25TdGFydCgpe1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0UG9zdCgpe1xuICAgICAgICAgICAgICAgIC8vZ2V0IGFsbCBzdG9yZWQgdmFyaWFibGVzIGZyb20gdGhlIGxvZ2luIHNlc3Npb25cbiAgICAgICAgICAgICAgICB2YXIgdXNlclRva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCd1c2VyVG9rZW4nLDApO1xuICAgICAgICAgICAgICAgIHZhciBhcHBVUkwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ2FwcFVSTCcsMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5BUElVUkwgPSBhcHBVUkw7XG5cbiAgICAgICAgICAgICAgICBodHRwTW9kdWxlLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGFwcFVSTCsnL2FwaS9ub3RlcycsLy9cImh0dHA6Ly8xOTIuMTY4LjAuODM6ODAwMC9hcGkvaG9tZVwiLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUG9zdFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIrdXNlclRva2VuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOnRoaXMubm90ZVRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMubm90ZUJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXQ6dGhpcy5sb2NhdGlvbi5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxuZzp0aGlzLmxvY2F0aW9uLmxvbmdpdHVkZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcG9zdCB3YXMgc2F2ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMjAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90ZVRpdGxlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGVCb2R5ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnbm90ZSBhZGRlZCB0byBsb2NhdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgaGFzIGdvbmUgd3JvbmcnKyByZXNwb25zZS5zdGF0dXNDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRHJhd2VyQ2xvc2VkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2VyVG9nZ2xlID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25EcmF3ZXJPcGVuZWQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3ZXJUb2dnbGUgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZURyYXdlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmRyYXdlci5uYXRpdmVWaWV3LnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG9tZVRhcCgpIHtcbiAgICAgICAgICAgICAgICAvLyBuYXZpZ2F0ZSBob21lXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcG9zdFRhcCgpIHtcbiAgICAgICAgICAgICAgICAvLyBuYXZpZ2F0ZSB0byB0aGUgbmV3IHBvc3Qgc2NyZWVuXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhQb3N0LCB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9nb3V0KCkge1xuICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnJlbW92ZSgndXNlclRva2VuJyk7XG4gICAgICAgICAgICAgICAgLy8gbG9nb3V0IG9mIHRoZSBjdXJyZW50IHVzZXJcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dEZXRhaWxzKCkge31cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5wYWdlW2RhdGEtdi0yNDFkMzlmOV0ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZm9ybVtkYXRhLXYtMjQxZDM5ZjldIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgICBmbGV4LWdyb3c6IDI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5sb2dvW2RhdGEtdi0yNDFkMzlmOV0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMjtcXG4gICAgaGVpZ2h0OiA5MDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5oZWFkZXJbZGF0YS12LTI0MWQzOWY5XSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNzA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNENTFBMUE7XFxufVxcbi5pbnB1dC1maWVsZFtkYXRhLXYtMjQxZDM5ZjldIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjU7XFxufVxcbi5pbnB1dFtkYXRhLXYtMjQxZDM5ZjldIHtcXG4gICAgZm9udC1zaXplOiAxODtcXG4gICAgcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7XFxufVxcbi5pbnB1dFtkYXRhLXYtMjQxZDM5ZjldOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuLmJ0bi1wcmltYXJ5W2RhdGEtdi0yNDFkMzlmOV0ge1xcbiAgICBtYXJnaW46IDMwIDUgMTUgNTtcXG59XFxuLmxvZ2luLWxhYmVsW2RhdGEtdi0yNDFkMzlmOV0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjQThBOEE4O1xcbiAgICBmb250LXNpemU6IDE2O1xcbn1cXG4uc2lnbi11cC1sYWJlbFtkYXRhLXYtMjQxZDM5ZjldIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjA7XFxufVxcbi5ib2xkW2RhdGEtdi0yNDFkMzlmOV0ge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucGFnZVtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmZvcm1bZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ubG9nb1tkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTI7XFxuICAgIGhlaWdodDogOTA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaGVhZGVyW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDcwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjRDUxQTFBO1xcbn1cXG4uaW5wdXQtZmllbGRbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1O1xcbn1cXG4uaW5wdXRbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjQThBOEE4O1xcbn1cXG4uaW5wdXRbZGF0YS12LWMyNzQ4MmM0XTpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcbi5idG4tcHJpbWFyeVtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luOiAzMCA1IDE1IDU7XFxufVxcbi5sb2dpbi1sYWJlbFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0E4QThBODtcXG4gICAgZm9udC1zaXplOiAxNjtcXG59XFxuLnNpZ24tdXAtbGFiZWxbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwO1xcbn1cXG4uYm9sZFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9Mb2dpbi52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXIgaGVhZGVyXCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIgfSxcbiAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uQmFyQ29udGFpbmVyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIzOFwiLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwibGVmdFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJITGVmdFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luVG9wOiBcIjEwXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVEcmF3ZXIoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9udC1hd2Vzb21lXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGZvbnRTaXplOiBcIjI3XCIsIGNvbG9yOiBcIiNmZmZcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5kcmF3ZXJUb2dnbGUgPyBfdm0uZHJhd2VyMiA6IF92bS5kcmF3ZXIxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIkhNaWRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBhbGlnbkl0ZW1zOiBcImxlZnRcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiSFJpZ2h0XCIgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiUmFkU2lkZURyYXdlclwiLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBcImRyYXdlclwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBkcmF3ZXJPcGVuZWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uRHJhd2VyT3BlbmVkKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkcmF3ZXJDbG9zZWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uRHJhd2VyQ2xvc2VkKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZpZXc6ZHJhd2VyQ29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgYXJnOiBcImRyYXdlckNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczoge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCIjZWVlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcmF3ZXJJdGVtVGV4dCBmb250LWF3ZXNvbWVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIzMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBhdHRyczogeyBoZWlnaHQ6IFwiODAlXCIgfSB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcmF3ZXJJdGVtVGV4dCBmb250LWF3ZXNvbWVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIu+CiyAgTG9nIG91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjMwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ubG9nb3V0IH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZpZXc6bWFpbkNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgIGFyZzogXCJtYWluQ29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJEb2NrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBkb2NrOiBcInRvcFwiLCBoZWlnaHQ6IFwiOTAlXCIsIHdpZHRoOiBcIjEwMCVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUmFkTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBfdm0uaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJsaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1bGxUb1JlZnJlc2g6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFOEU4RThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5ub3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcIm5vdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1bGxUb1JlZnJlc2hJbml0aWF0ZWQ6IF92bS5vblB1bGxUb1JlZnJlc2hJbml0aWF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3RlID0gcmVmLm5vdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFOEU4RThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbm90ZS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdE5vdGUobm90ZS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5vdGVDb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3N0QXV0aG90TmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IG5vdGUudGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvc3REYXRlU21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtub3RlLmRpc3RhbmNlICogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9GaXhlZCgzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG1ldGVycyBhd2F5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI0U0RTRFNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRvY2s6IFwiYm90dG9tXCIsIGhlaWdodDogXCIxMCVcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW5zOiBcIiosICpcIiwgdmVydGljYWxBbGlnbm1lbnQ6IFwidG9wXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb1RvTG9naW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5kcm9pZDpjbGFzc1wiOiBcIm5vdGlmaWNhdGlvbkFuZHJvaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlvczpjbGFzc1wiOiBcIm5vdGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvbnQtYXdlc29tZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi74eqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5tYWluQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmRyb2lkOnN0eWxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZToxODttYXJnaW4tdG9wOi0xNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW9zOnN0eWxlXCI6IFwiZm9udC1zaXplOjMwO21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZm9udFNpemU6IFwiMTBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxvZ2luXCIsIGNvbG9yOiBfdm0ubWFpbkNvbG9yIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZJdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucG9zdFRhcCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiZGZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFuZHJvaWQ6Y2xhc3NcIjogXCJub3RpZmljYXRpb25BbmRyb2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpb3M6Y2xhc3NcIjogXCJub3RpZmljYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb250LWF3ZXNvbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIu+BhFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5kcm9pZDpzdHlsZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemU6MTg7bWFyZ2luLXRvcDotMTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlvczpzdHlsZVwiOiBcImZvbnQtc2l6ZTozMDttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGZvbnRTaXplOiBcIjEwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDbGVhclwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dvXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIn4vaW1hZ2VzL2xvZ28ucG5nXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3dzOiBcImF1dG9cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyByb3c6IFwiMVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwibmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0udXNlci5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblByZXNzOiBfdm0ucmVzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChfdm0udXNlciwgXCJlbWFpbFwiLCAkZXZlbnQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJBY3Rpdml0eUluZGljYXRvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd1NwYW46IFwiM1wiLCBidXN5OiBfdm0ucHJvY2Vzc2luZyB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYXJrIG0tdC0yMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiUmVzZXRcIiwgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5yZXNldCB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1sYWJlbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiKnYtc2hvd1wiOiBcImlzTG9nZ2luZ0luXCIsIHRleHQ6IFwiR28gQmFjayB0byBMb2dpblwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYmFja1RvTG9naW4oKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyIGhlYWRlclwiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbkJhckNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzhcIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImxlZnRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiSExlZnRcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpblRvcDogXCIxMFwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlRHJhd2VyKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvbnQtYXdlc29tZVwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmb250U2l6ZTogXCIyN1wiLCBjb2xvcjogXCIjZmZmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uZHJhd2VyVG9nZ2xlID8gX3ZtLmRyYXdlcjIgOiBfdm0uZHJhd2VyMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJITWlkXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgYWxpZ25JdGVtczogXCJsZWZ0XCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcIkhSaWdodFwiIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlJhZFNpZGVEcmF3ZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJkcmF3ZXJcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgZHJhd2VyT3BlbmVkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkRyYXdlck9wZW5lZCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHJhd2VyQ2xvc2VkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkRyYXdlckNsb3NlZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12aWV3OmRyYXdlckNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgIGFyZzogXCJkcmF3ZXJDb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VlZVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJhd2VySXRlbVRleHQgZm9udC1hd2Vzb21lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMzAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgYXR0cnM6IHsgaGVpZ2h0OiBcIjgwJVwiIH0gfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJhd2VySXRlbVRleHQgZm9udC1hd2Vzb21lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJCYWNrZ3JvdW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMzAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5iYWNrZ3JvdW5kVGFwIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJhd2VySXRlbVRleHQgZm9udC1hd2Vzb21lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLvgosgIExvZyBvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIzMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmxvZ291dCB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12aWV3Om1haW5Db250ZW50XCIsXG4gICAgICAgICAgICAgICAgICBhcmc6IFwibWFpbkNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczoge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiRG9ja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZG9jazogXCJ0b3BcIiwgaGVpZ2h0OiBcIjkwJVwiLCB3aWR0aDogXCIxMDAlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlJhZExpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogX3ZtLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwibGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWxsVG9SZWZyZXNoOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRThFOEU4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJsaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ubm90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJub3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWxsVG9SZWZyZXNoSW5pdGlhdGVkOiBfdm0ub25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm90ZSA9IHJlZi5ub3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRThFOEU4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG5vdGUuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3ROb3RlKG5vdGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJub3RlQ29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicG9zdEF1dGhvdE5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBub3RlLnRpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3N0RGF0ZVNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArbm90ZS5kaXN0YW5jZSAqIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvRml4ZWQoMykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBtZXRlcnMgYXdheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNFNEU0RTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkb2NrOiBcImJvdHRvbVwiLCBoZWlnaHQ6IFwiMTAlXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uczogXCIqLCAqXCIsIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZJdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaG9tZVRhcCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmRyb2lkOmNsYXNzXCI6IFwibm90aWZpY2F0aW9uQW5kcm9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW9zOmNsYXNzXCI6IFwibm90aWZpY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9udC1hd2Vzb21lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLvh6pcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLm1haW5Db2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFuZHJvaWQ6c3R5bGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplOjE4O21hcmdpbi10b3A6LTE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpb3M6c3R5bGVcIjogXCJmb250LXNpemU6MzA7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmb250U2l6ZTogXCIxMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiSG9tZVwiLCBjb2xvcjogX3ZtLm1haW5Db2xvciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnBvc3RUYXAoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcImRmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmRyb2lkOmNsYXNzXCI6IFwibm90aWZpY2F0aW9uQW5kcm9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW9zOmNsYXNzXCI6IFwibm90aWZpY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9udC1hd2Vzb21lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLvgYRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFuZHJvaWQ6c3R5bGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplOjE4O21hcmdpbi10b3A6LTE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpb3M6c3R5bGVcIjogXCJmb250LXNpemU6MzA7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmb250U2l6ZTogXCIxMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQWRkIE5vdGVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJ0cnVlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nb1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJ+L2ltYWdlcy9sb2dvLnBuZ1wiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93czogXCJhdXRvLCBhdXRvLCBhdXRvLCBhdXRvLCBhdXRvLCBhdXRvXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5pc0xvZ2dpbmdJbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhaXNMb2dnaW5nSW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIk5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0OiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcIm5leHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnVzZXIubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChfdm0udXNlciwgXCJuYW1lXCIsICRldmVudC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IHJvdzogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiRW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogXCJuZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS51c2VyLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuUHJlc3M6IF92bS5mb2N1c1Bhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoX3ZtLnVzZXIsIFwiZW1haWxcIiwgJGV2ZW50LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgcm93OiBcIjJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ6ICFfdm0ucHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBfdm0uaXNMb2dnaW5nSW4gPyBcImRvbmVcIiA6IFwibmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0udXNlci5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblByZXNzOiBfdm0uZm9jdXNDb25maXJtUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChfdm0udXNlciwgXCJwYXNzd29yZFwiLCAkZXZlbnQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmlzTG9nZ2luZ0luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFpc0xvZ2dpbmdJblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIzXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImNvbmZpcm1QYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkNvbmZpcm0gcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogXCJkb25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS51c2VyLmNvbmZpcm1QYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25maXJtUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcIkFjdGl2aXR5SW5kaWNhdG9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93U3BhbjogXCIzXCIsIGJ1c3k6IF92bS5wcm9jZXNzaW5nIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhcmsgbS10LTIwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pc0xvZ2dpbmdJbiA/IFwiTG9nIEluXCIgOiBcIlNpZ24gVXBcIixcbiAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zdWJtaXQgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9naW4tbGFiZWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCIqdi1zaG93XCI6IFwiaXNMb2dnaW5nSW5cIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZvcmdvdFBhc3N3b3JkKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luLWxhYmVsIHNpZ24tdXAtbGFiZWxcIixcbiAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udG9nZ2xlRm9ybSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmlzTG9nZ2luZ0luXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/IFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiQmFjayB0byBMb2dpblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uaXNMb2dnaW5nSW4gPyBcIlNpZ24gdXBcIiA6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIsXG4gICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmNoYW5nZUFQSSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCBbX3ZtLl92KFwiQ2hhbmdlIHRoZSBkZWZhdWx0IEFQSSBzZXJ2ZXIgXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJib2xkXCIgfSwgW192bS5fdihcIkNoYW5nZVwiKV0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyIGhlYWRlclwiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbkJhckNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzhcIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImxlZnRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiSExlZnRcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpblRvcDogXCIxMFwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlRHJhd2VyKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvbnQtYXdlc29tZVwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmb250U2l6ZTogXCIyN1wiLCBjb2xvcjogXCIjZmZmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uZHJhd2VyVG9nZ2xlID8gX3ZtLmRyYXdlcjIgOiBfdm0uZHJhd2VyMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJITWlkXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgYWxpZ25JdGVtczogXCJsZWZ0XCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcIkhSaWdodFwiIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlJhZFNpZGVEcmF3ZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJkcmF3ZXJcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgZHJhd2VyT3BlbmVkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkRyYXdlck9wZW5lZCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHJhd2VyQ2xvc2VkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkRyYXdlckNsb3NlZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12aWV3OmRyYXdlckNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgIGFyZzogXCJkcmF3ZXJDb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VlZVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJhd2VySXRlbVRleHQgZm9udC1hd2Vzb21lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMzAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgYXR0cnM6IHsgaGVpZ2h0OiBcIjgwJVwiIH0gfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJhd2VySXRlbVRleHQgZm9udC1hd2Vzb21lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLvgosgIExvZyBvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIzMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmxvZ291dCB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12aWV3Om1haW5Db250ZW50XCIsXG4gICAgICAgICAgICAgICAgICBhcmc6IFwibWFpbkNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczoge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiRG9ja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBwYWRkaW5nOiBcIjMwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkb2NrOiBcInRvcFwiLCBoZWlnaHQ6IFwiOTAlXCIsIHdpZHRoOiBcIjEwMCVcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRWaWV3XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5ub3RlVGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiV3JpdGUgYSB0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZTogX3ZtLmxvZ2luVXNlcklkID09IF92bS5ub3RlVXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0ubm90ZVRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5vdGVUaXRsZSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0Vmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5ub3RlQm9keSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJXcml0ZSBhIG5vdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IF92bS5sb2dpblVzZXJJZCA9PSBfdm0ubm90ZVVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLm5vdGVCb2R5XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5vdGVCb2R5ID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9naW5Vc2VySWQgPT0gX3ZtLm5vdGVVc2VySWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFyayBtLXQtMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkVkaXQgbm90ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWRpdFBvc3QoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvZ2luVXNlcklkID09IF92bS5ub3RlVXNlcklkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBtLXQtMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkRlbGV0ZSBub3RlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVQb3N0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTWFwYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGsuZXlKMUlqb2lkbUZ1YTJGMGQybHFheUlzSW1FaU9pSmphelp2TlhabWJtc3djbVk1TTI1c2VXUm5hV1IzYW1SaEluMC4yVXlSaHNGVTdaZE5lMUdaeUJQemNRXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBfdm0ubm90ZUxhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBfdm0ubm90ZUxuZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUNvbXBhc3M6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB6b29tTGV2ZWw6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1VzZXJMb2NhdGlvbjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlWm9vbTogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUm90YXRpb246IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVNjcm9sbDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVGlsdDogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwUmVhZHk6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25NYXBSZWFkeSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjRTRFNEU0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZG9jazogXCJib3R0b21cIiwgaGVpZ2h0OiBcIjEwJVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiKiwgKlwiLCB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhvbWVUYXAoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5kcm9pZDpjbGFzc1wiOiBcIm5vdGlmaWNhdGlvbkFuZHJvaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlvczpjbGFzc1wiOiBcIm5vdGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvbnQtYXdlc29tZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi74eqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmRyb2lkOnN0eWxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZToxODttYXJnaW4tdG9wOi0xNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW9zOnN0eWxlXCI6IFwiZm9udC1zaXplOjMwO21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZm9udFNpemU6IFwiMTBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkhvbWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnBvc3RUYXAoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcImRmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmRyb2lkOmNsYXNzXCI6IFwibm90aWZpY2F0aW9uQW5kcm9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW9zOmNsYXNzXCI6IFwibm90aWZpY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9udC1hd2Vzb21lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLvgYRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLm1haW5Db2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFuZHJvaWQ6c3R5bGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplOjE4O21hcmdpbi10b3A6LTE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpb3M6c3R5bGVcIjogXCJmb250LXNpemU6MzA7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmb250U2l6ZTogXCIxMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBZGQgTm90ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0ubWFpbkNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyIGhlYWRlclwiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbkJhckNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzhcIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImxlZnRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiSExlZnRcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpblRvcDogXCIxMFwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlRHJhd2VyKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvbnQtYXdlc29tZVwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmb250U2l6ZTogXCIyN1wiLCBjb2xvcjogXCIjZmZmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uZHJhd2VyVG9nZ2xlID8gX3ZtLmRyYXdlcjIgOiBfdm0uZHJhd2VyMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJITWlkXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgYWxpZ25JdGVtczogXCJsZWZ0XCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcIkhSaWdodFwiIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlJhZFNpZGVEcmF3ZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJkcmF3ZXJcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgZHJhd2VyT3BlbmVkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkRyYXdlck9wZW5lZCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHJhd2VyQ2xvc2VkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkRyYXdlckNsb3NlZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12aWV3OmRyYXdlckNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgIGFyZzogXCJkcmF3ZXJDb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VlZVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJhd2VySXRlbVRleHQgZm9udC1hd2Vzb21lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMzAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgYXR0cnM6IHsgaGVpZ2h0OiBcIjgwJVwiIH0gfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJhd2VySXRlbVRleHQgZm9udC1hd2Vzb21lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLvgosgIExvZyBvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIzMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmxvZ291dCB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12aWV3Om1haW5Db250ZW50XCIsXG4gICAgICAgICAgICAgICAgICBhcmc6IFwibWFpbkNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczoge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiRG9ja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBwYWRkaW5nOiBcIjMwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkb2NrOiBcInRvcFwiLCBoZWlnaHQ6IFwiOTAlXCIsIHdpZHRoOiBcIjEwMCVcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBoaW50OiBcIldyaXRlIGEgdGl0bGVcIiwgdGV4dDogX3ZtLm5vdGVUaXRsZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5vdGVUaXRsZSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBoaW50OiBcIldyaXRlIGEgbm90ZVwiLCB0ZXh0OiBfdm0ubm90ZUJvZHkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ub3RlQm9keSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJTdWJtaXQgUG9zdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0UG9zdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubmVlZExvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTG9va2luZyB1cCB5b3VyIGxvY2F0aW9uLi4uXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9jYXRpb25GYWlsdXJlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ2FuJ3QgZmluZCBjdXJyZW50IGxvY2F0aW9uXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5sb2NhdGlvbkRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjRTRFNEU0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZG9jazogXCJib3R0b21cIiwgaGVpZ2h0OiBcIjEwJVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiKiwgKlwiLCB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhvbWVUYXAoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5kcm9pZDpjbGFzc1wiOiBcIm5vdGlmaWNhdGlvbkFuZHJvaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlvczpjbGFzc1wiOiBcIm5vdGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvbnQtYXdlc29tZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi74eqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmRyb2lkOnN0eWxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZToxODttYXJnaW4tdG9wOi0xNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW9zOnN0eWxlXCI6IFwiZm9udC1zaXplOjMwO21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZm9udFNpemU6IFwiMTBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkhvbWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnBvc3RUYXAoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcImRmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmRyb2lkOmNsYXNzXCI6IFwibm90aWZpY2F0aW9uQW5kcm9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW9zOmNsYXNzXCI6IFwibm90aWZpY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9udC1hd2Vzb21lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLvgYRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLm1haW5Db2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFuZHJvaWQ6c3R5bGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplOjE4O21hcmdpbi10b3A6LTE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpb3M6c3R5bGVcIjogXCJmb250LXNpemU6MzA7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmb250U2l6ZTogXCIxMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBZGQgTm90ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0ubWFpbkNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uSW50ZW50U2VydmljZS5qc1wiOiBcIi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25JbnRlbnRTZXJ2aWNlLmpzXCIsXG5cdFwiLi9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMvTXlKb2JTZXJ2aWNlLmpzXCI6IFwiLi9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMvTXlKb2JTZXJ2aWNlLmpzXCIsXG5cdFwiLi9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMvam9iLXNjaGVkdWxlci5qc1wiOiBcIi4vY29tcG9uZW50cy9ub3RpZmljYXRpb25zL2pvYi1zY2hlZHVsZXIuanNcIixcblx0XCIuL2NvbXBvbmVudHMvc2VydmljZS1oZWxwZXIuanNcIjogXCIuL2NvbXBvbmVudHMvc2VydmljZS1oZWxwZXIuanNcIixcblx0XCIuL3JvdXRlcy9pbmRleC5qc1wiOiBcIi4vcm91dGVzL2luZGV4LmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2UuanNcIjogXCIuL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuY3NzIGZpbGUgaXMgd2hlcmUgeW91IHBsYWNlIENTUyBydWxlcyB0aGF0XFxueW91IHdvdWxkIGxpa2UgdG8gYXBwbHkgdG8geW91ciBlbnRpcmUgYXBwbGljYXRpb24uIENoZWNrIG91dFxcbmh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvc3R5bGluZyBmb3IgYSBmdWxsIGxpc3Qgb2YgdGhlIENTU1xcbnNlbGVjdG9ycyBhbmQgcHJvcGVydGllcyB5b3UgY2FuIHVzZSB0byBzdHlsZSBVSSBjb21wb25lbnRzLlxcblxcbi8qXFxuSW4gbWFueSBjYXNlcyB5b3UgbWF5IHdhbnQgdG8gdXNlIHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBpbnN0ZWFkXFxub2Ygd3JpdGluZyB5b3VyIG93biBDU1MgcnVsZXMuIEZvciBhIGZ1bGwgbGlzdCBvZiBjbGFzcyBuYW1lcyBpbiB0aGUgdGhlbWVcXG5yZWZlciB0byBodHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3RoZW1lLlxcblRoZSBpbXBvcnRlZCBDU1MgcnVsZXMgbXVzdCBwcmVjZWRlIGFsbCBvdGhlciB0eXBlcyBvZiBydWxlcy5cXG5cIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzJ1wifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIjc2VhcmNoRmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwbGFjZWhvbGRlci1jb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFjdGlvbkJhckNvbnRhaW5lclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMTAwJVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZsb2F0XCIsXCJ2YWx1ZVwiOlwibGVmdFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jb252RnJpZW5kTmFtZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE5XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmNvbnZEYXRlT3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmNvbnZUZXh0T3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ub3RSZWFkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJib2xkXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnJlYWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM2QzZDNkNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuY29uSW1nXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI2MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmhlYWRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCIjMWFhM2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFib3V0Um93XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBvc3RUaXRsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZHJhd2VySXRlbVRleHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVEcmF3ZXJDb250YWluZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wcm9maWxlUGljXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxNTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIxNTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMTAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNGRiOGZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wb3N0Q29udGFpbmVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjEwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYWJvdXRDb250YWluZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjg1JVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCIxNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCIjZWVlZWVlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wb3N0RGF0ZVNtYWxsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjEwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjODU4NTg1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBvc3RBdXRob3ROYW1lXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjEwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucG9zdEltYWdlU21hbGxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIwLjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjYzRjNGM0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmxpc3RJbWFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5vdGlmaWNhdGlvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCJyZWRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiOCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiei1pbmRleFwiLFwidmFsdWVcIjpcIjEwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjEzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5vdGlmaWNhdGlvbkFuZHJvaWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwicmVkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIyMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjIyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjEyJVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ6LWluZGV4XCIsXCJ2YWx1ZVwiOlwiMTAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjFcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubmF2SXRlbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMjQlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb2xsb3dlcnNUeHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb2xsb3dlcnNUeHRWYWx1ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIyNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJib2xkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZvbGxvd2Vyc0NvbnRhaW5lclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiOTAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLkhMZWZ0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmbG9hdFwiLFwidmFsdWVcIjpcImxlZnRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXJcIixcInZhbHVlXCI6XCIxcHggc29saWQgcmVkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCI1LjUlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLkhNaWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjcwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5IUmlnaHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjE5JVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zZWFyY2hGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1ib3R0b20td2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWJvdHRvbS1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI0MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtZGVjb3JhdGlvblwiLFwidmFsdWVcIjpcIm5vbmVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9udC1hd2Vzb21lXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJcXFwiRm9udEF3ZXNvbWVcXFwiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmhvbWUtcGFuZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZGVzY3JpcHRpb24tbGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWFpblRhYlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0Q1MUExQVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjYwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeTpkaXNhYmxlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIwLjVcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xuXG4vL3NpbXBsZSByb3V0aW5nIHNjcmlwdFxuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXNcIjtcbi8vaW1wb3J0IEJhY2tlbmRTZXJ2aWNlIGZyb20gXCIuL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZVwiO1xuXG4vLyBVbmNvbW1tZW50IHRoZSBmb2xsb3dpbmcgdG8gc2VlIE5hdGl2ZVNjcmlwdC1WdWUgb3V0cHV0IGxvZ3Ncbi8vIFZ1ZS5jb25maWcuc2lsZW50ID0gZmFsc2U7XG5cblxuLy9wbHVnaW5zIHRvIGJlIHVzZWQgd2l0aCB0aGlzIGFwcGxpY2F0aW9uXG5WdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlOy8vc2V0IHRvIGZhbHNlIHRvIHNlZSBvdXRwdXQgbG9nc1xuVnVlLnJlZ2lzdGVyRWxlbWVudCgnUmFkU2lkZURyYXdlcicsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJykuUmFkU2lkZURyYXdlcilcblZ1ZS5yZWdpc3RlckVsZW1lbnQoXCJNYXBib3hcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1tYXBib3hcIikuTWFwYm94VmlldylcbmltcG9ydCBSYWRMaXN0VmlldyBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvdnVlJztcblZ1ZS51c2UoUmFkTGlzdFZpZXcpO1xuXG4vLyBjb25zdCBiYWNrZW5kU2VydmljZSA9IG5ldyBCYWNrZW5kU2VydmljZSgpO1xuLy8gVnVlLnByb3RvdHlwZS4kYmFja2VuZFNlcnZpY2UgPSBiYWNrZW5kU2VydmljZTtcblxuLy9zdGFydCB0aGUgdnVlIGFwcGxpY2F0aW9uXG5uZXcgVnVlKHtcbiAgcmVuZGVyOiBoID0+IGgoXCJmcmFtZVwiLCBbaChyb3V0ZXMuYmFja2dyb3VuZCldKVxufSkuJHN0YXJ0KCk7XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0JhY2tncm91bmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM5ZTNmMWM5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0JhY2tncm91bmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CYWNrZ3JvdW5kLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzllM2YxYzlcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9oa2F0d2lqay9yZXBvL0xvTm90ZS9Mb05vVEUgYXBwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM5ZTNmMWM5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM5ZTNmMWM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM5ZTNmMWM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CYWNrZ3JvdW5kLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOWUzZjFjOSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczOWUzZjFjOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9CYWNrZ3JvdW5kLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYWNrZ3JvdW5kLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0JhY2tncm91bmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0JhY2tncm91bmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM5ZTNmMWM5JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Gb3Jnb3RQYXNzd29yZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjQxZDM5Zjkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRm9yZ290UGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Gb3Jnb3RQYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRm9yZ290UGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjQxZDM5Zjkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI0MWQzOWY5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvaGthdHdpamsvcmVwby9Mb05vdGUvTG9Ob1RFIGFwcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyNDFkMzlmOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNDFkMzlmOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNDFkMzlmOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRm9yZ290UGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0MWQzOWY5JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI0MWQzOWY5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb3Jnb3RQYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb3Jnb3RQYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZvcmdvdFBhc3N3b3JkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0MWQzOWY5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZvcmdvdFBhc3N3b3JkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0MWQzOWY5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZvcmdvdFBhc3N3b3JkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNDFkMzlmOSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2Emc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2NzQxMGYzYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2hrYXR3aWprL3JlcG8vTG9Ob3RlL0xvTm9URSBhcHAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjc0MTBmM2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjc0MTBmM2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjc0MTBmM2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3NDEwZjNhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0hvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2Emc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYzI3NDgyYzRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9oa2F0d2lqay9yZXBvL0xvTm90ZS9Mb05vVEUgYXBwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2MyNzQ4MmM0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2MyNzQ4MmM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2MyNzQ4MmM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzI3NDgyYzQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvTG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ob3RlRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDkyMDhmZTUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTm90ZURldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ob3RlRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQ5MjA4ZmU1XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvaGthdHdpamsvcmVwby9Mb05vdGUvTG9Ob1RFIGFwcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0OTIwOGZlNScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0OTIwOGZlNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0OTIwOGZlNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTm90ZURldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5MjA4ZmU1JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ5MjA4ZmU1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL05vdGVEZXRhaWxzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob3RlRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob3RlRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90ZURldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5MjA4ZmU1JnNjb3BlZD10cnVlJlwiIiwiYW5kcm9pZC5hcHAuSW50ZW50U2VydmljZS5leHRlbmQoXCJjb20udG5zLm5vdGlmaWNhdGlvbnMuTm90aWZpY2F0aW9uSW50ZW50U2VydmljZVwiIC8qIGdpdmUgeW91ciBjbGFzcyBhIHZhbGlkIG5hbWUgYXMgaXQgd2lsbCBuZWVkIHRvIGJlIGRlY2xhcmVkIGluIHRoZSBBbmRyb2lkTWFuaWZlc3QgbGF0ZXIgKi8sIHtcbiAgICBvbkhhbmRsZUludGVudDogZnVuY3Rpb24gKGludGVudCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gaW50ZW50LmdldEFjdGlvbigpO1xuICAgICAgICBpZiAoXCJBQ1RJT05fU1RBUlRcIiA9PSBhY3Rpb24pIHtcbiAgICAgICAgICAgIHBvc3ROb3RpZmljYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChcIkFDVElPTl9TVE9QXCIgPT0gYWN0aW9uKSB7XG4gICAgIC8qIGdldCB0aGUgc3lzdGVtIGFsYXJtIG1hbmFnZXIgYW5kIGNhbmNlbCBhbGwgcGVuZGluZyBhbGFybXMsIHdoaWNoIHdpbGwgc3RvcCB0aGUgc2VydmljZSBmcm9tIGV4ZWN1dGluZyBwZXJpb2RpY2FsbHkgICovXG4gICAgICAgIH1cbiAgICAgXG4gICAgICAgIGFuZHJvaWQuc3VwcG9ydC52NC5jb250ZW50Lldha2VmdWxCcm9hZGNhc3RSZWNlaXZlci5jb21wbGV0ZVdha2VmdWxJbnRlbnQoaW50ZW50KTtcbiAgXG4gXG4gICAgfVxuIH0pO1xuXG4gZnVuY3Rpb24gcG9zdE5vdGlmaWNhdGlvbigpIHtcbiAgICAvLyBEbyBzb21ldGhpbmcuIEZvciBleGFtcGxlLCBmZXRjaCBmcmVzaCBkYXRhIGZyb20gYmFja2VuZCB0byBjcmVhdGUgYSByaWNoIG5vdGlmaWNhdGlvbj9cbiAgICB2YXIgdXRpbHMgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XG4gICAgdmFyIGNvbnRleHQgPSB1dGlscy5hZC5nZXRBcHBsaWNhdGlvbkNvbnRleHQoKTsgLy8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBhcHBsaWNhdGlvbiBjb250ZXh0IGluIEFuZHJvaWRcbiAgICB2YXIgYnVpbGRlciA9IG5ldyBhbmRyb2lkLmFwcC5Ob3RpZmljYXRpb24uQnVpbGRlcihjb250ZXh0KTtcbiAgICBidWlsZGVyLnNldENvbnRlbnRUaXRsZShcIlNjaGVkdWxlZCBOb3RpZmljYXRpb25cIilcbiAgICAgICAgLnNldEF1dG9DYW5jZWwodHJ1ZSlcbiAgICAgICAgLnNldENvbG9yKGFuZHJvaWQuUi5jb2xvci5ob2xvX3B1cnBsZSkgLy8gb3B0aW9uYWxcbiAgICAgICAgLnNldENvbnRlbnRUZXh0KFwiVGhpcyBub3RpZmljYXRpb24gaGFzIGJlZW4gdHJpZ2dlcmVkIGJ5IE5vdGlmaWNhdGlvbiBTZXJ2aWNlXCIpXG4gICAgICAgIC5zZXRWaWJyYXRlKFsxMDAsIDIwMCwgMTAwXSkgLy8gb3B0aW9uYWxcbiAgICAgICAgLnNldFNtYWxsSWNvbihhbmRyb2lkLlIuZHJhd2FibGUuYnRuX3N0YXJfYmlnX29uKTtcbiAgICAgICAgLy8gd2lsbCBvcGVuIG1haW4gTmF0aXZlU2NyaXB0IGFjdGl2aXR5IHdoZW4gdGhlIG5vdGlmaWNhdGlvbiBpcyBwcmVzc2VkXG4gICAgdmFyIG1haW5JbnRlbnQgPSBuZXcgYW5kcm9pZC5jb250ZW50LkludGVudChjb250ZXh0LCBjb20udG5zLk5hdGl2ZVNjcmlwdEFjdGl2aXR5LmNsYXNzKTtcbiAgICB2YXIgcGVuZGluZ0ludGVudCA9IGFuZHJvaWQuYXBwLlBlbmRpbmdJbnRlbnQuZ2V0QWN0aXZpdHkoY29udGV4dCxcbiAgICAgICAgMSxcbiAgICAgICAgbWFpbkludGVudCxcbiAgICAgICAgYW5kcm9pZC5hcHAuUGVuZGluZ0ludGVudC5GTEFHX1VQREFURV9DVVJSRU5UKTtcbiAgICBidWlsZGVyLnNldENvbnRlbnRJbnRlbnQocGVuZGluZ0ludGVudCk7XG4gICAgYnVpbGRlci5zZXREZWxldGVJbnRlbnQoZ2V0RGVsZXRlSW50ZW50KGNvbnRleHQpKTtcbiAgICB2YXIgbWFuYWdlciA9IGNvbnRleHQuZ2V0U3lzdGVtU2VydmljZShhbmRyb2lkLmNvbnRlbnQuQ29udGV4dC5OT1RJRklDQVRJT05fU0VSVklDRSk7XG4gICAgbWFuYWdlci5ub3RpZnkoMSwgYnVpbGRlci5idWlsZCgpKTtcbiB9XG5cbiAvKiBvbmx5IG5lY2Vzc2FyeSBmb3IgZGlzbWlzc2luZyB0aGUgbm90aWZpY2F0aW9uIGZyb20gdGhlIE5vdGlmaWNhdGlvbnMgU2NyZWVuICovXG4gZnVuY3Rpb24gZ2V0RGVsZXRlSW50ZW50KGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGludGVudCA9IG5ldyBhbmRyb2lkLmNvbnRlbnQuSW50ZW50KGNvbnRleHQsIGNvbS50bnMuYnJvYWRjYXN0cmVjZWl2ZXJzLk5vdGlmaWNhdGlvbkV2ZW50UmVjZWl2ZXIuY2xhc3MpO1xuICAgICAgICBpbnRlbnQuc2V0QWN0aW9uKFwiQUNUSU9OX0RFTEVURV9OT1RJRklDQVRJT05cIik7XG4gICAgICAgIHJldHVybiBhbmRyb2lkLmFwcC5QZW5kaW5nSW50ZW50LmdldEJyb2FkY2FzdChjb250ZXh0LCAwLCBpbnRlbnQsIGFuZHJvaWQuYXBwLlBlbmRpbmdJbnRlbnQuRkxBR19VUERBVEVfQ1VSUkVOVCk7XG4gfVxuXG4gYW5kcm9pZC5zdXBwb3J0LnY0LmNvbnRlbnQuV2FrZWZ1bEJyb2FkY2FzdFJlY2VpdmVyLmV4dGVuZChcImNvbS50bnMuYnJvYWRjYXN0cmVjZWl2ZXJzLk5vdGlmaWNhdGlvbkV2ZW50UmVjZWl2ZXJcIiwge1xuICAgIG9uUmVjZWl2ZTogZnVuY3Rpb24gKGNvbnRleHQsIGludGVudCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gaW50ZW50LmdldEFjdGlvbigpO1xuICAgICAgICB2YXIgc2VydmljZUludGVudDtcbiAgICAgICAgaWYgKFwiQUNUSU9OX1NUQVJUX05PVElGSUNBVElPTl9TRVJWSUNFXCIgPT0gYWN0aW9uKSB7XG4gICAgICAgICAgICBzZXJ2aWNlSW50ZW50ID0gY3JlYXRlSW50ZW50U3RhcnROb3RpZmljYXRpb25TZXJ2aWNlKGNvbnRleHQpO1xuICAgICAgICB9IGVsc2UgaWYgKFwiQUNUSU9OX0RFTEVURV9OT1RJRklDQVRJT05cIiA9PSBhY3Rpb24pIHtcbiAgICAgICAgICAgIHNlcnZpY2VJbnRlbnQgPSBjcmVhdGVJbnRlbnREZWxldGVOb3RpZmljYXRpb24oY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlcnZpY2VJbnRlbnQpIHtcbiAgICAgICAgICAgIGFuZHJvaWQuc3VwcG9ydC52NC5jb250ZW50Lldha2VmdWxCcm9hZGNhc3RSZWNlaXZlci5zdGFydFdha2VmdWxTZXJ2aWNlKGNvbnRleHQsIHNlcnZpY2VJbnRlbnQpO1xuICAgICAgICB9XG4gICAgfVxuIH0pXG4gdmFyIEludGVudCA9IGFuZHJvaWQuY29udGVudC5JbnRlbnQ7XG4gZnVuY3Rpb24gY3JlYXRlSW50ZW50U3RhcnROb3RpZmljYXRpb25TZXJ2aWNlKGNvbnRleHQpIHtcbiAgICB2YXIgaW50ZW50ID0gbmV3IEludGVudChjb250ZXh0LCBjb20udG5zLm5vdGlmaWNhdGlvbnMuTm90aWZpY2F0aW9uSW50ZW50U2VydmljZS5jbGFzcyk7XG4gICAgaW50ZW50LnNldEFjdGlvbihcIkFDVElPTl9TVEFSVFwiKTtcbiAgICByZXR1cm4gaW50ZW50O1xuIH1cbiBmdW5jdGlvbiBjcmVhdGVJbnRlbnREZWxldGVOb3RpZmljYXRpb24oY29udGV4dCkge1xuICAgIC8qIFNpbWlsYXIgYXMgYWJvdmUsIGp1c3Qgd2l0aCBhIGRpZmZlcmVudCBhY3Rpb24gKi9cbiB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Qb3N0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZDRhMmIwYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qb3N0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUG9zdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjlkNGEyYjBhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvaGthdHdpamsvcmVwby9Mb05vdGUvTG9Ob1RFIGFwcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5ZDRhMmIwYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5ZDRhMmIwYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5ZDRhMmIwYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUG9zdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWQ0YTJiMGEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOWQ0YTJiMGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvUG9zdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZDRhMmIwYSZzY29wZWQ9dHJ1ZSZcIiIsImZ1bmN0aW9uIHNjaGVkdWxlSm9iKGNvbnRleHQpIHtcbiAgICAvLyBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSB0aGUgSm9iU2VydmljZSB0aGF0IHNob3VsZCBiZSB0cmlnZ2VyZWRcbiAgICBsZXQgY29tcG9uZW50ID0gbmV3IGFuZHJvaWQuY29udGVudC5Db21wb25lbnROYW1lKGNvbnRleHQsIGNvbS50bnMubm90aWZpY2F0aW9ucy5NeUpvYlNlcnZpY2UuY2xhc3MpO1xuICAgIGNvbnNvbGUubG9nKGNvbXBvbmVudClcblxuICAgIC8vIFNldCB0aGUgaWQgb2YgdGhlIGpvYiB0byBzb21ldGhpbmcgbWVhbmluZ2Z1bCBmb3IgeW91XG4gICAgY29uc3QgYnVpbGRlciA9IG5ldyBhbmRyb2lkLmFwcC5qb2IuSm9iSW5mby5CdWlsZGVyKDEsIGNvbXBvbmVudCk7XG5cbiAgICAvLyBPcHRpb25hbDogU2V0IGhvdyBvZnRlbiB0aGUgdGFzayBzaG91bGQgYmUgdHJpZ2dlcmVkLiBUaGUgbWluaW11bSBpcyAxNW1pbi5cbiAgICBidWlsZGVyLnNldFBlcmlvZGljKDE1ICogNjAgKiAxMDAwKTtcbiAgICBcbiAgICAvLyBPcHRpb25hbDogU2V0IGFkZGl0aW9uYWwgcmVxdWlyZW1lbnRzIHVuZGVyIHdoYXQgY29uZGl0aW9ucyB5b3VyIGpvYiBzaG91bGQgYmUgdHJpZ2dlcmVkXG4gICAgYnVpbGRlci5zZXRSZXF1aXJlc0NoYXJnaW5nKGZhbHNlKTtcblxuICAgIGNvbnN0IGpvYlNjaGVkdWxlciA9IGNvbnRleHQuZ2V0U3lzdGVtU2VydmljZShhbmRyb2lkLmNvbnRlbnQuQ29udGV4dC5KT0JfU0NIRURVTEVSX1NFUlZJQ0UpO1xuICAgIGNvbnNvbGUubG9nKFwiSm9iIFNjaGVkdWxlZDogXCIgKyBqb2JTY2hlZHVsZXIuc2NoZWR1bGUoYnVpbGRlci5idWlsZCgpKSk7XG59IiwiZnVuY3Rpb24gZ2V0U3RhcnRQZW5kaW5nSW50ZW50KGNvbnRleHQpIHtcbiAgICB2YXIgYWxhcm1JbnRlbnQgPSBuZXcgYW5kcm9pZC5jb250ZW50LkludGVudChjb250ZXh0LCBjb20udG5zLmJyb2FkY2FzdHJlY2VpdmVycy5Ob3RpZmljYXRpb25FdmVudFJlY2VpdmVyLmNsYXNzKTtcbiAgICBpbnRlbnQuc2V0QWN0aW9uKFwiQUNUSU9OX1NUQVJUX05PVElGSUNBVElPTl9TRVJWSUNFXCIpO1xuICAgIHJldHVybiBhbmRyb2lkLmFwcC5QZW5kaW5nSW50ZW50LmdldEJyb2FkY2FzdChjb250ZXh0LCAwLCBpbnRlbnQsIGFuZHJvaWQuYXBwLlBlbmRpbmdJbnRlbnQuRkxBR19VUERBVEVfQ1VSUkVOVCk7XG4gfVxuIGZ1bmN0aW9uIHNldHVwQWxhcm0oY29udGV4dCkge1xuICAgIHZhciBhbGFybU1hbmFnZXIgPSBjb250ZXh0LmdldFN5c3RlbVNlcnZpY2UoYW5kcm9pZC5jb250ZW50LkNvbnRleHQuQUxBUk1fU0VSVklDRSk7XG4gICAgdmFyIGFsYXJtSW50ZW50ID0gZ2V0U3RhcnRQZW5kaW5nSW50ZW50KGNvbnRleHQpO1xuICAgIGFsYXJtTWFuYWdlci5zZXRSZXBlYXRpbmcoYW5kcm9pZC5hcHAuQWxhcm1NYW5hZ2VyLlJUQ19XQUtFVVAsXG4gICAgICAgIGphdmEubGFuZy5TeXN0ZW0uY3VycmVudFRpbWVNaWxsaXMoKSxcbiAgICAgICAgMTAwMCAqIDYwICogNjAgKiAyNCwgLyogYWxhcm0gd2lsbCBzZW5kIHRoZSBgYWxhcm1JbnRlbnRgIG9iamVjdCBldmVyeSAyNGggKi9cbiAgICAgICAgYWxhcm1JbnRlbnQpO1xuIH0iLCJpbXBvcnQgTG9naW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9naW5cIjtcbmltcG9ydCBIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWVcIjtcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuLi9jb21wb25lbnRzL0JhY2tncm91bmRcIjtcblxuY29uc3Qgcm91dGVzID0ge1xuICAgIGxvZ2luOiBMb2dpbixcbiAgICBob21lOiBIb21lLFxuICAgIGJhY2tncm91bmQ6IEJhY2tncm91bmRcbn1cbmV4cG9ydCBkZWZhdWx0IHJvdXRlczsiLCIvLyBUaGUgZm9sbG93aW5nIGlzIGEgc2FtcGxlIGltcGxlbWVudGF0aW9uIG9mIGEgYmFja2VuZCBzZXJ2aWNlIHVzaW5nIFByb2dyZXNzIEtpbnZleSAoaHR0cHM6Ly93d3cucHJvZ3Jlc3MuY29tL2tpbnZleSkuXG4vLyBGZWVsIGZyZWUgdG8gc3dhcCBpbiB5b3VyIG93biBzZXJ2aWNlIC8gQVBJcyAvIGV0YyBoZXJlIGZvciB5b3VyIG93biBhcHBzLlxuXG5pbXBvcnQgKiBhcyBLaW52ZXkgZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5cbktpbnZleS5pbml0KHtcbiAgICBhcHBLZXk6IFwia2lkX1N5WThMWU84TVwiLFxuICAgIGFwcFNlY3JldDogXCIwOTI4Mjk4NWQ3YzU0MGY3YjA3NmE5YzdmZDg4NGM3N1wiXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xuXG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuICEhS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpO1xuICAgIH1cblxuICAgIGxvZ2luKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLmxvZ2luKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQpO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLmxvZ291dCgpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLnNpZ251cCh7IHVzZXJuYW1lOiB1c2VyLmVtYWlsLCBwYXNzd29yZDogdXNlci5wYXNzd29yZCB9KTtcbiAgICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=