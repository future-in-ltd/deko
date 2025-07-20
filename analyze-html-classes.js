const fs = require("fs");

// Load HTML
const html = fs.readFileSync("src/index.html", "utf8");

// Extract all class attributes
const classAttrRegex = /class\s*=\s*["']([^"']+)["']/gi;
let allClasses = [];

let match;
while ((match = classAttrRegex.exec(html)) !== null) {
    const classes = match[1].split(/\s+/);
    allClasses.push(...classes);
}

// Filter relevant classes
const spacingRegex = /^cdx-[mp][tblrxy]?-\d+$/; // margin/padding
const fontRegex = /^cdx-(text|fw|font)-.+$/; // font, weight, text size

const spacingClasses = {};
const fontClasses = {};

allClasses.forEach((cls) => {
    if (spacingRegex.test(cls)) {
        spacingClasses[cls] = (spacingClasses[cls] || 0) + 1;
    }
    if (fontRegex.test(cls)) {
        fontClasses[cls] = (fontClasses[cls] || 0) + 1;
    }
});

// Output
console.log("👉 Spacing Utility Classes:");
console.table(spacingClasses);

console.log("\n👉 Font Utility Classes:");
console.table(fontClasses);

/*
 How t check 
    node analyze-classes.js
*/
