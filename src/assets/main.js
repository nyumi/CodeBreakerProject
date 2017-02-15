let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == '' && attempt.value == '') {
        console.log("!!!!answer.value == ''!!!!!!!");
        setHiddenFields();
    } 

    if (!validateInput(input.value)) {
        return false;
    }
  
    document.getElementById('attempt').value = Number(attempt.value) + 1;

   if(getResults(input)) {
       setMessage("You Win! :)");
       showAnswer(true);
       showReplay();
   }else if (attempt >= 10) {
       setMessage("You Lose! :(");
       showAnswer(false);
       showReplay();
   }else {
       setMessage("Incorrect, try again.");
   }
}

//implement new functions here
function setHiddenFields() {
    const MAX = 9999;
    const MIN = 0;
    answer.value = Math.floor( Math.random() * (MAX - MIN + 1) ) + MIN;
    attempt.value = 0;
    let convertedAnswer = answer.value.toString();
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

    const correctLength = input.value.length;
    let icons = "";
    let correctNum = 0;
    
    const result = document.createElement('div');
    result.classList.add('row');
    const span = document.createElement('span');
    span.classList.add('col-md-6');
    span.innerHTML = input.value;
    result.appendChild(span);
    
    const result2 = document.createElement('div');
    result2.classList.add('col-md-6');
    result.appendChild(result2);
    
    for(let i = 0; i < correctLength; i++) {
        const inputNum = Number(input.value.substr(i, 1));
        const answerNum = Number(answer.value.substr(i, 1));

        const icon = document.createElement('span');
        icon.classList.add('glyphicon');
        if (inputNum === answerNum) {
            correctNum++;
            icon.classList.add('glyphicon-ok');
        } else if (Math.abs(inputNum - answerNum) === 1) {
            icon.classList.add('glyphicon-transfer');
        } else {
            icon.classList.add('glyphicon-remove');
        }
        result2.appendChild(icon);
    }

    document.getElementById("results").appendChild(result);

    return correctNum === correctLength;
}

function showAnswer(event) {
    let codeLabel = document.getElementById("code")
    if(event) {
        codeLabel.innerHTML = answer.value;
        codeLabel.classList.add('success');
    }
    else {
        codeLabel.classList.add('failure');
    }
}
function showReplay() {
     document.getElementById("guessing-div").style.display = 'none'; 
     document.getElementById("replay-div").style.display = 'block'; 
     
}