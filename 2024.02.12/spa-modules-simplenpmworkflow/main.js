// ???
// importing packages from npm
import ora from "ora";
import chalk from "chalk";

// default export
import getNextColor from "./functions.js";

const spinner = ora(`Loading rainbows`).start();

setInterval(() => {
  const color = getNextColor();
  spinner.color = color;
  spinner.text = `Loading ${chalk[color]("rainbows")}`;
}, 500);

setTimeout(() => {
  spinner.stop();
  process.exit();
}, 10000);
