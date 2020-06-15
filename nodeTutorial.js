var Tutor = require('./tutorial.js');

exports.NodeTutorial = function(){
    console.log("from NodeTutorial");
    function pTutor(){
        var PTutor = Tutor;
        PTutor.tutorial();
    }
}
