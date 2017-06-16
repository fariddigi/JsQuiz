var myQuestions = [
	{
		question: "What is 10/2?",
		correctAnswer: '5'
	},
	{
		question: "What is 30/3?",
		correctAnswer: '10'
	}
];
window.onload = function what(){
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  generateQuiz(myQuestions,quizContainer,resultsContainer,submitButton)

};

function generateQuiz(questions,quizContainer,resultsContainer,submitButton) {

  function showQuestions(questions,quizContainer) {
    var output= [];
    var answers;
    for (var i = 0; i < questions.length; i++) {
      answers=[];
			// ...add an html edit text
			answers.push(
				'<label>'
					+ '<input type="text" name="question'+i+'">'
				+ '</label>'
			);

    output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
    }
    quizContainer.innerHTML = output.join('');
  }
function showResults(questions,quizContainer,resultsContainer) {
var answerContainers= quizContainer.querySelector('.answers');
var userAnswer='';
numCorrect=0;
for (var i = 0; i < questions.length; i++) {
  userAnswer = (document.querySelector('input[name=question'+i+']')||{}).value;
  answerContainers[i]=userAnswer;
		// if answer is correct
		 if(userAnswer===questions[i].correctAnswer){
		// 	// add to the number of correct answers
	 	window.numCorrect++;
		// color the answers green
		//answerContainers[i].style.color = 'lightgreen';
	}
		// if answer is wrong or blank

	}

  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

  }
showQuestions (questions,quizContainer);
showResults(myQuestions,quizContainer,resultsContainer)

submitButton.onclick =function (){
  showResults(myQuestions,quizContainer,resultsContainer)
}
}
