/*
 * @Author: qlw longwen@spacesystech.com
 * @Date: 2023-02-10 14:41:45
 * @LastEditTime: 2023-02-10 22:37:06
 * @LastEditors: LittleQ
 * @Description: 描述
 * @FilePath: \JS_Question\javescript\example\01.js
 */

let obj1 = {
  name: "tom",
  age: 20,
  fruit: ["apple", "orange", "banana", "veg"],
};

// let obj2 = obj1;
// obj2.name = "alice";
// obj2.fruit[0] = "a";
// obj2.fruit[1] = "b";
// console.log(obj1);
// console.log(obj2);

console.log(
  "-----------------------------------------------------------------------------------------"
);

let obj3 = { ...obj1 };
obj3.name = "alice";
obj3.age = 12;
obj3.fruit[0] = "a";
obj3.fruit[1] = "b";
console.log(obj1);
console.log(obj3);

console.log(
  "-----------------------------------------------------------------------------------------"
);

const string = 'apple';
const number = 20;
const bigin = BigInt(658748984551231400);
const boolean = true;
const symbol = Symbol();

console.log(string.constructor === String) // true
console.log(number.constructor === Number) // true
console.log(bigin.constructor === BigInt) // true
console.log(boolean.constructor === Boolean) // true
console.log(symbol.constructor === Symbol) // true


const checkedType = (target) => Object.prototype.toString.call(target).replace(/\[object (\w+)\]/, "$1").toLowerCase();

function getDataType(target) {
  const type = Object.prototype.toString.call(target)
  let result = type.replace(/\[object (\w+)\]/, "$1").toLowerCase();
  return result
}

{


  const bigin = BigInt(1236587489845500);
  console.log(getDataType(bigin))
}