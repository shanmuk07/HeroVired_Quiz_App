const questions = [
	{
		question: "What is the capital of France?",
		options: ["Paris", "London", "Berlin", "Madrid"],
		answer: 1
	},
	{
		question: "What is the largest country in the world?",
		options: ["USA", "Russia", "China", "India"],
		answer: 2
	},
	{
		question: "What is the currency of Japan?",
		options: ["Dollar", "Peso", "Yen", "Euro"],
		answer: 3
	},
	{
		question: "What is the tallest mountain in the world?",
		options: ["Kilimanjaro", "Mount Everest", "Mount Fuji", "Denali"],
		answer: 2
	},
	{
		question: "What is the largest animal in the world?",
		options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
		answer: 3
	}
];

let currentQuestion = 0;
let score = 0;

let question = document.getElementById('question');
let option1_label = document.getElementById('option1-label');
let option2_label = document.getElementById('option2-label');
let option3_label = document.getElementById('option3-label');
let option4_label = document.getElementById('option4-label');

const options = [option1_label, option2_label, option3_label, option4_label];
let submit_btn = document.getElementById('submit-btn');
let reload_btn = document.getElementById('reload-btn');
let result = document.getElementById('result');

let form_container = document.getElementsByClassName('option-container');

function setQuestion(){
    question.innerText = questions[currentQuestion].question;
	for (let i = 0; i < options.length; i++) {
		options[i].innerText = questions[currentQuestion].options[i];
	}
}

function checkAnswer() {
	const selectedOption = document.querySelector('input[name="option"]:checked');
	if (!selectedOption) {
		alert("Please select an option.");
		return;
	}
	const answer = selectedOption.value;
	if (answer == questions[currentQuestion].answer) {
		score++;
	}
	currentQuestion++;
	if (currentQuestion == questions.length) {
		showResult();
	} else {
		setQuestion();
	}
}



function showResult() {
	submit_btn.style.display = "none";
    
	for (let i = 0; i < options.length; i++) {
		options[i].style.display = "none";
	}
    
	result.innerText = "You scored " + score + " out of " + questions.length + ".";
	result.style.display = "block";
	reload_btn.style.display = "block";
}

function reloadQuiz() {
	currentQuestion = 0;
	score = 0;
	submit_btn.style.display = "block";
	for (let i = 0; i < options.length; i++) {
		options[i].style.display = "block";
	}
	result.style.display = "none";
	reload_btn.style.display = "none";
	setQuestion();
}

submit_btn.addEventListener("click", checkAnswer);
reload_btn.addEventListener("click", reloadQuiz);


setQuestion();

