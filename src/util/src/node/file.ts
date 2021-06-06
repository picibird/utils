// Importing File System and Utilities module
const fs = require("fs");
const util = require("util");

// Convert callback based methods to
// promise based methods
const write = util.promisify(fs.writeFile);
const read = util.promisify(fs.readFile);

// Reflect the contents of one directory to another.
import reflect from "@alumna/reflect";

const copy = async () => {
  let { res, err } = await reflect({
    src: "src/",
    dest: "dest/",
    // (OPTIONAL) Default to 'true'
    recursive: true,
    // (OPTIONAL) Default to 'true'
    // Delete in dest the non-existent files in src
    delete: true,
    // (OPTIONAL)
    // Array with files and folders not to reflect
    exclude: ["skip-this-file.txt", "skip/this/directory"],
  });

  if (err) console.error(err);
  else console.log(res); // Directory "src/" reflected to "dest/"
};

export const file = {
  write,
  read,
};
