// Objects 
var empInfo= {
empId:450,
empName:"Smith",
empDesignation : "CTO"
}
console.log(empInfo.empId);   // Dot Notation 
console.log(empInfo['empName']); // Bracket Notation 
empInfo.empId=109
console.log(empInfo.empId);

// Arrays
var studentInfo1 = [101,102,103,101,105]
console.log(studentInfo1[0]);

// Relational or Comparision Operator - the result of these operators would be always the boolean 
// Equality Operator 
var x = 10;
console.log(x=='10')   // loose comparision - it only checks the value 
console.log(x==='10')  // strict comparision - it checks both the value and ths datatype 

// logical operators - And (&&)- both should be mandate , OR (||) - only one can also work and NOT(!)
// Conditional Statements  
var firsDiv = 60 
var secondDiv = 59 
var thirdDiv = 39 
var fail = 23 
var marks= 25;
if(marks>=60){
    console.log("firstDiv");
    }
else if (marks>39 && marks<60){
    console.log("secondDiv");
}  
else if (marks>23 && marks<39){
    console.log("ThirdDiv");
}    
else{
    console.log("Fail");
}

