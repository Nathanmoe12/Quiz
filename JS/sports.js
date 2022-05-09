// selects page elements

let label = document.querySelectorAll('label');
let input = document.querySelectorAll('input');
let submit = document.getElementById('submit');
let displayScore = document.getElementById('displayScore');

// global variables
let score = 0;
const quizAnswers = ['1967', '2012', 'Germany', '1966', 'Penalty'];

//call this in body or from the menu button // or create seperate scripts for each quiz
loadQuiz();

// this will set the questions for the quiz
function loadQuiz() {
  const quizQuestions = ['What year did Celtic win the European Cup?', 'What year was Rangers placed into Liquidation? ', 'Who won the FIFA World Cup in 2014?', 'What year did England beat Germany in the FIFA World Cup final?', 'What rule is given to a player who has been fouled inside the Goalkeepers box?'];

  for (let i = 0; i < quizQuestions.length; i++) {
    label[i].innerHTML = quizQuestions[i];
  }
}

//button to check answers

submit.addEventListener('click', (e) => {
  e.preventDefault();

  for (let i = 0; i < quizAnswers.length; i++) {
    if (input[i].value.toUpperCase() == quizAnswers[i].toUpperCase()) {
      label[i].style.color = 'green';
      score++;
    } else {
      label[i].style.color = 'red';
    }
  }

  //displays the score and prevents users from resubmitting

  displayScore.innerText = 'you scored ' + score + ' out of 5';
  submit.disabled = true;
});

let exit = document.getElementById("exit")
exit.addEventListener('click', (e) =>{
  e.preventDefault()
  window.location.href = "choice.html";
}) 
