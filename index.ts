import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

interface dataType {
  userId: string | number;
  userPin: number;
  accountBalance: number;
  currentbalance: number;
  withDrwal: number;
  transfer: number;
  accountType: string;
  enteredAmount: number;
  balance: number;
  newBalance: number;
  options: string;
}
let currentbalance = Math.random() * 100000;
let newBalance;
let enteredAmount = 0.0;

const userInput: dataType = await inquirer.prompt([
  {
    name: "userId",
    type: "input",
    message: "Enter Your User-ID",
  },
  {
    name: "userPin",
    type: "number",
    message: "Enter Your PIN",
  },
  {
    name: "accountType",
    type: "list",
    choices: ["Saving", "Current"],
    message: "Please Select your account type",
  },
  {
    name: "options",
    type: "list",
    choices: ["Withdrawl", "Fund Transfer", "Check Balance"],
    message: "Please Select :",
  },
]);
if (userInput.options == "Withdrawl") {
  const withDrwalAmount = await inquirer.prompt([
    {
      name: "withdrawlamount",
      type: "number",
      message: "Please Enter the amount",
    },
  ]);
  enteredAmount = withDrwalAmount.withdrawlamount;
  newBalance = currentbalance - enteredAmount;
  console.log(`Your new Balance is ${newBalance}`);
  const rainBow = chalkAnimation.rainbow("Thank you for Using this ATM");
  setTimeout(() => {
    rainBow.stop(); // Animation stops
  }, 1000);
  //console.log(chalkAnimation.rainbow(`("Thank You for Using this ATM")`));
} else if (userInput.options == "Fund Transfer") {
  const fundTransfer = await inquirer.prompt([
    {
      name: "fundTransfer",
      type: "number",
      message: "Please Enter the amount",
    },
  ]);
  enteredAmount = fundTransfer.fundTransfer;
  newBalance = currentbalance - enteredAmount;
  console.log(
    `Your new balance is ${newBalance} and the amount tranfered is ${enteredAmount}`
  );
  const rainBow = chalkAnimation.rainbow("Thank you for Using this ATM");
  setTimeout(() => {
    rainBow.stop(); // Animation stops
  }, 1000);
} else if (userInput.options == "Check Balance") {
  console.log(`Your exsiting Balance is ${currentbalance}`);
  const rainBow = chalkAnimation.rainbow("Thank you for Using this ATM");
  setTimeout(() => {
    rainBow.stop(); // Animation stops
  }, 100);
}
