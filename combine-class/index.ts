// 交叉类型
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
      (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
      if (!result.hasOwnProperty(id)) {
          (<any>result)[id] = (<any>second)[id];
      }
  }
  return result;
}

class Person {
  constructor(public name: string) { }
}
interface Loggable {
  log(): void;
}
class ConsoleLogger implements Loggable {
  log() {
      // ...
  }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();

// 联合类型
// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  // ...
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors

// 用户自定义的类型保护
function isFish(pet: Fish |  Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}
//在这个例子里， pet is Fish就是类型谓词。 谓词为 parameterName is Type这种形式， 
//parameterName必须是来自于当前函数签名里的一个参数名。
if (isFish(pet)) {
  pet.swim();
}
else {
  pet.fly();
}

//然而，类型别名不能出现在声明右侧的任何地方
type Yikes = Array<Yikes>; // error

// 接口vs类型别名
type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

// 字符串字面量类型
type Easing = "ease-in" | "ease-out" | "ease-in-out";

// 索引类型
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}
interface Personp {
  name: string;
  age: number;
}
let person: Personp = {
  name: 'Jarid',
  age: 35
}
let strings: string[] = pluck(person, ['name']);

// TypeScript提供了从旧类型中创建新类型的一种方式 — 映射类型。 
// 在映射类型里，新类型以相同的形式去转换旧类型里每个属性。
type Readonly1<T> = {
  readonly [p in keyof T]: T[p];
}
type Partial1<T> = {
  [p in keyof T]? : T[p];
}
type PersonPartial = Partial1<Person>;
type ReadonlyPerson = Readonly1<Person>;
type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };
//但它更有用的地方是可以有一些通用版本。
type Nullable<T> = { [P in keyof T]: T[P] | null };
type Partial2<T> = { [P in keyof T]?: T[P] };