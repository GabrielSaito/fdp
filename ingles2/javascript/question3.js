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

    new Question("1-Qual das frases abaixo traduz corretamente 'Você ouviu isso?'", ["Do you heard that?","Did you hear that?","Did you heard that?","Do you heared that?","Does you heard that?"], "Did you hear that?"),
    new Question("2-Is the verb 'Love' regular or irregular?", ["Regular","Irregular"], "Regular"),
    new Question("3-What is the past tense of 'Buy'?", ["Buyed","Bay","Bought","Build","Bould"], "Bought"),
    new Question("4-Which of the alternatives has only regular verbs?", ["Love, think, be, stay","Love, stay, lose, hate","Love, hate, cry, go","Hate, cry, love, change","change, hate, work, lose"], "Hate, cry, love, change"),
    new Question("5-Which of these verbs remains the same, both in BASE FORM, PAST TENSE and PAST PARTICIPLE?", ["Speak","Swim","Be","Think","Read"], "Read"),
    new Question("6-Which of the alternatives has only IRREGULAR verbs?Change, love, die e stay", ["Have, Forget, Go e Hear","Listen, Go, be e cry","Stay, Love, Hate e Go","Hate, Change, die e cry"], "Have, Forget, Go e Hear"),
    new Question("7-What is the only irregular verb?", ["Write","Change","Cry","Love","Stay"], "Write"),

];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();