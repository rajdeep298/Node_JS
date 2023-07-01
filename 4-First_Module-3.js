const name=require('./4-First_Module-1');
const sayHi=require('./4-First_Module-2')
console.log(name);

sayHi("susan");
sayHi(name.john);
sayHi(name.peter);