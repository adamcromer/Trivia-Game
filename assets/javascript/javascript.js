$(document).ready(function () {

    //Create an array full of objects which includes the questions, answers in an array, the correct index number of the right answer, and image links.
    var questionObject = [

        question1 = {
            question: "What really tied the room together?",
            answers: ["A Sofa", "A Rug", "A Painting", "An Antique Rocking Chair"],
            correctAnswer: 1,
            images: ["/assets/images/thedudetoilet.jpg", "/assets/images/thedudeonrug.jpg"]
        },
        question2 = {
            question: "What body part can Walter get you by 3PM?",
            answers: ["A Toe", "A Finger", "A Head", "An Eye"],
            correctAnswer: 0,
            images: ["/assets/images/diner.jpg", "/assets/images/bunny.jpg"]
        },
        question3 = {
            question: "What is The Dude buying at the start of the movie with a check for $0.69?",
            answers: ["Coffee", "Half & Half", "Milk", "A Coke"],
            correctAnswer: 1,
            images: ["/assets/images/check.jpg", "/assets/images/whiteRussian.jpg"]
        },
        question4 = {
            question: "What word is said the most throughout the film?",
            answers: ["Dude", "Man", "The F Word", "Bowling"],
            correctAnswer: 2,
            images: ["/assets/images/thejesus.jpg", "/assets/images/dudewaltdonnie.jpg"]
        },
        question5 = {
            question: "What band does The Dude hate?",
            answers: ["The Beatles", "Fleetwood Mac", "The Eagles", "The Bangles"],
            correctAnswer: 2,
            images: ["/assets/images/ihatethe.jpg", "/assets/images/headphones.jpg"]
        },
        question6 = {
            question: "What is a nihilist?",
            answers: ["A person who believes that life is meaningless", "A person who disbelieves the existence of God", "A person who believes that nothing is known or can be known of the existence of God", "A person who believes in multiple Gods"],
            correctAnswer: 0,
            images: ["/assets/images/nihilists.jpg", "/assets/images/thedudeatbar.jpg"]
        },
        question7 = {
            question: "Who is present in every scene?",
            answers: ["Walter", "Bunny", "Donnie", "The Dude"],
            correctAnswer: 3,
            images: ["/assets/images/thedudeandwalt.jpg", "/assets/images/brandt.jpg"]
        },
        question8 = {
            question: "Why can't Walter answer his phone?",
            answers: ["He's observing Shabbos", "He's in PTSD therapy", "He forgot to pay his phone bill", "He doesn't use a phone because he believes he's being tracked by the CIA"],
            correctAnswer: 0,
            images: ["/assets/images/angrywalt.jpg", "/assets/images/thedudebowling.jpg"]
        },
        question9 = {
            question: "Jackie Treehorn treats objects like what according to The Dude?",
            answers: ["Books", "Dogs", "Food", "Women"],
            correctAnswer: 3,
            images: ["/assets/images/dream.jpg", "/assets/images/theduderelaxing.jpg"]
        },
        question10 = {
            question: "Who is The Big Lebowski?",
            answers: ['Jeffrey "The Dude" Lebowski', "Bunny Lebowski", "Maude Lebowski", 'Jeffrey "The Millionaire" Lebowski'],
            correctAnswer: 3,
            images: ["/assets/images/maude.jpg", "/assets/images/brandtandthebig.jpg"]
        }
    ]

    //Variables which connect with their $Counterparts.
    var title = $("#title");
    var timer = $("#timer");
    var mainImage = $("#mainImage");
    var question = $("#question");
    var answers = $(".answers")
    var answer1 = $("#answer1");
    var answer2 = $("#answer2");
    var answer3 = $("#answer3");
    var answer4 = $("#answer4");
    var startButton = $("#startButton");
    var secondText = $("#secondText");
    var secondImage = $("#secondImage");

    //Variables for score and how many out of questions so far and other global variables.
    var score = 0;
    var totalQuestions = -1;
    var time = 15;
    var outOfTime;
    var decrement;


    //A function that updates the variables with the matching HTML.
    function updatePage() {
        time = 15;
        timer.html(time);
        question.html(questionObject[totalQuestions].question);
        answer1.html(questionObject[totalQuestions].answers[0]);
        answer2.html(questionObject[totalQuestions].answers[1]);
        answer3.html(questionObject[totalQuestions].answers[2]);
        answer4.html(questionObject[totalQuestions].answers[3]);
        title.html("Question " + (totalQuestions + 1));
        mainImage.attr("src", questionObject[totalQuestions].images[0]);
        secondImage.attr("src", questionObject[totalQuestions].images[1]);
    }

    //A setTimeout function for what happens once the time runs out.
    function startTimeout() {
        time = 7;
        clearInterval(decrement);
        clearTimeout(outOfTime);
        outOfTime = setTimeout(waitTime, 1000 * 7);
        decrement = setInterval(startTimer, 1000);
        timer.html(time);
        question.hide();
        answers.hide();
        mainImage.hide();
        secondImage.show();
        secondText.show();
        startButton.show();
        startButton.html("Continue");

        if (totalQuestions < 10) {
            secondText.html("You ran out of time! The correct answer was " + questionObject[totalQuestions].answers[questionObject[totalQuestions].correctAnswer] + ". You have currently answered " + score + " out of " + (totalQuestions + 1) + " questions right. <br><br>The next question will begin in 7 seconds or press continue.");
        }
        else {
            secondText.html("You ran out of time! The correct answer was " + questionObject[totalQuestions].answers[questionObject[totalQuestions].correctAnswer] + ". <br><br>The next question will begin in 7 seconds or press continue.");
        }
    }

    //A setInterval function that counts down the timer.
    function startTimer() {
        time--;
        timer.html(time);
    }

    //A setTimeout function that loads the next question.
    function waitTime() {

        if (totalQuestions < 9) {
            clearInterval(decrement);
            clearTimeout(outOfTime);
            outOfTime = setTimeout(startTimeout, 1000 * 15);
            decrement = setInterval(startTimer, 1000);
            startButton.hide();
            secondImage.hide();
            secondText.hide();
            title.show();
            question.show();
            answers.show();
            mainImage.show();
            totalQuestions++;
            updatePage();
        }
        else {

            if (score === 10) {
                time = 0;
                timer.html(time);
                clearInterval(decrement);
                clearTimeout(outOfTime);
                secondText.html("Wow! Perfect game! You are a colossal Big Lebowski fan! Go and watch it one more time, you deserve it.");
                startButton.show();
                startButton.html("Play again?");
                secondImage.attr("src", "/assets/images/bigdude.png");
                reset();
            }

            else {
                time = 0;
                timer.html(time);
                clearInterval(decrement);
                clearTimeout(outOfTime);
                secondText.html("Good job, but not perfect. You answered " + score + " out of 10 right. Better go watch it one more time.");
                startButton.show();
                startButton.html("Try again?");
                secondImage.attr("src", "/assets/images/bigdude.png");
                reset();
            }
        }
    }

    //A function for what happens once your select the right answer.
    function rightAnswer() {
        time = 7;
        timer.html(time);
        clearInterval(decrement);
        clearTimeout(outOfTime);
        outOfTime = setTimeout(waitTime, 1000 * 5);
        decrement = setInterval(startTimer, 1000);
        score++;
        question.hide();
        answers.hide();
        mainImage.hide();
        secondImage.show();
        secondText.show();
        startButton.show();
        startButton.html("Continue");

        if (totalQuestions < 9) {
            secondText.html("Good job! You got the answer right. You have currently answered " + score + " out of " + (totalQuestions + 1) + " questions right! <br><br>The next question will begin in 7 seconds or press continue.");
        }
        else {
            secondText.html("Good job! You got the answer right. <br><br>You will see the final score in 5 seconds or press continue.");
        }
    }

    //A function for what happens once your seletct the wrong answer.
    function wrongAnswer() {
        time = 7;
        timer.html(time);
        clearInterval(decrement);
        clearTimeout(outOfTime);
        outOfTime = setTimeout(waitTime, 1000 * 7);
        decrement = setInterval(startTimer, 1000);
        question.hide();
        answers.hide();
        mainImage.hide();
        secondImage.show();
        secondText.show();
        startButton.show();
        startButton.html("Continue");

        if (totalQuestions < 9) {
            secondText.html("Sorry, you picked the wrong answer! The correct answer was " + questionObject[totalQuestions].answers[questionObject[totalQuestions].correctAnswer] + ". You have currently answered " + score + " out of " + (totalQuestions + 1) + " questions right. <br><br>The next question will begin in 7 seconds or press continue.");
        }
        else {
            secondText.html("Sorry, you picked the wrong answer! The correct answer was " + questionObject[totalQuestions].answers[questionObject[totalQuestions].correctAnswer] + ". <br><br>You will see the final score in 7 seconds or press continue.")
        }
    }

    //A reset function so that you don't have to restart the page to play again.
    function reset() {
        score = 0;
        totalQuestions = -1;
    }

    //A start button function that on the first screen says start and changes to Next Question once you've answered at least 1 question.
    startButton.click(function () {
        waitTime();
    });

    answer1.click(function () {
        if (questionObject[totalQuestions].correctAnswer === 0) {
            rightAnswer();
        }
        else {
            wrongAnswer();
        }
    })

    answer2.click(function () {
        if (questionObject[totalQuestions].correctAnswer === 1) {
            rightAnswer();
        }
        else {
            wrongAnswer();
        }
    })

    answer3.click(function () {
        if (questionObject[totalQuestions].correctAnswer === 2) {
            rightAnswer();
        }
        else {
            wrongAnswer();
        }
    })

    answer4.click(function () {
        if (questionObject[totalQuestions].correctAnswer === 3) {
            rightAnswer();
        }
        else {
            wrongAnswer();
        }
    })

});
