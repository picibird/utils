// Importing File System and Utilities module
const fs = require("fs");
const util = require("util");

// Convert callback based methods to
// promise based methods
const write = util.promisify(fs.writeFile);
const read = util.promisify(fs.readFile);

export const file = {
  write,
  read,
};
