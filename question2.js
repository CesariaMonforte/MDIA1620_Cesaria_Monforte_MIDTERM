const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 72, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
*/

//PLANNING
/*
Recieve the students name and exam score in order to determine the letter grade.- 2 variables
create a function "GradeChecker" to check the range and assign the grade
Use if statements in the "GradeChecker" Function to check 
- if the grade is >=86 then display the message "Excellent! [Student Name] has an A."
- if the students grade is >72 and <=85 then display the message "Great job! [Student Name] has a B."
- if the students grade is >60 and <=72 then display the message "Good effort! [Student Name] has a C."
- if the students grade is >50 and <=60 then display the message "Needs improvement. [Student Name] has a D."
- if the students grade is <50 then display "Fail. [Student Name] has a F."
Call the function within the after the user inserts the name and score


*/

//determine a proper function name and parameter variable name
function GradeChecker(studentName, studentScore){

  if (studentScore >= 86){
    console.log(`Excellent! ${studentName} has an A.`);
  }
  else if (studentScore > 72 && studentScore <=85){
    console.log(`Great job! ${studentName} has a B.`);
  }
  else if (studentScore > 60 && studentScore <=72 ){
    console.log(`Good effort! ${studentName} has a C.`);
  }
  else if (studentScore >=50 && studentScore <=60){
    console.log(`Needs improvement. ${studentName}  has a D.`);
  }
  else if (studentScore <50){
    console.log(`Fail. ${studentName}  has a F.`);
  }
  

  //write your code here
}

function StartApp(){
  readline.question('Please insert your name: ', name => {
    const studentName = name;
    readline.question('Please insert the your score: ', score => {

      const studentScore = Number(score);

      GradeChecker(name,score);
      //call your function here.

      // readline.close();
      if(score !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();