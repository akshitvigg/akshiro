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

const details = `
  ${chalk.bold.blue("name")}                                    ${chalk.yellow(
  "Akshit Vig"
)} 
  
  `;

console.log(
  boxen(details, {
    padding: 2,
    margin: 1,
    borderStyle: "double",
    borderColor: "blueBright",
    backgroundColor: "blackBright",
  })
);
