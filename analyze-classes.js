const fs = require("fs");

const html = fs.readFileSync("src/index.html", "utf-8");
const regex = /cdx-(m|p)(t|b|l|r|x|y)?-\d+/g;

const matches = html.match(regex) || [];
const counts = {};

matches.forEach((cls) => {
    counts[cls] = (counts[cls] || 0) + 1;
});

console.log("Class usage count:");
console.table(counts);

/*
 How t check 
    node analyze-classes.js
*/
