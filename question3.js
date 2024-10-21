//const { BalancedPool } = require('undici-types');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.

- If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
- If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"

CHALLENGE (SAVE FOR LAST):
- Show the remaining balance if the student has enough money to buy lunch
  - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"

- Show the amount of money still needed balance if the student does not have enough money
  - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
- If the student's remaining balance is less than $5, display "Warning: Low balance!"
- If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."

*/

//PLANNING
/*
- Recieve the studentname , the amount of money they have, the lunch item , and the cost of their lunch - 4 variables
- Create a function called "LunchMoneyChecker" 
   - this function will check if the lunch money> cost of their lunch or if the lunch money === cost of their lunch and display the message "[student name] purchased [lunch item] purchased!" if any of the two conditions are true
   - otherwise the function will check if the lunch money < cost of lunch and display  the message "[student name] does not have sufficient funds to buy [lunch item]!"
*/

//CHALLENGE PLANNING
/*
get the balance within the "LunchMoneyChecker"
the balance is amountoffunds-cost, display the balance to the student, with the student name, item and balance for each condition
create a separate function called "BalancedChecker"
within that function check if the balance is less then 5 and display "Warning: Low balance!"
if not then check if the balance is = 0 then display "Balance depleted! Please add more funds."
within the "LunchMoneyChecker" call the "BalanceChecker" function within each if condition



*/


//determine a proper function name and parameter variable name
function BalanceChecker(actualCost,studentFunds){
    
  let difference = studentFunds-actualCost;

  if (difference < 5){

    console.log("Warning: Low balance!")

  }
  else if (difference = 0){

    console.log("Balance depleted! Please add more funds.");

  }
}


function LunchMoneyChecker(studentName, studentFunds,preferedItem, actualCost){

  
  let balance = studentFunds-actualCost;
  
  if (studentFunds === actualCost || studentFunds > actualCost){
    BalanceChecker(actualCost,studentFunds);
    console.log(`${studentName} purchased ${preferedItem} purchased! Remaining Balance ${balance}`);

  }
  else if (studentFunds < actualCost){
    BalanceChecker(actualCost,studentFunds);
    console.log(`${studentName} does not have sufficient funds to buy ${preferedItem}! Needs ${balance} more`);
  }
  //write your code here
}

function StartApp(){
  readline.question('Please insert your name: ', name => {
    let studentName = name;
    readline.question('Please insert how much lunch money you have: ', amountOfLunchMoney => {
      let studentFunds = Number(amountOfLunchMoney);
      readline.question('Please insert the name of the item what you would like to buy: ', item => {
        let preferedItem = item;
        readline.question('Please insert how much your lunch costs: ', Cost => {
          let actualCost= Number(Cost);

          LunchMoneyChecker(name,amountOfLunchMoney,item,Cost);
          //call your function here.

          // readline.close();
          if(Cost !== "quit"){
            StartApp();
          } else {
            readline.close();
          }
        })
      })
    });
  });
}

StartApp();