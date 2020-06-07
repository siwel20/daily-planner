var day = {};
const m = moment();

// date at top
var dateAtTop = document.querySelector("#currentDay");
dateAtTop.textContent = m.format("dddd MMM DD, YYYY")
var currentHour = moment().hour()
var workHours = [9,10,11,12,13,14,15,16,17]
var loadTime = function() {
    for (let i = 0; i < 9; i++) {
      if (workHours[i] < currentHour) {
        document.getElementById(i).classList.add("bg-secondary");
      }
      else if (workHours[i] > currentHour) {
        document.getElementById(i).classList.add("bg-success");
      }
      else if (workHours[i] === currentHour) {
        document.getElementById(i).classList.add("bg-danger");
      }
        
    }
}
loadTime();