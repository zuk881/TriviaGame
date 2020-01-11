$(document).ready(function () {

    // array object to hold question and answers
    var questions = [
        {
            question: "The main storyline follows a character named Evie.",
            answer: "false",
            image: "assets/images/evie-1.jpg"
        },
        {
            question: "The character Mal, can take the form of a dragon.",
            answer: "true",
            image: "assets/images/mal-2.jpg"
        },
        {
            question: "The character named Carlos is afraid of dogs.",
            answer: "true",
            image: "assets/images/carlos-3.jpg"
        },
        {
            question: "In the first Descendants movie, the four characters picked to go to Auradon Prep are Carlos, Jay, Evie, and Dizzy.",
            answer: "false",
            image: "assets/images/group-4.jpg"
        },
        {
            question: "Ben is the future king of The Isle of The Lost.",
            answer: "false",
            image: "assets/images/ben-5.jpg"
        },
        {
            question: "Mal's dad is a god named Hades.",
            answer: "true",
            image: "assets/images/hades-6.jpg"
        },
        {
            question: "In Descendants 2, Evie cast a spell to make her hair blonde.",
            answer: "false",
            image: "assets/images/mal-7.jpg"
        },
        {
            question: "In Descendents 3, Mal turns into the Queen of Mean.",
            answer: "false",
            image: "assets/images/audrey-8.jpg"
        },
        {
            question: "In Descendants 2 Mal's nickname for Uma is shrimpy.",
            answer: "true",
            image: "assets/images/uma-9.jpg"
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
            $("#right-wrong").html("Correct!!!").fadeOut(2000);
            score++;
            i++;
            unAnswered--;
            time = 11;
            getNewQ();
        }
        else {
            $("#right-wrong").show();
            $("#right-wrong").html("Wrong!!!").fadeOut(2000);
            wrong++;
            i++;
            unAnswered--;
            time = 11;
            getNewQ();
        }
    })

    // function to start the game set time interval to 1 sec
    function run() {
        $(".image").show();
        $("#time-left").show();
        $("#questions").show();
        $("#questions").html(questions[i].question);
        $(".image").html("<img src='" + questions[i].image + "'>");
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
        $(".image").html("<img src='" + questions[i].image + "'>");
    }

    // function to count down time and get new question if timer reaches 0
    function decrement() {
        time--;
        $("#time-left").html("Time Left: " + time);
        if (time <= 0) {
            time = 11;
            $("#right-wrong").show();
            $("#right-wrong").html("Answer was " + questions[i].answer).fadeOut(2000);
            i++;
            getNewQ();
        }
    }

    // function to clear timer and display results and show restart button
    function done() {
        clearInterval(intervalId);
        $("#right-wrong").html("");
        $("#right").show();
        $("#wrong").show();
        $("#notAnswered").show();
        $(".image").hide();
        $("#time-left").hide();
        $("#questions").hide();
        $(".choice").hide();
        $("#restart").show();
    }

    // function to reset and restart game
    function restart() {
        intervalId = setInterval(decrement, 1000);
        $(".image").html("<img src='" + questions[i].image + "'>");
        $("#questions").html(questions[i].question);
        $("#time-left").show();
        $(".image").show();
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


