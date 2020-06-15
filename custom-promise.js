var Q = require('q');

function Add(){
    var a,b,c;
    a = 5; b = 5;
    c = a + b;
}

var display_promise = Q.denodeify(Add);

var promise = Add;

promise.then(() => {
    console.log('Addition function completed.');
});