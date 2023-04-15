// Quesion 1

function sumOfEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  const numbers = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
  const result = sumOfEvenNumbers(numbers);
  console.log(result);
  
  // Question 2
  
  function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      for (let h = 0; h < vowels.length; h++) {
        if (str[i] == vowels[h]) {
          count++;
          break;
        }
      }
    }
    return count;
  }
  console.log("Vowels are " + countVowels("muneeb"));
  
  // Question 3
  
  function findStringLength(strings) {
    let stringLength = strings[0].length;
  
    for (let i = 1; i < strings.length; i++) {
      if (strings[i].length > stringLength) {
        stringLength = strings[i].length;
      }
    }
    console.log("Max string length is " + stringLength);
  }
  
  let strings = ["muneeb", "sameer", "jaffer", "hassan" "ali"];
  
  findStringLength(strings);


  // Question # 4

function average(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

let result = average([21, 22, 23, 24, 25,]);

console.log("Average is " + result);

  
  // Question # 5

function findKeys() {
  let brother = {
    name: "muneeb",
    age: 24,
    country: "Pakistan",
  };

  return Object.keys(brother);
}

console.log(findKeys());

// Question # 06

function objectKeyValues(brother) {
  let names = [];

  for (let index = 0; index < brother.length; index++) {
    names.push(brother[index].name);
  }

  return names;
}

let brother = [
  { name: "muneeb", age: 24 },
  { name: "salman", age: 26 },
  { name: "taha", age: 23 },
];

result = objectKeyValues(brother);
console.log(result);


// Question # 07

function getUniqueStrings(strings) {
  let uniqueStrings = [];
  for (let i = 0; i < strings.length; i++) {
    if (!uniqueStrings.includes(strings[i])) {
      uniqueStrings.push(strings[i]);
    }
  }
  return uniqueStrings;
}
let strings = ["muneeb", "saim", "ahmed", "asad", "saim", "muneeb", "saim"];
let uniqueStrings = getUniqueStrings(strings);
console.log(uniqueStrings)


// Question # 08

function product(numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
}
let Numbers = [1, 2, 3, 4,5];
let prod = product(Numbers);
console.log(prod);