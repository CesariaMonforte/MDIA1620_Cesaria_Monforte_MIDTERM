const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, display "Access Granted!"
- If the user's input does not match, display "Access Denied!"
- If the user's input is "forgot", display "Here is a hint"
- If the user's input is "reset", display "Let's reset your account"

CHALLENGE (SAVE FOR LATER)
- if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
- the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"
*/

//PLANNING
//----------------
/*Get the Users Passowrd and the user input to determine wether they are the same for log-in
Create 2 variables for the password and user input
Within the function for checking the user input : Use an if statement to determine if the password is exactly the same (stricktly equal operator) to the input
show the relevant message based on the following conditions
If the password is exactly the same as the input then display "Access Granted!"
if the password is not the same as the input display "Access Denied!"
if the user input is "forgot" then display "Heres a hint"
if the user input is "reset" then display "let's reset your account"
Call the function for determining wether the password is the same as the user input within the question function.*/

//CHALLENGE PLANNING
/* create a function called set password
this function will recieve one variable which is the password set
then check if the password set = "forgot" or "reset"
and display a message "This password you set should not be used because it glitches the system"
Call the function within the passwordchecker in the first condition to see if they are the same
check if the passwordset length to see if its greater then or equal to 5 using an if statement after getting the password set
if it greater then 5 characters long the program will proceed asking the user for their password input and the "PasswordChecker" function otherwise the program will display the message "Password is inadequate" and break

*/
//determine a proper function name and parameter variable name
function PasswordChecker(actualPassword, user_attempt){

  if (actualPassword === user_attempt){

    console.log("Access Granted!")

    PasswordSet(actualPassword);

  }
      
  else if(user_attempt === "forgot"){

        console.log("Here's a hint");
    
      }
  else if(user_attempt === "reset"){
    
        console.log("Let's reset your account");
    
      }
  else if(user_attempt !== actualPassword){
    console.log("Access Denied");
  }
      
  

  //write your code here
}

//CHALLENGE FUNCTION

function PasswordSet(actualPassword){

  if ((actualPassword = "forgot") || (actualPassword = "reset")){
      console.log("This password you set should not be used because it glitches the system");
  }

}


function StartApp(){
  readline.question('Please set up your password: ', predefinedPassword => {

    const actualPassword = predefinedPassword;

    if (predefinedPassword.length >= 5){
      readline.question('Please insert your password: ', attemptPassword => {

      
        const user_attempt = attemptPassword;
  
        PasswordChecker(predefinedPassword,attemptPassword);
        //call your function here.
  
        // readline.close();
  
        if(user_attempt !== "quit"){
          StartApp();
        } else {
          readline.close();
        }
      });


    }
    else {

      console.log("Password is inadequate");

      readline.close();

    }
    

    
  });
}

StartApp();