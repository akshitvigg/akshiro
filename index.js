import chalk from "chalk";
import figlet from "figlet";
import boxen from "boxen";
import gradient from "gradient-string";

const text = figlet.textSync("Hi , I'm Akshit", {
  font: "Small",
  verticalLayout: "default",
  horizontalLayout: "default",
  width: 80,
  whitespaceBreak: true,
});

const gradientText = gradient(["red", "yellow", "cyan"])(text);
console.log(gradientText);

console.log(
  chalk.greenBright(`
  ✔ Loading Akshit's details`)
);

const personelText = figlet.textSync(`PERSONAL DETAILS`, {
  font: "Mini",
  horizontalLayout: "fitted",
  width: "80",
});
const gradientperText = gradient(["gray", "white"])(personelText);
console.log(gradientperText);

const personelDetails =` ${chalk.bold.blue("Name")}          -                ${chalk.yellow("Akshit Vig")}
 ${chalk.bold.blue("Status")}        -                ${chalk.yellow("Student")}
 ${chalk.bold.blue("Github")}        -                ${chalk.yellow("https://github.com/akshitvigg")}
 ${chalk.bold.blue("X")}             -                ${chalk.yellow("https://x.com/AkshitVig4")}
 ${chalk.bold.blue("Email")}             -            ${chalk.yellow("akshitvig48@gmail.com")}`;

 
 
console.log(boxen(details, { padding:1, borderStyle: "bold", backgroundColor: '#0d4e06', title:"About me ",  titleAlignment: 'center'}));
