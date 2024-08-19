#! /usr/bin/env node

console.log("\n*****WELCOME TO COUNTDOWN TIMER*****\n");

import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";

const answer = await inquirer.prompt({
  name: "userInput",
  type: "number",
  message: "PLease enter the number of seconds you wish to execute",
  validate: (input: number) => {
    if (isNaN(input)) {
      return "please enter valid number";
    } else if (input > 60) {
      return "invalid input, numbers must be <= 60";
    } else {
      return true;
    }
  },
});

let input = answer.userInput;

function startTime(val: number) {
  const timeOfInterval = new Date().setSeconds(new Date().getSeconds() + val);
  const TimeOfInterval = new Date(timeOfInterval);
  setInterval(() => {
    const currentTime = new Date();
    const timeDifference = differenceInSeconds(TimeOfInterval, currentTime);

    if (timeDifference <= 0) {
      console.log("Timer has expired");
      process.exit();
    }
    const minute = Math.floor((timeDifference % (3600 * 24)) / 3600);
    const second = Math.floor(timeDifference % 60);
    console.log(`${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`);
  }, 1000);
}
startTime(input);
console.log("*****THANKS FOR YOUR INTEREST*****");
