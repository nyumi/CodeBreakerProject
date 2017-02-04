let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
  
}

//implement new functions here
function setHiddenFields() {
    const MAX = 9999;
    const MIN = 0;
    let answer = Math.floor( Math.random() * (MAX - MIN + 1) ) + MIN;
}