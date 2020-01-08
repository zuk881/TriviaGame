$(document).ready(function () {


    var questions = [
        {
            question: "Is the sky blue?",
            answer: "true"
        },
        {
            question: "Is water wet?",
            answer: "true"
        },
        {
            question: "Are dogs cats?",
            answer: "false"
        }
    ];
    var score = 0;
    var wrong = 0;
    var i = 0;
    var buttonIsChosen = false;
    var userChoice;
    var unAnswered = 3;
    // var number = 20;
    // var intervalId;

    $(".choice").hide();
    $("#restart").hide();
    $("#start-button").on("click", run);
    $("restart").on("click", restart);

    function run() {
        $("#questions").html(questions[i].question);
        $("#start-button").hide();
        $(".choice").show();
    }
    $(".choice").on("click", function () {
        if (buttonIsChosen) {
            return false;
        }
        userChoice = $(this).val();
        console.log(userChoice);
        if (userChoice == questions[i].answer) {
            score++;
            i++;
            unAnswered--;
            getNewQ();
        }
        else {
            wrong++;
            i++;
            unAnswered--;
            getNewQ();
        }
        console.log(wrong);
        console.log(score);
    })

    function getNewQ() {
        if (i > 2) {
            i = 0;
            done();
        }
        $("#questions").html(questions[i].question);
        console.log(i);
    }

    // clearInterval(intervalId);
    //     intervalId = setInterval(decrement, 1000);


    // function decrement() {
    //     number--;
    //     $("#time-left").html("Time Left: " + number);
    //     if (number === 0) {
    //         nextQuestion();
    //         $("#time-up").html("Times Up!")
    //     }
    // }

    function done() {
        // clearInterval(intervalId);
        $("#right").html("Questions Correct: " + score);
        $("#wrong").html("Questions Incorrect: " + wrong);
        $("#notAnswered").html("Unanswered: " + unAnswered);
        $("#time-left").hide();
        $("#questions").hide();
        $(".choice").hide();
        $("#restart").show();
    }

});