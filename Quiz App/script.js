let start=document.getElementById("startButton");
let showQuiz=document.getElementById("Container1");
let showDash=document.getElementById("Container");

start.addEventListener("click", () => {
showQuiz.classList.remove("showCont");
showDash.style.display="none";
});


const quizData = [
    {
      question: "What is the output of '10' + 20 in Javascript?",
      options: ["'1020'", "30", "1020", "'30'"],
      answer: 0
    },
    {
    question: "What will be the output of console.log(typeofnull)? ",
      options: ["boolean", "array", "string", "object"],
      answer: 3
    },
    {
      question: "What is the output of console.log('2' + 2 * '2')?",
        options: ["8", "'24'", "24", "44"],
        answer: 2
      },
      {
        question: "What will be the result of console.log(!!'false')? ",
          options: ["false", "true", "undefind", ],
          answer: 0
        },
      {
          question: " Inside which HTML element do we put the JavaScript?",
            options: ["javascript", "script", "js", "scripting" ],
            answer: 1
          },
      {
            question: "Where is the correct place to insert a JavaScript?",
              options: ["head", "body", "Both" ],
              answer: 2
            },
      {
              question: "The external JavaScript file must contain the <script> tag.",
                options: ["False", "True" ],
                answer: 0
      },
      {
        question: "How to write an IF statement in JavaScript?",
          options: ["if i==5", "if(i==5)" , "if(i==5)then", "if(i=5)then" ],
          answer: 1
      },
      {
        question: "How to write if 'i' is NOT equal to 5?",
          options: ["if i<>5", "if(i<>5)" , "if(i!==5)then", "if(i!=5)" ],
          answer: 3
      },
      {
        question: "data type string is written in  ?",
          options: ["round brackets", "curly brackets" , "quotes", ],
          answer: 2
      }
];

var currentQues=0;

let questionContainer = document.getElementById('questionContainer');
let optionsContainer = document.getElementById('optionContainer');
var currentQuestion;
function fun3(){
   currentQuestion = quizData[currentQues];

}

fun3()
function fun(){
     questionContainer.textContent = currentQuestion.question;
     optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        var optionLabel = document.createElement('label');
        optionLabel.innerHTML = `<input type="radio" name="option" onclick="handleSubmit(${index})" value="${index}"> ${option}`;
        optionsContainer.appendChild(optionLabel);
        
      });  


}
fun()

let score=0;
function handleSubmit(ind) {
    let selects= document.getElementsByTagName("label")[ind]; 
  
  let x=selects.firstElementChild;
   
  if(x.value==currentQuestion.answer){
    console.log("correct");
    score++;
   }else{
    console.log("incorrect");
   }
   currentQues++
   
  
   fun3()
   fun2()

 
   
}

function fun2(){
  let get=document.getElementById("results");
  let hide=document.getElementById("main");
  if(currentQues == quizData.length){
    gotNum=quizData.length - score;
    result=quizData.length - gotNum;
    ave=(result/10) * 100;
    let lastResult=`You Got = ${result} Numbers With ${ave} Percent `;
        get.innerText=lastResult;
     get.classList.remove("showResult");
     hide.style.display="none";
        
  }else{
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';


    currentQuestion.options.forEach((option, index) => {
        var optionLabel = document.createElement('label');
        optionLabel.innerHTML = `<input type="radio" name="option" onclick="handleSubmit(${index})" value="${index}"> ${option}`;
        optionsContainer.appendChild(optionLabel); 
      });  
  }
}

 