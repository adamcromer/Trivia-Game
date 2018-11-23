$(document).ready(function () {

    //Create objects which includes the questions, answers in an array, and the correct index number of the right answer.
    var questionObject = [

        question1 = {
            question: "What really tied the room together?",
            answers: ["A Sofa", "A Rug", "A Painting", "An Antique Rocking Chair"],
            correctAnswer: 1,
            images: []
        },
        question2 = {
            question: "What body part can Walter get you by 3PM?",
            answers: ["A Toe", "A Finger", "A Head", "An Eye"],
            correctAnswer: 0,
            images: []
        },
        question3 = {
            question: "What is The Dude buying at the start of the movie with a check for $0.69?",
            answers: ["Coffee", "Milk", "Half & Half", "A Coke"],
            correctAnswer: 2,
            images: []
        },
        question4 = {
            question: "What word is said the most throughout the film?",
            answers: ["Dude", "Man", "The F Word", "Bowling"],
            correctAnswer: 2,
            images: []
        },
        question5 = {
            question: "What band does The Dude hate?",
            answers: ["The Beatles", "Fleetwood Mac", "The Eagles", "The Bangles"],
            correctAnswer: 2,
            images: [""]
        },
        question6 = {
            question: "What is a nihilist?",
            answers: ["A person who believes that life is meaningless.", "A person who disbelieves the existence of God", "A person who believes that nothing is known or can be known of the existence of God.", "A person who believes in multiple Gods."],
            correctAnswer: 0,
            images: []
        },
        question7 = {
            question: "Who is present in every scene?",
            answers: ["Walter", "Bunny", "Donnie", "The Dude"],
            correctAnswer: 3,
            images: []
        },
        question8 = {
            question: "Why can't Walter answer his phone?",
            answers: ["He's observing Shabbos.", "He's in PTSD therapy.", "He forgot to pay his phone bill.", "He doesn't use a phone because he believes he's being tracked by the CIA."],
            correctAnswer: 0,
            images: []
        },
        question9 = {
            question: "Jackie Treehorn treats objects like what according to The Dude?",
            answers: ["Books", "Dogs", "Food", "Women"],
            correctAnswer: 0,
            images: []
        },
        question10 = {
            question: "Who is The Big Lebowski?",
            answers: ['Jeffrey "The Dude" Lebowski', "Bunny Lebowski", "Maude Lebowski", 'Jeffrey "The Millionaire" Lebowski'],
            correctAnswer: 3,
            images: []
        }
    ]
    var currentQuestion = {
        question: "",
        answers: [],
        correctAnswer: 0,
        images: []
    }

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
    

    //A function that updates the variables with the matching HTML.
    function updatePage() {
        question.html(questionObject[totalQuestions].question);
        answer1.html(questionObject[totalQuestions].answers[0]);
        answer2.html(questionObject[totalQuestions].answers[1]);
        answer3.html(questionObject[totalQuestions].answers[2]);
        answer4.html(questionObject[totalQuestions].answers[3]);
    }

    //A function which starts the timer for 30 Seconds and what happens once the time runs out.
    function timer() {

    }

    //A reset function so that you don't have to restart the page to play again.
    function reset() {
        score = 0;
        totalQuestions = 0;
    }

    //A start button function that on the first screen says start and changes to continue once you've answered at least 1 question.
    startButton.click(function () {
        // startButton.hide();
        secondImage.hide();
        secondText.hide();
        title.show();
        question.show();
        answers.show();
        mainImage.show();
        totalQuestions++;
        updatePage();

    });




});
