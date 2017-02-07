/**
 * 
 */
var noOfQuestions;
var currentIndex = 0;
var questionBankArr;
var wrongAnswers=0;
var correctAnswers=0;
var userAnswer = [];

window.onload = function() {
	var actual_JSON;
	loadJSON(function(response) {
		// Parse JSON string into object
		actual_JSON = JSON.parse(response);
	});
	processQB(actual_JSON);
};

function processQB(objectArr) {
	questionBankArr = objectArr.questions;
	noOfQuestions = questionBankArr.length;
	var link = '';

	for (var i = 1; i <= noOfQuestions; i++) {
		link += '<div id=nav' + i.toString() + ' class=notAttempted onclick=showNewQuestion('
				+ (i.toString() - 1) + ')>' + i.toString() + '</div>';
	}
	document.getElementById("attempted").innerHTML = link;

	for (var i = 0; i < noOfQuestions; i++) {
		userAnswer.push({
	        answered: false,
	        selectedIndex: -1
	    });
	}
	showNewQuestion(currentIndex);
}

function showNewQuestion(newIndex) {
	if (newIndex > questionBankArr.length || newIndex < 0)
		return true;

	currentIndex = newIndex;

	document.getElementById("questionText").innerHTML = questionBankArr[newIndex].question;

	for (var i = 1; i <= 4; i++) {
		var quest = questionBankArr[newIndex];
		document.getElementById("option" + i.toString()).value = quest["option"
				+ i.toString()];
		document.getElementById("lblOption" + i.toString()).innerHTML = quest["option"
				+ i.toString()];
		
	}
	if(userAnswer[newIndex].answered){
		document.getElementsByName("option")[userAnswer[newIndex].selectedIndex].checked = true;
	}else{
		var radList = document.getElementsByName('option');
	    for (var i = 0; i < radList.length; i++) {
	      if(radList[i].checked) document.getElementById(radList[i].id).checked = false;
	    }
	}
	
	document.getElementById("questionIndex").innerHTML = "Question "+ (newIndex+1).toString()+ "/"+noOfQuestions
}



function markAttempted(choice){
	document.getElementById("nav"+(currentIndex+1).toString()).className = "attempted";
	userAnswer[currentIndex].answered = true;
	userAnswer[currentIndex].selectedIndex = choice;
	if(questionBankArr[currentIndex].answer == choice){
		correctAnswers++;
	}else{
		wrongAnswers++;
	}
}

function loadJSON(callback) {

	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'resources/json/questionBank.json', false); // Replace
																	// 'my_data'
	// with the path to your
	// file
	xobj.onreadystatechange = function() {
		if (xobj.readyState == 4 && xobj.status == "200") {
			// Required use of an anonymous callback as .open will NOT return a
			// value but simply returns undefined in asynchronous mode
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
}
