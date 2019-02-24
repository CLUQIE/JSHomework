
let basket = {
  goodlist: [],

  putToBasket(good){
    this.goodlist.push(good);
  },
  generateGoodhtml(index){
    let currentGood = this.goodlist[index];
    return `<li>${index+1}. ${currentGood.name} - ${currentGood.price}</li>`;
  },
  printBasketTotalValues(){
    let basketDiv = document.querySelector('#basket');
    let goodlistStr = 'Корзина пуста';
    if (this.goodlist.length > 0){
      goodlistStr = '<ul>';
      for (let i=0; i < this.goodlist.length; i++){
        goodlistStr += this.generateGoodhtml(i);
      }
      goodlistStr += `<p> В корзине ${this.countTotalNumber()} товаров на ${this.countTotalPrice()} рублей.</p>`;
    }
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
  },
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

});

basket.printBasketTotalValues();
