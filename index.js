import chalk from "chalk";
import figlet from "figlet";
import boxen from "boxen";
import terminalImage from "terminal-image";
import got from "got";

// figlet.text(
//   "もしもし.",
//   {
//     font: "Katakana",
//     horizontalLayout: "default",
//     verticalLayout: "default",
//     width: 80,
//     whitespaceBreak: true,
//   },
//   (err, data) => {
//     if (err) {
//       console.log("something went wrong", err);
//       return;
//     }
//     console.log(data);
//   }
// );

const body = await got();
console.log(await terminalImage.file);
