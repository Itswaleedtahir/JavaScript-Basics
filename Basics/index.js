//let in javascript

let name = 'Waleed';
console.log(name);

//rules
//Cannot be a reserved word
//Should be  meaningful
//cannot start with a number(1name)
//Cannot contain a space or hypine(-)
//Are Case-sensitive

let firstName = 'waleed';
let lastName = 'tahir';

console.log(firstName +''+ lastName);

//const in javascript


const intrestRate = 0.3;
//we cannot assign another value to intrestRate as it is const
//intrestRate = 1;

//console.log(intrestRate);

//Primitives/ValueTypes

//let name = 'waleed'; //String literal
let age = 21; //Number literal
let isApproved = false; // Boolean literal
//let firstName = undefined; 
let selectColor = null;

//Objects in javascript

let person = {
    name: 'Waleed',
    age: 21,
}
//Dot notation
person.name = 'Tahir';

//Bracket Notation
person ['name']= 'Waleed';


console.log(person);

//Arrays in javascript
let seletColor = ['Red', 'Green', 'Blue', 'Yellow', ];
seletColor[4] = 'Black' 
console.log(seletColor.length);

//Function in javascript
function greet(){
    console.log('hello');
};

greet();