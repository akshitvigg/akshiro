import chalk from "chalk";
import figlet from "figlet";
import boxen from "boxen";
import gradient from "gradient-string";

const text = figlet.textSync("Hi , I'm Akshit", {
  font: "Standard",
  verticalLayout: "default",
  horizontalLayout: "default",
  width: 80,
  whitespaceBreak: true,
});

const gradientText = gradient(["pink", "purple", "cyan"])(text);
console.log(gradientText);

console.log(
  chalk.greenBright(`
  ✔ Loading Akshit's details
  `)
);

const personelText = figlet.textSync(`PERSONAL DETAILS`, {
  font: "Small",
  horizontalLayout: "fitted",
  width: "100",
});
const gradientperText = gradient(["gray", "white"])(personelText);
console.log(gradientperText);

const personelDetails =` ${chalk.bold.blue("Name")}          -                ${chalk.yellow("Akshit Vig")}
 ${chalk.bold.blue("Status")}        -                ${chalk.yellow("Student")}
 ${chalk.bold.blue("Github")}        -                ${chalk.yellow("https://github.com/akshitvigg")}
 ${chalk.bold.blue("X")}             -                ${chalk.yellow("https://x.com/AkshitVig4")}
 ${chalk.bold.blue("Email")}         -                ${chalk.yellow("akshitvig48@gmail.com")}`;

 
 
console.log(boxen(personelDetails, { padding:1, borderStyle: "bold", backgroundColor: '#0d4e06', title:"About me ",  titleAlignment: 'center'}));

const skillText = figlet.textSync('SKILLS',{
  font : 'Small'
})

const gradSkilltext = gradient(['gray', 'white'])(skillText)

console.log(`
  ${gradSkilltext}`)

const skillsDetails = ` ${chalk.bold.blue("Languages")}        -               ${chalk.yellow("Java, C, C++, Python, Javascript, Typescript")}
 ${chalk.bold.blue("Frameworks")}       -               ${chalk.yellow("React, Flask ")}
 ${chalk.bold.blue("Technologies")}     -               ${chalk.yellow("Express, Nodejs, WebSocket, Prisma")}
 ${chalk.bold.blue("Databases")}        -               ${chalk.yellow("MongoDb, PostgreSQL, MySQL")}
 ${chalk.bold.blue("Others")}           -               ${chalk.yellow("Docker, Linux, Git")}`;


 console.log(boxen (skillsDetails, {padding:1 , borderStyle: 'bold' ,backgroundColor: '#0d4e06' }))
