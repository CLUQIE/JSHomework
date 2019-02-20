/* let converter = {

    digits:{
      'еденицы': 0,
      'десятки': 0,
      'сотни': 0
    },

    convert(number){
      let num = parseInt(number);
      if (num>999 && isNaN(num)){
        console.log('Число больше 999');
      }else {
          this.digits['сотни'] = Math.floor(num/100);
          this.digits['десятки'] = Math.floor((num-this.digits['сотни']*100)/10);
          this.digits['еденицы'] = num % 10;
        }
      }
}
let input = prompt("Введите число от 0 до 999");
converter.convert(input);
console.log(converter.digits); */

let basket = {
  goodlist: [],

  putToBasket(good){
    this.goodlist.push(good);
  },

  countTotalPrice(){
    let totalPrice = 0;
    this.goodlist.forEach(function(element, index){
      totalPrice += element.price;
    });
    return totalPrice;
  },

  countTotalNumber(){
    let totalNumber = 0;
    this.goodlist.forEach(function(element, index){
      totalNumber +=1;
    });
    return totalNumber;
  }
};

let goodlist = [
  {
    name:"Iphone",
    price: 100,
    putToBasket(){
      basket.goodlist.push(this);
    },
  },
  {
    name:"Samsung",
    price: 10,
    putToBasket(){
      basket.goodlist.push(this);
    },
  },
  {
    name: "Nokia",
    price: 80,
    putToBasket(){
      basket.goodlist.push(this);
    },
  }
];

goodlist.forEach(function(item,index){
  item.putToBasket();
  if (index % 2 == 1) {item.putToBasket()}
});

console.log('Стоимость товаров: '+basket.countTotalPrice());
console.log('Всего товаров: '+basket.countTotalNumber());
