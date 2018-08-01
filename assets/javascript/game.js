(function() {
    const myQuestions = [
      {
        question: "What was the name of the supermutant companion in Fallout 4?",
        answers: {
          a: "Fawkes",
          b: "Strong",
          c: "Virgil"
        },
        correctAnswer: "b"
      },
      {
        question: "What is the name of the glowing blue Nuka-Cola?",
        answers: {
          a: "Nuka-Cola Quartz",
          b: "Nuka-Cola Saphire",
          c: "Nuka-Cola Quantum"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the name of the town you can blow up in Fallout 3?",
        answers: {
          a: "Little Lamplight",
          b: "Diamond City",
          c: "Goodneighbor",
          d: "Megaton"
        },
        correctAnswer: "d"
      },
      {
        question: "What was the number of the starting vault in Fallout 4?",
        answers: {
          a: "111",
          b: "81",
          c: "76"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the name of the power-armor clad soldiers in the Series?",
        answers: {
          a: "Minute Men",
          b: "New California Republic",
          c: "Brotherhood of Steal"
        },
        correctAnswer: "c"
      },
      {
        question: "What was the perk that incressed the chance of dismemberment in the Fallout games?",
        answers: {
          a: "Bloody Mess",
          b: "Be-header",
          c: "Critical Banker",
          d: "Lucky Shot"
        },
        correctAnswer: "a"
      },
      {
        question: "How did you start off Fallout New-Vegas?",
        answers: {
          a: "Getting shot in the head",
          b: "Getting hired as a Merc",
          c: "Getting taken prisoner"
        },
        correctAnswer: "a"
      },
      {
        question: "Who voice your dad in Fallout 3?",
        answers: {
          a: "Troy Baker",
          b: "Steve Blum",
          c: "liam Neeson"
        },
        correctAnswer: "c"
      },
      {
        question: "What was the name of the overly powerful mini-nuke launcher in the sieres?",
        answers: {
          a: "The Destroyer",
          b: "Fat Man",
          c: "Nuke-Launcher",
          d: "Demolisher"
        },
        correctAnswer: "b"
      }

    ];
  
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }




  
  

    var count = 300;
    var interval = setInterval(function(){
      document.getElementById('count').innerHTML=count;
      count--;
      if (count === 0){
        clearInterval(interval);
        document.getElementById('count').innerHTML='Done';
        // or...
        alert("You're out of time!");
        showResults();
      }
    }, 1000);








    
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();