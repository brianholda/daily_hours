//
//-----------Daily Library Hours---------------------
//
var library_hours = (function(w, d) {
    var todaysDate = new Date().toDateString();
    var todayId = document.getElementById("today");
    var grHoursId = document.getElementById("gr-hours");
    var lansHoursId = document.getElementById("lans-hours");
    var midlandHoursId = document.getElementById("midland-hours");
    var warrenHoursId = document.getElementById("warren-hours");
    var hours = {
        //hours for Grand Rapids Campus
        grHours: [
            "Noon - 6:00pm", //Sunday
            "7:45am - 10:30pm", //Monday
            "7:45am - 10:30pm", //Tuesday
            "7:45am - 10:30pm", //Wednesday
            "7:45am - 10:30pm", //Thursday
            "7:45am - 4:30pm", //Friday
            "Noon - 6:00pm" //Saturday
        ],
        //hours for Lansing Campus
        lansingHours: [
            "Closed", //Sunday
            "8:00am - 8:30pm", //Monday
            "8:00am - 8:30pm", //Tuesday
            "8:00am - 8:30pm", //Wednesday
            "8:00am - 8:30pm", //Thursday
            "10:00am - 5:00pm", //Friday
            "Closed" //Saturday
        ],
        //hours for Midland Campus
        midlandHours: [
            "Closed", //Sunday
            "8:00am - 8:00pm", //Monday
            "8:00am - 8:00pm", //Tuesday
            "8:00am - 8:00pm", //Wednesday
            "8:00am - 8:00pm", //Thursday
            "8:00am - 4:00pm", //Friday
            "Closed" //Saturday
        ],
        warrenHours: [
            "Closed", //Sunday
            "8:00am - 8:00pm", //Monday
            "8:00am - 8:00pm", //Tuesday
            "8:00am - 8:00pm", //Wednesday
            "8:00am - 8:00pm", //Thursday
            "8:00am - 4:30pm", //Friday
            "Closed" //Saturday
        ]
    }; //end var hours
    var date = new Date().getDay();
    var dailyHoursUi = function() {
        if (library_hours.todayNode() !== null) {
            library_hours.todayNode().innerHTML = library_hours.todayIs();
        } //end if
        if (library_hours.grNode() !== null) {
            library_hours.grNode().innerHTML = library_hours.gr();
        } //end if
        if (library_hours.lansNode() !== null) {
            library_hours.lansNode().innerHTML = library_hours.lans();
        } //end if
        if (library_hours.midNode() !== null) {
            library_hours.midNode().innerHTML = library_hours.mid();
        } //end if
        if (library_hours.warNode() !== null) {
            library_hours.warNode().innerHTML = library_hours.war();
        } //end if
    }; //end dailyHoursUi()

    return {
        todayIs: function() {
            return todaysDate;
        },
        todayNode: function() {
            return todayId;
        },
        grNode: function() {
            return grHoursId;
        },
        lansNode: function() {
            return lansHoursId;
        },
        midNode: function() {
            return midlandHoursId;
        },
        warNode: function() {
            return warrenHoursId;
        },
        gr: function() {
            return hours.grHours[date];
        },
        lans: function() {
            return hours.lansingHours[date];
        },
        mid: function() {
            return hours.midlandHours[date];
        },
        war: function() {
            return hours.warrenHours[date];
        },
        showHours: function() {
            return dailyHoursUi();
        }
    }; //end return
})(window, document); //end library_hours()

var library_hours_output = (function(w, d) {
    return library_hours.showHours();
})(window, document); //end library_hours_output()
