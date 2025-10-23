const path = require("path")
console.log("Directory Name: ", path.dirname(__dirname));
console.log("Present Directory Name: ", path.dirname(__filename));

console.log("File Name:",path.basename(__filename));   // index.js
console.log("File Extension:",path.extname(__filename))  // .js

const joinPath = path.join("/user", "document", "node","project>");
console.log("Joined Path:",joinPath);

const resolvepath = path.resolve("user","document","node","project>");
console.log("Resolve Path:",resolvepath);

const noramlizePath = path.normalize("/user/.documents/../node/projects");
console.log("Normalize Path:", noramlizePath);