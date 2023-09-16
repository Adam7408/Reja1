// npm - Node Package Manager

// Module packagelar 3 hil
// 1) CORE
// 2) EXTERNAL
// 3) FILE

// Module CORE: nodeJSni o'ziga ustanovka qilib berilgan modullar

//-----------------------------------------------------------------

// setTimeout: functionni qandaydir vaqtda ishga tushirib beradi
// setTimeout - 2ta paremeter qabul qiladi
// 1) function
// 2) time

// setTimeout(function() {
//     console.log("ishga tushdi");
// }, 5000); // 5 sekund

// 5 sekundda function ishga tushirib beradi

//------------------------------------------------

// setInterval: har bir sekundta ishga tushirib beradi
// setInterval - 2ta parameter qabul qiladi
// 1) function
// 2) time

// let number = 0;
// setInterval(function() {
//     console.log(number);
//     number++;
// }, 5000);

//----------------------------------------------------

// fs module ichida ko'p methodlari bor

// fsni objectini olib beradi
const fs = require("fs");
const { networkInterfaces } = require("os");
// input.txt fileni ochib beradi
const data = fs.readFileSync("./input.txt", "utf-8");
console.log(data);

console.log("**********************");
// yangi text qo'shish
fs.writeFileSync("./input.txt", `${data} \n\t\t by Ali`);
const newData = fs.readFileSync("./input.txt", "utf-8");
console.log(newData);

// \n\t\t -- n: yangi satr, t: taq, t: tab
