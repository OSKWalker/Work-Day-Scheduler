const hourButtonEl = $("#hourToggle");
const currentDayEl = $("#currentDay");
const timeBlocksEl = $("#timeBlocks");

let thisDay = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
currentDayEl.html(thisDay);
let timeClock = setInterval(function() {
    thisDay = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    currentDayEl.html(thisDay);
}, 1000);

// Toggle between Military-Style 24hr mode and Civilian-Style 12hr (AM/PM) mode
function switchMode(){
    if(hourButtonEl.html("24hr")){
        thisDay = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
        hourButtonEl.html("12hr");
    }else{
        thisDay = moment().defaultformat();
        hourButtonEl.html("24hr");

    }
};