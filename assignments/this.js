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

// code example for Window Binding        

//  window.setInterval(function(time){
//    time=1000
//    console.log("It Has Been 10 Seconds")   
//   window.setInterval(30)
//  })

//  return time

// function wait(){                      
//   for(i=0;i>=10;i++)           
//   setInterval(function() {
//     alert("Message to alert every 5 seconds");
// }, 5000);                      













// Principle 2                      

// code example for Implicit Binding


var MyObject = function () {
    this.name = 'MyObjectName';
    this.myProperty = 'property';



};

   MyObject.prototype.doStuff = function (action){
       console.log(this.name + ' is ' + action +'!');
   }
     var obj = new MyObject();
     obj.doStuff('awesome');

// Not my functon. I got it off the internet



// Principle 3

// code example for New Binding


// Principle 4

// code example for Explicit Binding