#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgCyan("\tWelcome to Table Generate App\t"));
let myTable = true;
while (myTable) {
    let input = await inquirer.prompt({
        name: "answer",
        type: "number",
        message: chalk.yellow("Enter your Number that you want to print it's Table:")
    });
    let myNumber = input.answer;
    if (myNumber) {
        console.log(chalk.cyanBright(`Here is the Table of ${myNumber}\n`));
        for (let i = 1; i <= 10; i++) {
            console.log(chalk.grey(`${myNumber} x ${i} = ${myNumber * i}`));
        }
    }
    else {
        console.log(chalk.blueBright(`Enter a input in numerical form`));
    }
    // asking user if he wants to print table again
    let againPrint = await inquirer.prompt({
        name: "askUser",
        type: "confirm",
        message: chalk.yellow("Do you want to print another Table"),
        default: "false"
    });
    if (againPrint.askUser === false) {
        myTable = false;
        console.log(chalk.bgCyan(`\n\tThankyou for using the App\t\n`));
    }
}
