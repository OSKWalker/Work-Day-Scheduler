const currentDayEl = $("#currentDay");
const timeBlocksEl = $("#timeBlocks");

let thisDay = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
currentDayEl.html(thisDay);
let timeClock = setInterval(function() {
    thisDay = moment().format('dddd, DD MMM YY, HH:mm:ss');
    currentDayEl.html(thisDay);
}, 1000);