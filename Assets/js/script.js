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
} // I would appreciate any help you, the reviewer, could give as to why the localStorage isn't working as expected. 
    document.querySelectorAll('.time-block').forEach(item => {
    item.addEventListener('click', event => {
      debugger;
    //handle click
    // need to update the const task function to find the value associated with each time slot. 
    const task = document.querySelector(".form-control").value;
    var saveButton = event.currentTarget.attributes.id.textContent;

    localStorage.setItem(saveButton, task);
    console.log(task);
  })
})

loadTime();