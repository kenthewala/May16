<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="resources/css/mcq.css">
<script type="text/javascript" src="resources/js/mcq.js" ></script>
<title>Insert title here</title>
</head>
<body>

<div id="attempted"></div> <div id="questionIndex"></div>

<div id="questionBoard">
<div id="questionText"></div>
<div id = "optionsArea">
<input type="radio" name="option" id="option1" onclick="markAttempted(1)"/><label id="lblOption1"></label>
<input type="radio" name="option" id="option2" onclick="markAttempted(2)"/><label id="lblOption2"></label>
<input type="radio" name="option" id="option3" onclick="markAttempted(3)"/><label id="lblOption3"></label>
<input type="radio" name="option" id="option4" onclick="markAttempted(4)"/><label id="lblOption4"></label>
</div>

</div>
<img id="previous" alt="Back" src="resources/img/previous.png" class="previous" onclick="showNewQuestion(currentIndex-1)">
 <img id="next" alt="Next" src="resources/img/next.png" class="next" onclick="showNewQuestion(currentIndex+1)">
<div id="submitButton"><input type="submit" name="Submit Answers" ></div>
<div id="submitPopup">
</div>

</body>
</html>