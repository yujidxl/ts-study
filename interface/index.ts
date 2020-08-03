// 检查特定属性label
function printLabel(labelledobj: { label: string }) {
  console.log(labelledobj.label);
}
let myObj = { size: 10, label: 'Size of Object' };
printLabel(myObj);

// 接口形式
interface labelledValue {
  label: string;
}
function printLabel2(labelledValue: labelledValue) {
  console.log(labelledValue.label);
}
printLabel2(myObj);

// 可选属性
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({ color: 'black' });

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20};
// p1.x = 5; 赋值错误

//TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似,
//只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12;
ro.push(15);
ro.length = 20;
a = ro;

// 最后一行赋值可以用类型断言重写
a = ro as number[];

// 最后const用于变量readonly用于属性

// 额外的属性检查
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare1(config: SquareConfig): { color: string; area: number } {
  // ...
}
let mySquare1 = createSquare({ colour: "red", width: 100 }); // colour为额外属性
// 1 绕过它(使用类型断言)
let mySquare2 = createSquare({ colour: 'red', width: 100} as SquareConfig);
// 2.SquareConfig带有上面定义的类型的color和width属性，并且还会带有任意数量的其它属性，那么我们可以这样定义它(最佳方式)
interface SquareConfig2 {
  color?: string;
  width?: number;
  [propName: string]: any;
}
//3.将这个对象赋值给一个另一个变量： 因为 squareOptions不会经过额外属性检查，所以编译器不会报错
let squareOptions = { colour: "red", width: 100 };
let mySquare3 = createSquare(squareOptions);
//上述方法建议最好不要多使用除非不清楚你要定义的对象是什么

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

// 可索引的类型（a[10],ageMap['dany']）
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ['Bob', 'Tim'];
let myStr: string = myArray[0];
//TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，
//但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，
//JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，
//因此两者需要保持一致。
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}
interface NotOkay {
  [x: number]: Animal;
  [y: string]: Dog;
}


// 类类型
interface ClockInterface {
  currentTime: Date;
}
class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {}
}
// 类里实现一个方法，如同下面的setTime方法一样
interface ClockInterface2 {
  currentTime: Date;
  setTime(d: Date);
}
class Clock2 implements ClockInterface2 {
  currentTime: Date;
  setTime(d: Date) {
      this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}
//接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。

// 继承接口
interface Shape {
  color: string;
}
interface Square extends Shape {
  sidLength: number;
}
let square = <Square> {};
square.color = 'blue';
square.sidLength = 10;

// 一个接口可以继承多个接口
interface PenStroke {
  penWidth: number;
}
interface Square1 extends Shape, PenStroke {
  sideLength: number;
}
let square1 = <Square1>{};
square1.color = "blue";
square1.sideLength = 10;
square1.penWidth = 5.0;

// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function (start1: number) {};
  counter.interval = 123;
  counter.reset = function() {};
  return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// 
