const currentDate = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = daysOfWeek[currentDate.getDay()];

document.getElementById("DayOfWeek").innerHTML = dayOfWeek;

setInterval(() =>{
let d = new Date();

document.getElementById("currentTime").innerHTML = d.toLocaleTimeString();
},1000)
