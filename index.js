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

const details = `
  ${chalk.bold.blue("name")}                                    ${chalk.yellow(
  "Akshit Vig"
)} 
  
  `;

console.log(details);
