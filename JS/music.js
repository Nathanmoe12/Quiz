// selects page elements

let label = document.querySelectorAll('label');
let input = document.querySelectorAll('input');
let submit = document.getElementById('submit');
let displayScore = document.getElementById('displayScore');

// global variables
let score = 0;
const quizAnswers = ['Ben King', 'Oasis', 'Nirvana', 'Michael Jackson', 'Elvis Presley'];

//call this in body or from the menu button // or create seperate scripts for each quiz
loadQuiz();

// this will set the questions for the quiz
function loadQuiz() {
  const quizQuestions = ['Which singer made the famous song Stand by Me?', 'Which band made the famous song Wonderwall?', 'Which band made the famous song Smells Like Teen Spirit', 'Which famous singer sang Beat It? ', 'Which famous singer sang Hound Dog?'];

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

/* A button that will take you back to the choice page. */
let exit = document.getElementById("exit")
exit.addEventListener('click', (e) =>{
  e.preventDefault()
  window.location.href = "choice.html";
}) 
