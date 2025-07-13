// 1. find the string and number in the code?

const arr=["a","b",50,"c",100,10];

const str=arr.filter(item =>typeof item ==="string");
const num=arr.filter(item => typeof item ==="number" );

console.log(str);
console.log(num);


