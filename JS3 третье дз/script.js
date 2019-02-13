let a = [
  [{name: 'Mary', age:23}, {name: 'Mike', age:45}, {name: 'Nick', age:11}],
  [{name: 'Adam', age:56}, {name: 'Sara', age:21}, {name: 'Don', age:22}],
  [{name: 'Karl', age:34}, {name: 'Marta', age:76}, {name: 'John', age:19}]
];
let b = a.slice();
console.log(b[0][0]);


let basket = [
  [{name:'iPhone XR', price:800}],
  [{name:'Samsung', price:700}],
  [{name:'Xiaomi', price:600}]
];
summa = 0;
function countBasketPrice() {
  basket.forEach(function(item,i,array){
    c=item[0]['price'];
    summa=summa+c;
  });
  console.log('Сумма товаров корзины: ',summa,'$'); //выводит сумму price
}
countBasketPrice();

let lines = 20;
let str = " ";
let star = "*";
for (var i = 0; i < lines; i++) {
  str+=star;
  console.log(str);
}
