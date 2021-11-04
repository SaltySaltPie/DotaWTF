const fse = require("fs-extra");

const srcDir = "./build/";
const desDir = "../server/client/nextApp/";

fse.removeSync(desDir);

fse.copySync(srcDir, desDir, { overwrite: true });

// console.log("hello world");
