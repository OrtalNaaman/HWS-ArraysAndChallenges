//1. Return the first element in an array:
function getFirstValue(array) {
  return array[0];
}
console.log(getFirstValue([80, 100, 50, -6]));

//2. Drop the first element of an array:
function drop(array, index) {
  let newArray = [];
  for (let i = 0; i < index; i++) newArray[i] = array[i];
  for (let j = index; j < array.length - 1; j++) newArray[j] = array[j + 1];

  return newArray;
}
console.log(drop([1, 2, 3, 4], 3));

//3. Concatenate variable number of input arrays:
function concat(...array) {
  let newArray = [];
  for (let a of array) {
    a.forEach((element) => newArray.push(element));
  }
  return newArray;
}
console.log(concat([1, 2, 3], [4, 5], [6, 7]));
console.log(concat([1], [4], [6]));
console.log(concat([1, 2, 3, 4, 5, 6]));

//4. Array of multiples:
function arrayOfMultiples(num, length) {
  let array = new Array();
  for (let i = 0; i < length; i++) {
    array[i] = num * (i + 1);
  }
  return array;
}
console.log(arrayOfMultiples(7, 5));

//5. Seven Boom!
function sevenBoom(array) {
  let str = array.toString();
  if (str.indexOf("7") >= 0) return "Boom!";
  else return "There is no 7 in the array";
}
console.log(sevenBoom([1, 2, 34, 27]));
console.log(sevenBoom([7, 2, 34, 20]));
console.log(sevenBoom([5, 2, 34, 20]));

//6. Length of a nested array:
function getLength(array) {
  var counter = 0;
  array.forEach((element) => {
    Array.isArray(element) ? (counter += element.length) : counter++;
  });
  return counter;
}

console.log(getLength([1, [4, 1], [2, 3]]));
console.log(getLength([1, [2], [2, 3], 4, 6, []]));

//7. I made a mistake:
function getValue(...array) {
  var str = array
    .toString()
    .split(",")
    .filter((x) => x !== "")
    .toString();
  if (str === "") return "What...why did you make this?";
  else return str;
}

console.log(getValue([[], [["Hello! How are you?"]], []]));
console.log(getValue([[[]], [["Hello, Shalom"]], [], []]));
console.log(getValue([[[[[[[[[[]]]]]]]]]]));

//8. Mutations Only- Zeroes to the end:
function zeroesToEnd(array) {
  let end = array.length - 1;
  let i = 0;
  while (i < end) {
    if (array[i] === 0) {
      array.splice(i, 1);
      array.splice(end, 0, 0);
      end--;
    } else i++;
  }
  return array;
}

let array1 = [1, 2, 0, 0, 4, 0, 5];
zeroesToEnd(array1);
console.log(array1);
console.log(zeroesToEnd(array1.concat([0, 0, 0, 3])));
console.log(zeroesToEnd([0, 0, 0, 0]));

//9. Fill an array with new values:
function fill(array, value, start = 0, end = array.length) {
  for (let i = start; i < end; i++) {
    array[i] = value;
  }
  return array;
}

var array2 = [1, 2, 3];
console.log(fill(array2, "a"));
console.log(fill(Array(3), 2));
console.log(fill([4, 6, 8, 10], "*", 1, 3));

//10. Build a diamond machine:
function diamond(karat) {
  let dArray = new Array(karat);
  let point1 = Math.floor(karat / 2);
  let point2 = Math.floor(karat / 2);
  let perfectCut = true;
  if (karat % 2 === 0) {
    point1--;
    perfectCut = false;
  }
  for (let i = 0; i < Math.floor(karat / 2); i++) {
    dArray[i] = new Array(karat);
    for (let j = 0; j < karat; j++) {
      dArray[i][j] = 0;
    }
    dArray[i][point1] = 1;
    dArray[i][point2] = 1;
    point1--;
    point2++;
  }
  if (!perfectCut) {
    var end = karat - 1;
    point1 += 2;
    point2 -= 2;
  } else end = karat;

  for (let i = Math.floor(karat / 2); i < end; i++) {
    dArray[i] = new Array(karat);
    for (let j = 0; j < karat; j++) {
      dArray[i][j] = 0;
    }
    dArray[i][point1] = 1;
    dArray[i][point2] = 1;
    point1++;
    point2--;
  }
  if (perfectCut) return new Array([dArray, "perfect cut"]);
  else return new Array([dArray, "good cut"]);
}

console.log(diamond(4));
console.log(diamond(11));

//11. BinaryGap
function binaryRepresentation(N) {
  var res = N;
  var binary = [];
  var counter = 0;
  while (res > 0) {
    binary[counter] = res % 2;
    res = (res - (res % 2)) / 2;
    counter++;
  }
  return binary.reverse().toString().replace(/,/g, "");
}
// console.log("binaryRepresentation to 647:", binaryRepresentation(647));

function solution(N) {
  var binaryArray = binaryRepresentation(N).split("");
  var counter;
  var max = 0;
  for (let i = 0; i < binaryArray.length - 1; i++) {
    counter = 0;
    if (binaryArray[i] == 1 && binaryArray[i + 1] == 0) {
      while (binaryArray[i + 1] == 0) {
        counter++;
        i++;
      }
      if (binaryArray[i + 1] == 1) {
        if (counter > max) max = counter;
      }
    } else continue;
  }
  return max;
}
console.log("Max Binary Gap (the long way): ", solution(1041));
console.log("Max Binary Gap (the long way): ", solution(0));
//12. OddOccurrencesInArray

function solution1(A) {}
