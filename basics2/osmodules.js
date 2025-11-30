const os = require("os");

// CPU details
console.log(os.cpus());

// Free memory
console.log(os.freemem());
console.log(os.totalmem());

// Home directory
console.log(os.homedir());

// OS platform
console.log(os.platform());