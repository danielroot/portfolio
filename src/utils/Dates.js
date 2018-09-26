let TodaysDate = new Date();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let currentMonth = TodaysDate.getMonth() + 1;
if (currentMonth < 10) {
  currentMonth = `0${currentMonth}`;
}

export const originYear = 2006;
export let currentYear = TodaysDate.getFullYear();
export let currentMonthName = months[TodaysDate.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
export { currentMonth };
