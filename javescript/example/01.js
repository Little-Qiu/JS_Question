/*
 * @Author: qlw longwen@spacesystech.com
 * @Date: 2023-02-10 14:41:45
 * @LastEditTime: 2023-03-29 20:49:21
 * @LastEditors: qiulongwen
 * @Description: 描述
 * @FilePath: \NoteBook\javescript\example\01.js
 */

// let obj1 = {
//   name: "tom",
//   age: 20,
//   fruit: ["apple", "orange", "banana", "veg"],
// };

// let obj2 = obj1;
// obj2.name = "alice";
// obj2.fruit[0] = "a";
// obj2.fruit[1] = "b";
// console.log(obj1);
// console.log(obj2);

// console.log(
//   "-----------------------------------------------------------------------------------------"
// );

// let obj3 = { ...obj1 };
// obj3.name = "alice";
// obj3.age = 12;
// obj3.fruit[0] = "a";
// obj3.fruit[1] = "b";
// console.log(obj1);
// console.log(obj3);

// console.log(
//   "-----------------------------------------------------------------------------------------"
// );

// const string = 'apple';
// const number = 20;
// const bigin = BigInt(658748984551231400);
// const boolean = true;
// const symbol = Symbol();

// console.log(string.constructor === String) // true
// console.log(number.constructor === Number) // true
// console.log(bigin.constructor === BigInt) // true
// console.log(boolean.constructor === Boolean) // true
// console.log(symbol.constructor === Symbol) // true


// const checkedType = (target) => Object.prototype.toString.call(target).replace(/\[object (\w+)\]/, "$1").toLowerCase();

// function getDataType(target) {
//   const type = Object.prototype.toString.call(target)
//   let result = type.replace(/\[object (\w+)\]/, "$1").toLowerCase();
//   return result
// }

// {
//   const bigin = BigInt(1236587489845500);
//   console.log(getDataType(bigin))
// }

// let arr = [1, 1, 2, 3, 4, 5, 6, 2, 3, 4, 4, 5, 6];
// let uniqueArray = Array.from(new Set(arr));
// console.log(uniqueArray)

// 数组乱序
// function shuffle(arr) {
//     let new_arr = arr.map(i => ({v: i, r: Math.random()}));
//     new_arr.sort((a, b) => a.r - b.r);
//     arr.splice(0, arr.length, ...new_arr.map(i => i.v));
// }

// let a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// let n = 10000;
// let count = (new Array(a.length)).fill(0);

// for (let i = 0; i < n; i ++) {
//     shuffle(a);
//     count[a.indexOf('a')]++;
// }

// console.log(count);


// 2019.12.20优化版本，去除多余循环
function shuffle(arr) {
    let i = arr.length;
    while (--i) {
        let j = Math.floor(Math.random() * i);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
}
let a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
let n = 10000;
let count = (new Array(a.length)).fill(0);

for (let i = 0; i < n; i++) {
    shuffle(a);
    count[a.indexOf('a')]++;
}

console.log(count);