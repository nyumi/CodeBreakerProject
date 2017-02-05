let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer == '' && attempt == '') {
        setHiddenFields();
    } 

    if (!validateInput(input.value)) {
        return false;
    }
  
    document.getElementById('attempt').value = Numner(attempt) + 1;
}

//implement new functions here
function setHiddenFields() {
    const MAX = 9999;
    const MIN = 0;
    let answer = Math.floor( Math.random() * (MAX - MIN + 1) ) + MIN;
    let attempt = 0;
    let convertedAnswer = answer.toString();
    //answerが４桁か確認して、足りない分前半ゼロ埋め
    while (convertedAnswer.length < 4) {
        convertedAnswer = "0" + convertedAnswer;
    } 
}

function setMessage(param) {
    document.getElementById('message').innerHTML = param;
}

function validateInput(guess) {
    if(guess.toString().length === 4) {
        return true;
    }
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
}

function getResults(input) {

    let icons = "";
    for(let i = 0; i < input.length; i++) {
        const inputNum = Number(input.substr(i, 1));
        const answerNum = Number(answer.substr(i, 1));
        if (inputNum === answerNum) {
            icons += '<span class="glyphicon glyphicon-ok"></span>';
        } else if (Math.abs(inputNum - answerNum)) {
            icons += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            icons += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    
    const result = '<div class="row"><span class="col-md-6">'
            + input
            + '</span><div class="col-md-6">'
            + icons
            + '</div>';
    document.getElementById("results") = result;
}

