/*
 * @Author: qlw longwen@spacesystech.com
 * @Date: 2023-02-10 14:41:45
 * @LastEditTime: 2023-02-10 17:21:23
 * @LastEditors: qlw longwen@spacesystech.com
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
