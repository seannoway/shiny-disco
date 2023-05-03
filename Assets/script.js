$(document).ready(function () {
  // wraps js in a function to run on page load

  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // Saves the text in local storage
    localStorage.setItem(time, text);
  })

  var currentDate = moment().format("dddd, MMMM Do YYYY");

  // set the text of the #currentDay element to the current date
  $("#currentDay").text(currentDate);

  // get the current hour using moment.js
  var currentHour = moment().hours();

// assingns id's to color code the blocks based on past present future
  for (let i = 9; i <= 17; i++) {
    const hour = document.getElementById("hour" + i);
    if (currentHour === i) {
      hour.classList.remove("past");
      hour.classList.add("present");
    } else if (currentHour < i) {
      hour.classList.remove("past");
      hour.classList.add("future");
    }
    else if (currentHour > i) {
      hour.classList.add("past");
    }
  }

// for loop to pull data from local storage into the text area's
  for (let i = 9; i <= 17; i++) {
    const hourStr = `hour-${i}`;
    $(`#${hourStr} .description`).val(localStorage.getItem(hourStr));
  }

});
