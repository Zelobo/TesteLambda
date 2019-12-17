/*variaveis 
var
let
const 
*/

//var
var a = 1

//let 
let b = 2

//const
const c = 3

/*Functions
hoisted
anonymous
constructors
*/

console.log( hoisted(a,b) )

//hoisted
function hoisted (arg1, arg2){
	return arg1;
}

console.log( hoisted(a,b) )

console.log( anonymous(a,b) )

//anonymous
let anonymous = function (arg1, arg2){
	return arg2;
}

console.log( anonymous(a,b) )

//constructor
function Constructor (arg1, arg2){
	
}
