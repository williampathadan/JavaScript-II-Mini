/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - 'this' keyword points to the Global scope by default.
* 2. Implicit Binding - Object before the '.' (dot) will become 'this'.
* 3. New binding - using the 'new' keyword
* 4. Explicit Binding - using the call, bind and apply methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);


// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function (name) {
        console.log(`${this.greeting} ${name}`);
        console.log(this);
    }
};
myObj.sayHello("William");


// Principle 3

// code example for New Binding
class User {
    constructor(name) {
        this.name = name;
    }
    getName () {
        console.log(`New user's name is ${this.name}`);
    }
}
const newUser = new User("William");
newUser.getName();

// Principle 4

// code example for Explicit Binding
Animal.call(this, options);
