// SOAL 1
const _number1: number = 9;
for (let i = 1; i <= 10; i++) {
    console.log(`${_number1} x ${i}`);
}


// SOAL 2

// Build in Method
let _string1: string = "kasur ini rusak";

console.log(_string1.split(" "))
let _reverseString1: string = _string1.split("").reverse().join("");
console.log(_string1 === _reverseString1 ? "palindrome" : "not palindrome")

// Looping Manual
console.log(_string1.length / 2);
let _hasilPalindrome = "palindrome";
for (let i = 0; i < _string1.length / 2; i++) {
    console.log(_string1[i]);
    console.log(_string1[_string1.length - 1 - i]);
    if (_string1[i] !== _string1[_string1.length - 1 - i]) {
       _hasilPalindrome = "not palindrome"
        break;
    }
}

console.log(_hasilPalindrome);


// SOAL 3

const cm = 100000;
const cmToKm = cm / 100000;
console.log(cmToKm)


// SOAL 4
const _number3 = 1000;
let numberToCurrency = _number3.toLocaleString("in-ID", {
    style: "currency",
    currency: "IDR",
})
console.log(numberToCurrency);

numberToCurrency = new Intl.NumberFormat("in-ID", {
    style: "currency",
    currency: "IDR",
}). format(_number3);
console.log(numberToCurrency);

// SOAL 5
const _string5 = "Hello world";
const searchString: string = "o";

console.log(_string5.replace(searchString, ""));