import chalk from "chalk";
import figlet from "figlet";
import boxen from "boxen";

figlet.textSync(
  "Akshit.",
  {
    font: "Katakana",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  },
  (err, data) => {
    if (err) {
      console.log("something went wrong", err);
      return;
    }
    console.log(data);
  }
);
