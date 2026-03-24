import fs from "fs";

const content = fs.readFileSync("src/data/classInfo.ts", "utf-8");
const unescaped = content.replace(/\\u[\dA-F]{4}/gi, (match) => {
  return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
});

fs.writeFileSync("src/data/classInfo.ts", unescaped);
console.log("Done");
