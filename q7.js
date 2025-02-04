const fs = require("fs");

fs.appendFile("./abc.txt", "this is some appended text", (err, data) => {
  if (err) {
    console.log("no file exist");
  } else {
    fs.readFile("./abc.txt", "utf8", (err, data) => {
      if (err) {
        console.log("no file exist");
      } else {
        console.log(data);
      }
    });
  }
});
