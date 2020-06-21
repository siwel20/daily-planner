var day = {};
const m = moment();

// date at top
var dateAtTop = document.querySelector("#currentDay");
dateAtTop.textContent = m.format("dddd MMM DD, YYYY")
var currentHour = moment().hour()
var workHours = [9,10,11,12,13,14,15,16,17]

var loadTime = function() {
    for (let i = 0; i < 9; i++) {
      if (localStorage.getItem(i)) {
        document.getElementById(i).value = localStorage.getItem(i);
      }
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
    document.querySelectorAll('.time-block').forEach(item => {
    item.addEventListener('click', event => {

    var id = item.getAttribute("data-id");
  
    const task = document.getElementById(id).value;

    localStorage.setItem(id, task);
  
  })
})

loadTime();