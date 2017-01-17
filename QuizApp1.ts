let quizLength = 5;
let userAnswer = "";

class quiz {
  constructor() {
    this.progress = 0;
    this.questions = [
      {question: "Which is the largest US state by area?\n",
       options: "a) Texas   b) Montana   c) Alaska",
       answer: "c"
      },
      {question: "What country is home to the tallest mountain in the world, Mount Everest?\n",
       options: "a) Nepal   b) India   c) Pakistan",
       answer: "a"
      },
      {question: "By area, what is the smallest country on the planet?\n",
       options: "a) Vatican City   b) Monaco   c) Nauru",
       answer: "a"
      },
      {question: "What is the name of the tallest uninterrupted waterfall in the world?\n",
       options: "a) Niagara Falls   b) Angel Falls   c) Victoria Falls",
       answer: "b"
      },
      {question: "Which is the most populous country in the world?\n",
       options: "a) India   b) Indonesia   c) China",
       answer: "c"
      }
    ];
    this.grade = 0;
  }

  runQuiz() {
    if (this.progress <= quizLength) {
      this.showNextQuestion();
      this.tallyScore();
      this.progress = this.progress + 1;
    } else {
      this.tallyScore();
    }
  }

  showNextQuestion() {
    userAnswer = prompt(this.questions[this.progress].question + this.questions[this.progress].options);
    return userAnswer;
  }

  tallyScore() {
    if (userAnswer == this.questions[this.progress].answer) {
      alert("Correct!");
      this.grade = this.grade + 1;
    } else {
      alert("Wrong");
    }
      alert("Your grade is " + this.grade);
  }

let newQuiz = new quiz();
newQuiz.runQuiz();
newQuiz.runQuiz();
newQuiz.runQuiz();
newQuiz.runQuiz();
newQuiz.runQuiz();
