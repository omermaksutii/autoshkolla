/**
 * QuickQuiz v1.3.5
 * http://quizkquiz.ws
 * Copyright (c) 2015-present, Raquel García Cabañas
 */

angular.module("quickquiz", [
    "ngRoute",
    'ngAnimate',
    "ngSanitize",
    "ngMaterial",
    "ngMessages",
    "ngStorage",
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.buffering",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.overlayplay",
    "info.vietnamcode.nampnq.videogular.plugins.youtube"
]);


angular.module("quickquiz").config(["$routeProvider", "$mdThemingProvider", function ($routeProvider, $mdThemingProvider) {
        $mdThemingProvider.theme('default')

            /* Available palettes: red, pink, purple, deep-purple, indigo, blue, light-blue, cyan,
             teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey */

            /* for color reference, visit http://www.google.com/design/spec/style/color.html#color-color-palette */

            .primaryPalette('teal', {'default': '500'});
        /* main color (headers, buttons...) */


        $routeProvider
            .when("/home", {
                templateUrl: 'templates/home.html',
                controller: 'HomeController',
                controllerAs: 'home',
                resolve: {
                    quizConfig: ["QuizConfig", function (QuizConfig) {
                        return QuizConfig.loadConfig();
                    }],
                    quizStorage: ["QuizStorage", function (QuizStorage) {
                        return QuizStorage.loadQuizes();
                    }]
                }
            })

            .when("/score", {
                templateUrl: 'templates/score.html',
                controller: 'ScoreController',
                controllerAs: 'score',
                resolve: {
                    quizConfig: ["QuizConfig", function (QuizConfig) {
                        return QuizConfig.loadConfig();
                    }],
                    quizStorage: ["QuizStorage", function (QuizStorage) {
                        return QuizStorage.loadQuizes();
                    }]
                }
            })

            .when("/thank-you", {
                templateUrl: 'templates/thank-you.html',
                controller: 'ThanksController',
                controllerAs: 'thanks',
                resolve: {
                    quizConfig: ["QuizConfig", function (QuizConfig) {
                        return QuizConfig.loadConfig();
                    }],
                    quizStorage: ["QuizStorage", function (QuizStorage) {
                        return QuizStorage.loadQuizes();
                    }]
                }
            })

            .when("/:currentPage", {
                templateUrl: 'templates/main.html',
                controller: 'MainQuizController',
                controllerAs: 'main',
                resolve: {
                    quizConfig: ["QuizConfig", function (QuizConfig) {
                        return QuizConfig.loadConfig();
                    }],
                    quizStorage: ["QuizStorage", function (QuizStorage) {
                        return QuizStorage.loadQuizes();
                    }]
                }
            })

            .when("/:1", {
                templateUrl: 'templates/main.html',
                controller: 'MainQuizController',
                controllerAs: 'main',
                resolve: {
                    quizConfig: ["QuizConfig", function (QuizConfig) {
                        return QuizConfig.loadConfig();
                    }],
                    quizStorage: ["QuizStorage", function (QuizStorage) {
                        return QuizStorage.loadQuizes();
                    }]
                }
            })


            .otherwise("/home");
        //.otherwise("/1");
    }]
);

if (Object.prototype.hasOwnProperty.call(window, "quickquizTemplates")) {
    angular.module("quickquiz").run(["$templateCache", function ($templateCache) {
        $templateCache.put('templates/home.html', window.quickquizTemplates.home);
        $templateCache.put('templates/main.html', window.quickquizTemplates.main);
        $templateCache.put('templates/score.html', window.quickquizTemplates.score);
        $templateCache.put('templates/thank-you.html', window.quickquizTemplates.thanks);
        $templateCache.put('templates/quiz-question.html', window.quickquizTemplates.quizquestion);
        $templateCache.put('templates/question-types/likert-scale.html', window.quickquizTemplates.likertscale);
        $templateCache.put('templates/question-types/long-answer.html', window.quickquizTemplates.longanswer);
        $templateCache.put('templates/question-types/matching-pairs.html', window.quickquizTemplates.matchingpairs);
        $templateCache.put('templates/question-types/matrix.html', window.quickquizTemplates.matrix);
        $templateCache.put('templates/question-types/multiple-answers.html', window.quickquizTemplates.multipleanswers);
        $templateCache.put('templates/question-types/rating.html', window.quickquizTemplates.rating);
        $templateCache.put('templates/question-types/sequence.html', window.quickquizTemplates.sequence);
        $templateCache.put('templates/question-types/short-answer.html', window.quickquizTemplates.shortanswer);
        $templateCache.put('templates/question-types/single-answer.html', window.quickquizTemplates.singleanswer);

    }])
}
;


/* CONTROLLERS FOR EVERY PAGE TYPE */

/*HOME CONTROLLER*/
angular.module("quickquiz").controller('HomeController', ['$http', '$route', '$scope', '$location', 'QuizStorage', 'QuizConfig', 'QuizDatabase', 'SaveLocalStorage',
    function ($http, $route, $scope, $location, QuizStorage, QuizConfig, QuizDatabase, SaveLocalStorage) {

        this.quizConfig = QuizConfig.quizConfig;
        $scope.quizConfig = this.quizConfig;
        this.quizDatabase = QuizDatabase;

        $scope.go = function (path) {
            $location.path(path);
        };
    }
]);

/*MAINQUIZ CONTROLLER*/
angular.module("quickquiz").controller('MainQuizController', ['$http', '$route', '$scope', '$location', '$timeout', '$mdToast', '$mdDialog', '$window', 'QuizStorage', 'QuizConfig', 'QuizTimer', 'vgFullscreen', 'QuizDatabase', 'SaveLocalStorage',
    function ($http, $route, $scope, $location, $timeout, $mdToast, $mdDialog, $window, QuizStorage, QuizConfig, QuizTimer, vgFullscreen, QuizDatabase, SaveLocalStorage) {

        this.quizDatabase = QuizDatabase;
        this.mainTitle = QuizConfig.quizConfig.labels.mainTitle;
        this.quizConfig = QuizConfig.quizConfig;
        $scope.quizConfig = this.quizConfig;
        this.quizQuestions = QuizStorage.quizQuestions;
        this.questionsData = QuizStorage.questionsData;
        this.questionsDataCopy = QuizStorage.questionsDataCopy;
        this.numPages = QuizStorage.numPages;
        this.numQuestions = QuizStorage.numQuestions;
        this.currentPage = parseInt($route.current.params.currentPage);
        this.isEmpty = QuizStorage.isEmpty;
        this.containsArrObj = QuizStorage.containsArrObj;
        this.currentCuepointId = {};
        this.isCuepointWaiting = true;
        this.hideVideoControls = false;
        this.numQuestionsGraded = QuizStorage.numQuestionsGraded;


        this.firstNumQuestionInPage = 0;
        for (var i = 0; i < this.currentPage - 1; i++) {
            this.firstNumQuestionInPage += this.quizQuestions.pages[i].questions.length;
        }

        this.pageChanged = function () {
            document.activeElement.blur();
        };

        this.prevPage = function () {
            $location.path(this.currentPage - 1);
        };

        this.nextPage = function () {
            if (this.canContinue()) {
                $location.path(this.currentPage + 1);
                if (this.quizConfig.settings.refreshBrowser) {
                    setTimeout(
                        function () {
                            $window.location.reload();
                        },
                        1);
                }
            } else {
                this.globalAlert = true;
            }
        };

        this.checkAnswers = function () {
            if (this.canContinue()) {
                $location.path("score");
                if (this.quizConfig.settings.refreshBrowser) {
                    setTimeout(
                        function () {
                            $window.location.reload();
                        },
                        1);
                }
                QuizTimer.stopCountdown();
            } else {
                this.globalAlert = true;
            }
        };

        //if there is a form in the last page
        this.checkAnswersForm = function (formData) {
            if (formData.$valid) {
                this.checkAnswers();
            } else {
                formData.submitted = true;
            }
        };

        this.submit = function () {
            if (this.canContinue()) {
                this.quizDatabase.onSubmit();
            } else {
                this.globalAlert = true;
            }
        };

        //if there is a form in the last page
        this.submitForm = function (formData) {
            if (formData.$valid) {
                this.submit();
            } else {
                formData.submitted = true;
            }
        };

        this.globalAlert = false;
        this.continueAlert = false;
        this.showGlobalAlert = function () {
            return this.globalAlert;
        };

        this.onAnswer = function (newVal) {
            this.continueAlert = false;
        };

        $scope.$watch(
            function () {
                return QuizStorage.questionsData;
            },
            this.onAnswer.bind(this),
            true
        );

        this.showQuestionAlert = function (question) {
            this.questionAlert = false;
            if (this.quizConfig.settings.requiredQuestions || question.required) {
                if (question.answerState === "blank" || ((question.type === 'sequence' || question.type === 'matching-pairs' || question.type === 'matrix') && question.complete !== true)) {
                    this.questionAlert = true;
                }
            }
            return this.questionAlert;
        };

        this.canContinue = function () {
            this.requiredAnswered = true;
            this.globalAlert = false;
            if (this.currentPage < this.numPages) {
                for (var i = 0; i < this.quizQuestions.pages[this.currentPage - 1].questions.length; i++) {
                    if (this.quizConfig.settings.requiredQuestions || this.questionsData[this.firstNumQuestionInPage + i].required) {
                        if (this.questionsData[this.firstNumQuestionInPage + i].answerState === "blank" || ((this.questionsData[this.firstNumQuestionInPage + i].type === 'sequence' || this.questionsData[this.firstNumQuestionInPage + i].type === 'matching-pairs' || this.questionsData[this.firstNumQuestionInPage + i].type === 'matrix') && this.questionsData[this.firstNumQuestionInPage + i].complete !== true)) {
                            this.requiredAnswered = false;
                            this.globalAlert = true;
                            this.continueAlert = true;
                        }
                    }
                }
            } else {
                for (var i = 0; i < this.questionsData.length; i++) {
                    if (this.quizConfig.settings.requiredQuestions || this.questionsData[i].required) {
                        if (this.questionsData[i].answerState === "blank" || ((this.questionsData[i].type === 'sequence' || this.questionsData[i].type === 'matching-pairs' || this.questionsData[i].type === 'matrix') && this.questionsData[i].complete !== true)) {
                            this.requiredAnswered = false;
                            this.globalAlert = true;
                            this.continueAlert = true;
                        }
                    }
                }
            }
            return this.requiredAnswered;
        };

        this.showNext = function () {
            if (this.currentPage === this.numPages || (this.quizConfig.settings.requiredType != 'alert' && !this.canContinue())) {
                return false;
            } else {
                return true;
            }
        };

        this.showLast = function () {
            if (this.currentPage < this.numPages || (this.quizConfig.settings.requiredType != 'alert' && !this.canContinue())) {
                return false;
            } else {
                return true;
            }
        };

        if (this.quizConfig.settings.timerCount > 0) {
            QuizTimer.init(this.quizConfig.settings.timerCount);
        }


        this.onUpdateQuizTimer = function (newValue) {
            this.timeLeft = newValue;
        };

        $scope.$watch(
            function () {
                return QuizTimer.timeLeft;
            },
            this.onUpdateQuizTimer.bind(this)
        );

        if (this.quizQuestions.pages[this.currentPage - 1].media) {
            this.audioClass = {
                audio: (this.quizQuestions.pages[this.currentPage - 1].media[0].type.indexOf("audio") >= 0)
            };
        }


        this.onPlayerReady = function (API) {
            this.API = API;

            for (var i = 0; i < this.quizQuestions.pages.length; i++) {
                if (this.quizQuestions.pages[i].mediaConfig) {
                    for (var j = 0; j < this.quizQuestions.pages[i].mediaConfig.cuePoints.questions.length; j++) {
                        this.quizQuestions.pages[i].mediaConfig.cuePoints.questions[j].onUpdate = this.onCuepoint.bind(this);
                        this.quizQuestions.pages[i].mediaConfig.cuePoints.questions[j].onComplete = this.onLeaveCuepoint.bind(this);
                        this.quizQuestions.pages[i].mediaConfig.cuePoints.questions[j].onLeave = this.onLeaveCuepoint.bind(this);
                    }

                    this.cuePoints = this.quizQuestions.pages[i].mediaConfig.cuePoints;
                }
            }
        };

        this.onCuepoint = function (currentTime, timeLapse, params) {
            if (this.isCuepointWaiting) {
                this.API.pause();
            }

            this.currentCuepointId[params.id] = true;
            this.isCuepointWaiting = false;

            if (this.quizConfig.settings.requiredQuestions) {
                if (this.questionsData[params.id].answerState === "blank" || (this.questionsData[params.id].type === 'matrix' && !this.questionsData[params.id].complete)) {
                    this.hideVideoControls = true;
                }
            }
            if (this.API.currentState === "play" || !this.quizConfig.settings.requiredQuestions) {
                this.hideVideoControls = false;
            }
        };

        this.onLeaveCuepoint = function (currentTime, timeLapse, params) {
            this.isCuepointWaiting = true;
            this.currentCuepointId[params.id] = false;
        };

        this.checkCuepoint = function (question) {
            var result = true;

            if (question.cuePoint !== null && question.cuePoint !== undefined) {
                result = this.currentCuepointId[question.id];
            }

            return result;
        };

        this.showFeedback = function (feedback) {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title(this.quizConfig.labels.feedbackTitle)
                    .textContent(feedback)
                    .ariaLabel('feedback')
                    .ok(this.quizConfig.labels.feedbackOK)
            );
        };

        this.showImage = function (img) {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .htmlContent("<img src=" + img + " />")
                    .ariaLabel('image')
                    .ok(this.quizConfig.labels.closeImage)
            );
        };
    }
]);

/*SCORE CONTROLLER*/
angular.module("quickquiz").controller('ScoreController', ['$http', '$route', '$scope', '$mdDialog', '$location', '$window', 'QuizStorage', 'QuizConfig', 'QuizDatabase', 'QuizScore', 'SaveLocalStorage',
    function ($http, $route, $scope, $mdDialog, $location, $window, QuizStorage, QuizConfig, QuizDatabase, QuizScore, SaveLocalStorage) {

        this.quizConfig = QuizConfig.quizConfig;
        this.quizDatabase = QuizDatabase;
        this.quizScore = QuizScore;
        this.questionsData = QuizStorage.questionsData;
        this.messagePoints = this.quizConfig.labels.showMessagePoints;
        this.messagePercentage = this.quizConfig.labels.showMessagePercentage;
        this.messagePersonality = this.quizConfig.labels.showMessagePersonality;
        this.finalMessagePoints = "";
        this.finalMessagePercentage = "";
        this.finalMessagePersonality = "";
        this.customImagesBy = this.quizConfig.score.customImagesBy;
        this.customImagesURL = this.quizConfig.score.customImagesURL;
        this.finalImage = "";
        this.quizScore.calculateScore();

        /* MESSAGES */

        if (this.messagePoints != undefined) {
            this.messagePoints.sort(function (a, b) {
                var keyA = a.greaterThan;
                keyB = b.greaterThan;
                if (keyA < keyB) return 1;
                if (keyA > keyB) return -1;
                return 0;
            });

            for (var i = 0; i < this.messagePoints.length; i++) {
                if (this.quizScore.scorePoints >= this.messagePoints[i].greaterThan) {
                    this.finalMessagePoints = this.messagePoints[i].message;
                    break;
                }
            }
        }

        if (this.messagePercentage != undefined) {
            this.messagePercentage.sort(function (a, b) {
                var keyA = a.greaterThan;
                keyB = b.greaterThan;
                if (keyA < keyB) return 1;
                if (keyA > keyB) return -1;
                return 0;
            });

            for (var i = 0; i < this.messagePercentage.length; i++) {
                if (this.quizScore.scorePercentage >= this.messagePercentage[i].greaterThan) {
                    this.finalMessagePercentage = this.messagePercentage[i].message;
                    break;
                }
            }
        }

        if (this.messagePersonality != undefined) {
            for (var i = 0; i < this.messagePersonality.length; i++) {
                if (this.messagePersonality[i].personality === this.quizScore.winningPersonality) {
                    this.finalMessagePersonality = this.messagePersonality[i].message;
                    break;
                }
            }
        }

        /* CUSTOM IMAGES */
        if (this.customImagesURL != undefined) {
            this.customImagesURL.sort(function (a, b) {
                var keyA = a.greaterThan;
                keyB = b.greaterThan;
                if (keyA < keyB) return 1;
                if (keyA > keyB) return -1;
                return 0;
            });

            for (var i = 0; i < this.customImagesURL.length; i++) {
                if (this.customImagesBy === "points") {
                    if (this.quizScore.scorePoints >= this.customImagesURL[i].greaterThan) {
                        this.finalImage = this.customImagesURL[i].img;
                        break;
                    }
                } else if (this.customImagesBy === "percentage") {
                    if (this.quizScore.scorePercentage >= this.customImagesURL[i].greaterThan) {
                        this.finalImage = this.customImagesURL[i].img;
                        break;
                    }
                } else if (this.customImagesBy === "personality") {
                    if (this.quizScore.winningPersonality === this.customImagesURL[i].personality) {
                        this.finalImage = this.customImagesURL[i].img;
                        break;
                    }
                }
            }
        }

        this.showImage = function (img) {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .htmlContent("<img src=" + img + " />")
                    .ariaLabel('image')
                    .ok(this.quizConfig.labels.closeImage)
            );
        };

        /* SHOW ANSWERS AND SOLUTIONS */
        this.checkShowSolution = function (itemAnswerState, itemBoardSolution) {
            var result = false;
            this.itemBoardSolution = itemBoardSolution;
            this.itemAnswerState = itemAnswerState;

            if (this.quizConfig.score.showSolution && this.itemBoardSolution.length > 0) {
                if (!this.quizConfig.score.showUserAnswers || this.itemAnswerState != 'right') {
                    result = true;
                }
            }
            return result;
        };

        /* SOCIAL SHARE URL */
        if (this.quizConfig.score.hasOwnProperty("share")) {
            this.shareBy = this.quizConfig.score.share.shareBy;
            this.customShareURL = this.quizConfig.score.share.customShareURL;
            this.shareURL = "";

            if (this.customShareURL != undefined) {
                this.customShareURL.sort(function (a, b) {
                    var keyA = a.greaterThan;
                    keyB = b.greaterThan;
                    if (keyA < keyB) return 1;
                    if (keyA > keyB) return -1;
                    return 0;
                });

                for (var i = 0; i < this.customShareURL.length; i++) {
                    if (this.shareBy === "points") {
                        if (this.quizScore.scorePoints >= this.customShareURL[i].greaterThan) {
                            this.shareURL = this.customShareURL[i].url;
                            break;
                        }
                    } else if (this.shareBy === "percentage") {
                        if (this.quizScore.scorePercentage >= this.customShareURL[i].greaterThan) {
                            this.shareURL = this.customShareURL[i].url;
                            break;
                        }
                    } else if (this.shareBy === "personality") {
                        if (this.quizScore.winningPersonality === this.customShareURL[i].personality) {
                            this.shareURL = this.customShareURL[i].url;
                            break;
                        }
                    }
                }
            }
        }

        this.redo = function(){
            $location.path('');
            setTimeout(
                function(){
                    $window.location.reload();
                },
                1);
        };
    }
]);

/*THANKS CONTROLLER*/
angular.module("quickquiz").controller('ThanksController', ['$location', '$window', 'QuizConfig', function ($location, $window, QuizConfig) {
    this.quizConfig = QuizConfig.quizConfig;
    this.redo = function(){
        $location.path('');
        setTimeout(
            function () {
                $window.location.reload();
            },
            1);
    };
}]);


/********* SERVICES **********/

/*QUIZ CONFIG SERVICE*/
angular.module("quickquiz").service('QuizConfig', ["$q", "$http", "$rootScope", "$localStorage", function ($q, $http, $rootScope, $localStorage) {
    this.quizConfig = [];

    this.loadConfig = function loadConfig() {
        var deferred = $q.defer();

        if (!Object.prototype.hasOwnProperty.call(window, "quickquizData")) {

            $http.get('data/config.json').then(
                this.onLoadConfig.bind(this, deferred),
                this.onLoadConfigError.bind(this, deferred)
            );

        } else {
            this.onLoadConfig(deferred, {data: window.quickquizData.config})
        }


        return deferred.promise;
    };

    this.onLoadConfig = function (deferred, response) {
        /* JSON */
        this.quizConfig = response.data;
        $rootScope.quizConfig = this.quizConfig;

        /* LOCAL STORAGE */
        /*this.quizConfig = $localStorage.configJSON;
         $rootScope.quizConfig = $localStorage.configJSON;*/

        deferred.resolve();
    };

    this.onLoadConfigError = function (deferred) {
        deferred.reject();
    };

}]);

/*QUIZ STORAGE SERVICE*/
angular.module("quickquiz").service('QuizStorage', ["$q", "$http", "$sce", "$localStorage", function ($q, $http, $sce, $localStorage) {
    this.numPages = null;
    this.numQuestions = null;
    this.questionsData = [];
    this.questionsDataCopy = [];
    this.numQuestionsGraded = 0;
    this.formName = "";
    this.formEmail = "";

    this.loadQuizes = function loadQuizes() {
        var deferred = $q.defer();

        if (!Object.prototype.hasOwnProperty.call(window, "quickquizData")) {
            if (!this.quizQuestions) {
                this.quizQuestions = [];
                $http.get('data/questions.json').then(
                    this.onLoadQuestions.bind(this, deferred),
                    this.onLoadQuestionsError.bind(this, deferred)
                );
            }
            else {
                deferred.resolve();
            }

        } else {
            if (!this.quizQuestions) this.quizQuestions = [];

            this.onLoadQuestions(deferred, {data: window.quickquizData.questions});
        }


        return deferred.promise;
    };

    this.onLoadQuestions = function (deferred, response) {

        if (this.quizQuestions.length < 1) {
            /* JSON */
            this.quizQuestions = response.data;

            /* LOCAL STORAGE */
            /*this.quizQuestions = $localStorage.questionsJSON;*/

            this.numPages = this.quizQuestions.pages.length;
        }

        if (this.questionsData.length < 1) {
            for (var i = 0; i < this.numPages; i++) {
                if (this.quizQuestions.pages[i].media) {
                    var sources = [];

                    for (var j = 0; j < this.quizQuestions.pages[i].media.length; j++) {
                        var mediaObject = this.quizQuestions.pages[i].media[j];

                        sources.push(
                            {
                                src: $sce.trustAsResourceUrl(mediaObject.url),
                                type: mediaObject.type
                            }
                        );
                    }

                    this.quizQuestions.pages[i].mediaConfig = {
                        source: sources,
                        cuePoints: {
                            questions: []
                        }
                    };
                }

                if (this.quizQuestions.pages[i].youtube) {
                    sources = [{src: this.quizQuestions.pages[i].youtube}];

                    this.quizQuestions.pages[i].mediaConfig = {
                        source: sources,
                        cuePoints: {
                            questions: []
                        }
                    };
                }

                for (var j = 0; j < this.quizQuestions.pages[i].questions.length; j++) {
                    //this.quizQuestions.pages[i].questions[j].trustedDescription = $sce.trustAsHtml(this.quizQuestions.pages[i].questions[j].description);
                    if (this.quizQuestions.pages[i].questions[j].type === "multiple-answers") {
                        this.quizQuestions.pages[i].questions[j].answer = [];
                    }
                    else if (this.quizQuestions.pages[i].questions[j].type === "short-answer") {
                        this.quizQuestions.pages[i].questions[j].solutionToLowerCase = [];
                        if (this.quizQuestions.pages[i].questions[j].hasOwnProperty('solution')) {
                            for (var k = 0; k < this.quizQuestions.pages[i].questions[j].solution.length; k++) {
                                this.quizQuestions.pages[i].questions[j].solutionToLowerCase.push(this.quizQuestions.pages[i].questions[j].solution[k].toLowerCase());
                            }
                        }
                    } else if (this.quizQuestions.pages[i].questions[j].type === "matrix") {
                        this.quizQuestions.pages[i].questions[j].answer = [];
                    }

                    /* new choices or rows with ID for work with and without random, and colors for matching pairs */
                    if (this.quizQuestions.pages[i].questions[j].type === "single-answer" ||
                        this.quizQuestions.pages[i].questions[j].type === "multiple-answers" ||
                        this.quizQuestions.pages[i].questions[j].type === "sequence") {
                        this.quizQuestions.pages[i].questions[j].choicesID = [];
                        //this.quizQuestions.pages[i].questions[j].trustedChoicesID = [];
                        for (var p = 0; p < this.quizQuestions.pages[i].questions[j].choices.length; p++) {
                            this.quizQuestions.pages[i].questions[j].choicesID.push(p);
                            //this.quizQuestions.pages[i].questions[j].trustedChoicesID.push($sce.trustAsHtml(this.quizQuestions.pages[i].questions[j].choices[p]));
                        }
                    } else if (this.quizQuestions.pages[i].questions[j].type === "matching-pairs") {
                        this.quizQuestions.pages[i].questions[j].choicesRightID = [];
                        this.quizQuestions.pages[i].questions[j].borderColorsLeft = [];
                        this.quizQuestions.pages[i].questions[j].borderColorsRight = [];
                        this.newColor = this.rainbow(this.quizQuestions.pages[i].questions[j].choicesRight.length, Math.floor(Math.random() * this.quizQuestions.pages[i].questions[j].choicesRight.length) + 1);
                        for (var p = 0; p < this.quizQuestions.pages[i].questions[j].choicesRight.length; p++) {
                            this.quizQuestions.pages[i].questions[j].choicesRightID.push(p);
                            /* border color in matching pairs */
                            if (this.quizQuestions.pages[i].questions[j].borderColor) {
                                while (this.quizQuestions.pages[i].questions[j].borderColorsLeft.indexOf(this.newColor) > -1) {
                                    this.newColor = this.rainbow(this.quizQuestions.pages[i].questions[j].choicesRight.length, Math.floor(Math.random() * this.quizQuestions.pages[i].questions[j].choicesRight.length) + 1);
                                }
                                this.quizQuestions.pages[i].questions[j].borderColorsLeft.push(this.newColor);
                            }
                        }
                    } else if (this.quizQuestions.pages[i].questions[j].type === "matrix") {
                        this.quizQuestions.pages[i].questions[j].rowsID = [];
                        for (var p = 0; p < this.quizQuestions.pages[i].questions[j].rows.length; p++) {
                            this.quizQuestions.pages[i].questions[j].rowsID.push(p);
                        }
                    }

                    /* if choices are RANDOM */
                    if (this.quizQuestions.pages[i].questions[j].random) {
                        if (this.quizQuestions.pages[i].questions[j].type === "matrix") {
                            this.shuffleChoices(this.quizQuestions.pages[i].questions[j].rowsID);
                        } else if (this.quizQuestions.pages[i].questions[j].type != "matching-pairs") {
                            this.shuffleChoices(this.quizQuestions.pages[i].questions[j].choicesID);
                        } else {
                            this.shuffleChoices(this.quizQuestions.pages[i].questions[j].choicesRightID);
                        }
                    }


                    this.questionsData.push(this.quizQuestions.pages[i].questions[j]);
                    if (this.questionsData[this.questionsData.length - 1].type != "matrix") {
                        this.questionsData[this.questionsData.length - 1].answerState = "blank";
                    } else {
                        this.questionsData[this.questionsData.length - 1].answerState = [];
                        for (var p = 0; p < this.questionsData[this.questionsData.length - 1].rows.length; p++) {
                            this.questionsData[this.questionsData.length - 1].answerState[p] = "blank";
                        }
                    }

                    if (this.questionsData[this.questionsData.length - 1].type === "matching-pairs") {
                        this.questionsData[this.questionsData.length - 1].left = "blank";
                        this.questionsData[this.questionsData.length - 1].right = "blank";
                    }

                    /* reverse choicesWeight for rating and for matrix rating */
                    if(this.questionsData[this.questionsData.length - 1].hasOwnProperty('choicesWeight')) {
                        if (this.questionsData[this.questionsData.length - 1].type === "rating") {
                            this.questionsData[this.questionsData.length - 1].choicesWeight.reverse();
                        }
                        if (this.questionsData[this.questionsData.length - 1].type === "matrix" &&
                            this.questionsData[this.questionsData.length - 1].choicesType === "rating") {
                            for (var t = 0; t < this.questionsData[this.questionsData.length - 1].choicesWeight.length; t++) {
                                //this.questionsData[this.questionsData.length - 1].choicesWeight[t].reverse();
                            }
                        }
                    }


                    this.questionsData[this.questionsData.length - 1].id = this.questionsData.length - 1;

                    /* change (or not) buttons width in mobile devices */
                    if (this.questionsData[this.questionsData.length - 1].keepWidthMobile) {
                        this.questionsData[this.questionsData.length - 1].mobileWidth = this.questionsData[this.questionsData.length - 1].itemsWidth;
                    } else {
                        this.questionsData[this.questionsData.length - 1].mobileWidth = 100;
                    }


                    if (this.quizQuestions.pages[i].questions[j].cuePoint >= 0) {
                        var start = this.quizQuestions.pages[i].questions[j].cuePoint;
                        var end = start + 1;
                        if (this.quizQuestions.pages[i].questions[j].cuePointEnd) {
                            end = this.quizQuestions.pages[i].questions[j].cuePointEnd;
                        }
                        var cp = {
                            timeLapse: {
                                start: start,
                                end: end
                            },
                            params: {
                                id: this.questionsData[this.questionsData.length - 1].id
                            }
                        };

                        this.quizQuestions.pages[i].mediaConfig.cuePoints.questions.push(cp);

                    }
                }

            }
        }

        if (this.questionsDataCopy.length === 0) {
            angular.copy(this.questionsData, this.questionsDataCopy);
            for (var i = 0; i < this.questionsData.length; i++) {
                if (this.questionsData[i].graded) {
                    if (this.questionsData[i].type != "matrix") {
                        this.numQuestionsGraded += 1;
                    } else {
                        this.numQuestionsGraded += this.questionsData[i].rows.length;
                    }
                }

                //convert solution position in string
                if (this.questionsData[i].type === "sequence") {
                    for (var j = 0; j < this.questionsDataCopy[i].choices.length; j++) {
                        this.questionsData[i].solution[j] = this.questionsDataCopy[i].choices[this.questionsDataCopy[i].solution[j]];
                    }
                }

                //convert solution position in string
                if (this.questionsData[i].type === "matching-pairs") {
                    for (var j = 0; j < this.questionsDataCopy[i].choicesRight.length; j++) {
                        this.questionsData[i].solution[j] = this.questionsDataCopy[i].choicesRight[this.questionsDataCopy[i].solution[j]];
                    }
                }
            }
        }

        //SCORE BOARD SOLUTION
        for (var i = 0; i < this.questionsData.length; i++) {
            //this.questionsData[i].scoreBoardAnswer = "";
            this.questionsData[i].scoreBoardSolution = "";
            if (this.questionsData[i].type === "single-answer" && this.questionsData[i].solution >= 0) {
                if (this.questionsData[i].images) {
                    this.questionsData[i].scoreBoardSolution = "<img class='img-solution' src='" + this.questionsData[i].choices[this.questionsData[i].solution] + "'/>";
                } else {
                    this.questionsData[i].scoreBoardSolution = "<p>" + this.questionsData[i].choices[this.questionsData[i].solution] + "<p>";
                }
            }
            else if (this.questionsData[i].type === "multiple-answers" && this.questionsData[i].hasOwnProperty('solution')) {
                if (this.questionsData[i].solution.length > 0) {
                    for (j = 0; j < this.questionsData[i].solution.length; j++) {
                        if (this.questionsData[i].images) {
                            this.questionsData[i].scoreBoardSolution += "<img class='img-solution' src='" + this.questionsData[i].choices[this.questionsData[i].solution[j]] + "'/>";
                        } else {
                            this.questionsData[i].scoreBoardSolution += "<p>" + this.questionsData[i].choices[this.questionsData[i].solution[j]] + "</p>";
                        }
                    }
                }
            }

            else if (this.questionsData[i].type === "sequence" && this.questionsData[i].solution.length > 0) {
                if (this.questionsData[i].noBorder && !this.questionsData[i].itemSeparation && this.questionsData[i].images) {
                    this.questionsData[i].scoreBoardSolution += "<div class='puzzle'>";
                }
                for (j = 0; j < this.questionsData[i].solution.length; j++) {
                    if (this.questionsData[i].images) {
                        this.questionsData[i].scoreBoardSolution += "<img class='img-solution' src='" + this.questionsDataCopy[i].choices[this.questionsDataCopy[i].solution[j]] + "' />";
                    } else {
                        this.questionsData[i].scoreBoardSolution += "<p>" + this.questionsDataCopy[i].choices[this.questionsDataCopy[i].solution[j]] + "</p>";
                    }
                }
                if (this.questionsData[i].noBorder && !this.questionsData[i].itemSeparation && this.images) {
                    this.questionsData[i].scoreBoardSolution += "</div>";
                }
            }

            else if (this.questionsData[i].type === "matching-pairs" && this.questionsData[i].solution.length > 0) {
                for (j = 0; j < this.questionsData[i].solution.length; j++) {
                    this.solutionLeft = this.questionsDataCopy[i].choicesLeft[j];
                    this.solutionRight = this.questionsDataCopy[i].choicesRight[this.questionsDataCopy[i].solution[j]];
                    if (this.questionsData[i].imagesLeft === true) {
                        this.solutionLeft = "<img src='" + this.questionsDataCopy[i].choicesLeft[j] + "'>";
                    }
                    if (this.questionsData[i].imagesRight === true) {
                        this.solutionRight = "<img src='" + this.questionsDataCopy[i].choicesRight[this.questionsDataCopy[i].solution[j]] + "'>";
                    }
                    this.questionsData[i].scoreBoardSolution += "<p>" + this.solutionLeft + " - " + this.solutionRight + "</p>";
                }
            }

            else if (this.questionsData[i].type === "short-answer" && this.questionsData[i].solution.length > 0) {
                this.questionsData[i].scoreBoardSolution = "<p>" + this.questionsData[i].solution[0] + "</p>";
            }

            else if (this.questionsData[i].type === "long-answer" && typeof this.questionsData[i].sampleSolution === 'string') {
                if (this.questionsData[i].sampleSolution.length > 0) {
                    this.questionsData[i].scoreBoardSolution = "<p>" + this.questionsData[i].sampleSolution + "</p>";
                }
            }
            else if (this.questionsData[i].type === "matrix" && this.questionsData[i].solution) {
                for (j = 0; j < this.questionsData[i].solution.length; j++) {
                    this.questionsData[i].scoreBoardSolution += "<p>" + this.questionsData[i].choices[this.questionsData[i].solution[j]] + "</p>";

                }
            }
        }

        this.numQuestions = this.questionsData.length;

        deferred.resolve();
    };

    this.onLoadQuestionsError = function (deferred) {
        deferred.reject();
    };

    this.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };

    this.containsArrObj = function (a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    };

    /* Randomize array */
    this.shuffleChoices = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    /* random colors for matching */
    this.rainbow = function (numOfSteps, step) {
        // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
        // Adam Cole, 2011-Sept-14
        // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
        var r, g, b;
        var h = step / numOfSteps;
        var i = ~~(h * 6);
        var f = h * 6 - i;
        var q = 1 - f;
        switch (i % 6) {
            case 0:
                r = 1;
                g = f;
                b = 0;
                break;
            case 1:
                r = q;
                g = 1;
                b = 0;
                break;
            case 2:
                r = 0;
                g = 1;
                b = f;
                break;
            case 3:
                r = 0;
                g = q;
                b = 1;
                break;
            case 4:
                r = f;
                g = 0;
                b = 1;
                break;
            case 5:
                r = 1;
                g = 0;
                b = q;
                break;
        }
        var c = "#" + ("00" + (~~(r * 255)).toString(16)).slice(-2) + ("00" + (~~(g * 255)).toString(16)).slice(-2) + ("00" + (~~(b * 255)).toString(16)).slice(-2);
        return (c);
    }

}
]);

/*QUIZ TIMER SERVICE*/
angular.module("quickquiz").service('QuizTimer', ["QuizConfig", "QuizDatabase", "$timeout", "$http", "$location", function (QuizConfig, QuizDatabase, $timeout, $http, $location) {
    this.quizDatabase = QuizDatabase;
    this.quizConfig = QuizConfig.quizConfig;
    this.timeLeft = null;

    this.myTimer = null;

    this.init = function (timerCount) {
        if (this.timeLeft === null) {
            this.timeLeft = timerCount;
            this.startCountdown();
        }
    };

    this.startCountdown = function () {
        this.countDown();
    };

    this.countDown = function () {
        if (this.timeLeft < 0) {
            if (this.quizConfig.hasOwnProperty("database")) {
                if (this.quizConfig.database.sendFrom === "lastPage") {
                    this.quizDatabase.onSubmit();
                } else {
                    $location.path("score");
                }
            } else {
                $location.path("score");
            }
        } else {
            this.timeLeft--;
            this.myTimer = $timeout(this.countDown.bind(this), 1000);
        }
    };

    this.stopCountdown = function () {
        $timeout.cancel(this.myTimer);
    }


}]);

/*QUIZ SCORE SERVICE*/
angular.module("quickquiz").service('QuizScore', ["QuizConfig", "QuizStorage", function (QuizConfig, QuizStorage) {

    this.quizConfig = QuizConfig.quizConfig;
    this.questionsData = QuizStorage.questionsData;
    this.quizQuestions = QuizStorage.quizQuestions;
    this.questionsDataCopy = QuizStorage.questionsDataCopy;
    this.numPages = QuizStorage.numPages;
    this.numQuestions = QuizStorage.numQuestions;
    this.graded = this.quizConfig.settings.graded;
    this.weighted = this.quizConfig.settings.weighted;
    this.personalities = this.quizConfig.settings.personalities;
    this.scoreByQuestion = this.quizConfig.score.scoreByQuestion;
    //this.pointsPerQuestion = this.quizConfig.score.pointsPerQuestion;
    this.penaltyPointsPerQuestion = this.quizConfig.score.penaltyPointsPerQuestion;
    this.numQuestionsGraded = QuizStorage.numQuestionsGraded;

    this.calculateScore = function () {
        this.questionsData = QuizStorage.questionsData;
        this.totalRight = 0;
        this.totalWrong = 0;
        this.totalBlank = 0;
        this.scorePoints = 0;
        this.scorePercentage = 0;
        this.scorePointsRounded = 0;
        this.scorePercentageRounded = 0;
        this.winningPersonality = "";
        this.containsArrObj = QuizStorage.containsArrObj;

        if (this.graded) {
            this.maxPoints = 0;
            this.penaltyPoints = 0;

            /* if all questions have the same points*/
            if (!this.scoreByQuestion && this.quizConfig.score.maxPoints > 0) {
                this.maxPoints = this.quizConfig.score.maxPoints;
            }

            for (var i = 0; i < this.questionsData.length; i++) {
                if (this.questionsData[i].graded) {
                    if (this.questionsData[i].points && this.scoreByQuestion) {
                        this.maxPoints += this.questionsData[i].points;
                    }

                    /* no matrix questions */
                    if (this.questionsData[i].type != "matrix") {
                        if (this.questionsData[i].answerState === "blank") {
                            this.totalBlank += 1;
                        } else if (this.questionsData[i].answerState === "right") {
                            this.totalRight += 1;
                            if (this.questionsData[i].points && this.scoreByQuestion) {
                                this.scorePoints += this.questionsData[i].points;
                            }
                        } else if (this.questionsData[i].answerState === "wrong") {
                            this.totalWrong += 1;
                            if (!this.questionsData[i].penaltyPoints && this.penaltyPointsPerQuestion < 0) {
                                this.questionsData[i].penaltyPoints = this.penaltyPointsPerQuestion;
                            }
                            if (this.questionsData[i].penaltyPoints) {
                                this.scorePoints += this.questionsData[i].penaltyPoints;
                            }
                        }

                        /* matrix questions  */
                    } else {
                        for (var p = 0; p < this.questionsData[i].rows.length; p++) {
                            if (this.questionsData[i].answerState[p] === "blank") {
                                this.totalBlank += 1;
                            } else if (this.questionsData[i].answerState[p] === "right") {
                                this.totalRight += 1;
                                if (this.questionsData[i].points && this.scoreByQuestion) {
                                    this.scorePoints += this.questionsData[i].points / this.questionsData[i].rows.length;
                                }
                            } else if (this.questionsData[i].answerState[p] === "wrong") {
                                this.totalWrong += 1;
                                if (!this.questionsData[i].penaltyPoints && this.penaltyPointsPerQuestion < 0) {
                                    this.questionsData[i].penaltyPoints = this.penaltyPointsPerQuestion / this.questionsData[i].rows.length;
                                }
                                if (this.questionsData[i].penaltyPoints) {
                                    this.scorePoints += this.questionsData[i].penaltyPoints / this.questionsData[i].rows.length;
                                }
                            }
                        }
                    }
                }
            }

            if (!this.scoreByQuestion) {
                this.scorePoints = (this.totalRight * this.maxPoints / this.numQuestionsGraded) + (this.totalWrong * this.penaltyPointsPerQuestion);
            }

            //minim score = 0
            if (this.scorePoints < 0) {
                this.scorePoints = 0
            }

            this.scorePointsRounded = 0;
            this.scorePointsRounded = parseFloat(this.scorePoints.toFixed(this.quizConfig.score.decimalNumber));

            this.scorePercentage = this.totalRight / this.numQuestionsGraded * 100;
            this.scorePercentageRounded = parseFloat(this.scorePercentage.toFixed(this.quizConfig.score.decimalNumber));
        }

        if (this.weighted) {
            this.scorePoints = 0;
            for (var i = 0; i < this.questionsData.length; i++) {
                if (this.questionsData[i].weighted) {
                    if (this.questionsData[i].type === 'single-answer' && this.questionsData[i].answerState != "blank") {
                        if (this.questionsData[i].hasOwnProperty('choicesWeight')) {
                            this.scorePoints += this.questionsData[i].choicesWeight[this.questionsData[i].answer];
                        }
                    } else if (this.questionsData[i].type === 'multiple-answers' && this.questionsData[i].answerState != "blank") {
                        for (var j = 0; j < this.questionsData[i].answer.length; j++) {
                            if (this.questionsData[i].hasOwnProperty('choicesWeight')) {
                                this.scorePoints += this.questionsData[i].choicesWeight[this.questionsData[i].answer[j]];
                            }
                        }
                    } else if ((this.questionsData[i].type === 'likert-scale' || this.questionsData[i].type === 'rating') && this.questionsData[i].answerState != "blank") {
                        if (this.questionsData[i].hasOwnProperty('choicesWeight')) {
                            this.scorePoints += this.questionsData[i].choicesWeight[this.questionsData[i].answer];
                        } else {
                            this.scorePoints += this.questionsData[i].choices[this.questionsData[i].answer];
                        }
                    } else if (this.questionsData[i].type === 'matrix' && this.questionsData[i].choicesType === 'radio') {
                        for (var j = 0; j < this.questionsData[i].rowsID.length; j++) {
                            if (this.questionsData[i].answerState[j] === 'answered') {
                                if (this.questionsData[i].hasOwnProperty('choicesWeight')) {
                                    this.scorePoints += this.questionsData[i].choicesWeight[j][this.questionsData[i].answer[j]];
                                }
                            }
                        }
                    } else if (this.questionsData[i].type === 'matrix' && this.questionsData[i].choicesType === 'rating') {
                        for (var j = 0; j < this.questionsData[i].rowsID.length; j++) {
                            if (this.questionsData[i].answerState[j] === 'answered') {
                                if (this.questionsData[i].hasOwnProperty('choicesWeight')) {
                                    this.scorePoints += this.questionsData[i].choicesWeight[j][this.questionsData[i].answer[j]];
                                } else {
                                    this.scorePoints += this.questionsData[i].choices[this.questionsData[i].answer[j]];
                                }
                            }
                        }
                    }
                }
            }

            this.scorePointsRounded = this.scorePoints;
        }

        if (typeof this.personalities === 'object') {
            Object.size = function (obj) {
                var size = 0, key;
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) size++;
                }
                return size;
            };

            this.winningPersonality = "";
            this.frequency = [];
            for (var b=0; b<this.personalities.length; b++){
                this.frequency[b] = 0;
            }

            for (var i = 0; i < this.questionsData.length; i++) {

                this.associatedResults = this.questionsData[i].associatedPersonality;
                this.personalitySize = Object.size(this.associatedResults);

                if (this.personalitySize > 0) {
                    if (this.questionsData[i].type === 'single-answer' && this.questionsData[i].answerState != "blank") {
                        this.tempAnswer = this.questionsData[i].answer;
                        for (key in this.associatedResults[this.tempAnswer]) {
                            this.tempPersonality = this.personalities.indexOf(this.associatedResults[this.tempAnswer][key].personality);
                            this.tempPoints = this.associatedResults[this.tempAnswer][key].points;
                            this.frequency[this.tempPersonality] += this.tempPoints;
                        }
                    } else if (this.questionsData[i].type === 'multiple-answers' && this.questionsData[i].answerState != "blank") {
                        for (var j = 0; j < this.questionsData[i].answer.length; j++) {
                            this.tempAnswer = this.questionsData[i].answer[j];
                            for (key in this.associatedResults[this.tempAnswer]) {
                                this.tempPersonality = this.personalities.indexOf(this.associatedResults[this.tempAnswer][key].personality);
                                this.tempPoints = this.associatedResults[this.tempAnswer][key].points;
                                this.frequency[this.tempPersonality] += this.tempPoints;
                            }
                        }
                    } else if (this.questionsData[i].type === 'matrix' && this.questionsData[i].choicesType === 'radio') {
                        for (var j = 0; j < this.questionsData[i].rowsID.length; j++) {
                            if (this.questionsData[i].answerState[j] === 'answered') {
                                this.tempAnswer = this.questionsData[i].answer[j];
                                for (key in this.associatedResults[j][this.tempAnswer]) {
                                    this.tempPersonality = this.personalities.indexOf(this.associatedResults[j][this.tempAnswer][key].personality);
                                    this.tempPoints = this.associatedResults[j][this.tempAnswer][key].points;
                                    this.frequency[this.tempPersonality] += this.tempPoints;
                                }
                            }
                        }
                    }
                }
            }

            for (i = 0; i < this.frequency.length; i++) {
                if (typeof this.frequency[i] != "number") {
                    this.frequency[i] = 0;
                }
            }

            function indexOfWinner(arr) {
                return arr.indexOf(Math.max.apply(Math, arr));
            }
            this.winningPersonality = this.personalities[indexOfWinner(this.frequency)];
        }
    };

}]);

/* QUIZ DATABASE SERVICE*/
angular.module("quickquiz").service('QuizDatabase', ["QuizConfig", "QuizStorage", "QuizScore", "$rootScope", "$location", "$mdDialog", "$window", "$http", function (QuizConfig, QuizStorage, QuizScore, $rootScope, $location, $mdDialog, $window, $http) {
    this.quizConfig = QuizConfig.quizConfig;
    this.questionsData = QuizStorage.questionsData;
    this.numQuestions = QuizStorage.numQuestions;
    this.formName = "";
    this.formEmail = "";
    this.quizScore = QuizScore;
    if (this.quizConfig.hasOwnProperty('database')) {
        this.tableName = this.quizConfig.database.tableName;
    }
    this.sendingData = false;

    this.windowReload = function() {
        setTimeout(
            function () {
                $window.location.reload();
            },
            1);
    };

    /* SEND TO A DATABASE */
    this.onSubmit = function () {
        this.sendingData = true;
        this.quizScore.calculateScore();
        this.points = this.quizScore.scorePointsRounded;
        this.percentage = this.quizScore.scorePercentageRounded;
        this.winningPersonality = this.quizScore.winningPersonality;
        this.frequency = this.quizScore.frequency;

        if (this.quizConfig.database.mySQL) {
            this.sendObj = {};
            this.sendObj.table = this.tableName;
            if (this.quizConfig.database.name) {
                this.sendObj.name = this.formName;
            }
            if (this.quizConfig.database.email) {
                this.sendObj.email = this.formEmail;
            }
            if (this.quizConfig.database.sendPercentage) {
                this.sendObj.percentage = this.percentage;
            }
            if (this.quizConfig.database.sendPoints) {
                this.sendObj.points = this.points;
            }
            if (this.quizConfig.database.sendWinningPersonality) {
                this.sendObj.winningPersonality = this.winningPersonality;
            }
            if (this.quizConfig.database.sendFrequency) {
                this.sendObj.frequency = this.frequency;
            }
            if (this.quizConfig.database.sendAnswers) {
                this.sendObj.userAnswers = [];
                var max = 2;
                if (this.numQuestions > 100) {
                    max = 3;
                }
                this.leadZero = function (str, max) {
                    return str.length < max ? this.leadZero("0" + str, max) : str;
                };
                for (i = 0; i < this.questionsData.length; i++) {
                    var numQ = i + 1;
                    numQ = numQ.toString();
                    numQ = this.leadZero(numQ, max);
                    numQ = "q" + numQ;
                    if (!this.questionsData[i].hasOwnProperty("qID")) {
                        this.questionsData[i].qID = numQ;
                    }

                    if (this.questionsData[i].type != "matrix") {
                        var answer = undefined;
                        if (this.questionsData[i].answerState != "blank") {
                            switch (this.questionsData[i].type) {
                                case "single-answer":
                                    if (this.questionsData[i].answer !== undefined) {
                                        if (this.questionsData[i].answer < this.questionsData[i].choices.length) {
                                            answer = this.questionsData[i].choices[this.questionsData[i].answer];
                                        } else {
                                            answer = this.questionsData[i].other.text + ": " + this.questionsData[i].other.answer;
                                        }
                                    }
                                    break;

                                case "rating":
                                    if (this.questionsData[i].answer !== undefined) {
                                        answer = this.questionsData[i].choices[this.questionsData[i].answer];
                                    }
                                    break;

                                case "short-answer":
                                case "long-answer":
                                    if (!!this.questionsData[i].answer) {
                                        answer = this.questionsData[i].answer;
                                    }
                                    break;

                                case "sequence":
                                    if (!!this.questionsData[i].answer) {
                                        answer = "";
                                        for (var l = 1; l < this.questionsData[i].answer.length + 1; l++) {
                                            if (this.questionsData[i].answer[l - 1] != undefined) {
                                                answer += l + ". " + this.questionsData[i].answer[l - 1] + "\n";
                                            }
                                        }
                                    }
                                    break;
                                case "matching-pairs":
                                    if (!!this.questionsData[i].answer) {
                                        answer = "";
                                        for (var l = 0; l < this.questionsData[i].answer.length; l++) {
                                            if (this.questionsData[i].answer[l] != undefined) {
                                                answer += this.questionsData[i].choicesLeft[l] + " - " + this.questionsData[i].answer[l] + "\n";
                                            }
                                        }
                                    }
                                    break;

                                case "multiple-answers":
                                    var answerArr = [];
                                    answer = "";
                                    for (var j = 0; j < this.questionsData[i].answer.length; j++) {
                                        if (this.questionsData[i].choices[this.questionsData[i].answer[j]] === this.questionsData[i].choices[this.questionsData[i].choices.length]) {
                                            answerArr.push(this.questionsData[i].other.text + ": " + this.questionsData[i].other.answer);
                                        } else {
                                            answerArr.push(this.questionsData[i].choices[this.questionsData[i].answer[j]]);
                                        }
                                    }
                                    for (var l = 0; l < answerArr.length; l++) {
                                        answer += answerArr[l] + "\n";
                                    }
                                    break;

                                case "likert-scale":
                                    if (this.questionsData[i].scaleType === "button") {
                                        if (this.questionsData[i].answer !== undefined) {
                                            answer = this.questionsData[i].choices[this.questionsData[i].answer];
                                        }
                                    } else {
                                        answer = this.questionsData[i].answer;
                                    }
                            }
                        }
                        if (answer !== undefined) {
                            answer = answer.toString();
                        }
                        this.sendObj.userAnswers.push({
                            "qID": this.questionsData[i].qID,
                            "type": this.questionsData[i].type,
                            "answer": answer
                        });
                    }
                    else if (this.questionsData[i].type === "matrix") {
                        for (var p = 0; p < this.questionsData[i].rows.length; p++) {
                            var answer = undefined;
                            var numRow = p + 1;
                            numRow = numRow.toString();
                            numRow = this.leadZero(numRow, 2);
                            this.rowID = this.questionsData[i].qID + "_" + numRow;

                            if (this.questionsData[i].hasOwnProperty("rID")) {
                                this.rowID = this.questionsData[i].qID + "_" + this.questionsData[i].rID[p];
                            }

                            if (this.questionsData[i].answerState != "blank") {
                                if (this.questionsData[i].answer[p] != undefined) {
                                    answer = this.questionsData[i].choices[this.questionsData[i].answer[p]];
                                }
                            }
                            if (answer !== undefined) {
                                answer = answer.toString();
                            }
                            this.sendObj.userAnswers.push({"qID": this.rowID, "answer": answer});
                        }
                    }
                }
            }
            /* COMMENT FOR PREVIEW */
            var request = $http({
                method: "post",
                url: $location.absUrl().slice(0, ($location.absUrl().indexOf("#"))) + "php/sendMySQL.php",
                data: this.sendObj,
                headers: {'Content-Type': 'application/x-www-form-urlencoded', 'charset': 'utf-8'}
            });

            request.success(this.onMySQLSuccess.bind(this));
            request.error(this.onMySQLError.bind(this));




        }
        else {
            Parse.initialize(this.quizConfig.database.applicationId, this.quizConfig.database.javascriptKey);

            // Create a new subclass of Parse.Object.
            var QuickQuiz = Parse.Object.extend(this.tableName);

            // Create a new instance of that class.
            quickQuiz = new QuickQuiz();

            if (this.quizConfig.database.name) {
                quickQuiz.set("name", this.formName);
            }

            if (this.quizConfig.database.email) {
                quickQuiz.set("email", this.formEmail);
            }

            if (this.quizConfig.database.sendPercentage) {
                quickQuiz.set("percentage", this.percentage);
            }
            if (this.quizConfig.database.sendPoints) {
                quickQuiz.set("points", this.points);
            }
            if (this.quizConfig.database.sendWinningPersonality) {
                quickQuiz.set("winningPersonality", this.winningPersonality);
            }
            if (this.quizConfig.database.sendFrequency) {
                quickQuiz.set("frequency", this.frequency);
            }

            if (this.quizConfig.database.sendAnswers) {
                var max = 2;
                if (this.numQuestions > 100) {
                    max = 3;
                }
                this.leadZero = function (str, max) {
                    return str.length < max ? this.leadZero("0" + str, max) : str;
                };

                for (i = 0; i < this.questionsData.length; i++) {
                    var numQ = i + 1;
                    numQ = numQ.toString();
                    numQ = this.leadZero(numQ, max);
                    numQ = "q" + numQ;
                    if (!this.questionsData[i].hasOwnProperty("qID")) {
                        this.questionsData[i].qID = numQ;
                    }


                    if (this.questionsData[i].type != "matrix") {
                        var answer = undefined;

                        if (this.questionsData[i].answerState != "blank") {
                            switch (this.questionsData[i].type) {
                                case "single-answer":
                                    if (this.questionsData[i].answer !== undefined) {
                                        if (this.questionsData[i].answer < this.questionsData[i].choices.length) {
                                            answer = this.questionsData[i].choices[this.questionsData[i].answer];
                                        } else {
                                            answer = "Other: " + this.questionsData[i].other.answer;
                                        }
                                    }
                                    break;

                                case "rating":
                                    if (this.questionsData[i].answer !== undefined) {
                                        answer = this.questionsData[i].choices[this.questionsData[i].answer];
                                    }
                                    break;

                                case "short-answer":
                                case "long-answer":
                                    if (!!this.questionsData[i].answer) {
                                        answer = this.questionsData[i].answer;
                                    }
                                    break;

                                case "sequence":
                                case "matching-pairs":
                                    if (!!this.questionsData[i].answer) {

                                        answer = this.questionsData[i].answer.join(' - ');
                                    }
                                    break;

                                case "multiple-answers":
                                    var answerArr = [];
                                    for (var j = 0; j < this.questionsData[i].answer.length; j++) {
                                        if (this.questionsData[i].choices[this.questionsData[i].answer[j]] === this.questionsData[i].choices[this.questionsData[i].choices.length]) {
                                            answerArr.push(this.questionsData[i].other.text + ": " + this.questionsData[i].other.answer);
                                        } else {
                                            answerArr.push(this.questionsData[i].choices[this.questionsData[i].answer[j]]);
                                        }
                                    }
                                    answer = answerArr.join(' - ');
                                    break;

                                case "likert-scale":
                                    if (this.questionsData[i].scaleType === "button") {
                                        if (this.questionsData[i].answer !== undefined) {
                                            answer = this.questionsData[i].choices[this.questionsData[i].answer];
                                        }
                                    } else {
                                        answer = this.questionsData[i].answer;
                                    }
                            }
                        }
                        if (answer !== undefined) {
                            answer = answer.toString();
                        }
                        quickQuiz.set(this.questionsData[i].qID, answer);
                    }
                    else if (this.questionsData[i].type === "matrix") {
                        for (var p = 0; p < this.questionsData[i].rows.length; p++) {
                            var answer = undefined;
                            var numRow = p + 1;
                            numRow = numRow.toString();
                            numRow = this.leadZero(numRow, 2);
                            this.rowID = this.questionsData[i].qID + "_" + numRow;

                            if (this.questionsData[i].hasOwnProperty("rID")) {
                                this.rowID = this.questionsData[i].qID + "_" + this.questionsData[i].rID[p];
                            }

                            if (this.questionsData[i].answerState != "blank") {
                                if (this.questionsData[i].answer[p] != undefined) {
                                    answer = this.questionsData[i].choices[this.questionsData[i].answer[p]];
                                }
                            }
                            if (answer !== undefined) {
                                answer = answer.toString();
                            }
                            quickQuiz.set(this.rowID, answer);

                        }
                    }
                }
            }

            quickQuiz.save(null, {
                success: this.onSaveSuccess.bind(this),
                error: this.onSaveError.bind(this)
            });
        }
    };

    this.onSaveSuccess = function (quickQuiz) {
        this.sendingData = false;
        if (this.quizConfig.database.showSuccess) {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .textContent(this.quizConfig.labels.sentSuccess)
                    .ariaLabel(this.quizConfig.labels.sentSuccess)
                    .ok(this.quizConfig.labels.feedbackOK)
            );
        }

        if (this.quizConfig.database.goTo === "score") {
            $location.path("score");
            $rootScope.$apply();
        }
        else if (this.quizConfig.database.goTo === "thanks") {
            $location.path("thank-you");
            $rootScope.$apply();
            this.windowReload();
        }
        else if (this.quizConfig.database.goTo === "home") {
            $location.path("home");
            $rootScope.$apply();
            this.windowReload();
        }
        else if (this.quizConfig.database.goTo === "firstQuestion") {
            $location.path("1");
            $rootScope.$apply();
            this.windowReload();
        }
        else if (this.quizConfig.database.goTo === "url") {
            $window.location.href = this.quizConfig.database.goToUrl;
            this.windowReload();
        }
    };

    this.onSaveError = function (quickQuiz, error) {
        this.sendingData = false;
        $mdDialog.show(
            $mdDialog.alert()
                .clickOutsideToClose(true)
                .htmlContent(this.quizConfig.labels.sentError + "<p><em>" + error.message + "</em></p>")
                .ariaLabel(this.quizConfig.labels.sentError)
                .ok(this.quizConfig.labels.feedbackOK)
        );
    };


    this.onMySQLSuccess = function (response) {
        //console.log(response);
        this.sendingData = false;

        if (this.quizConfig.database.showSuccess) {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .textContent(this.quizConfig.labels.sentSuccess)
                    .ariaLabel(this.quizConfig.labels.sentSuccess)
                    .ok(this.quizConfig.labels.feedbackOK)
            ).then(this.onClickOkShowSuccess.bind(this));
        }
        else {
            this.onClickOkShowSuccess();
        }
    };

    this.onClickOkShowSuccess = function () {
        if (this.quizConfig.database.goTo === "score") {
            $location.path("score");
        }
        else if (this.quizConfig.database.goTo === "thanks") {
            $location.path("thank-you");
            this.windowReload();
        }
        else if (this.quizConfig.database.goTo === "home") {
            $location.path("home");
            this.windowReload();
        }
        else if (this.quizConfig.database.goTo === "firstQuestion") {
            $location.path("1");
            this.windowReload();
        }
        else if (this.quizConfig.database.goTo === "url") {
            $window.location.href = this.quizConfig.database.goToUrl;
            this.windowReload();
        }
    };


    this.onMySQLError = function (error) {
        //console.log(error);
        this.sendingData = false;
        console.log(this.sendingData);
        $mdDialog.show(
            $mdDialog.alert()
                .clickOutsideToClose(true)
                .htmlContent(this.quizConfig.labels.sentError + "<p><em>" + error + "</em></p>")
                .ariaLabel(this.quizConfig.labels.sentError)
                .ok(this.quizConfig.labels.feedbackOK)
        );
    };
}]);

/* SAVE LOCALSTORAGE SERVICE */
angular.module("quickquiz").service('SaveLocalStorage', ["$location", "$route", "$rootScope", "$localStorage", "$mdDialog", "$window", '$anchorScroll', 'QuizConfig', 'QuizStorage', 'QuizScore',
    function ($location, $route, $rootScope, $localStorage, $mdDialog, $window, $anchorScroll, QuizConfig, QuizStorage, QuizScore) {

        this.quizConfig = QuizConfig.quizConfig;
        this.startPath = $location.path();

        if (this.quizConfig.settings.saveLocalStorage === true) {

            this.fromScratch = function () {
                $localStorage['savedQuiz'] = {};
                $localStorage['savedQuiz'].questionsData = QuizStorage.questionsData;
                $localStorage['savedQuiz'].path = this.startPath;
            };

            this.fromLocalStorage = function () {
                QuizStorage.questionsData = $localStorage['savedQuiz'].questionsData;
                if (!this.quizConfig.settings.refreshBrowser) {
                    $location.path($localStorage['savedQuiz'].path);
                } else {
                    $location.hash("quickquiz");
                }
                $anchorScroll();
                $route.reload();
            };

            this.onUpdateQuestionsData = function (newValue) {
                if ($location.path() != this.startPath) {
                    $localStorage['savedQuiz'].path = $location.path();
                }
            };

            /* check if there is a a previous localStorage */
            if ($localStorage['savedQuiz'] === undefined) {
                this.fromScratch();
            } else if (this.quizConfig.settings.showLocalStoragePopUp === true) {
                /* from local storage */
                var confirm = $mdDialog.confirm()
                    .title(this.quizConfig.labels.loadLocalStorageAlert)
                    .textContent('')
                    .ariaLabel('Use saved answers')
                    .ok(this.quizConfig.labels.fromSavedButton)
                    .cancel(this.quizConfig.labels.fromScratchButton);

                $mdDialog.show(confirm).then(
                    this.fromLocalStorage.bind(this),
                    this.fromScratch.bind(this)
                );
            } else {
                this.fromLocalStorage();
            }

            $rootScope.$watch(
                function () {
                    return QuizStorage.questionsData;
                },
                this.onUpdateQuestionsData.bind(this),
                true
            );
        }
    }]);


/********* DIRECTIVES **********/


/*QUIZ-QUESTION DIRECTIVE*/
angular.module("quickquiz").directive("quizQuestion", function () {
    return {
        restrict: 'E',
        templateUrl: "templates/quiz-question.html"
    };
});


//*SINGLE-ANSWER DIRECTIVE*/
angular.module("quickquiz").directive("singleAnswer", ["QuizStorage", function (QuizStorage) {
    return {
        restrict: 'E',
        templateUrl: "templates/question-types/single-answer.html",
        scope: {
            quizMain: "=",
            questionId: "="
        },
        controllerAs: "ctrl",
        controller: ["$scope",
            function ($scope) {
                this.quizMain = $scope.quizMain;
                this.questionId = $scope.questionId;

                /*for radio or select*/
                this.change = function () {
                    this.quizMain.questionsData[this.questionId].answer = parseInt(this.quizMain.questionsData[this.questionId].answer);
                    this.checkSingleAnswer();
                };

                /*for buttons*/
                this.setAnswers = function (optionSelected) {
                    if (this.quizMain.questionsData[this.questionId].answer === optionSelected) {
                        this.quizMain.questionsData[this.questionId].answer = undefined;
                        this.quizMain.questionsData[this.questionId].answerState = "blank";

                    } else {
                        this.quizMain.questionsData[this.questionId].answer = optionSelected;
                        this.checkSingleAnswer();
                    }
                }

                this.checkSingleAnswer = function () {
                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer = "";
                    this.quizMain.questionsData[this.questionId].answerState = "answered";
                    if (this.quizMain.quizQuestions.pages[this.quizMain.currentPage - 1].autoplay === 'answer') {
                        this.quizMain.API.play();
                    }

                    if (this.quizMain.questionsData[this.questionId].graded) {
                        if (this.quizMain.questionsData[this.questionId].solution === this.quizMain.questionsData[this.questionId].answer) {
                            this.quizMain.questionsData[this.questionId].answerState = "right";
                            if (this.quizMain.quizQuestions.pages[this.quizMain.currentPage - 1].autoplay === 'right') {
                                this.quizMain.API.play();
                            }
                        } else {
                            this.quizMain.questionsData[this.questionId].answerState = "wrong";
                        }
                    }
                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<p>";
                    if (this.quizMain.questionsData[this.questionId].graded && this.quizMain.quizConfig.score.showIcons) {
                        if (this.quizMain.questionsData[this.questionId].answerState === "right") {
                            this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<span class='icon-right'></span>";
                        } else if (this.quizMain.questionsData[this.questionId].answerState === "wrong") {
                            this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<span class='icon-wrong'></span>";
                        }
                    }

                    if (this.quizMain.questionsData[this.questionId].images) {
                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<img src='" + this.quizMain.questionsData[this.questionId].choices[this.quizMain.questionsData[this.questionId].answer] + "'/>";
                    } else {
                        /* if for check if the answer is the 'other' option */
                        if (this.quizMain.questionsData[this.questionId].answer === this.quizMain.questionsData[this.questionId].choices.length) {
                            this.quizMain.questionsData[this.questionId].scoreBoardAnswer += this.quizMain.questionsData[this.questionId].other.text + ": " + this.quizMain.questionsData[this.questionId].other.answer;
                        } else {
                            this.quizMain.questionsData[this.questionId].scoreBoardAnswer += this.quizMain.questionsData[this.questionId].choices[this.quizMain.questionsData[this.questionId].answer];
                        }
                    }
                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "</p>";

                    if (this.quizMain.quizConfig.settings.requiredQuestions) {
                        if (this.quizMain.questionsData[this.questionId].answerState === "blank") {
                            this.quizMain.hideVideoControls = true;
                        } else {
                            this.quizMain.hideVideoControls = false;
                        }
                    }

                    /* auto advance */
                    if (this.quizMain.quizConfig.settings.autoAdvance && this.quizMain.questionsData[this.questionId].answerState != "blank") {
                        if (this.quizMain.showNext()) {
                            this.quizMain.nextPage();
                        }
                        else if (this.quizMain.showLast()) {
                            if (this.quizMain.quizConfig.hasOwnProperty("database")) {
                                if (this.quizMain.quizConfig.database.sendFrom === "lastPage") {
                                    this.quizMain.submit();
                                } else {
                                    this.quizMain.checkAnswers();
                                }
                            } else {
                                this.quizMain.checkAnswers();
                            }
                        }

                    }
                };
            }
        ]
    };
}]);

/*MULTIPLE-ANSWERS DIRECTIVE*/
angular.module("quickquiz").directive("multipleAnswers", ["QuizStorage", function (QuizStorage) {
    return {
        restrict: 'E',
        templateUrl: "templates/question-types/multiple-answers.html",
        scope: {
            quizMain: "=",
            questionId: "="
        },
        controllerAs: "ctrl",
        controller: ["$scope",
            function ($scope) {
                this.quizMain = $scope.quizMain;
                this.questionId = $scope.questionId;

                /*for 'other' checkbox */
                this.change = function () {
                    this.setAnswers(this.quizMain.questionsData[this.questionId].choices.length);
                    this.setAnswers(this.quizMain.questionsData[this.questionId].choices.length);
                };

                this.setAnswers = function (optionSelected) {
                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer = "";
                    this.option = this.quizMain.questionsData[this.questionId].answer.indexOf(optionSelected);
                    if (this.option > -1) {
                        this.quizMain.questionsData[this.questionId].answer.splice(this.option, 1);
                    } else {
                        this.quizMain.questionsData[this.questionId].answer.push(optionSelected);
                    }
                    this.quizMain.questionsData[this.questionId].answer.sort();
                    this.quizMain.questionsData[this.questionId].someWrong = false;
                    this.quizMain.questionsData[this.questionId].someRight = false;

                    if (this.quizMain.questionsData[this.questionId].answer.length === 0) {
                        this.quizMain.questionsData[this.questionId].answerState = "blank";
                    } else {
                        this.quizMain.questionsData[this.questionId].answerState = "answered";
                        if (this.quizMain.quizQuestions.pages[this.quizMain.currentPage - 1].autoplay === 'answer') {
                            this.quizMain.API.play();
                        }
                        if (this.quizMain.questionsData[this.questionId].graded) {
                            this.quizMain.questionsData[this.questionId].solution.sort();
                            if (this.quizMain.questionsData[this.questionId].answer.toString() === this.quizMain.questionsData[this.questionId].solution.toString()) {
                                this.quizMain.questionsData[this.questionId].answerState = "right";
                                if (this.quizMain.quizQuestions.pages[this.quizMain.currentPage - 1].autoplay === 'right') {
                                    this.quizMain.API.play();
                                }
                            } else {
                                this.quizMain.questionsData[this.questionId].answerState = "wrong";
                            }
                        }

                        for (i = 0; i < this.quizMain.questionsData[this.questionId].answer.length; i++) {
                            this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<p>";
                            if (this.quizMain.questionsData[this.questionId].graded && this.quizMain.quizConfig.score.showIcons) {
                                if (this.quizMain.questionsData[this.questionId].solution.indexOf(this.quizMain.questionsData[this.questionId].answer[i]) > -1) {
                                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<span class='icon-right'></span>";
                                } else if (this.quizMain.questionsData[this.questionId].solution.indexOf(this.quizMain.questionsData[this.questionId].answer[i]) < 0) {
                                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<span class='icon-wrong'></span>";
                                }
                            }
                            if (this.quizMain.questionsData[this.questionId].images) {
                                this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<img src='" + this.quizMain.questionsData[this.questionId].choices[this.quizMain.questionsData[this.questionId].answer[i]] + "'/>";
                            } else {
                                /* if for check if the answer is the 'other' option */
                                if (this.quizMain.questionsData[this.questionId].answer[i] === this.quizMain.questionsData[this.questionId].choices.length) {
                                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer += this.quizMain.questionsData[this.questionId].other.text + ": " + this.quizMain.questionsData[this.questionId].other.answer;
                                } else {
                                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer += this.quizMain.questionsData[this.questionId].choices[this.quizMain.questionsData[this.questionId].answer[i]];
                                }
                            }
                            this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "</p>";
                        }
                    }

                    if (this.quizMain.questionsData[this.questionId].graded && this.quizMain.questionsData[this.questionId].answerState != "right") {
                        for (var i = 0; i < this.quizMain.questionsData[this.questionId].answer.length; i++) {
                            if (this.quizMain.questionsData[this.questionId].solution.indexOf(this.quizMain.questionsData[this.questionId].answer[i]) < 0) {
                                this.quizMain.questionsData[this.questionId].someWrong = true;
                            } else {
                                this.quizMain.questionsData[this.questionId].someRight = true;
                            }
                        }
                    }
                    if (this.quizMain.quizConfig.settings.requiredQuestions) {
                        if (this.quizMain.questionsData[this.questionId].answerState === "blank") {
                            this.quizMain.hideVideoControls = true;
                        } else {
                            this.quizMain.hideVideoControls = false;
                        }
                    }
                };
            }
        ]
    };
}]);

/*SEQUENCE DIRECTIVE*/
angular.module("quickquiz").directive("sequence", ["QuizStorage", function (QuizStorage) {
    return {
        restrict: 'E',
        templateUrl: "templates/question-types/sequence.html",
        scope: {
            quizMain: "=",
            questionId: "="
        },
        controllerAs: "ctrl",
        controller: ["$scope",
            function ($scope) {
                this.quizMain = $scope.quizMain;
                this.questionId = $scope.questionId;

                /* for select */
                this.setSelectAnswer = function () {
                    this.quizMain.questionsData[this.questionId].answer = [];
                    for (i = 0; i < this.quizMain.questionsData[this.questionId].choices.length; i++) {
                        this.quizMain.questionsData[this.questionId].answer[i] = this.quizMain.questionsData[this.questionId].choices[this.quizMain.questionsData[this.questionId].selectModel[i]];
                    }

                    this.isBlank = this.quizMain.questionsData[this.questionId].answer.every(function (element) {
                        return !element;
                    });

                    if (this.isBlank) {
                        this.quizMain.questionsData[this.questionId].answerState = "blank";
                    } else {
                        this.checkSequence();
                    }
                };

                this.checkSequence = function () {
                    this.quizMain.questionsData[this.questionId].complete = true;
                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer = "";
                    this.quizMain.questionsData[this.questionId].answerState = "answered";
                    if (this.quizMain.questionsData[this.questionId].graded) {
                        if (this.quizMain.questionsData[this.questionId].solution.toString() === this.quizMain.questionsData[this.questionId].answer.toString()) {
                            this.quizMain.questionsData[this.questionId].answerState = "right";
                            if (this.quizMain.quizQuestions.pages[this.quizMain.currentPage - 1].autoplay === 'right') {
                                this.quizMain.API.play();
                            }
                        } else {
                            this.quizMain.questionsData[this.questionId].answerState = "wrong";
                        }
                    }
                    for (i = 0; i < this.quizMain.questionsData[this.questionId].solution.length; i++) {

                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<p>";
                        if (this.quizMain.questionsData[this.questionId].graded && this.quizMain.quizConfig.score.showIcons) {
                            if (this.quizMain.questionsData[this.questionId].answer[i] === this.quizMain.questionsData[this.questionId].solution[i]) {
                                this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<span class='icon-right'></span>";
                            } else if (this.quizMain.questionsData[this.questionId].answer[i] != undefined) {
                                this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<span class='icon-wrong'></span>";
                            }
                        }
                        if (this.quizMain.questionsData[this.questionId].images) {
                            this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<img src='" + this.quizMain.questionsData[this.questionId].answer[i] + "' />";
                        } else {
                            if (this.quizMain.questionsData[this.questionId].answer[i] === undefined) {
                                this.quizMain.questionsData[this.questionId].complete = false;
                                this.quizMain.questionsData[this.questionId].scoreBoardAnswer += " -";
                            } else {
                                this.quizMain.questionsData[this.questionId].scoreBoardAnswer += this.quizMain.questionsData[this.questionId].answer[i];
                            }
                        }
                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "</p>";

                        if (this.quizMain.questionsData[this.questionId].complete && this.quizMain.quizQuestions.pages[this.quizMain.currentPage - 1].autoplay === 'answer') {
                            this.quizMain.API.play();
                        }
                    }

                    if (this.quizMain.quizConfig.settings.requiredQuestions) {
                        if (this.quizMain.questionsData[this.questionId].answerState === "blank" || !this.quizMain.questionsData[this.questionId].complete) {
                            this.quizMain.hideVideoControls = true;
                        } else {
                            this.quizMain.hideVideoControls = false;
                        }
                    }

                    /* auto advance */
                    if (this.quizMain.quizConfig.settings.autoAdvance && this.quizMain.questionsData[this.questionId].answerState != "blank" && this.quizMain.questionsData[this.questionId].complete) {
                        if (this.quizMain.showNext()) {
                            this.quizMain.nextPage();
                        }
                        else if (this.quizMain.showLast()) {
                            if (this.quizMain.quizConfig.hasOwnProperty("database")) {
                                if (this.quizMain.quizConfig.database.sendFrom === "lastPage") {
                                    this.quizMain.submit();
                                } else {
                                    this.quizMain.checkAnswers();
                                }
                            } else {
                                this.quizMain.checkAnswers();
                            }
                        }
                    }
                };
            }
        ]
    };
}]);

/*MATCHING-PAIRS DIRECTIVE*/
angular.module("quickquiz").directive("matchingPairs", ["QuizStorage", function (QuizStorage) {
    return {
        restrict: 'E',
        templateUrl: "templates/question-types/matching-pairs.html",
        scope: {
            quizMain: "=",
            questionId: "="
        },
        controllerAs: "ctrl",
        controller: ["$scope",
            function ($scope) {
                this.quizMain = $scope.quizMain;
                this.questionId = $scope.questionId;
                if (typeof this.quizMain.questionsData[this.questionId].answer != 'object') {
                    this.quizMain.questionsData[this.questionId].answer = [];
                }

                /* buttons left */
                this.setMatchingLeft = function (optionSelected) {
                    delete this.quizMain.questionsData[this.questionId].answer[optionSelected];
                    if (this.quizMain.questionsData[this.questionId].left === optionSelected) {
                        this.quizMain.questionsData[this.questionId].left = "blank";
                    } else {
                        this.quizMain.questionsData[this.questionId].left = optionSelected;
                        if (this.quizMain.questionsData[this.questionId].right != "blank") {
                            this.addMatchingAnswer();
                        }
                    }
                    this.checkMatchingPairs();
                };

                /* buttons right */
                this.setMatchingRight = function (optionSelected) {
                    if (this.quizMain.questionsData[this.questionId].answer.indexOf(this.quizMain.questionsData[this.questionId].choicesRight[optionSelected]) > -1) {
                        delete this.quizMain.questionsData[this.questionId].answer[this.quizMain.questionsData[this.questionId].answer.indexOf(this.quizMain.questionsData[this.questionId].choicesRight[optionSelected])];
                    }
                    if (this.quizMain.questionsData[this.questionId].right === optionSelected) {
                        this.quizMain.questionsData[this.questionId].right = "blank";
                    } else {
                        this.quizMain.questionsData[this.questionId].right = optionSelected;
                        if (this.quizMain.questionsData[this.questionId].left != "blank") {
                            this.addMatchingAnswer();
                        }
                    }
                    this.checkMatchingPairs();
                };

                this.addMatchingAnswer = function () {
                    this.quizMain.questionsData[this.questionId].answer[this.quizMain.questionsData[this.questionId].left] = this.quizMain.questionsData[this.questionId].choicesRight[this.quizMain.questionsData[this.questionId].right];
                    this.quizMain.questionsData[this.questionId].borderColorsRight[this.quizMain.questionsData[this.questionId].right] = this.quizMain.questionsData[this.questionId].borderColorsLeft[this.quizMain.questionsData[this.questionId].left]
                    this.quizMain.questionsData[this.questionId].left = "blank";
                    this.quizMain.questionsData[this.questionId].right = "blank";
                };


                /* for select */
                this.setSelectAnswer = function () {
                    this.quizMain.questionsData[this.questionId].answer = [];
                    for (i = 0; i < this.quizMain.questionsData[this.questionId].choicesRight.length; i++) {
                        this.quizMain.questionsData[this.questionId].answer[i] = this.quizMain.questionsData[this.questionId].choicesRight[this.quizMain.questionsData[this.questionId].selectModel[i]];
                    }
                    this.isBlank = this.quizMain.questionsData[this.questionId].answer.every(function (element) {
                        return !element;
                    });

                    if (this.isBlank) {
                        this.quizMain.questionsData[this.questionId].answerState = "blank";
                    } else {
                        this.checkMatchingPairs();
                    }
                };


                this.checkMatchingPairs = function () {
                    this.quizMain.questionsData[this.questionId].complete = true;
                    if (this.quizMain.questionsData[this.questionId].answer.length > this.quizMain.questionsData[this.questionId].answer.toString().length || this.quizMain.questionsData[this.questionId].answer.length === 0) {
                        this.quizMain.questionsData[this.questionId].answerState = "blank";
                    } else {
                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer = "";
                        this.quizMain.questionsData[this.questionId].answerState = "answered";

                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer = "";
                        if (this.quizMain.questionsData[this.questionId].graded) {
                            if (this.quizMain.questionsData[this.questionId].solution.toString() === this.quizMain.questionsData[this.questionId].answer.toString()) {
                                this.quizMain.questionsData[this.questionId].answerState = "right";
                                if (this.quizMain.quizQuestions.pages[this.quizMain.currentPage - 1].autoplay === 'right') {
                                    this.quizMain.API.play();
                                }
                            } else {
                                this.quizMain.questionsData[this.questionId].answerState = "wrong";
                            }
                        }

                        for (i = 0; i < this.quizMain.questionsData[this.questionId].solution.length; i++) {
                            this.scoreLeft = this.quizMain.questionsDataCopy[this.questionId].choicesLeft[i];
                            this.scoreRight = this.quizMain.questionsData[this.questionId].answer[i];
                            if (this.quizMain.questionsData[this.questionId].imagesLeft === true) {
                                this.scoreLeft = "<img src='" + this.quizMain.questionsDataCopy[this.questionId].choicesLeft[i] + "'>";
                            }
                            if (this.quizMain.questionsData[this.questionId].imagesRight === true) {
                                this.scoreRight = "<img src='" + this.quizMain.questionsData[this.questionId].answer[i] + "'>";
                            }
                            this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<p>";
                            if (this.quizMain.questionsData[this.questionId].graded && this.quizMain.quizConfig.score.showIcons) {
                                if (this.quizMain.questionsData[this.questionId].answer[i] === this.quizMain.questionsData[this.questionId].solution[i]) {
                                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<span class='icon-right'></span>";
                                } else if (this.quizMain.questionsData[this.questionId].answer[i] != undefined) {
                                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<span class='icon-wrong'></span>";
                                }
                            }
                            if (this.quizMain.questionsData[this.questionId].answer[i] === undefined) {
                                this.quizMain.questionsData[this.questionId].complete = false;
                                this.quizMain.questionsData[this.questionId].scoreBoardAnswer += this.scoreLeft + " - ";
                            } else {
                                this.quizMain.questionsData[this.questionId].scoreBoardAnswer += this.scoreLeft + " - " + this.scoreRight;
                            }
                            this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "</p>";
                        }

                        if (this.quizMain.questionsData[this.questionId].complete && this.quizMain.quizQuestions.pages[this.quizMain.currentPage - 1].autoplay === 'answer') {
                            this.quizMain.API.play();
                        }
                    }


                    if (this.quizMain.quizConfig.settings.requiredQuestions) {
                        if (this.quizMain.questionsData[this.questionId].answerState === "blank" || !this.quizMain.questionsData[this.questionId].complete) {
                            this.quizMain.hideVideoControls = true;
                        } else {
                            this.quizMain.hideVideoControls = false;
                        }
                    }

                    /* auto advance */
                    if (this.quizMain.quizConfig.settings.autoAdvance && this.quizMain.questionsData[this.questionId].answerState != "blank" && this.quizMain.questionsData[this.questionId].complete) {
                        if (this.quizMain.showNext()) {
                            this.quizMain.nextPage();
                        }
                        else if (this.quizMain.showLast()) {
                            if (this.quizMain.quizConfig.hasOwnProperty("database")) {
                                if (this.quizMain.quizConfig.database.sendFrom === "lastPage") {
                                    this.quizMain.submit();
                                } else {
                                    this.quizMain.checkAnswers();
                                }
                            } else {
                                this.quizMain.checkAnswers();
                            }
                        }
                    }
                };

            }
        ]
    };
}]);

/*SHORT-ANSWER DIRECTIVE*/
angular.module("quickquiz").directive("shortAnswer", ["QuizStorage", function (QuizStorage) {
    return {
        restrict: 'E',
        templateUrl: "templates/question-types/short-answer.html",
        scope: {
            quizMain: "=",
            questionId: "="
        },
        controllerAs: "ctrl",
        controller: ["$scope",
            function ($scope) {
                this.quizMain = $scope.quizMain;
                this.questionId = $scope.questionId;
                this.containsArrObj = QuizStorage.containsArrObj;
                this.change = function () {
                    if (this.quizMain.questionsData[this.questionId].answer === " ") {
                        this.quizMain.questionsData[this.questionId].answer = undefined;
                    }
                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer = "";
                    if (this.quizMain.questionsData[this.questionId].answer === undefined || this.quizMain.questionsData[this.questionId].answer === "") {
                        this.quizMain.questionsData[this.questionId].answerState = "blank";
                    } else {
                        this.quizMain.questionsData[this.questionId].answerState = "answered";
                        if (this.quizMain.quizQuestions.pages[this.quizMain.currentPage - 1].autoplay === 'answer') {
                            this.quizMain.API.play();
                        }
                        if (this.quizMain.questionsData[this.questionId].graded) {
                            if (this.containsArrObj(this.quizMain.questionsData[this.questionId].solutionToLowerCase, this.quizMain.questionsData[this.questionId].answer.toLowerCase())) {
                                this.quizMain.questionsData[this.questionId].answerState = "right";
                                if (this.quizMain.quizQuestions.pages[this.quizMain.currentPage - 1].autoplay === 'right') {
                                    this.quizMain.API.play();
                                }
                            } else {
                                this.quizMain.questionsData[this.questionId].answerState = "wrong";
                            }
                        }

                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<p>";
                        if (this.quizMain.questionsData[this.questionId].graded && this.quizMain.quizConfig.score.showIcons) {
                            if (this.quizMain.questionsData[this.questionId].answerState === "right") {
                                this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<span class='icon-right'></span>";
                            } else if (this.quizMain.questionsData[this.questionId].answerState === "wrong") {
                                this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<span class='icon-wrong'></span>";
                            }
                        }
                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer += this.quizMain.questionsData[this.questionId].answer;
                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "</p>";
                    }

                    if (this.quizMain.quizConfig.settings.requiredQuestions) {
                        if (this.quizMain.questionsData[this.questionId].answerState === "blank") {
                            this.quizMain.hideVideoControls = true;
                        } else {
                            this.quizMain.hideVideoControls = false;
                        }
                    }
                };

            }
        ]
    };
}]);

/*LONG-ANSWER DIRECTIVE*/
angular.module("quickquiz").directive("longAnswer", ["QuizStorage", function (QuizStorage) {
    return {
        restrict: 'E',
        templateUrl: "templates/question-types/long-answer.html",
        scope: {
            quizMain: "=",
            questionId: "="
        },
        controllerAs: "ctrl",
        controller: ["$scope",
            function ($scope) {
                this.quizMain = $scope.quizMain;
                this.questionId = $scope.questionId;
                this.change = function () {
                    if (this.quizMain.questionsData[this.questionId].answer === " ") {
                        this.quizMain.questionsData[this.questionId].answer = undefined;
                    }
                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer = "";

                    if (this.quizMain.questionsData[this.questionId].answer === undefined || this.quizMain.questionsData[this.questionId].answer === "") {
                        this.quizMain.questionsData[this.questionId].answerState = "blank";
                    } else {
                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer = "<p>" + this.quizMain.questionsData[this.questionId].answer + "</p>";
                        this.quizMain.questionsData[this.questionId].answerState = "answered";
                        if (this.quizMain.quizQuestions.pages[this.quizMain.currentPage - 1].autoplay === 'answer') {
                            this.quizMain.API.play();
                        }
                    }

                    if (this.quizMain.quizConfig.settings.requiredQuestions) {
                        if (this.quizMain.questionsData[this.questionId].answerState === "blank") {
                            this.quizMain.hideVideoControls = true;
                        } else {
                            this.quizMain.hideVideoControls = false;
                        }
                    }
                };
            }
        ]
    };
}]);

/*LIKERT-SCALE-SLIDER DIRECTIVE*/
angular.module("quickquiz").directive("likertScale", ["QuizStorage", function (QuizStorage) {
    return {
        restrict: 'E',
        templateUrl: "templates/question-types/likert-scale.html",
        scope: {
            quizMain: "=",
            questionId: "="
        },
        controllerAs: "ctrl",
        controller: ["$scope",
            function ($scope) {
                this.quizMain = $scope.quizMain;
                this.questionId = $scope.questionId;
                this.quizMain.questionsData[this.questionId].choices = [];
                for (var i = this.quizMain.questionsData[this.questionId].minValue; i < this.quizMain.questionsData[this.questionId].maxValue + 1; i++) {
                    this.quizMain.questionsData[this.questionId].choices.push(i);
                }

                //slider have default values
                if (this.quizMain.questionsData[this.questionId].scaleType === "slider" && typeof this.quizMain.questionsData[this.questionId].defaultValue === 'number') {
                    if (this.quizMain.questionsData[this.questionId].answer === undefined) {
                        this.quizMain.questionsData[this.questionId].answer = this.quizMain.questionsData[this.questionId].defaultValue;
                    }
                    this.quizMain.questionsData[this.questionId].answerState = "answered";
                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer = "";
                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer = "<p>" + this.quizMain.questionsData[this.questionId].answer + "</p>";
                }

                /* action for slider */
                this.change = function () {
                    this.quizMain.questionsData[this.questionId].answerState = "answered";
                    if (this.quizMain.quizQuestions.pages[this.quizMain.currentPage - 1].autoplay === 'answer') {
                        this.quizMain.API.play();
                    }
                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer = "";
                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer = "<p>" + this.quizMain.questionsData[this.questionId].answer + "</p>";

                };

                /* action for buttons */
                this.setAnswers = function (id, optionSelected) {
                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer = "";
                    if (this.quizMain.questionsData[this.questionId].answer === optionSelected) {
                        this.quizMain.questionsData[this.questionId].answer = undefined;
                        this.quizMain.questionsData[this.questionId].answerState = "blank";

                    } else {
                        this.quizMain.questionsData[this.questionId].answerState = "answered";
                        if (this.quizMain.quizQuestions.pages[this.quizMain.currentPage - 1].autoplay === 'answer') {
                            this.quizMain.API.play();
                        }
                        this.quizMain.questionsData[this.questionId].answer = optionSelected;
                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<p>";
                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer += this.quizMain.questionsData[this.questionId].choices[this.quizMain.questionsData[this.questionId].answer];
                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "</p>";
                    }

                    if (this.quizMain.quizConfig.settings.requiredQuestions) {
                        if (this.quizMain.questionsData[this.questionId].answerState === "blank") {
                            this.quizMain.hideVideoControls = true;
                        } else {
                            this.quizMain.hideVideoControls = false;
                        }
                    }

                    /* auto advance */
                    if (this.quizMain.quizConfig.settings.autoAdvance && this.quizMain.questionsData[this.questionId].answerState != "blank") {
                        if (this.quizMain.showNext()) {
                            this.quizMain.nextPage();
                        }
                        else if (this.quizMain.showLast()) {
                            if (this.quizMain.quizConfig.hasOwnProperty("database")) {
                                if (this.quizMain.quizConfig.database.sendFrom === "lastPage") {
                                    this.quizMain.submit();
                                } else {
                                    this.quizMain.checkAnswers();
                                }
                            } else {
                                this.quizMain.checkAnswers();
                            }
                        }
                    }
                }
            }
        ]
    };
}]);

/*RATING DIRECTIVE*/
angular.module("quickquiz").directive("rating", ["QuizStorage", function (QuizStorage) {
    return {
        restrict: 'E',
        templateUrl: "templates/question-types/rating.html",
        scope: {
            quizMain: "=",
            questionId: "="
        },
        controllerAs: "ctrl",
        controller: ["$scope",
            function ($scope) {
                this.quizMain = $scope.quizMain;
                this.questionId = $scope.questionId;
                this.quizMain.questionsData[this.questionId].choices = [];
                for (var i = this.quizMain.questionsData[this.questionId].maxValue; i > 0; i--) {
                    this.quizMain.questionsData[this.questionId].choices.push(i);
                }
                this.setAnswers = function (id, optionSelected) {
                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer = "";
                    if (this.quizMain.questionsData[this.questionId].answer === optionSelected) {
                        this.quizMain.questionsData[this.questionId].answer = undefined;
                        this.quizMain.questionsData[this.questionId].answerState = "blank";
                    } else {
                        this.quizMain.questionsData[this.questionId].answerState = "answered";
                        if (this.quizMain.quizQuestions.pages[this.quizMain.currentPage - 1].autoplay === 'answer') {
                            this.quizMain.API.play();
                        }
                        this.quizMain.questionsData[this.questionId].answer = optionSelected;

                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "<p>";
                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer += this.quizMain.questionsData[this.questionId].choices[this.quizMain.questionsData[this.questionId].answer];
                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer += "</p>";
                    }

                    if (this.quizMain.quizConfig.settings.requiredQuestions) {
                        if (this.quizMain.questionsData[this.questionId].answerState === "blank") {
                            this.quizMain.hideVideoControls = true;
                        } else {
                            this.quizMain.hideVideoControls = false;
                        }
                    }

                    /* auto advance */
                    if (this.quizMain.quizConfig.settings.autoAdvance && this.quizMain.questionsData[this.questionId].answerState != "blank") {
                        if (this.quizMain.showNext()) {
                            this.quizMain.nextPage();
                        }
                        else if (this.quizMain.showLast()) {
                            if (this.quizMain.quizConfig.hasOwnProperty("database")) {
                                if (this.quizMain.quizConfig.database.sendFrom === "lastPage") {
                                    this.quizMain.submit();
                                } else {
                                    this.quizMain.checkAnswers();
                                }
                            } else {
                                this.quizMain.checkAnswers();
                            }
                        }
                    }
                }
            }
        ]
    };
}]);

/* MATRIX DIRECTIVE */
angular.module("quickquiz").directive("matrix", ["QuizStorage", function (QuizStorage) {
    return {
        restrict: 'E',
        templateUrl: "templates/question-types/matrix.html",
        scope: {
            quizMain: "=",
            questionId: "="
        },
        controllerAs: "ctrl",
        controller: ["$scope",
            function ($scope) {
                this.quizMain = $scope.quizMain;
                this.questionId = $scope.questionId;

                if (this.quizMain.questionsData[this.questionId].choicesType === 'rating') {
                    this.quizMain.questionsData[this.questionId].choices = [];
                    for (var i = this.quizMain.questionsData[this.questionId].maxValue; i > 0; i--) {
                        this.quizMain.questionsData[this.questionId].choices.push(i);
                    }
                }

                this.changeRating = function (row, index) {
                    this.quizMain.questionsData[this.questionId].answer[row] = index;
                    this.quizMain.questionsData[this.questionId].answerState[row] = "answered";
                    this.checkMatrix();
                };

                this.change = function (index) {
                    this.quizMain.questionsData[this.questionId].answer[index] = parseInt(this.quizMain.questionsData[this.questionId].answer[index]);
                    this.quizMain.questionsData[this.questionId].answerState[index] = "answered";
                    this.checkMatrix();
                };

                this.checkMatrix = function () {
                    this.quizMain.questionsData[this.questionId].complete = true;
                    this.quizMain.questionsData[this.questionId].scoreBoardAnswer = [];
                    for (var p = 0; p < this.quizMain.questionsData[this.questionId].rows.length; p++) {
                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer[p] = "";
                        if (this.quizMain.questionsData[this.questionId].graded && this.quizMain.questionsData[this.questionId].answerState[p] != "blank") {
                            if (this.quizMain.questionsData[this.questionId].solution[p] === this.quizMain.questionsData[this.questionId].answer[p]) {
                                this.quizMain.questionsData[this.questionId].answerState[p] = "right";
                                if (this.quizMain.quizQuestions.pages[this.quizMain.currentPage - 1].autoplay === 'right') {
                                    this.quizMain.API.play();
                                }
                            } else {
                                this.quizMain.questionsData[this.questionId].answerState[p] = "wrong";
                            }
                        }

                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer[p] += "<p>";
                        if (this.quizMain.questionsData[this.questionId].graded && this.quizMain.quizConfig.score.showIcons) {
                            if (this.quizMain.questionsData[this.questionId].answerState[p] === "right") {
                                this.quizMain.questionsData[this.questionId].scoreBoardAnswer[p] += "<span class='icon-right'></span>";
                            } else if (this.quizMain.questionsData[this.questionId].answerState[p] === "wrong") {
                                this.quizMain.questionsData[this.questionId].scoreBoardAnswer[p] += "<span class='icon-wrong'></span>";
                            }
                        }

                        if (this.quizMain.questionsData[this.questionId].answer[p] === undefined) {
                            this.quizMain.questionsData[this.questionId].complete = false;
                        } else {
                            this.quizMain.questionsData[this.questionId].scoreBoardAnswer[p] += this.quizMain.questionsData[this.questionId].choices[this.quizMain.questionsData[this.questionId].answer[p]];
                        }
                        this.quizMain.questionsData[this.questionId].scoreBoardAnswer[p] += "</p>";
                    }

                    if (this.quizMain.questionsData[this.questionId].complete && this.quizMain.quizQuestions.pages[this.quizMain.currentPage - 1].autoplay === 'answer') {
                        this.quizMain.API.play();
                    }

                    if (this.quizMain.quizConfig.settings.requiredQuestions) {
                        if (this.quizMain.questionsData[this.questionId].answerState === "blank" || !this.quizMain.questionsData[this.questionId].complete) {
                            this.quizMain.hideVideoControls = true;
                        } else {
                            this.quizMain.hideVideoControls = false;
                        }
                    }

                    /* auto advance */
                    if (this.quizMain.quizConfig.settings.autoAdvance && this.quizMain.questionsData[this.questionId].answerState != "blank" && this.quizMain.questionsData[this.questionId].complete) {
                        if (this.quizMain.showNext()) {
                            this.quizMain.nextPage();
                        }
                        else if (this.quizMain.showLast()) {
                            if (this.quizMain.quizConfig.hasOwnProperty("database")) {
                                if (this.quizMain.quizConfig.database.sendFrom === "lastPage") {
                                    this.quizMain.submit();
                                } else {
                                    this.quizMain.checkAnswers();
                                }
                            } else {
                                this.quizMain.checkAnswers();
                            }
                        }
                    }
                };
            }
        ]
    };
}])

