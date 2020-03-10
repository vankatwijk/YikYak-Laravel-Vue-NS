require ("nativescript-local-notifications");
import { LocalNotifications } from "nativescript-local-notifications";
import * as Geolocation from 'nativescript-geolocation';
const httpModule = require("http");
const appSettings = require("tns-core-modules/application-settings");

LocalNotifications.hasPermission();
android.app.job.JobService.extend("com.tns.components.notifications.MyJobService", {
    onStartJob() {
     console.log("Job execution ...");
     // here you can do whatever you want
     //this.jobFinished(params, true); //this ends the job if successful, if not `return false;`

    console.log('getting notes');
    var location = {};
    var needLocation = true;
    var locationFailure = false;
    var location = null;
    //get all stored variables from the login session
    var userToken = appSettings.getString('userToken',0);
    var appURL = appSettings.getString('appURL',0);
    this.APIURL = appURL;

    Geolocation.enableLocationRequest(true)
    .then(() => {
        Geolocation.isEnabled().then(isLocationEnabled => {
            console.log('result is '+isLocationEnabled);
            if(!isLocationEnabled) {
                this.needLocation = false;
                this.locationFailure = true;
                // potentially do more then just end here...
                return;
            }

            // MUST pass empty object!!
            Geolocation.getCurrentLocation({})
            .then(result => {
                console.log('loc result', result);
                this.needLocation = false;
                this.location = result;
                


                //debuging show 
                console.log(appURL+'/api/notes?lat='+this.location.latitude+'&lng='+this.location.longitude);

                //send request to api server
                httpModule.request({
                    url: appURL+'/api/notes?lat='+this.location.latitude+'&lng='+this.location.longitude,
                    method: "Get",
                    headers: { 
                        "Accept": "application/json" ,
                        "Authorization": "Bearer "+userToken
                    }
                }).then(response => {
                    var result = response.content.toJSON();
                    if(response){


                        //create the notification with all the information you may need
                        LocalNotifications.schedule([{
                            id: 1, // generated id if not set
                            title: 'Hey !',
                            body: 'Hey there may be notes in your area, check them out',
                            ticker: 'The ticker',
                            badge: 1,
                            groupedMessages:["The first", "Second", "Keep going", "one more..", "OK Stop"], //android only
                            groupSummary:"Summary of the grouped messages above", //android only
                            ongoing: false, // makes the notification ongoing (Android only)
                            icon: 'res://heart',
                            image: "https://rawair.com/wp-content/uploads/2016/12/LO-logo-300x122.png",
                            thumbnail: true,
                            channel: 'My Channel', // default: 'Channel'
                            sound: "customsound-ios.wav", // falls back to the default sound on Android
                            at: new Date(new Date().getTime() + (1 * 1000)) // 10 seconds from now
                        }]).then(
                            function(scheduledIds) {
                                console.log("Notification id(s) scheduled: " + JSON.stringify(scheduledIds));
                            },
                            function(error) {
                                console.log("scheduling error: " + error);
                            }
                        )

                    }else{
                        console.log('there is no information '+response);
                    }

                }, error => {
                    console.error(error);
                });





            })
            .catch(e => {
                console.log('loc error', e);
            });
        });
    });





     return true;
    },
   
    onStopJob() {
        console.log("Stopping job ...");
        
        //remove any scheduled notifications that were not sent out
        LocalNotifications.cancelAll();

        return true; //returning true makes the task reschedule
    },
});