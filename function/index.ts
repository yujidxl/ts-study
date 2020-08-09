// 函数规定的参数值必须与调用时传入的参数值的数量保持一致
const func = function(dog: string, cat: string) {
  return dog + 'width' + cat;
}
func('black dog', 'white cat', 'color snake');//(error)

// 声明函数时参数中的可选参数必须放在必须参数的后面
const fullName = function(firstName?: string, lastName: string) {//(error)
  if(firstName)
    return firstName + lastName;
  else
    return lastName;
}

// 与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面
const add = function(y = 10, x: string) {
  return x+y;
}

// #剩余参数
// 必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，
// 或者你并不知道会有多少参数传递进来。
// 在JavaScript里，你可以使用 arguments来访问所有传入的参数。
const buildName: (firstName: string, ...restName: string[]) => string = function(firstName, ...restName) {
  return firstName + ' ' + restName.join(' ');
}
let empolyName = buildName('Joseph', 'Samul', 'Lucks', 'Mack', 'Linda');

// this参数在回调函数里
interface UIElement {
  addClickListenter(onClick: (this: void, e: Event) => void):void;
}
class Handler {
  info: string;
  onClickBad(this: Handler, e: Event) {
    this.info = e.message;
  }
}
let h = new Handler();
let uiElement: UIElement;
uiElement.addClickListenter(h.onClickBad); // 此处this被指向两个类型，void和Handler

// 重载
let suits = ['hearts', 'spades', 'clubs', 'diamons'];
function pickCard(x: {suit: string, card: number}[]): number;
function pickCard(x: number): {suit: string, card: number};
function pickCard(x): any {
  if (typeof x === 'object') {
    let pickCard = Math.floor(Math.random() * x.length);
    return pickCard;
  } else if (typeof x === 'number') {
    let pickSuit = Math.floor(x / 13);
    return { suit: suits[pickSuit], card: x % 13};
  }
};
let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 }
];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);





