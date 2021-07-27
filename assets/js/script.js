const hourButtonEl = $("#hourToggle");
const currentDayEl = $("#currentDay");
const timeBlocksEl = $("#timeBlocks");

let thisDay = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
currentDayEl.html(thisDay);
let timeClock = setInterval(function() {
    thisDay = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    currentDayEl.html(thisDay);
}, 1000);
