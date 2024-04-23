// write code here
let str = '31 45 12 67 34 86 23 37 19 41';
let numbers = str.split(' ').map(Number);
let sum = numbers.filter(num => num < 40).reduce((acc, curr) => acc + curr, 0);

console.log("ผลรวมของเลขที่น้อยกว่า 40:", sum); 
