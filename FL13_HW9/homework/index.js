function convert(...array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof element === 'string') {
      result.push(Number(element));
    } else {
      result.push(String(element));
    }
  }
  return result;
}

let two = 2;
let three = 3;
let four = 4;
function executeForEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    array[i] = fn(array[i]);
  }
}
executeForEach([1, two, three, four], (el) => console.log(el * two));

let eight = 8;
function mapArray(value, executeForEach) {
  let result = [];
  for (let i = 0; i < value.length; i++) {
    let arr = value[i];
    if (typeof arr === 'string') {
      arr = Number(arr);
    }
    result.push(executeForEach(arr));
  }
  return result;
}
mapArray([two, '5', eight], function (el) {
  return el + three;
});


let five = 5;
function filterArray(value, fn) {
  let result = [];
  for (let i = 0; i < value.length; i++) {
    let num = value[i];
    if (fn(num) === true) {
      result.push(num);
    }
  }
  return result;
}
filterArray([two, five, eight], function (el) {
  return el % two === 0;
});


function containsValue(array, el) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === el) {
      return true;
    }
  }
  return false;
}


function flipOver(string) {
  let array = string.split('');
  array.reverse();
  return array.join('');
}
flipOver('hey world');


function makeListFromRange(start, count) {
  return Array.apply(0, Array(count)).map((element, index) => index + start);
}



function getArrayOfKeys(arr, key) {
  let result = [];
  for (let el of arr) {
    result.push(el[key]);
  }
  return result;
}

const fruits = [
  { name: 'apple', weight: 0.5 },
  { name: 'pineapple', weight: 2 }
];

getArrayOfKeys(fruits, 'name');


let ten = 10;
let twenty = 20;
function substitute(value) {
  for (let i = 0; i < value.length; i++) {
    let arr = value[i];
    if (arr > ten && arr < twenty) {
      value[i] = '*';
    }
  }
  return value;
}


function getPastDay (date, number){
  let mills = number * 24 * 60 * 60 * 1000;
  const tempDate = new Date(2020, 0, 2);
  tempDate.setTime(Date.parse(date) - mills);
  return tempDate.getDate();
}


const date = new Date(2020, 0, 2);
getPastDay(date, 4);


function formatDate(d) {
  let isos = d.toISOString().split('T');
  return isos[0].split('-').join('/') + ' ' + isos[1].substr(0,5);
}
console.log(formatDate(new Date('6/15/2019 09:15:00')));
console.log(formatDate(new Date()));
