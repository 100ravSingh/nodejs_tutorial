// Import:

const path = require("path");

// Get file name
console.log(path.basename(__filename));

// Get directory name
console.log(path.dirname(__filename));

// Get extension
console.log(path.extname(__filename));

// Join paths
const fullPath = path.join(path.dirname(__filename), path.basename(__filename));
console.log(fullPath);
