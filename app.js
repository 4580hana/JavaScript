// 基礎問題
// Q1 変数
let nickname = 'ごっしー';
let age = 28;
let greet = '私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。'
console.log(greet);

// Q2 配列
let  languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go']
let messege = '私の好きな言語は' + languages[0] + 'です。次は' + languages[3] +'を勉強してみたいです。'
console.log(messege);

// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5 四則演算
let totalAge = playerList.reduce((sum, player) => sum + player.age, 0);
let averageAge = totalAge / 3
console.log(averageAge);

// Q6 関数
function sayHello() { 
  console.log("Hello");
}
sayHello();

let sayWorld = function() { 
  console.log('World');
};

sayWorld();

// Q7 メソッド
user.birthday = '2000-09-27';
user.sayHello = function() {
  console.log("Hello!");
};

console.log(user.birthday);
user.sayHello();

// Q8 引数
let calc = {
  add: (x, y) => console.log(x + y),
  subtract: (x, y) => console.log(x - y),
  multiply: (x, y) => console.log(x * y),
  divide: (x, y) => console.log(x / y),
};

calc.add(3, 4);       
calc.subtract(15, 5);
calc.multiply(7, 7);  
calc.divide(25, 5);   

// Q9 返り値
function remainder(x, y) {
  return x % y; 
}
let result = remainder(5, 3); 
let Answer = 5 + " を " + 3 + " で割った余りは " + result + " です。"

console.log(Answer);

// Q10 スコープ
// function foo() {
//   let x = 1;
// }
// console.log(x);

// スコープが関数の中のみ有効となっているため関数の外からはXを参照することができない


//応用問題
// Q1 標準組み込みオブジェクト
let nunmer =  Math.floor(Math.random() * 10); 
console.log(nunmer);

// Q2 コールバック関数
var alertmsg = function(){
  alert("Hello World!");
}
setTimeout(alertmsg, 3000);

// Q3 if
let num = 5;
if (num >= 0) {
  console.log('num is greater than 0');
} else if (num <= 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}

// Q4 for
let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(i);
}
console.log(numbers);

// Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  let item = mixed[i];

  if (typeof item === 'number') {

    if (item % 2 === 0) {
      console.log('even'); 
    } else {
      console.log('odd'); 
    }
  } else {

    console.log('not number');
  }
}
