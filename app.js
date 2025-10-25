const os = require("os");

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Total Memory: ${freeMemory}`);
