//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");

const quiz_box = document.querySelector(".quiz_box");

const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
// const time_line = document.querySelector("header .time_line");
// const timeText = document.querySelector(".timer .time_left_txt");
// const timeCount = document.querySelector(".timer .timer_sec");

const title_box = document.querySelector(".title-box");
const subtitle = document.getElementById("subtitle");
const image = document.getElementById("image");

//If Start Quiz Button Clicked
start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); //show the info box
  title_box.style.display = "none";
  subtitle.hidden = true;
  image.hidden = true;
  start_btn.hidden = true;
}

//If Exit  Button Clicked
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide the info box
  title_box.style.display = "flex";
  subtitle.hidden = false;
  image.hidden = false;
  start_btn.hidden = false;
}

//If Continue Button Clicked
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide the info box
  quiz_box.classList.add("activeQuiz"); //show the quiz box
  showQuestions(0); //calling showQuestions function
  queCounter(1); //passing 1 parameter to queCounter
}

let que_count = 0;
let que_numb = 1;
let userScore = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
  quiz_box.classList.add("activeQuiz");
  result_box.classList.remove("activeResult");

  que_count = 0;
  que_numb = 1;
  userScore = 0;
  showQuestions(que_count);
  queCounter(que_numb);
  next_btn.classList.remove("show"); 
}

quit_quiz.onclick = ()=>{
  window.location.reload();
}

//If Next Button Clicked
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    next_btn.style.display = "none";
  } else {
    console.log("Questions completed");
    showResultBox();
  }
}

//getting questions and options from array
function showQuestions(index) {
  const que_text = document.querySelector(".que_text");
  let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
  let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
    + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
    + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
    + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

let tickIcon = '<div class="icon tick"><i class="fa-solid fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fa-solid fa-times"></i></div>';

function optionSelected(answer) {
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  let allOptions = option_list.children.length;
  if (userAns == correctAns) {
    userScore++; 
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", tickIcon);
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", crossIcon);

    //if answers is incorrect then automatically selected the correct answer
    for (let i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correctAns) {
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
      }
    }
  }

  //once user selected disabled all options
  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
  }
  next_btn.style.display = "block";
}


function queCounter(index) {
  const bottom_ques_counter = quiz_box.querySelector(".total_que");
  let totalQueCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
  bottom_ques_counter.innerHTML = totalQueCountTag;
}

function showResultBox(){
  info_box.classList.remove("activeInfo"); //hide the info box
  quiz_box.classList.remove("activeQuiz"); //hide the quiz box
  result_box.classList.add("activeResult"); //show the result box
  const scoreText = result_box.querySelector(".score_text");
  if(userScore > 3){
    let scoreTag = '<span> and congrats! You got <p>' + userScore + '</p> out of <p>'+ questions.length +'</p></span>';
    scoreText.innerHTML = scoreTag;
  } 
  else if(userScore > 1){
    let scoreTag = '<span> and nice, You got <p>' + userScore + '</p> out of <p>'+ questions.length +'</p></span>';
    scoreText.innerHTML = scoreTag;
  } 
  else {
    let scoreTag = '<span> and sorry, You got only <p>' + userScore + '</p> out of <p>'+ questions.length +'</p></span>';
    scoreText.innerHTML = scoreTag;
  }
}