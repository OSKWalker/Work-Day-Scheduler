const currentDayEl = $("#currentDay");
const timeBlocksEl = $("#timeBlocks");

let thisDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDayEl.html(thisDay);
let timeClock = setInterval(function () {
  thisDay = moment().format("dddd, DD MMM YY, HH:mm:ss");
  currentDayEl.html(thisDay);
}, 1000);

let zeroFiveTasks = JSON.parse(localStorage.getItem("Zero-Five Tasks")) || [];
let zeroSixTasks = JSON.parse(localStorage.getItem("Zero-Six Tasks")) || [];
let zeroSevenTasks = JSON.parse(localStorage.getItem("Zero-Seven Tasks")) || [];
let zeroEightTasks = JSON.parse(localStorage.getItem("Zero-Eight Tasks")) || [];
let zeroNineTasks = JSON.parse(localStorage.getItem("Zero-Nine Tasks")) || [];
let tenHundredTasks =
  JSON.parse(localStorage.getItem("Ten-Hundred Tasks")) || [];
let elevenHundredTasks =
  JSON.parse(localStorage.getItem("Eleven-Hundred Tasks")) || [];
let twelveHundredTasks =
  JSON.parse(localStorage.getItem("Twelve-Hundred Tasks")) || [];
let thirteenHundredTasks =
  JSON.parse(localStorage.getItem("Thirteen-Hundred Tasks")) || [];
let fourteenHundredTasks =
  JSON.parse(localStorage.getItem("Fourteen-Hundred Tasks")) || [];
let fifteenHundredTasks =
  JSON.parse(localStorage.getItem("Fifteen-Hundred Tasks")) || [];
let sixteenHundredTasks =
  JSON.parse(localStorage.getItem("Sixteen-Hundred Tasks")) || [];
let seventeenHundredTasks =
  JSON.parse(localStorage.getItem("Seventeen-Hundred Tasks")) || [];

let savedTasks = [
  zeroFiveTasks,
  zeroSixTasks,
  zeroSevenTasks,
  zeroEightTasks,
  zeroNineTasks,
  tenHundredTasks,
  elevenHundredTasks,
  twelveHundredTasks,
  thirteenHundredTasks,
  fourteenHundredTasks,
  fifteenHundredTasks,
  sixteenHundredTasks,
  seventeenHundredTasks,
];
let timeStatus = "future";
let timeSet = "HH:mm:ss";
let currentTime = moment();
let beginHour = moment().startOf("hour");
let endHour = moment().endOf("hour");
let dayStart = moment("05", timeSet).format(timeSet);
let zeroSix = moment("06", timeSet).format(timeSet);
let zeroSeven = moment("07", timeSet).format(timeSet);
let zeroEight = moment("08", timeSet).format(timeSet);
let zeroNine = moment("09", timeSet).format(timeSet);
let tenHundred = moment("10", timeSet).format(timeSet);
let elevenHundred = moment("11", timeSet).format(timeSet);
let twelveHundred = moment("12", timeSet).format(timeSet);
let thirteenHundred = moment("13", timeSet).format(timeSet);
let fourteenHundred = moment("14", timeSet).format(timeSet);
let fifteenHundred = moment("15", timeSet).format(timeSet);
let sixteenHundred = moment("16", timeSet).format(timeSet);
let dayEnd = moment("17", timeSet).format(timeSet);

let workHours = [
  dayStart,
  zeroSix,
  zeroSeven,
  zeroEight,
  zeroNine,
  tenHundred,
  elevenHundred,
  twelveHundred,
  thirteenHundred,
  fourteenHundred,
  fifteenHundred,
  sixteenHundred,
  dayEnd,
];

workHours.forEach(function (hour, index) {
  setTimeBlock(hour, index);
});

// Create the timeblocks
function setTimeBlock(hour, index) {
  let nextTimeBlock = index + 5;
  let newTimeBlock = $(
    `<div class="row time-block" data-hour="${nextTimeBlock}" data-time"${hour}"><span class="hour">${hour}</span></div>`
  );
  let timeFrame = newTimeBlock.data("hour");
  let status = setStatus(timeFrame);

  newTimeBlock.append(
    $(
      `<textarea class="${status} description" id="hr-${index}" placeholder="Enter Tasks Here"></textarea>`
    )
  );
  let newSaveButton = $(
    `<button class="saveBtn"><i class="fas fa-book fa-x"></i></button>"`
  );

  newTimeBlock.append(newSaveButton).on("click", "button", function (event) {
    event.preventDefault();

    let target = event.target;
    let indexReference = null;

    // Guarantees that the button will always reference the same element
    if (target.matches("i") === true) {
      indexReference = $(event.target).parent().parent().data("hour");
      taskEntry = $(event.target).parent().parent().children().eq(1).val();
    } else {
      indexReference = $(event.target).parent().data("hour");
      taskEntry = $(event.target).parent().children().eq(1).val();
    }
    console.log(taskEntry);
    /*
    let userTask = */
  });
  timeBlocksEl.append(newTimeBlock);
}

// Determine whether timeslot is in the past, present, or future
function setStatus(timeFrame) {
  if (timeFrame < moment().hours()) {
    timeStatus = "past";
  } else if (timeFrame === moment().hours()) {
    timeStatus = "present";
  } else {
    timeStatus = "future";
  }
  return timeStatus;
}
