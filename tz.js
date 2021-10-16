const moment = require("moment-timezone");
const yargs = require("yargs");

moment.tz.setDefault("America/New_York");

let targetTimezone;
let params = [];
let targetCity;
const localTimezone = "America/New_York";
const months = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
};

if (process.argv.length < 3) {
  console.log("Usages: node <script-file> <timezone>");
  process.exit(1);
} else {
  params = yargs.argv;
  targetTimezone = params._[0];
  targetCity = targetTimezone.split("/")[1];
}

if (params.format) {
  let timezoneArr = `${moment().tz(localTimezone)}`
    .replace(":", " ")
    .replace(":", " ")
    .split(" ");
  let suffix;
  let timezoneHour = timezoneArr[4];
  let timezoneM = "am";
  let timezoneDay = "day";
  if (timezoneHour > 12) {
    timezoneHour -= 12;
    timezoneM = "pm";
  }
  if (timezoneArr[0] === "Sat") {
    timezoneDay = "urday";
  } else if (timezoneArr[0] === "Wed") {
    timezoneDay = "nesday";
  }
  if (timezoneArr[2] === 1 || timezoneArr[2] === 21 || timezoneArr[2] === 31) {
    suffix = "st";
  } else if (timezoneArr[2] === 2 || timezoneArr[2] === 22) {
    suffix = "nd";
  } else if (timezoneArr[2] === 3 || timezoneArr[2] === 23) {
    suffix = "rd";
  } else {
    suffix = "th";
  }
  console.log(
    `The time here is: ${timezoneArr[0]}${timezoneDay}, ${
      months[timezoneArr[1]]
    } ${timezoneArr[2]}${suffix} ${timezoneArr[3]}, ${timezoneHour}:${
      timezoneArr[5]
    }:${timezoneArr[6]} ${timezoneM}`
  );

  timezoneArr = `${moment().tz(targetTimezone)}`
    .replace(":", " ")
    .replace(":", " ")
    .split(" ");
  timezoneHour = timezoneArr[4];
  timezoneM = "am";
  timezoneDay = "day";
  if (timezoneHour > 12) {
    timezoneHour -= 12;
    timezoneM = "pm";
  }
  if (timezoneArr[0] === "Sat") {
    timezoneDay = "urday";
  } else if (timezoneArr[0] === "Wed") {
    timezoneDay = "nesday";
  }
  if (timezoneArr[2] === 1 || timezoneArr[2] === 21 || timezoneArr[2] === 31) {
    suffix = "st";
  } else if (timezoneArr[2] === 2 || timezoneArr[2] === 22) {
    suffix = "nd";
  } else if (timezoneArr[2] === 3 || timezoneArr[2] === 23) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  console.log(
    `The time in ${targetCity} is: ${timezoneArr[0]}${timezoneDay}, ${
      months[timezoneArr[1]]
    } ${timezoneArr[2]}${suffix} ${timezoneArr[3]}, ${timezoneHour}:${
      timezoneArr[5]
    }:${timezoneArr[6]} ${timezoneM}`
  );
} else {
  console.log(`The time here is: ${moment().tz(localTimezone).format()}`);
  console.log(
    `The time in ${targetTimezone} is ${moment().tz(targetTimezone).format()}`
  );
}
