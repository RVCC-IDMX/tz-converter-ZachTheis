const moment = require("moment-timezone");
const yargs = require("yargs");

moment.tz.setDefault("America/New_York");

let targetTimezone;
let params;

if (process.argv.length < 3) {
  console.log("Usages: node <script-file> <timezone>");
  process.exit(1);
} else {
  params = yargs.argv;
  targetTimezone = params._[0];
}

console.log(
  `The time in the ${targetTimezone} timezone is ${moment()
    .tz(targetTimezone)
    .format()}`
);
