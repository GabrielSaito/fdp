function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [

    new Question("1-What is the past tense of 'see'?", ["Said", "Saw","Seft", "See","Seld"], "Saw"),
    new Question("2-Which of these verbs is regular?", ["Bought", "Most", "Played", "Came"], "Cry"),
    new Question("3- What is the past tense of speak?", ["Spent", "Speaked", "Spell", "Spool"], "Spoke"),
    new Question("4- What do the words 'read' and 'play' mean?", ["Ler e escrever", "Imitar e jogar", "Reescrever e jogar", "Falar e ouvir","Ler e jogar"], "Ler e jogar"),
    new Question("5-Which word group has only words in the past?", ["loved, dancing, read, freny", "taller, dirty, spoke, ling", "fly, three, true, sleep", "saw, went, spoke, left"], "saw, went, spoke, left"),
    new Question("6- What is the past tense of 'be'?", ["Was/were", "Buy/bought","Bee/bent", "Were/bee"], "Was/were"),
    new Question("7- Which past tense is correct in which of the alternatives?", ["Gotting", "Gots","Got", "Geet"], "Got"),
    new Question("8-Which of the words below represents the verb 'have' in the past?", ["Haved", "Has","Had", "Hid"], "Had"),


];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();