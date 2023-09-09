const currentDate = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = daysOfWeek[currentDate.getDay()];

document.getElementById("DayOfWeek").innerHTML = dayOfWeek;

let new_time = new Date().getTime();
let currentUTCTime = document.getElementById("currentTime");
currentUTCTime.innerHTML = new_time;
