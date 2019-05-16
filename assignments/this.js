/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Using call or apply you can refer `${this}` to any abject
 * 2. `This` can be undefined using 'strict'
 * 3. It can be used global
 * 4. It can be bound to another function keeping same argument from first function.
 *
 * write out a code example of each explanation above
 */

// Principle 1

//Window/Global
// function myName(name) {
  // console.log(this);
// }
// myName('Mike');







// Principle 2                      

// code example for Implicit Binding


// var MyObject = function () {
    // this.name = 'MyObjectName';
    // this.myProperty = 'property';
// 
// 
// 
// };
// 
  //  MyObject.prototype.doStuff = function (action){
      //  console.log(this.name + ' is ' + action +'!');
  //  }
    //  var obj = new MyObject();
    //  obj.doStuff('awesome');
// 
// Not my functon. I got it off the internet



// Principle 3

// code example for New Binding
function angryProgrammer(friend) {
  this.statement ='Grrrr';
  this.friend= friend;
  this.speak = function(){
    console.log(this.statement + this.friend);
    console.log(this);
  };
  
}
const mike = new angryProgrammer('Bill');
const bill  = new angryProgrammer('Mike');

//mike.speak();
//bill.speak();

// Principle 4
mike.speak.call(bill); bill.speak.apply(mike);

// code example for Explicit Binding