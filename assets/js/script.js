var strtpg = document.getElementById("startpage");
var gamepg = document.getElementById("gamepage");
var strtbut = document.getElementById("startbut");

var hisclink = document.getElementsByClassName("highbutton");
var hiscpg = document.getElementById("highscorepage");

var lastpage;
var ispaused = false;

var rightanswer;

var question = document.getElementById("questiontext");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

strtpg.style.display = "block";

strtbut.addEventListener("click", function () {
    strtpg.style.display = "none";
    gamepg.style.display = "block";
    startgame();
}
);

function startgame() {
    question.innerText = "What does CSS stand for?";
    rightanswer = Math.floor(Math.random() * 4 + 1);
    console.log(rightanswer);
}

function highscoreopen() {
    ispaused = true;
    if(strtpg.style.display == "block") {
        lastpage = strtpg;
    } else if(gamepg.style.display == "block") {
        lastpage = gamepg;
    }
    strtpg.style.display = "none";
    gamepg.style.display = "none";
    hiscpg.style.display = "block";
}

function backbutton() {
    ispaused = false;
    if(lastpage == strtpg) {
        hiscpg.style.display = "none";
        strtpg.style.display = "block";
    }else if(lastpage == gamepg) {
        hiscpg.style.display = "none";
        gamepg.style.display = "block";
    }
}