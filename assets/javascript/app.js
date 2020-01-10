$(document).ready(function () {

    // array object to hold question and answers
    var questions = [
        {
            question: "The main storyline follows a character named Evie.",
            answer: "false"
        },
        {
            question: "The character Mal, can take the form of a dragon.",
            answer: "true"
        },
        {
            question: "The character named Carlos is afraid of dogs.",
            answer: "true"
        },
        {
            question: "In the first Desendants movie, the four characters picked to go to Auradon Prep are Carlos, Jay, Evie, and Drizzy.",
            answer: "false"
        },
        {
            question: "Ben is the future king of The Isle of The Lost.",
            answer: "false"
        },
        {
            question: "Mal's dad is a god named Hades.",
            answer: "true"
        },
        {
            question: "In Desendants 2, Evie cast a spell to make her hair blonde.",
            answer: "false"
        },
        {
            question: "In Desendents 3, Mal turns into the Queen of Mean.",
            answer: "false"
        },
        {
            question: "In Desendants 2 Mal's nickname for Uma is shrimpy.",
            answer: "true"
        },
        {
            question:"",
            answer:""
        }
    ];

    // variables needed to store values for game
    var score = 0;
    var wrong = 0;
    var i = 0;
    var userChoice;
    var unAnswered = 9;
    var time = 11;
    var intervalId;

    // hide buttons until game is started
    $(".choice").hide();
    $("#restart").hide();

    // on click calls for running and restarting game
    $("#start-button").on("click", run);
    $("#restart").on("click", restart);

    // onclick function for true/false buttons and conditionals
    $(".choice").on("click", function () {
        userChoice = $(this).val();
        $("#right-wrong").html("");
        if (userChoice == questions[i].answer) {
            $("#right-wrong").show();
            $("#right-wrong").html("Correct!!!").fadeOut(1500);
            score++;
            i++;
            unAnswered--;
            time = 11;
            getNewQ();
        }
        else {
            $("#right-wrong").show();
            $("#right-wrong").html("Wrong!!!").fadeOut(1500);
            wrong++;
            i++;
            unAnswered--;
            time = 11;
            getNewQ();
        }
    })

    // function to start the game
    function run() {
        $("#time-left").show();
        $("#questions").show();
        $("#questions").html(questions[i].question);
        $("#start-button").hide();
        $(".choice").show();
        intervalId = setInterval(decrement, 1000);
    }

    // function to get a new question if condtionals are met and display end game totals
    function getNewQ() {
        if (i > 9 -1) {
            i = 0;
            done();
            $("#right").html("Questions Correct: " + score);
            $("#wrong").html("Questions Incorrect: " + wrong);
            $("#notAnswered").html("Unanswered: " + unAnswered);
        }
        $("#questions").html(questions[i].question);
    }

    // function to count down time and get new question if timer reaches 0
    function decrement() {
        time--;
        $("#time-left").html("Time Left: " + time);
        if (time <= 0) {
            time = 11;
            $("#right-wrong").show();
            $("#right-wrong").html("Answer was " + questions[i].answer).fadeOut(1500);
            i++;
            getNewQ();
        }
        console.log(i);
    }

    // function to clear timer and display results and show restart button
    function done() {
        clearInterval(intervalId);
        $("#right-wrong").html("");
        $("#right").show();
        $("#wrong").show();
        $("#notAnswered").show();
        $("#time-left").hide();
        $("#questions").hide();
        $(".choice").hide();
        $("#restart").show();
    }

    // function to reset and restart game
    function restart() {
        intervalId = setInterval(decrement, 1000);
        $("#questions").html(questions[i].question);
        $("#time-left").show();
        $("#questions").show();
        $(".choice").show();
        $("#right").hide();
        $("#wrong").hide();
        $("#notAnswered").hide();
        $("#restart").hide();
        i = 0;
        score = 0;
        wrong = 0;
        unAnswered = 9;
        time = 11;
    }
});


