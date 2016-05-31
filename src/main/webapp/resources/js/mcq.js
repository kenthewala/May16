/**
 * 
 */
var noOfQuestions;
var currentIndex=0;
var questionBank = [ {
	"question" : "Question 1",
	"option1" : "Option A",
	"option2" : "Option B",
	"option3" : "Option C",
	"option4" : "Option D",
	"answered":false,
	"answer" : 1
}, {
	"question" : "Question 2",
	"option1" : "Option A",
	"option2" : "Option B",
	"option3" : "Option C",
	"option4" : "Option D",
	"answered":false,
	"answer" : 1
}, {
	"question" : "Question 3",
	"option1" : "Option A",
	"option2" : "Option B",
	"option3" : "Option C",
	"option4" : "Option D",
	"answered":false,
	"answer" : 1
}, {
	"question" : "Question 4",
	"option1" : "Option A",
	"option2" : "Option B",
	"option3" : "Option C",
	"option4" : "Option D",
	"answered":false,
	"answer" : 1
}, {
	"question" : "Question 5",
	"option1" : "Option A",
	"option2" : "Option B",
	"option3" : "Option C",
	"option4" : "Option D",
	"answered":false,
	"answer" : 1
}, {
	"question" : "Question 6",
	"option1" : "Option A",
	"option2" : "Option B",
	"option3" : "Option C",
	"option4" : "Option D",
	"answered":false,
	"answer" : 1
}, {
	"question" : "Question 7",
	"option1" : "Option A",
	"option2" : "Option B",
	"option3" : "Option C",
	"option4" : "Option D",
	"answered":false,
	"answer" : 1
}, {
	"question" : "Question 8",
	"option1" : "Option A",
	"option2" : "Option B",
	"option3" : "Option C",
	"option4" : "Option D",
	"answer" : 1
}, {
	"question" : "Question 9",
	"option1" : "Option A",
	"option2" : "Option B",
	"option3" : "Option C",
	"option4" : "Option D",
	"answer" : 1
}, {
	"question" : "Question 10",
	"option1" : "Option A",
	"option2" : "Option B",
	"option3" : "Option C",
	"option4" : "Option D",
	"answer" : 1
} ]

window.onload = function() {
	processQB(questionBank);
}

function processQB(arr){
	noOfQuestions = arr.length;
	var scroll = '';
	
	for(var i=1;i<=noOfQuestions;i++){
		scroll += i.toString()+" ";
	}
	
	document.getElementById("attempted").innerHTML = scroll;
	
	document.getElementById("questionText").innerHTML = arr[currentIndex].question;
	
	document.getElementById("option1").value = arr[currentIndex].option1;
	document.getElementById("lblOption1").innerHTML = arr[currentIndex].option1;
	
	console.log(document.getElementById("option2"),"option2");
	document.getElementById("option2").value = arr[currentIndex].option2;
	document.getElementById("lblOption2").innerHTML = arr[currentIndex].option2;
	
	document.getElementById("option3").value = arr[currentIndex].option3;
	document.getElementById("lblOption3").innerHTML = arr[currentIndex].option3;
	
	document.getElementById("option4").value = arr[currentIndex].option4;
	document.getElementById("lblOption4").innerHTML = arr[currentIndex].option4;
}