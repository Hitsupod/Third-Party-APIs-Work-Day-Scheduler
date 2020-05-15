// var todoInput = document.querySelector("#todo-text");
// var todoForm = document.querySelector("#todo-form");
// var todoList = document.querySelector("#todo-list");
// var todoCountSpan = document.querySelector("#todo-count");
var Input = document.querySelector('#username');
var btnPress = document.querySelector('#btn');
var inputSpan = document.querySelector('#filler');


console.log(btnPress);
// var todos = [];
// Create 1 function, 24 inputs and 24 save buttons each button 
// would save the corresponding input to local storage 
// if button 1 is click save and display input 1
// var elUserName = document.getElementById('username');
// var elMsg = document.getElementById('feedback');
// function renderNote(){
//  var input = localStorage.getItem('username');
//  if(username === null) {
//    return;
//  }
//  inputSpan.textContent = input;
//}

// Function Save Button 
$('#btn').click(function() {
  event.preventDefault();
  // Event Listener for Click 
  var btnPress = document.querySelector('#btn')
  var elInput = document.querySelector('#username').value;
  var elOutput = document.querySelector('#filler').value;
  //alert('button has been click');

  // Take and Store Input 
  localStorage.setItem('elOutput', elOutput);
  localStorage.setItem('elInput', elInput);
  // Display in Output 
  if(username === null) {
    return;
  }
  // inputSpan.innerHTML = elInput;
});




