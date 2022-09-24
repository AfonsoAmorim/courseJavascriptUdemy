//arrays

const friends = ['Maria','Carlos','João','Mariana'];
const year = [199,2005,2002,1998];
// arrays methods 
friends.push('Jay','Carl','Ju');
console.log(friends);
friends.unshift('Bob');
console.log(friends);
//remove elements
friends.pop(); // last element 
friends.shift();// first element 
console.log(friends.indexOf('Maria')); // find index 
console.log(friends);
console.log(friends.includes('Carlos')); // ver se esta incluso 

