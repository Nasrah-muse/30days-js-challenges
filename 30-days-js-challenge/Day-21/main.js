
//   Covert object to Array

function ObjectToArray(obj){
 
    return Object.entries(obj);
 
 }
 let student ={
    name : "Nasro",
    country: "Somalia",
    title : "Student"
}

 console.log(ObjectToArray(student));