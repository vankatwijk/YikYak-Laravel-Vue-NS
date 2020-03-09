android.app.job.JobService.extend("com.tns.components.notifications.MyJobService", {
    onStartJob() {
     console.log("Job execution ...");
     // here you can do whatever you want
     //this.jobFinished(params, true); //this ends the job if successful, if not `return false;`
     return true;
    },
   
    onStopJob() {
     console.log("Stopping job ...");
     return true; //returning true makes the task reschedule
    },
});