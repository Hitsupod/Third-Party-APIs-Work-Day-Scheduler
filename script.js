

function displayTime() {
  var time = moment().format('MMMM Do YYYY, h:mm:ss a');
  $('#timer').html(time);
  setTimeout(displayTime, 1000);
  
}

$(document).ready(function() {
  displayTime();
  document.querySelector("#timer").textContent=displayTime;
});

var Input = document.querySelector('#usernote');
var btnPress = document.querySelector('#btn');



console.log(btnPress);


// Function Save Button 
$('#btn').click(function() {
  event.preventDefault();
  // Event Listener for Click 
  var btnPress = document.querySelector('#btn')
  var elInput = document.querySelector('#usernote').value;
  alert('Note Saved');
  // Take and Store Input 
  localStorage.setItem('elInput', elInput);
  // Display in Output 
  if(username === null) {
    return;
  }
  // inputSpan.innerHTML = elInput;
});




