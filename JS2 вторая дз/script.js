/*let a = 1, b =1 ,c,d;
c=++a;
alert(c); префексная запись будет 2

d = b++;
alert(d) постфиксная запись будет 1

c=(2+ ++a);
alert(c); выведет 5 потому что а будет равно 3 и +2

d=(2+ b++);
alert(d); постфиксная запись b = 2 + 2 = 4 тк b накопит +1 после вывода

alert(a); 3 после примера С
alert(b); 3 после примера D

var a = 2;
var x = 1 +(a*=2); //выведет 5 */

a = -5;
b = 7;
c=0;
if ((a >= 0) & (b >= 0)) {
  c= a-b;
}
else if ((a < 0) & (b < 0)) {
  c= a*b;
}
else {
  c=a+b;
}
alert(c);

var f,g;

function sum(x,y){
  summa=x+y;
  return(summa); //склеивается строка, не знаю почему
}
function razn(x,y){
  return(x-y);
}
function ymn(x,y){
  return(x*y);
}
function del(x,y){
  return(x/y);
}
alert(sum(prompt(f),prompt(g)));
alert(razn(prompt(f),prompt(g)));
alert(ymn(prompt(f),prompt(g)));
alert(del(prompt(f),prompt(g)));

//5 задание не успел сделать
