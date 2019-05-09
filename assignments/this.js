/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Scope ; THis == the window/console object
* 2. Implicit object =before the dot is this
* 3. New binding This will be the new object by the binding
* 4. Explicit binding  a call or apply method defiens this
*
* write out a code example of each explanation above
*/

// Principle 1
myname= mike
console.log('my name is',this)

// code example for Window Binding

// Principle 2
 function(){
 	this.function= x;
 
 this.displayX= function(){
 	console.log(`x:`$(this.function)}
 }
// code example for Implicit Binding

// Principle 3
function Person(firstName,lastName){
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}



// code example for New Binding
 function newFunction() {
 	console.log(this.yes)
 }
let myFunction ={
	name: 'Someone',
	boo: 'Boo!!' 
}
// Principle 4
newFunction.call(myFunction)


// code example for Explicit Binding