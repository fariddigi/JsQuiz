var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
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
      for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}
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
var numCorrect=0;
for (var i = 0; i < questions.length; i++) {
  userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;

			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}}

  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

  }
showQuestions (questions,quizContainer);
submitButton.onclick =function (){
  showResults(questions,quizContainer,resultsContainer)
}
}
