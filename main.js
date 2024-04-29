#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.italic.cyanBright("\n \t\t code with Saqlain - word counter"));
console.log("=".repeat(60));
let answer = await inquirer.prompt([
    {
        name: "subject",
        type: "input",
        message: "Enter subjects",
    }
]);
let names = answer.subject.trim().split("");
console.log("=".repeat(60));
console.log(chalk.italic.cyanBright("-  subjects names:"));
console.log(names);
console.log(chalk.italic(`\n - Word Counter: ${chalk.italic.redBright(names.length)}`));
console.log("=".repeat(60));
