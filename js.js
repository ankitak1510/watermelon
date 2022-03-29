let name = {
    firstname: "ankita",
    lastname:"sharma",
    }

    let name2={
        firstname: "puja",
        lastname:"sharma",
    }
let printfullname = function (hometown, state){
     console.log(this.firstname+ " "+ this.lastname+ " "+ hometown+" "+ state);}
// fuction borrowing
 printfullname.call(name,"delhi", "new delhi");
 //bind method
 let printmyname= printfullname.bind(name2,"mumbai","maharashtra");
console.log(printmyname);
printmyname();

let student1={
    studentname:"ankita",
    studentage:"20",
}
 let printage= function( ){
     console.log(this.studentage);
 }

 let printstudentage = printage.bind(student1);
 
 printstudentage();


 




