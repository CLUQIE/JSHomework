let basket = {

  goodList: [],

  countTotalPrice(){
    let totalPrice = 0;
    this.goodList.forEach(function(element,index){
      totalPrice += element.price * element.count;
    })
    return totalPrice;
  },

  countTotalNumber(){
    let totalNumber = 0;
    this.goodList.forEach(function(element, index){
      totalNumber += element.count;
    })
    return totalNumber;
  },

  putToBasket(good){
    this.goodList.push(good);
  },

  generateGoodhtml(index){
    let currentGood = this.goodList[index];
    return `<li>${index+1}. ${currentGood.name} - ${currentGood.price} количество - ${currentGood.count}</li>`;
  }
};

let goodsList = [
  {
    name: 'Iphone',
    price: 1200,
    count: 0
  },
  {
    name: 'Samsung',
    price: 1000,
    count: 0
  },
  {
    name: 'Nokia',
    price: 500,
    count: 0
  }
];

goodsList.forEach(function(item,index){
  basket.putToBasket(item);
});

function printBasketTotalValues(){
  let basketDiv = document.querySelector('#basket');
  let goodListStr = 'Корзина пуста';
  if (basket.goodList.length > 0){
    goodListStr = '<ul>';
    for (let i=0; i < basket.goodList.length; i++){
      goodListStr += basket.generateGoodhtml(i);
    }
    goodListStr += 'Товаров в корзине - '+ basket.countTotalNumber() + '<br>' + ' Сумма товаров - '+ basket.countTotalPrice();
  }
  basketDiv.innerHTML = goodListStr;
}
function byIphone(){
  goodsList.forEach(function(item,index){
    if (item.name == 'Iphone'){
      item.count ++;
    }
  })
};
function bySamsung(){
  goodsList.forEach(function(item,index){
    if (item.name == 'Samsung'){
      item.count ++;
    }
  })
};
function byNokia(){
  goodsList.forEach(function(item,index){
    if (item.name == 'Nokia'){
      item.count ++;
    }
  })
};

elem.addEventListener("click",printBasketTotalValues);
elem2.addEventListener("click",byIphone);
elem3.addEventListener("click",bySamsung);
elem4.addEventListener("click",byNokia);
