var day = {};
const m = moment();

// date at top
var dateAtTop = document.querySelector("#currentDay");
dateAtTop.textContent = m.format("dddd MMM DD, YYYY")