var strtpg = document.getElementById("startpage");
var gamepg = document.getElementById("gamepage");
var strtbut = document.getElementById("startbut");
var endpg = document.getElementById("endpage");

var hisclink = document.getElementsByClassName("highbutton");
var hiscpg = document.getElementById("highscorepage");

var lastpage;
var ispaused = false;

var score;

var rightanswer;

var question = document.getElementById("questiontext");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

var answerarray = [answer1, answer2, answer3, answer4];

var qnum = 1;

var q1 = "What does CSS stand for?";
var q1right = "Cascading Style Sheets";
var q1wrongarray = ["Coding Style Sheets", "Cascading Style Switcher", "Colored Style Sheets"];

var q2 = "what does HTML stand for?";
var q2right = "Hyper Text Markup Language";
var q2wrongarray = ["Hyper Text Markup Link", "Hyper Text Moving Language", "Hyper Text Machine Language"];

var q3 = "What does JS stand for?";
var q3right = "JavaScript";
var q3wrongarray = ["JavaStyle", "JavaSwitch", "JavaScripting"];

var q4 = "How do you write 'Hello World' in an alert box?";
var q4right = "alert('Hello World')";
var q4wrongarray = ["msg('Hello World')", "msgBox('Hello World')", "alertBox('Hello World')"];

var q5 = "How do you create a function in JavaScript?";
var q5right = "function myFunction()";
var q5wrongarray = ["function = myFunction()", "function:myFunction()", "function myFunction"];

var q6 = "How do you call a function named 'myFunction'?";
var q6right = "myFunction()";
var q6wrongarray = ["call function myFunction()", "call myFunction()", "myFunction"];

var q7 = "How to write an IF statement in JavaScript?";
var q7right = "if (i == 5){<code here>}";
var q7wrongarray = ["if i = 5 then <code here> ", "if (i == 5a)[<code here>]", "if i = 5{<code here>}"];

var q8 = "How do you get a DOM element by id?";
var q8right = "document.getElementById('id')";
var q8wrongarray = ["document.getElement('id')", "document.getElementwithId('id')", "document.getElementsId('id')"];

strtpg.style.display = "block";

strtbut.addEventListener("click", function () {
    strtpg.style.display = "none";
    gamepg.style.display = "block";
    startgame();
}
);

function startgame() {
    score = 0;
    setquestion(q1, q1right, q1wrongarray);
}

function nextquestion() {
    switch (qnum) {
        case 2:
            setquestion(q2, q2right, q2wrongarray);
            break;
        case 3:
            setquestion(q3, q3right, q3wrongarray);
            break;
        case 4:
            setquestion(q4, q4right, q4wrongarray);
            break;
        case 5:
            setquestion(q5, q5right, q5wrongarray);
            break;
        case 6:
            setquestion(q6, q6right, q6wrongarray);
            break;
        case 7:
            setquestion(q7, q7right, q7wrongarray);
            break;
        case 8:
            setquestion(q8, q8right, q8wrongarray);
            break;
        case 9:
            endgame();
            break;
    }
}

function setquestion(quest, rans, wans) {
    question.innerText = quest;
    rightanswernumber = Math.floor(Math.random() * 4 + 1);
    switch (rightanswernumber) {
        case 1:
            answer1.innerText = rans;
            answer1.setAttribute("onclick", "rightanswer()");
            break;
        case 2:
            answer2.innerText = rans;
            answer2.setAttribute("onclick", "rightanswer()");
            break;
        case 3:
            answer3.innerText = rans;
            answer3.setAttribute("onclick", "rightanswer()");
            break;
        case 4:
            answer4.innerText = rans;
            answer4.setAttribute("onclick", "rightanswer()");
            break;
    }
    var a = 0;
    for (var i = 0; i < answerarray.length; i++) {
        if (answerarray[i].innerText != rans) {
            answerarray[i].innerText = wans[a];
            answerarray[i].setAttribute("onclick", "wronganswer()");
            a++;
        }
    }

}

function rightanswer() {
    qnum++;
    score += 10;
    nextquestion();
}

function wronganswer() {
    qnum++;
    score -= 10;
    nextquestion();
}

function endgame() {
    gamepg.style.display = "none";
    endpg.style.display = "block";
}

function highscoreopen() {
    ispaused = true;
    if (strtpg.style.display == "block") {
        lastpage = strtpg;
    } else if (gamepg.style.display == "block") {
        lastpage = gamepg;
    }else if (endpg.style.display == "block") {
        lastpage = endpg;
    }
    strtpg.style.display = "none";
    gamepg.style.display = "none";
    endpg.style.display = "none";
    hiscpg.style.display = "block";
}

function backbutton() {
    ispaused = false;
    if (lastpage == strtpg) {
        hiscpg.style.display = "none";
        strtpg.style.display = "block";
    } else if (lastpage == gamepg) {
        hiscpg.style.display = "none";
        gamepg.style.display = "block";
    } else if (lastpage == endpg) {
        hiscpg.style.display = "none";
        endpg.style.display = "block";
    }
}