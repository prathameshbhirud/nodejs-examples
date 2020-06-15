var fs = require("fs");
var stream;
stream = fs.createReadStream("C://log.txt");

stream.on("data", function(data) {
    var chunk = data.toString();
    console.log(chunk);
}); 