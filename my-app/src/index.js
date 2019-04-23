import food from "./foods";
import {choice,remove} from "./helper" ;

let fruit = choice(food);
console.log(` I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
let remaining = remove(food,fruit);
console.log(remaining);
//Delicious! May I have another?
console.log(`Delicious ! May I Have another ?`);
//I'm sorry, we're all out. We have 14 left.
console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`)