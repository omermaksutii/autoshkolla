window.quickquizTemplates = {};

window.quickquizTemplates.home =
    '<div ng-class="[\'quiz-container\', {\'md-whiteframe-3dp\':home.quizConfig.settings.whiteframe}]">' +
    '<!-- Home title -->' +
    '<div ng-if="home.quizConfig.labels.homeTitle">' +
    '<md-toolbar layout-padding ng-if="home.quizConfig.settings.titleToolbar" class="title-toolbar">' +
    '<h1 class="md-display-1 main-title">{{home.quizConfig.labels.homeTitle}}</h1>' +
    '</md-toolbar>' +
    '<h1 ng-if="!home.quizConfig.settings.titleToolbar" class="md-display-1 main-title without-toolbar">{{home.quizConfig.labels.homeTitle}}</h1>' +
    '</div>' +

    '<!-- Home description -->' +
    '<div ng-if="home.quizConfig.labels.homeDescription" class="page" ng-bind-html="home.quizConfig.labels.homeDescription"></div>' +

    '<!-- Write here your custom HTML home description -->' +
    '<!--' +
    '<div class="page">' +
    'Your code here' +
    '</div>' +
    '-->' +

    '<!-- Start button -->' +
    '<div ng-if="home.quizConfig.database.showForm != \'home\'" layout="row" layout-align="center center" class="prev-next nav-buttons">' +
    '<md-button ng-click="go(\'1\')">{{home.quizConfig.labels.startQuiz}}</md-button>' +
    '</div>' +

    '<!-- Form -->' +
    '<div ng-if="home.quizConfig.database.showForm === \'home\'" class="page" layout-padding>' +
    '<form name="formData" ng-submit="formData.$valid && go(\'1\')" novalidate>' +
    '<div layout="row">' +
    '<md-input-container flex ng-if="home.quizConfig.database.name">' +
    '<label>{{home.quizConfig.labels.sendName}}</label>' +
    '<input name="username" ng-model="home.quizDatabase.formName" required ng-focus="formData.$submitted=false">' +
    '<div ng-messages="formData.username.$error" ng-if="formData.$submitted">' +
    '<div ng-message="required">{{home.quizConfig.labels.requiredField}}</div>' +
    '</div>' +
    '</md-input-container>' +

    '<md-input-container flex ng-if="home.quizConfig.database.email">' +
    '<label>{{home.quizConfig.labels.sendEmail}}</label>' +
    '<input name="email" ng-model="home.quizDatabase.formEmail" type="email" required ng-focus="formData.$submitted=false">' +
    '<div ng-messages="formData.email.$error" ng-if="formData.$submitted">' +
    '<div ng-message="required">{{home.quizConfig.labels.requiredField}}</div>' +
    '<div ng-message="email">{{home.quizConfig.labels.emailError}}</div>' +
    '</div>' +
    '</md-input-container>' +
    '</div>' +
    '<div layout="row" layout-align="center center">' +
    '<md-button type="submit">{{home.quizConfig.labels.startQuiz}}</md-button>' +
    '</div>' +
    '</form>' +
    '</div>' +
    '</div>';


window.quickquizTemplates.main =
    '<!-- Timer, optional div -->' +
    '<div ng-if="main.quizConfig.settings.timerCount>0" class="timer md-headline" layout="row" layout-align="end center">' +
    '{{(main.timeLeft+1)*1000 | date:"mm:ss"}}' +
    '</div>' +

    '<div ng-class="[\'quiz-container\', {\'md-whiteframe-3dp\':main.quizConfig.settings.whiteframe}]">' +

    '<!-- Main title, optional div -->' +
    '<div ng-if="main.mainTitle">' +
    '<md-toolbar layout-padding ng-if="main.quizConfig.settings.titleToolbar" class="title-toolbar">' +
    '<h1 class="md-display-1 main-title">{{main.mainTitle}}</h1>' +
    '</md-toolbar>' +
    '<h1 ng-if="!main.quizConfig.settings.titleToolbar" class="md-display-1 main-title without-toolbar">{{main.mainTitle}}</h1>' +
    '</div>' +

    '<!-- Questions -->' +
    '<quiz-question></quiz-question>' +

    '<!-- Form -->' +
    '<div ng-if="main.quizConfig.database.showForm === \'last\' && main.showLast()" class="page" layout-padding>' +
    '<form name="main.formData" novalidate>' +
    '<div layout="row">' +
    '<md-input-container flex ng-if="main.quizConfig.database.name">' +
    '<label>{{main.quizConfig.labels.sendName}}</label>' +
    '<input name="username" ng-model="main.quizDatabase.formName" required>' +

    '<div ng-messages="main.formData.username.$error" ng-if="main.formData.submitted">' +
    '<div ng-message="required">{{main.quizConfig.labels.requiredField}}</div>' +
    '</div>' +

    '</md-input-container>' +

    '<md-input-container flex ng-if="main.quizConfig.database.email">' +
    '<label>{{main.quizConfig.labels.sendEmail}}</label>' +
    '<input name="email" ng-model="main.quizDatabase.formEmail" type="email" required>' +

    '<div ng-messages="main.formData.email.$error" ng-if="main.formData.submitted">' +
    '<div ng-message="required">{{main.quizConfig.labels.requiredField}}</div>' +
    '<div ng-message="email">{{main.quizConfig.labels.emailError}}</div>' +
    '</div>' +
    '</md-input-container>' +
    '</div>' +
    '</form>' +
    '</div>' +

    '<!-- Page number, optional div -->' +
    '<div ng-if="main.quizConfig.settings.showPageNumber" class="pagNumber md-headline" layout="row" layout-align="end center">' +
    '{{main.currentPage}}/{{main.numPages}}' +
    '</div>' +

    '<!-- Progress bar, optional div-->' +
    '<md-progress-linear md-mode="determinate" ng-if="main.quizConfig.settings.showProgressBar" value="{{main.currentPage*100/main.numPages}}" class="progress-bar">' +
    '</md-progress-linear>' +

    '<!-- global alert -->' +
    '<div class="alert global" layout="row" layout-align="center center" ng-if="main.showGlobalAlert() && main.continueAlert && main.quizConfig.settings.showGlobalAlert">' +
    '{{main.quizConfig.labels.requiredGlobalAlert}}' +
    '</div>' +

    '<!-- PAGE BUTTONS -->' +
    '<div ng-if="!main.quizConfig.settings.hidePageButtons">' +

    '<!-- Previous, next and submit buttons -->' +
    '<div ng-if="main.currentPage>1" layout="row" layout-align="space-between center" class="prev-next nav-buttons">' +
    '<md-button ng-click="main.prevPage()" ng-if="main.currentPage>1" >' +
    '{{main.quizConfig.labels.previousText}}' +
    '</md-button>' +

    '<md-button ng-click="main.nextPage()" ng-if="main.showNext()">' +
    '{{main.quizConfig.labels.nextText}}' +
    '</md-button>' +

    '<md-button ng-click="main.checkAnswers()" ng-if="main.quizConfig.database.showForm!=\'last\' && main.showLast() && main.quizConfig.database.sendFrom != \'lastPage\'">' +
    '{{main.quizConfig.labels.lastText}}' +
    '</md-button>' +

    '<md-button ng-click="main.submit()" ng-if="main.quizConfig.database.showForm!=\'last\' && main.showLast() && main.quizConfig.database.sendFrom === \'lastPage\'">' +
    '{{main.quizConfig.labels.submitButton}}' +
    '</md-button>' +

    '<md-button ng-click="main.checkAnswersForm(main.formData)" ng-if="main.quizConfig.database.showForm===\'last\' && main.showLast() && main.quizConfig.database.sendFrom != \'lastPage\'">' +
    '{{main.quizConfig.labels.lastText}}' +
    '</md-button>' +

    '<md-button ng-click="main.submitForm(main.formData)" ng-if="main.quizConfig.database.showForm===\'last\' && main.showLast() && main.quizConfig.database.sendFrom === \'lastPage\'">' +
    '{{main.quizConfig.labels.submitButton}}' +
    '</md-button>' +

    '</div>' +

    '<!-- first page buttons-->' +
    '<div ng-if="main.currentPage<2 && main.numPages>1" layout="row" layout-align="end center" class="prev-next nav-buttons">' +
    '<md-button ng-click="main.nextPage()" ng-if="main.showNext()">' +
    '{{main.quizConfig.labels.nextText}}' +
    '</md-button>' +

    '<md-button ng-click="main.checkAnswers()" ng-if="main.quizConfig.database.showForm!=\'last\' && main.showLast() && main.quizConfig.database.sendFrom != \'lastPage\'">' +
    '{{main.quizConfig.labels.lastText}}' +
    '</md-button>' +

    '<md-button ng-click="main.submit()" ng-if="main.quizConfig.database.showForm!=\'last\' && main.showLast() && main.quizConfig.database.sendFrom === \'lastPage\'">' +
    '{{main.quizConfig.labels.submitButton}}' +
    '</md-button>' +

    '<md-button ng-click="main.checkAnswersForm(main.formData)" ng-if="main.quizConfig.database.showForm===\'last\' && main.showLast() && main.quizConfig.database.sendFrom != \'lastPage\'">' +
    '{{main.quizConfig.labels.lastText}}' +
    '</md-button>' +

    '<md-button ng-click="main.submitForm(main.formData)" ng-if="main.quizConfig.database.showForm===\'last\' && main.showLast() && main.quizConfig.database.sendFrom === \'lastPage\'">' +
    '{{main.quizConfig.labels.submitButton}}' +
    '</md-button>' +

    '</div>' +

    '<!-- only one page buttons-->' +
    '<div ng-if="main.numPages===1" layout="row" layout-align="center center" class="prev-next nav-buttons">' +

    '<md-button ng-click="main.checkAnswers()" ng-if="main.quizConfig.database.showForm!=\'last\' && main.showLast() && main.quizConfig.database.sendFrom != \'lastPage\'">' +
    '{{main.quizConfig.labels.lastText}}' +
    '</md-button>' +

    '<md-button ng-click="main.submit()" ng-if="main.quizConfig.database.showForm!=\'last\' && main.showLast() && main.quizConfig.database.sendFrom === \'lastPage\'">' +
    '{{main.quizConfig.labels.submitButton}}' +
    '</md-button>' +

    '<md-button ng-click="main.checkAnswersForm(main.formData)" ng-if="main.quizConfig.database.showForm===\'last\' && main.showLast() && main.quizConfig.database.sendFrom != \'lastPage\'">' +
    '{{main.quizConfig.labels.lastText}}' +
    '</md-button>' +

    '<md-button ng-click="main.submitForm(main.formData)" ng-if="main.quizConfig.database.showForm===\'last\' && main.showLast() && main.quizConfig.database.sendFrom === \'lastPage\'">' +
    '{{main.quizConfig.labels.submitButton}}' +
    '</md-button>' +

    '</div>' +
    '</div>' +
    '</div>' +

    '<div class="loading-icon" layout="row" layout-align="center center" ng-if="main.quizDatabase.sendingData">' +
    '<div class="spinner"></div>' +
    '</div>';

window.quickquizTemplates.score =
    '<div ng-class="[\'quiz-container\', {\'md-whiteframe-3dp\':score.quizConfig.settings.whiteframe}]">' +

    '<!-- Main title, optional div -->' +
    '<div ng-if="score.quizConfig.labels.scoreTitle">' +
    '<md-toolbar layout-padding ng-if="score.quizConfig.settings.titleToolbar" class="title-toolbar">' +
    '<h1 class="md-display-1 main-title">{{score.quizConfig.labels.scoreTitle}}</h1>' +
    '</md-toolbar>' +
    '<h1 ng-if="!score.quizConfig.settings.titleToolbar" class="md-display-1 main-title without-toolbar">{{score.quizConfig.labels.scoreTitle}}</h1>' +
    '</div>' +

    '<div class="page" layout-padding>' +

    '<!-- Score description -->' +
    '<div class="description" ng-if="score.quizConfig.labels.scoreDescription" ng-bind-html="score.quizConfig.labels.scoreDescription"></div>' +

    '<!-- Write here your custom HTML score description -->' +
    '<!--some examples for dynamic content you can use:' +
    '{{score.quizScore.scorePointsRounded}} -> show the points scored' +
    '{{score.quizScore.scorePercentageRounded}} -> show the percentage scored' +
    '{{score.finalMessagePoints}} -> show the message regarding the points scored (change the text in the labels tab in the builder)' +
    '{{score.finalMessagePercentage}} -> show the message regarding the percentage scored (change the text in the labels tab in the builder)' +
    '{{score.finalMessagePersonality}} -> show the message regarding the winning personality -->' +
    '<!--' +
    '<div class="description">' +
    'Your code here' +
    '</div>' +
    '-->' +

    '<!-- show custom image -->' +
    '<div ng-if="score.quizConfig.score.showCustomImage">' +
    '<img ng-src="{{score.finalImage}}" >' +
    '</div>' +

    '<!-- Message -->' +
    '<md-toolbar class="score-message" ng-if="(score.quizScore.graded || score.quizScore.weighted)  && score.quizConfig.score.showMessage" ng-style="{\'background-color\': score.quizConfig.score.scoreMessageBGColor, \'color\': score.quizConfig.score.scoreMessageTextColor}">' +

    '<!-- Points scored -->' +
    '<p ng-if="score.quizConfig.score.showPoints">' +
    '{{score.quizConfig.labels.pointsScored}} {{score.quizScore.scorePointsRounded}} ' +
    '<span ng-if="score.quizConfig.score.showMaxPoints">/ {{score.quizScore.maxPoints}}</span></p>' +

    '<!-- Message about points scored -->' +
    '<p ng-if="score.finalMessagePoints.length>0 && score.quizConfig.score.showPointsMessage"' +
    'ng-bind-html="score.finalMessagePoints"></p>' +

    '<!-- Percentage scored -->' +
    '<p ng-if="score.quizConfig.score.showPercentage">' +
    '{{score.quizConfig.labels.percentageScored}} {{score.quizScore.scorePercentageRounded}}%' +
    '</p>' +

    '<!-- Message about percentage scored -->' +
    '<p ng-if="score.finalMessagePercentage.length>0 && score.quizConfig.score.showPercentageMessage">' +
    'ng-bind-html="score.finalMessagePercentage"></p>' +

    '<!-- Summary: total right, total wrong and total blank -->' +
    '<p ng-if="score.quizConfig.score.showSummary">' +
    '{{score.quizConfig.labels.correct}} {{score.quizScore.totalRight}} | ' +
    '{{score.quizConfig.labels.incorrect}} {{score.quizScore.totalWrong}} | ' +
    '{{score.quizConfig.labels.leftBlank}} {{score.quizScore.totalBlank}}' +
    '</p>' +

    '<!-- Message about winner personality -->' +
    '<p ng-if="score.finalMessagePersonality.length>0 && score.quizConfig.score.showPersonalityMessage"' +
    'ng-bind-html="score.finalMessagePersonality"></p>' +

    '</md-toolbar>' +

    '<!-- Example: div with your custom HTML regarding the points scored -->' +
    '<!--' +
    '<div ng-if="score.quizScore.scorePointsRounded > 10 && score.quizScore.scorePointsRounded < 50">' +
    '<p>Your custom html can be here. In this example this div will be showed if the points are greater than 10 but less than 50 points.' +
    'If you prefer percentage change scorePointsRounded for scorePercentageRounded</p>' +
    '</div>' +
    '-->' +

    '<!-- Show quiz (statements, user answers and/or correct answers -->' +
    '<div ng-if="score.quizConfig.score.showQuiz" layout="column">' +
    '<div class="score-questions" ng-repeat="item in score.questionsData">' +

    '<h3><span ng-if="score.quizConfig.settings.showQuestionNumber">{{item.id +1}}. </span><span ng-bind-html="item.statement"></span>' +
    '</h3>' +

    '<div class="aside-image-score" layout-padding ng-if="item.asideImageScore">' +
    '<img ng-click="score.showImage(item.asideImage)" ng-src="{{item.asideImage}}"/>' +
    '</div>' +

    '<div class="score-answers" ng-if="item.type != \'matrix\'">' +
    '<!-- blank -->' +
    '<div ng-if="score.quizConfig.score.showUserAnswers && item.answerState === \'blank\'">' +
    '<p ng-if="score.quizConfig.labels.answerPrevText" class="md-caption">' +
    '{{score.quizConfig.labels.answerPrevText}}</p>' +
    '<div ng-if="score.quizConfig.score.showUserAnswers" class="unanswered">' +
    '{{score.quizConfig.labels.unansweredQuestion}}' +
    '</div>' +
    '</div>' +

    '<!-- answer -->' +
    '<div ng-if="score.quizConfig.score.showUserAnswers && item.answerState != \'blank\'">' +
    '<p ng-if="score.quizConfig.labels.answerPrevText" md-caption class="md-caption">' +
    '{{score.quizConfig.labels.answerPrevText}}</p>' +
    '<div ng-bind-html="item.scoreBoardAnswer"></div>' +
    '</div>' +

    '<!-- solution -->' +
    '<div ng-if="score.checkShowSolution(item.answerState, item.scoreBoardSolution) ||' +
    '((item.feedbackScore.wrong || item.feedbackScoreWrong) && item.answerState != \'right\') ||' +
    '((item.feedbackScore.right || item.feedbackScoreRight) && item.answerState === \'right\') ||' +
    'item.feedbackScoreAlways || item.feedbackScore.basic">' +

    '<p ng-if="score.quizConfig.labels.solutionPrevText" md-caption class="md-caption">' +
    '{{score.quizConfig.labels.solutionPrevText}}</p>' +

    '<!-- if there is not custom feedback for the score it shows the right answer -->' +
    '<div ng-if="!item.feedbackScoreWrong && !item.feedbackScoreRight && !item.feedbackScoreAlways && !item.feedbackScore.wrong && !item.feedbackScore.right && !item.feedbackScore.basic"' +
    'ng-bind-html="item.scoreBoardSolution"></div>' +

    '<!-- custom feedback for the score if any -->' +
    '<div ng-if="item.feedbackScore.wrong && item.answerState != \'right\'" ng-bind-html="item.feedbackScore.wrong"></div>' +
    '<div ng-if="item.feedbackScore.right && item.answerState === \'right\'" ng-bind-html="item.feedbackScore.right"></div>' +
    '<div ng-if="item.feedbackScore.basic" ng-bind-html="item.feedbackScore.basic"></div>' +
    '<!-- old feedback version (deprecated) -->' +
    '<div ng-if="item.feedbackScoreWrong && item.answerState != \'right\'" ng-bind-html="item.feedbackScoreWrong"></div>' +
    '<div ng-if="item.feedbackScoreRight && item.answerState === \'right\'" ng-bind-html="item.feedbackScoreRight"></div>' +
    '<div ng-if="item.feedbackScoreAlways" ng-bind-html="item.feedbackScoreAlways"></div>' +
    '</div>' +
    '</div>' +

    '<!-- for matrix -->' +
    '<div ng-if="item.type === \'matrix\'" ng-repeat="rowID in item.rowsID">' +
    '<p><span ng-if="score.quizConfig.settings.showQuestionNumber">{{this.$index +1}}. </span><span ng-bind-html="item.rows[rowID]"></span>' +
    '</p>' +
    '<div class="score-answers">' +
    '<!-- blank -->' +
    '<div ng-if="score.quizConfig.score.showUserAnswers && item.answerState[rowID] === \'blank\'">' +
    '<p ng-if="score.quizConfig.labels.answerPrevText" class="md-caption">' +
    '{{score.quizConfig.labels.answerPrevText}}</p>' +
    '<div ng-if="score.quizConfig.score.showUserAnswers" class="unanswered">' +
    '{{score.quizConfig.labels.unansweredQuestion}}' +
    '</div>' +
    '</div>' +

    '<!-- answer -->' +
    '<div ng-if="score.quizConfig.score.showUserAnswers && item.answerState[rowID] != \'blank\'">' +
    '<p ng-if="score.quizConfig.labels.answerPrevText" md-caption class="md-caption">' +
    '{{score.quizConfig.labels.answerPrevText}}</p>' +
    '<div ng-bind-html="item.scoreBoardAnswer[rowID]"></div>' +
    '</div>' +


    '<!-- solution -->' +
    '<div ng-if="((score.quizConfig.score.showSolution || item.feedbackScoreWrong) && item.answerState[rowID] != \'right\') || item.feedbackScoreAlways">' +
    '<p ng-if="score.quizConfig.labels.solutionPrevText" md-caption class="md-caption">' +
    '{{score.quizConfig.labels.solutionPrevText}}</p>' +
    '<div ng-if="!item.feedbackScoreWrong && !item.feedbackScoreAlways" ng-bind-html="item.choices[item.solution[rowID]]"></div>' +
    '<div ng-if="item.feedbackScoreWrong" ng-bind-html="item.feedbackScoreWrong[rowID]"></div>' +
    '<div ng-if="item.feedbackScoreAlways" ng-bind-html="item.feedbackScoreAlways[rowID]"></div>' +
    '</div>' +
    '</div>' +
    '</div>' +

    '<!-- Optional separator -->' +
    '<md-divider ng-if="!$last"></md-divider>' +

    '</div>' +
    '</div>' +
    '</div>' +

    '<!-- Social Buttons -->' +

    '<div ng-if="score.quizConfig.score.share" layout="column" layout-align="center center" class="qq_social_icons">' +
    '<h2 ng-bind-html="score.quizConfig.score.share.title"></h2>' +
    '<div layout="row" layout-align="center center">' +

    '<!-- customize your TWITTER text (&text=...), some examples for dynamic content you can use:' +
    '{{score.quizScore.scorePointsRounded}} -> show the points scored' +
    '{{score.quizScore.scorePercentageRounded}} -> show the percentage scored' +
    '{{score.finalMessagePoints}} -> show the message regarding the points scored (change the text in the labels tab in the builder)' +
    '{{score.finalMessagePercentage}} -> show the message regarding the percentage scored (change the text in the labels tab in the builder)' +
    '{{score.finalMessagePersonality}} -> show the message regarding the winning personality (change the text in the labels tab in the builder)' +
    '-->' +

    '<!-- Twitter -->' +
    '<a ng-if="score.quizConfig.score.share.twitter" target="_blank"' +
    'ng-href="http://twitter.com/share?url={{score.shareURL}}&text=I scored {{score.quizScore.scorePointsRounded}} points.">' +
    '<img src="css/icons/twitter.png">' +
    '</a>' +

    '<!-- Google Plus -->' +
    '<a ng-if="score.quizConfig.score.share.gplus"' +
    'ng-href="https://plus.google.com/share?url={{score.shareURL}}" target="_blank">' +
    '<img src="css/icons/gplus.png">' +
    '</a>' +

    '<!-- Facebook -->' +
    '<a ng-if="score.quizConfig.score.share.facebook"' +
    'href="http://www.facebook.com/sharer/sharer.php?u={{score.shareURL}}" target="_blank">' +
    '<img src="css/icons/facebook.png">' +
    '</a>' +

    '<!-- LinkedIn -->' +
    '<a ng-if="score.quizConfig.score.share.linkedin"' +
    'href="https://www.linkedin.com/shareArticle?mini=true&url={{score.shareURL}}" target="_blank">' +
    '<img src="css/icons/linkedin.png">' +
    '</a>' +

    '</div>' +
    '</div>' +

    '<!-- redo quiz -->' +
    '<div layout="row" layout-align="center center" class="prev-next nav-buttons">' +
    '<md-button ng-click="score.redo()" ng-if="score.quizConfig.settings.redoButton">' +
    '{{score.quizConfig.labels.redoText}}' +
    '</md-button>' +
    '</div>' +

    '</div>' +

    '<!-- Send answers to a database -->' +

    '<!-- Button only -->' +
    '<div layout="row" layout-align="center center" class="nav-buttons" ng-if="score.quizConfig.database.sendFrom === \'score\' && score.quizConfig.database.showForm != \'score\' ">' +
    '<md-button ng-click="score.quizDatabase.onSubmit()">{{score.quizConfig.labels.submitButton}}</md-button>' +
    '</div>' +

    '<!-- Form -->' +
    '<div ng-if="score.quizConfig.database.sendFrom === \'score\' && score.quizConfig.database.showForm === \'score\'"' +
    'class="quiz-container md-whiteframe-3dp form-container">' +

    '<md-toolbar layout-padding class="title-toolbar">' +
    '<h1 class="md-headline">{{score.quizConfig.labels.sendTitle}}</h1>' +
    '</md-toolbar>' +

    '<div class="page" layout-padding>' +
    '<form name="formData" ng-submit="formData.$valid && score.quizDatabase.onSubmit()" novalidate>' +
    '<div layout="row">' +
    '<md-input-container flex ng-if="score.quizConfig.database.name">' +
    '<label>{{score.quizConfig.labels.sendName}}</label>' +
    '<input name="username" ng-model="score.quizDatabase.formName" required ng-focus="formData.$submitted=false">' +

    '<div ng-messages="formData.username.$error" ng-if="formData.$submitted">' +
    '<div ng-message="required">{{score.quizConfig.labels.requiredField}}</div>' +
    '</div>' +
    '</md-input-container>' +

    '<md-input-container flex ng-if="score.quizConfig.database.email">' +
    '<label>{{score.quizConfig.labels.sendEmail}}</label>' +
    '<input name="email" ng-model="score.quizDatabase.formEmail" type="email" required ng-focus="formData.$submitted=false">' +

    '<div ng-messages="formData.email.$error" ng-if="formData.$submitted">' +
    '<div ng-message="required">{{score.quizConfig.labels.requiredField}}</div>' +
    '<div ng-message="email">{{score.quizConfig.labels.emailError}}</div>' +
    '</div>' +
    '</md-input-container>' +
    '</div>' +
    '<div layout="row" layout-align="center center" class="nav-buttons">' +
    '<md-button type="submit">{{score.quizConfig.labels.submitButton}}</md-button>' +
    '</div>' +
    '</form>' +
    '</div>' +
    '</div>' +

    '<div class="loading-icon" layout="row" layout-align="center center" ng-if="score.quizDatabase.sendingData">' +
    '<div class="spinner"></div>' +
    '</div>';

window.quickquizTemplates.thanks =
    '<div ng-class="[\'quiz-container\', {\'md-whiteframe-3dp\':thanks.quizConfig.settings.whiteframe}]">' +
    '<!-- Main title, optional div -->' +
    '<div ng-if="thanks.quizConfig.labels.thanksTitle">' +
    '<md-toolbar layout-padding ng-if="thanks.quizConfig.settings.titleToolbar" class="title-toolbar">' +
    '<h1 class="md-display-1 main-title">{{thanks.quizConfig.labels.thanksTitle}}</h1>' +
    '</md-toolbar>' +
    '<h1 ng-if="!thanks.quizConfig.settings.titleToolbar" class="md-display-1 main-title without-toolbar">{{thanks.quizConfig.labels.thanksTitle}}</h1>' +
    '</div>' +

    '<!-- Page description -->' +
    '<div class="page" ng-if="thanks.quizConfig.labels.thanksDescription" ng-bind-html="thanks.quizConfig.labels.thanksDescription"></div>' +
    '<!-- Write here your custom HTML thanks description -->' +
    '<!--' +
    '<div class="page">' +
    'Your code here' +
    '</div>' +
    '-->' +

    '<!-- redo quiz -->' +
    '<div layout="row" layout-align="center center" class="prev-next nav-buttons">' +
    '<md-button ng-click="score.redo()" ng-if="score.quizConfig.settings.redoButton">' +
    '{{score.quizConfig.labels.redoText}}' +
    '</md-button>' +
    '</div>' +

    '</div>';

window.quickquizTemplates.quizquestion =
    '<!-- Main page title-->' +
    '<div ng-if="main.quizQuestions.pages[main.currentPage-1].title && !main.mainTitle">' +
    '<md-toolbar layout-padding ng-if="main.quizConfig.settings.titleToolbar">' +
    '<h1 class="md-display-1">{{main.quizQuestions.pages[main.currentPage-1].title}}</h1>' +
    '</md-toolbar>' +
    '<h1 ng-if="!main.quizConfig.settings.titleToolbar" class="md-display-1 main-title without-toolbar">{{main.quizQuestions.pages[main.currentPage-1].title}}</h1>' +
    '</div>' +

    '<div class="page" layout-padding>' +
    '<!-- Secondary page title-->' +
    '<h2 ng-if="main.quizQuestions.pages[main.currentPage-1].title && main.mainTitle" class="md-headline">' +
    '{{main.quizQuestions.pages[main.currentPage-1].title}}</h2>' +

    '<!-- Page description -->' +
    '<div class="description" ng-if="main.quizQuestions.pages[main.currentPage-1].description" ng-bind-html="main.quizQuestions.pages[main.currentPage-1].description"></div>' +

    '<!-- Video -->' +
    '<div ng-class="[\'videogular-container\', {\'audio\': main.audioClass.audio, \'video\': !main.audioClass.audio}]"' +
    'ng-if="main.quizQuestions.pages[main.currentPage-1].media || main.quizQuestions.pages[main.currentPage-1].youtube">' +
    '<videogular vg-player-ready="main.onPlayerReady($API)" vg-cue-points="main.cuePoints"' +
    'ng-class="[{\'hide-controls\': main.hideVideoControls, \'audio\': main.audioClass.audio}]">' +

    '<vg-media ng-if="!main.quizQuestions.pages[main.currentPage-1].youtube" vg-src="main.quizQuestions.pages[main.currentPage-1].mediaConfig.source"></vg-media>' +
    '<vg-media ng-if="main.quizQuestions.pages[main.currentPage-1].youtube" vg-src="main.quizQuestions.pages[main.currentPage-1].mediaConfig.source" vg-youtube="rel=1;showinfo=1"></vg-media>' +

    '<vg-controls vg-autohide="false" vg-autohide-time="3000" ng-if="main.audioClass.audio || (!main.audioClass.audio && !main.hideVideoControls && (main.API.currentState === \'play\' || main.API.currentState === \'pause\')) ">' +
    '<vg-play-pause-button></vg-play-pause-button>' +
    '<vg-scrub-bar>' +
    '<vg-scrub-bar-current-time></vg-scrub-bar-current-time>' +
    '<vg-scrub-bar-cue-points vg-cue-points="main.quizQuestions.pages[main.currentPage-1].mediaConfig.cuePoints.questions"></vg-scrub-bar-cue-points>' +
    '</vg-scrub-bar>' +
    '<vg-time-display>{{ currentTime | date:\'mm:ss\':\'+0000\'}}</vg-time-display>' +

    '<vg-volume>' +
    '<vg-volume-bar></vg-volume-bar>' +
    '<vg-mute-button></vg-mute-button>' +
    '</vg-volume>' +
    '</vg-controls>' +

    '<vg-overlay-play ng-if="!main.audioClass.audio && !main.quizQuestions.pages[main.currentPage-1].youtube" ng-class="main.audioClass"></vg-overlay-play>' +
    '<vg-buffering></vg-buffering>' +
    '</videogular>' +
    '</div>' +

    '<!-- Questions on the current page -->' +
    '<div ng-repeat="question in main.quizQuestions.pages[main.currentPage-1].questions" class="question" ng-if="main.checkCuepoint(question)">' +

    '<!-- Questions statement and points-->' +
    '<div layout="row" layout-align="space-between start" class="question-statement-line">' +
    '<!-- Question statement -->' +
    '<h3><span ng-if="main.quizConfig.settings.showQuestionNumber">{{question.id +1}}.</span>' +
    ' <span ng-bind-html="question.statement"></span>' +
    '<span ng-if="main.quizConfig.settings.requiredAsterisk && (main.quizConfig.settings.requiredQuestions || question.required)">*</span></h3>' +
    '<!-- Question points -->' +
    '<div class="pointsPerQuestion md-caption" ng-if="main.quizConfig.settings.showPointsPerQuestion && main.checkCuepoint(question) && question.graded">' +
    '<span ng-if="question.points">{{question.points}}</span>' +
    '<span ng-if="!question.points && main.quizConfig.score.pointsPerQuestion">{{main.quizConfig.score.pointsPerQuestion}}</span>' +
    '<span ng-if="!question.points && main.quizConfig.score.maxPoints && question.type != \'matrix\'">{{(main.quizConfig.score.maxPoints/main.numQuestionsGraded).toFixed(main.quizConfig.score.decimalNumber) | number}}</span>' +
    '<span ng-if="!question.points && main.quizConfig.score.maxPoints && question.type === \'matrix\'">{{(main.quizConfig.score.maxPoints/main.numQuestionsGraded * question.rows.length).toFixed(main.quizConfig.score.decimalNumber) | number}}</span>' +

    ' {{main.quizConfig.labels.pointsPerQuestionText}}' +
    '</div>' +
    '</div>' +

    '<!-- Question required alert -->' +
    '<div class="alert" ng-if="main.showGlobalAlert() && main.showQuestionAlert(question) && main.quizConfig.settings.showQuestionAlert ">' +
    '{{main.quizConfig.labels.requiredQuestionAlert}}</div>' +

    '<!-- Question description -->' +
    '<div class="description" ng-if="question.description" ng-bind-html="question.description"></div>' +

    '<!-- Question answer container -->' +
    '<div layout="row" class="answer-container" layout-padding layout-wrap ng-style="{\'background-image\': \'url(\'+question.bgImg+\')\', \'min-height\':question.minHeight + \'px\'}">' +

    '<!-- Aside Image Left-->' +
    '<div class="aside-image" layout-padding ng-if="question.asideImage && question.imagePosition===\'left\'" flex-gt-sm="50" flex-sm="100" ng-class="[\'aside-image\', {\'hide-image-mobile\': question.hideImageMobile}]">' +
    '<img ng-click="main.showImage(question.asideImage)" ng-src="{{question.asideImage}}"/>' +
    '</div>' +

    '<!-- Questions -->' +
    '<single-answer quiz-main="main" question-id="question.id" class="single-answer" flex ng-if=\'main.quizQuestions.pages[main.currentPage-1].questions[this.$index].type === "single-answer" && main.checkCuepoint(question)\'></single-answer>' +

    '<multiple-answers quiz-main="main" question-id="question.id" class="multiple-answers" flex ng-if=\'main.quizQuestions.pages[main.currentPage-1].questions[this.$index].type === "multiple-answers" && main.checkCuepoint(question)\'></multiple-answers>' +

    '<short-answer quiz-main="main" question-id="question.id" class="short-answer" flex ng-if=\'main.quizQuestions.pages[main.currentPage-1].questions[this.$index].type === "short-answer" && main.checkCuepoint(question)\'></short-answer>' +

    '<sequence quiz-main="main" question-id="question.id" class="sequence" flex ng-if=\'main.quizQuestions.pages[main.currentPage-1].questions[this.$index].type === "sequence" && main.checkCuepoint(question)\'></sequence>' +

    '<matching-pairs quiz-main="main" question-id="question.id" class="matching-pairs" flex ng-if=\'main.quizQuestions.pages[main.currentPage-1].questions[this.$index].type === "matching-pairs" && main.checkCuepoint(question)\'></matching-pairs>' +

    '<long-answer quiz-main="main" question-id="question.id" class="long-answer" flex ng-if=\'main.quizQuestions.pages[main.currentPage-1].questions[this.$index].type === "long-answer" && main.checkCuepoint(question)\'></long-answer>' +

    '<likert-scale quiz-main="main" question-id="question.id" class="likert-scale" flex ng-if=\'main.quizQuestions.pages[main.currentPage-1].questions[this.$index].type === "likert-scale" && main.checkCuepoint(question)\'></likert-scale>' +

    '<rating quiz-main="main" question-id="question.id" class="rating" flex ng-if=\'main.quizQuestions.pages[main.currentPage-1].questions[this.$index].type === "rating" && main.checkCuepoint(question)\'></rating>' +

    '<matrix quiz-main="main" question-id="question.id" class="matrix" flex ng-if=\'main.quizQuestions.pages[main.currentPage-1].questions[this.$index].type === "matrix" && main.checkCuepoint(question)\'></matrix>' +

    '<!-- Aside Image Right-->' +
    '<div layout-padding class="aside-image" ng-if="question.asideImage && question.imagePosition===\'right\'" flex-gt-sm="50" flex-sm="0" ng-class="[\'aside-image\', {\'hide-image-mobile\': question.hideImageMobile}]">' +
    '<img ng-click="main.showImage(question.asideImage)" ng-src="{{question.asideImage}}"/>' +
    '</div>' +
    '</div>' +

    '<!-- Question feedback -->' +
    '<div class="feedback" ng-if="question.feedback != undefined && question.answerState != \'blank\' && ((question.type != \'sequence\' && question.type != \'matching-pairs\' && question.type != \'matrix\') || question.complete === true)">' +

    '<div class="feedback-right" ng-if="question.feedback.right != undefined && question.answerState === \'right\'">' +
    '<md-button class="md-primary" ng-if="question.feedbackClass===\'button\'" ng-click="main.showFeedback(question.feedback.right)">' +
    '{{main.quizConfig.labels.showFeedback}}' +
    '</md-button>' +
    '<div layout="row" layout-align="center center">' +
    '<p ng-if="question.feedbackClass===\'text\'" class="p-feedback-right"><span class=\'icon-right\'></span>{{question.feedback.right}}</p>' +
    '</div>' +
    '</div>' +

    '<div class="feedback-wrong" ng-if="question.feedback.wrong != undefined && question.answerState === \'wrong\'">' +
    '<md-button class="md-primary" ng-if="question.feedbackClass===\'button\'" ng-click="main.showFeedback(question.feedback.wrong)">' +
    '{{main.quizConfig.labels.showFeedback}}' +
    '</md-button>' +
    '<div layout="row" layout-align="center center">' +
    '<p ng-if="question.feedbackClass===\'text\'" class="p-feedback-wrong"><span class=\'icon-wrong\'></span>{{question.feedback.wrong}}</p></div>' +
    '</div>' +

    '<div class="feedback-option" ng-if="question.feedback.option != undefined && question.feedback.option[question.answer]!= null">' +
    '<md-button class="md-primary" ng-if="question.feedbackClass===\'button\'" ng-click="main.showFeedback(question.feedback.option[question.answer])">' +
    '{{main.quizConfig.labels.showFeedback}}' +
    '</md-button>' +
    '<div layout="row" layout-align="center center">' +
    '<p ng-if="question.feedbackClass===\'text\'" class="p-feedback">' +
    '{{question.feedback.option[question.answer]}}</p></div>' +
    '</div>' +

    '<div class="feedback-partial-right" ng-if="question.feedback.partial != undefined && question.answerState === \'right\'">' +
    '<div ng-if="question.feedback.partial.allRight != undefined ">' +
    '<md-button ng-if="question.feedbackClass===\'button\'" class="md-primary" ng-click="main.showFeedback(question.feedback.partial.allRight)">' +
    '{{main.quizConfig.labels.showFeedback}}' +
    '</md-button>' +
    '<div layout="row" layout-align="center center">' +
    '<p ng-if="question.feedbackClass===\'text\'" class="p-feedback">' +
    '{{question.feedback.partial.allRight}}</p></div>' +
    '</div>' +
    '</div>' +

    '<div class="feedback-partial-wrong" ng-if="question.feedback.partial != undefined && !question.someRight && question.someWrong">' +
    '<div ng-if="question.feedback.partial.allWrong != undefined">' +
    '<md-button ng-if="question.feedbackClass===\'button\'" class="md-primary" ng-click="main.showFeedback(question.feedback.partial.allWrong)">' +
    '{{main.quizConfig.labels.showFeedback}}' +
    '</md-button>' +
    '<div layout="row" layout-align="center center">' +
    '<p ng-if="question.feedbackClass===\'text\'" class="p-feedback">' +
    '{{question.feedback.partial.allWrong}}</p></div>' +
    '</div>' +
    '</div>' +

    '<div class="feedback-partial" ng-f="question.feedback.partial != undefined && question.someRight && question.someWrong">' +
    '<div ng-if="question.feedback.partial.wrongRight != undefined">' +
    '<md-button ng-if="question.feedbackClass===\'button\'" class="md-primary" ng-click="main.showFeedback(question.feedback.partial.wrongRight)">' +
    '{{main.quizConfig.labels.showFeedback}}' +
    '</md-button>' +
    '<div layout="row" layout-align="center center">' +
    '<p ng-if="question.feedbackClass===\'text\'" class="p-feedback">' +
    '{{question.feedback.partial.wrongRight}}</p></div>' +
    '</div>' +
    '</div>' +

    '<div class="feedback-partial" ng-if="question.feedback.partial != undefined && question.someRight && !question.someWrong">' +
    '<div ng-if="question.feedback.partial.someRight != undefined">' +
    '<md-button ng-if="question.feedbackClass===\'button\'" class="md-primary" ng-click="main.showFeedback(question.feedback.partial.someRight)">' +
    '{{main.quizConfig.labels.showFeedback}}' +
    '</md-button>' +
    '<div layout="row" layout-align="center center">' +
    '<p ng-if="question.feedbackClass===\'text\'" class="p-feedback">' +
    '{{question.feedback.partial.someRight}}</p></div>' +
    '</div>' +
    '</div>' +

    '<div class="feedback-basic" ng-if="question.feedback.basic != undefined">' +
    '<md-button ng-if="question.feedbackClass===\'button\'" class="md-primary" ng-click="main.showFeedback(question.feedback.basic)">' +
    '{{main.quizConfig.labels.showFeedback}}' +
    '</md-button>' +
    '<div layout="row" layout-align="center center">' +
    '<p ng-if="question.feedbackClass===\'text\'" class="p-feedback">{{question.feedback.basic}}</p></div>' +
    '</div>' +

    '</div>' +
    '</div>' +
    '</div>';

window.quickquizTemplates.likertscale =
    '<!-- likert scale top text-->' +
    '<div layout="row" layout-align="space-between center" class="scale-text md-caption" ng-class="{\'halfWidth\': ctrl.quizMain.questionsData[ctrl.questionId].halfWidth}">' +
    '<div ng-if="ctrl.quizMain.questionsData[ctrl.questionId].scaleTextLeft" ng-bind-html="ctrl.quizMain.questionsData[ctrl.questionId].scaleTextLeft">' +
    '</div>' +
    '<div ng-if="ctrl.quizMain.questionsData[ctrl.questionId].scaleTextCenter" ng-bind-html="ctrl.quizMain.questionsData[ctrl.questionId].scaleTextCenter">' +
    '</div>' +
    '<div ng-if="ctrl.quizMain.questionsData[ctrl.questionId].scaleTextRight" ng-bind-html="ctrl.quizMain.questionsData[ctrl.questionId].scaleTextRight">' +
    '</div>' +
    '</div>' +

    '<!-- slider -->' +
    '<div layout class="layout-answers" ng-class="{\'halfWidth\': ctrl.quizMain.questionsData[ctrl.questionId].halfWidth}" ng-if="ctrl.quizMain.questionsData[ctrl.questionId].scaleType===\'slider\'">' +
    '<md-slider flex class="md-primary" ng-attr-md-discrete="{{ctrl.quizMain.questionsData[ctrl.questionId].showNumberSteps}}"' +
    'ng-model="ctrl.quizMain.questionsData[ctrl.questionId].answer"' +
    'ng-change="ctrl.change()"' +
    'step="1"' +
    'min="{{ctrl.quizMain.questionsData[ctrl.questionId].minValue}}"' +
    'max="{{ctrl.quizMain.questionsData[ctrl.questionId].maxValue}}"' +
    'aria-label="scale">' +
    '</md-slider>' +
    '</div>' +

    '<!-- buttons -->' +
    '<div layout="row" layout-wrap class="layout-answers" ng-class="{\'halfWidth\': ctrl.quizMain.questionsData[ctrl.questionId].halfWidth}" ng-if="ctrl.quizMain.questionsData[ctrl.questionId].scaleType===\'button\'">' +

    '<div flex ng-repeat="choice in ctrl.quizMain.questionsData[ctrl.questionId].choices" ng-class="{\'item-separation\': ctrl.quizMain.questionsData[ctrl.questionId].itemSeparation}">' +

    '<md-button ng-click="ctrl.setAnswers(ctrl.quizMain.questionsData[ctrl.questionId],this.$index)" ' +
    'ng-class="[\'md-raised\',' +
    '{\'md-primary\': $index == ctrl.quizMain.questionsData[ctrl.questionId].answer,' +
    '\'textLeft\': ctrl.quizMain.questionsData[ctrl.questionId].textLeft,' +
    '\'no-border\': ctrl.quizMain.questionsData[ctrl.questionId].noBorder,' +
    '\'semitransparent\': ctrl.quizMain.questionsData[ctrl.questionId].semitransparent}]"' +
    'aria-label="{{choice}}">' +
    '<span ng-if="!ctrl.quizMain.questionsData[ctrl.questionId].images">{{choice}}</span>' +
    '<img ng-if="ctrl.quizMain.questionsData[ctrl.questionId].images" ng-src="{{choice}}"/>' +
    '</md-button>' +
    '</div>' +

    '</div>';

window.quickquizTemplates.longanswer =
    '<!-- Question textarea -->' +
    '<div layout="row" layout-wrap flex class="layout-answers" ng-class="{\'halfWidth\': ctrl.quizMain.questionsData[ctrl.questionId].halfWidth}">' +
    '<md-input-container ng-class="{\'halfWidth\': ctrl.quizMain.questionsData[ctrl.questionId].choicesLeft}" md-no-float flex="grow">' +
    '<textarea name="long-answer-input" class=\'answer-choices\'' +
    'ng-model="ctrl.quizMain.questionsData[ctrl.questionId].answer"' +
    'ng-change="ctrl.change()"' +
    'placeholder="{{ctrl.quizMain.questionsData[ctrl.questionId].placeholder}}"' +
    'aria-label="{{ctrl.quizMain.questionsData[ctrl.questionId].placeholder}}"' +
    'ng-attr-md-maxlength="{{ctrl.quizMain.questionsData[ctrl.questionId].maxlength}}">' +
    '</textarea>' +
    '</md-input-container>' +
    '</div>';

window.quickquizTemplates.matchingpairs =
    '<!-- select -->' +
    '<div class="layout-answers" ng-if="ctrl.quizMain.questionsData[ctrl.questionId].choicesType===\'select\'" ng-class="{\'halfWidth\': ctrl.quizMain.questionsData[ctrl.questionId].halfWidth}">' +

    '<div ng-repeat="choiceRightID in ctrl.quizMain.questionsData[ctrl.questionId].choicesRightID" layout="row">' +

    '<div flex class="type-select matching-fixed"><span ng-bind-html="ctrl.quizMain.questionsData[ctrl.questionId].choicesLeft[this.$index]"></span></div>' +

    '<md-select flex ng-model="ctrl.quizMain.questionsData[ctrl.questionId].selectModel[this.$index]"' +
    'ng-change="ctrl.setSelectAnswer(choiceRightID)"' +
    'class="type-select matching-choices"' +
    'aria-label="{{ctrl.quizMain.questionsData[ctrl.questionId].choicesRight[choiceRightID]}}"' +
    'placeholder="{{ctrl.quizMain.questionsData[ctrl.questionId].placeholder}}">' +

    '<md-option ng-repeat="choiceRightID in ctrl.quizMain.questionsData[ctrl.questionId].choicesRightID" value="{{choiceRightID}}">' +
    '<span ng-bind-html="ctrl.quizMain.questionsData[ctrl.questionId].choicesRight[choiceRightID]"></span>' +
    '</md-option>' +

    '</md-select>' +
    '</div>' +
    '</div>' +

    '<!-- buttons -->' +

    '<div layout="row" layout-wrap class="layout-answers" ng-class="{\'halfWidth\': ctrl.quizMain.questionsData[ctrl.questionId].halfWidth}" ng-if="ctrl.quizMain.questionsData[ctrl.questionId].choicesType===\'button\'">' +

    '<!-- Left options -->' +
    '<ul flex>' +
    '<li ng-repeat="choice in ctrl.quizMain.questionsData[ctrl.questionId].choicesLeft" ng-class="{\'item-separation\': ctrl.quizMain.questionsData[ctrl.questionId].itemSeparation}">' +
    '<md-button ng-click="ctrl.setMatchingLeft(this.$index)"' +
    'ng-style="{\'border-color\': ctrl.quizMain.questionsData[ctrl.questionId].borderColorsLeft[this.$index]}"' +
    'ng-class="[\'md-raised\', \'matching-fixed\',' +
    '{\'md-primary\': $index == ctrl.quizMain.questionsData[ctrl.questionId].left,' +
    '\'textLeft\': ctrl.quizMain.questionsData[ctrl.questionId].textLeft,' +
    '\'no-border\': ctrl.quizMain.questionsData[ctrl.questionId].noBorder,' +
    '\'semitransparent\': ctrl.quizMain.questionsData[ctrl.questionId].semitransparent,' +
    '\'selected\': ctrl.quizMain.questionsData[ctrl.questionId].answer[$index] != undefined,' +
    '\'border-color\': ctrl.quizMain.questionsData[ctrl.questionId].borderColor}]"' +
    'aria-label="{{choice}}">' +
    '<span ng-if="!ctrl.quizMain.questionsData[ctrl.questionId].imagesLeft" ng-bind-html="choice"></span>' +
    '<img ng-if="ctrl.quizMain.questionsData[ctrl.questionId].imagesLeft" ng-src="{{choice}}"/>' +
    '</md-button>' +
    '</li>' +
    '</ul>' +

    '<!-- Right options -->' +
    '<ul flex>' +
    '<li ng-repeat="choiceRightID in ctrl.quizMain.questionsData[ctrl.questionId].choicesRightID" ng-class="{\'item-separation\': ctrl.quizMain.questionsData[ctrl.questionId].itemSeparation}">' +
    '<md-button ng-click="ctrl.setMatchingRight(choiceRightID)"' +
    'ng-style="{\'border-color\': ctrl.quizMain.questionsData[ctrl.questionId].borderColorsRight[choiceRightID]}"' +
    'ng-class="[\'md-raised\', \'matching-fixed\',' +
    '{\'md-primary\': choiceRightID == ctrl.quizMain.questionsData[ctrl.questionId].right,' +
    '\'textLeft\': ctrl.quizMain.questionsData[ctrl.questionId].textLeft,' +
    '\'no-border\': ctrl.quizMain.questionsData[ctrl.questionId].noBorder,' +
    '\'semitransparent\': ctrl.quizMain.questionsData[ctrl.questionId].semitransparent,' +
    '\'selected\': ctrl.quizMain.questionsData[ctrl.questionId].answer.indexOf(\'{{ctrl.quizMain.questionsData[ctrl.questionId].choicesRight[choiceRightID]}}\') > -1,' +
    '\'border-color\': ctrl.quizMain.questionsData[ctrl.questionId].borderColor}]"' +
    'aria-label="{{choice}}">' +
    '<span ng-if="!ctrl.quizMain.questionsData[ctrl.questionId].imagesRight" ng-bind-html="ctrl.quizMain.questionsData[ctrl.questionId].choicesRight[choiceRightID]"></span>' +
    '<img ng-if="ctrl.quizMain.questionsData[ctrl.questionId].imagesRight" ng-src="{{ctrl.quizMain.questionsData[ctrl.questionId].choicesRight[choiceRightID]}}"/>' +
    '</md-button>' +
    '</li>' +
    '</ul>' +
    '</div>';

window.quickquizTemplates.matrix =
    '<table ng-class="[\'matrix\', {\'semitransparent\': ctrl.quizMain.questionsData[ctrl.questionId].semitransparent}]">' +
    '<tr>' +
    '<th ng-if="ctrl.quizMain.questionsData[ctrl.questionId].choicesType === \'radio\' || ctrl.quizMain.questionsData[ctrl.questionId].header"></th>' +
    '<th ng-if="ctrl.quizMain.questionsData[ctrl.questionId].choicesType === \'radio\'" ng-repeat="choice in ctrl.quizMain.questionsData[ctrl.questionId].choices"' +
    'ng-bind-html="choice">' +
    '</th>' +
    '<th ng-if="ctrl.quizMain.questionsData[ctrl.questionId].choicesType === \'rating\' && ctrl.quizMain.questionsData[ctrl.questionId].header"' +
    'ng-bind-html="ctrl.quizMain.questionsData[ctrl.questionId].header">' +
    '</th>' +
    '</tr>' +

    '<tr ng-repeat="rowID in ctrl.quizMain.questionsData[ctrl.questionId].rowsID">' +
    '<!-- row statement -->' +
    '<td ng-bind-html="ctrl.quizMain.questionsData[ctrl.questionId].rows[rowID]"></td>' +

    '<!-- row radio buttons -->' +
    '<td ng-if="ctrl.quizMain.questionsData[ctrl.questionId].choicesType === \'radio\'" ng-repeat="choice in ctrl.quizMain.questionsData[ctrl.questionId].choices" class="radio">' +
    '<md-radio-group ng-model="ctrl.quizMain.questionsData[ctrl.questionId].answer[rowID]" ng-change="ctrl.change(rowID)">' +

    '<md-radio-button value="{{this.$index}}" class="md-primary" aria-label="{{ctrl.quizMain.questionsData[ctrl.questionId].rows[rowID]}}">' +
    '</md-radio-button>' +
    '</td>' +

    '<!-- row rating -->' +
    '<td  ng-if="ctrl.quizMain.questionsData[ctrl.questionId].choicesType === \'rating\'">' +
    '<span layout="row">' +
    '<md-button ng-repeat="choice in ctrl.quizMain.questionsData[ctrl.questionId].choices" class="rating"' +
    'flex-order="{{choice}}"' +
    'ng-click="ctrl.changeRating(rowID, this.$index)"' +
    'ng-class="[\'md-icon-button\', \'icon\',' +
    '{\'md-primary\': $index >= ctrl.quizMain.questionsData[ctrl.questionId].answer[rowID]}]"' +
    'aria-label="{{choice}}">' +


    '<md-icon ng-if="ctrl.quizMain.questionsData[ctrl.questionId].icon === \'star\'" md-svg-icon="css/icons/grade.svg"></md-icon>' +
    '<md-icon ng-if="ctrl.quizMain.questionsData[ctrl.questionId].icon === \'heart\'" md-svg-icon="css/icons/favorite.svg"></md-icon>' +
    '<md-icon ng-if="ctrl.quizMain.questionsData[ctrl.questionId].icon === \'thumb-up\'" md-svg-icon="css/icons/thumb_up.svg"></md-icon>' +

    '</md-button>' +
    '</span>' +
    '</td>' +
    '</tr>' +
    '</table>';

window.quickquizTemplates.multipleanswers =
    '<!-- buttons -->' +
    '<div layout="row" layout-wrap class="layout-answers" ng-class="{\'halfWidth\': ctrl.quizMain.questionsData[ctrl.questionId].halfWidth}" ng-if="ctrl.quizMain.questionsData[ctrl.questionId].choicesType===\'button\'">' +

    '<div ng-repeat="choiceID in ctrl.quizMain.questionsData[ctrl.questionId].choicesID"' +
    'flex="{{ctrl.quizMain.questionsData[ctrl.questionId].itemsWidth}}"' +
    'flex-sm="{{ctrl.quizMain.questionsData[ctrl.questionId].mobileWidth}}"' +
    'ng-class="{\'item-separation\': ctrl.quizMain.questionsData[ctrl.questionId].itemSeparation}">' +

    '<md-button ng-click="ctrl.setAnswers(choiceID)" ng-class="[\'md-raised\',' +
    '{\'md-primary\': ctrl.quizMain.questionsData[ctrl.questionId].answer.indexOf(choiceID)>-1,' +
    '\'textLeft\': ctrl.quizMain.questionsData[ctrl.questionId].textLeft,' +
    '\'no-border\': ctrl.quizMain.questionsData[ctrl.questionId].noBorder,' +
    '\'semitransparent\': ctrl.quizMain.questionsData[ctrl.questionId].semitransparent}]"' +
    'aria-label="{{ctrl.quizMain.questionsData[ctrl.questionId].choices[choiceID]}}">' +
    '<span ng-if="!ctrl.quizMain.questionsData[ctrl.questionId].images" ng-bind-html="ctrl.quizMain.questionsData[ctrl.questionId].choices[choiceID]"></span>' +
    '<img ng-if="ctrl.quizMain.questionsData[ctrl.questionId].images" ng-src="{{ctrl.quizMain.questionsData[ctrl.questionId].choices[choiceID]}}"/>' +

    '</md-button>' +
    '</div>' +
    '</div>' +

    '<!-- checkbox -->' +
    '<div layout="column" class="layout-answers" ng-if="ctrl.quizMain.questionsData[ctrl.questionId].choicesType===\'checkbox\'">' +

    '<md-checkbox ng-repeat="choiceID in ctrl.quizMain.questionsData[ctrl.questionId].choicesID"' +
    'ng-click="ctrl.setAnswers(choiceID)"' +
    'aria-label="{{ctrl.quizMain.questionsData[ctrl.questionId].choices[choiceID]}}"' +
    'class="md-primary"' +
    'ng-model="ctrl.quizMain.questionsData[ctrl.questionId].checkboxModel[this.$index]">' +
    '<span ng-if="!ctrl.quizMain.questionsData[ctrl.questionId].images" ng-bind-html="ctrl.quizMain.questionsData[ctrl.questionId].choices[choiceID]"></span>' +
    '<img ng-if="ctrl.quizMain.questionsData[ctrl.questionId].images" ng-src="{{ctrl.quizMain.questionsData[ctrl.questionId].choices[choiceID]}}"/>' +
    '</md-checkbox>' +

    '<!-- other checkbox button -->' +
    '<md-checkbox  ng-if="ctrl.quizMain.questionsData[ctrl.questionId].other"' +
    'aria-label="ctrl.quizMain.questionsData[ctrl.questionId].other.text"' +
    'class="md-primary"' +
    'ng-click="ctrl.setAnswers(ctrl.quizMain.questionsData[ctrl.questionId].choices.length)"' +
    'ng-model="ctrl.quizMain.questionsData[ctrl.questionId].checkboxModel[ctrl.quizMain.questionsData[ctrl.questionId].choices.length]">' +
    '<span ng-bind-html="ctrl.quizMain.questionsData[ctrl.questionId].other.text"></span>' +
    '</md-checkbox>' +

    '<!-- other input field -->' +
    '<md-input-container md-no-float ng-if="ctrl.quizMain.questionsData[ctrl.questionId].answer.indexOf(ctrl.quizMain.questionsData[ctrl.questionId].choices.length)>-1"' +
    'ng-class="[\'other-multiple\',' +
    '{\'other-bottom\': ctrl.quizMain.questionsData[ctrl.questionId].other.position === \'bottom\',' +
    '\'other-right\': ctrl.quizMain.questionsData[ctrl.questionId].other.position === \'right\'}]">' +
    '<input type="text" name="other" ng-model="ctrl.quizMain.questionsData[ctrl.questionId].other.answer" ng-change="ctrl.change()"' +
    'placeholder="{{ctrl.quizMain.questionsData[ctrl.questionId].other.placeholder}}">' +
    '</md-input-container>' +
    '</div>';

window.quickquizTemplates.rating =
    '<div layout="row" layout-wrap  class="layout-answers">' +

    '<md-button ng-repeat="choice in ctrl.quizMain.questionsData[ctrl.questionId].choices" class="rating"' +
    'flex-order="{{choice}}"' +
    'ng-click="ctrl.setAnswers(ctrl.quizMain.questionsData[ctrl.questionId],this.$index)"' +
    'ng-class="[\'md-icon-button\', \'icon\',' +
    '{\'md-primary\': $index >= ctrl.quizMain.questionsData[ctrl.questionId].answer}]"' +
    'aria-label="{{choice}}">' +

    '<md-icon ng-if="ctrl.quizMain.questionsData[ctrl.questionId].icon === \'star\'"' +
    'md-svg-icon="css/icons/grade.svg"></md-icon>' +
    '<md-icon ng-if="ctrl.quizMain.questionsData[ctrl.questionId].icon === \'heart\'"' +
    'md-svg-icon="css/icons/favorite.svg"></md-icon>' +
    '<md-icon ng-if="ctrl.quizMain.questionsData[ctrl.questionId].icon === \'thumb-up\'"' +
    'md-svg-icon="css/icons/thumb_up.svg"></md-icon>' +

    '</md-button>' +
    '</div>';

window.quickquizTemplates.sequence =
    '<!-- select -->' +
    '<div class="layout-answers" ng-if="ctrl.quizMain.questionsData[ctrl.questionId].choicesType===\'select\'" ng-class="{\'halfWidth\': ctrl.quizMain.questionsData[ctrl.questionId].halfWidth}">' +

    '<div ng-repeat="choiceID in ctrl.quizMain.questionsData[ctrl.questionId].choicesID" layout="row">' +

    '<div class="type-select matching-fixed"><span>{{this.$index +1}}</span></div>' +

    '<md-select flex ng-model="ctrl.quizMain.questionsData[ctrl.questionId].selectModel[this.$index]"' +
    'ng-change="ctrl.setSelectAnswer(choiceID)"' +
    'class="type-select"' +
    'aria-label="{{choiceID}}"' +
    'placeholder="{{ctrl.quizMain.questionsData[ctrl.questionId].placeholder}}">' +

    '<md-option ng-repeat="choiceID in ctrl.quizMain.questionsData[ctrl.questionId].choicesID" value="{{choiceID}}">' +
    '<span ng-if="!ctrl.quizMain.questionsData[ctrl.questionId].images" ng-bind-html="ctrl.quizMain.questionsData[ctrl.questionId].choices[choiceID]"></span>' +
    '<img ng-if="ctrl.quizMain.questionsData[ctrl.questionId].images" ng-src="{{ctrl.quizMain.questionsData[ctrl.questionId].choices[choiceID]}}"/>' +
    '</md-option>' +

    '</md-select>' +
    '</div>' +
    '</div>';

window.quickquizTemplates.shortanswer =
    '<!-- Question input text -->' +
    '<div layout="row" layout-wrap class="layout-answers"' +
    'ng-class="{\'halfWidth\': ctrl.quizMain.questionsData[ctrl.questionId].halfWidth}">' +
    '<md-input-container ng-class="{\'halfWidth\': ctrl.quizMain.questionsData[ctrl.questionId].choicesLeft}" md-no-float flex="grow">' +
    '<input class=\'answer-choices\' type="text" name="short-answer-input"' +
    'ng-model="ctrl.quizMain.questionsData[ctrl.questionId].answer"' +
    'ng-change="ctrl.change()"' +
    'placeholder="{{ctrl.quizMain.questionsData[ctrl.questionId].placeholder}}"' +
    'aria-label="{{ctrl.quizMain.questionsData[ctrl.questionId].placeholder}}">' +
    '</md-input-container>' +
    '</div>';

window.quickquizTemplates.singleanswer =
    '<!-- buttons -->' +
    '<div layout="row" layout-wrap  class="layout-answers" ng-class="{\'halfWidth\': ctrl.quizMain.questionsData[ctrl.questionId].halfWidth}" ng-if="ctrl.quizMain.questionsData[ctrl.questionId].choicesType===\'button\'">' +

    '<div ng-repeat="choiceID in ctrl.quizMain.questionsData[ctrl.questionId].choicesID"' +
    'flex="{{ctrl.quizMain.questionsData[ctrl.questionId].itemsWidth}}"' +
    'flex-sm="{{ctrl.quizMain.questionsData[ctrl.questionId].mobileWidth}}"' +
    'ng-class="{\'item-separation\': ctrl.quizMain.questionsData[ctrl.questionId].itemSeparation}">' +

    '<md-button ng-click="ctrl.setAnswers(choiceID)"' +
    'ng-class="[\'md-raised\',' +
    '{\'md-primary\': choiceID == ctrl.quizMain.questionsData[ctrl.questionId].answer,' +
    '\'textLeft\': ctrl.quizMain.questionsData[ctrl.questionId].textLeft,' +
    '\'no-border\': ctrl.quizMain.questionsData[ctrl.questionId].noBorder,' +
    '\'semitransparent\': ctrl.quizMain.questionsData[ctrl.questionId].semitransparent}]"' +
    'aria-label="{{ctrl.quizMain.questionsData[ctrl.questionId].choices[choiceID]}}">' +
    '<span ng-if="!ctrl.quizMain.questionsData[ctrl.questionId].images" ng-bind-html="ctrl.quizMain.questionsData[ctrl.questionId].choices[choiceID]"></span>' +
    '<img ng-if="ctrl.quizMain.questionsData[ctrl.questionId].images" ng-src="{{ctrl.quizMain.questionsData[ctrl.questionId].choices[choiceID]}}"/>' +
    '</md-button>' +
    '</div>' +
    '</div>' +

    '<!-- radio  -->' +
    '<div layout="row" layout-wrap class="layout-answers" ng-if="ctrl.quizMain.questionsData[ctrl.questionId].choicesType===\'radio\'">' +

    '<md-radio-group ng-model="ctrl.quizMain.questionsData[ctrl.questionId].answer" ng-change="ctrl.change()">' +

    '<md-radio-button ng-repeat="choiceID in ctrl.quizMain.questionsData[ctrl.questionId].choicesID"' +
    'aria-label="{{ctrl.quizMain.questionsData[ctrl.questionId].choices[choiceID]}}"' +
    'value="{{choiceID}}" class="md-primary">' +
    '<span ng-if="!ctrl.quizMain.questionsData[ctrl.questionId].images" ng-bind-html="ctrl.quizMain.questionsData[ctrl.questionId].choices[choiceID]"></span>' +
    '<img ng-if="ctrl.quizMain.questionsData[ctrl.questionId].images" ng-src="{{ctrl.quizMain.questionsData[ctrl.questionId].choices[choiceID]}}"/>' +
    '</md-radio-button>' +

    '<!-- other radio button -->' +
    '<md-radio-button ng-if="ctrl.quizMain.questionsData[ctrl.questionId].other"' +
    'aria-label="ctrl.quizMain.questionsData[ctrl.questionId].other.text"' +
    'value="{{ctrl.quizMain.questionsData[ctrl.questionId].choices.length}}" class="md-primary">' +
    '<span ng-bind-html="ctrl.quizMain.questionsData[ctrl.questionId].other.text"></span>' +
    '</md-radio-button>' +
    '</md-radio-group>' +
    '</div>' +
    '<!-- other input field -->' +
    '<div layout="row">' +
    '<md-input-container md-no-float ng-if="ctrl.quizMain.questionsData[ctrl.questionId].answer === ctrl.quizMain.questionsData[ctrl.questionId].choices.length"' +
    'ng-class="[\'other-single\',' +
    '{\'other-bottom\': ctrl.quizMain.questionsData[ctrl.questionId].other.position === \'bottom\',' +
    '\'other-right\': ctrl.quizMain.questionsData[ctrl.questionId].other.position === \'right\'}]">' +
    '<input type="text" name="other" ng-model="ctrl.quizMain.questionsData[ctrl.questionId].other.answer" ng-change="ctrl.change()" placeholder="{{ctrl.quizMain.questionsData[ctrl.questionId].other.placeholder}}">' +
    '</md-input-container>' +
    '</div>' +

    '<!-- select  -->' +
    '<div layout="column" class="layout-answers" ng-if="ctrl.quizMain.questionsData[ctrl.questionId].choicesType===\'select\'" ng-class="{\'halfWidth\': ctrl.quizMain.questionsData[ctrl.questionId].halfWidth}">' +

    '<md-input-container md-no-float>' +
    '<md-select ng-model="ctrl.quizMain.questionsData[ctrl.questionId].answer"' +
    'ng-change="ctrl.change()"' +
    'placeholder="{{ctrl.quizMain.questionsData[ctrl.questionId].placeholder}}">' +
    '<md-option ng-repeat="choiceID in ctrl.quizMain.questionsData[ctrl.questionId].choicesID"' +
    'aria-label="{{ctrl.quizMain.questionsData[ctrl.questionId].choices[choiceID]}}"' +
    'value="{{choiceID}}" class="md-primary"' +
    '<span ng-bind-html="ctrl.quizMain.questionsData[ctrl.questionId].choices[choiceID]"></span>' +
    '</md-option>' +
    '</md-select>' +
    '</md-input-container>' +
    '</div>';