// 泛型
function identify<T>(arg: T) :T {
  return arg;
}
// 泛型函数调用
// 1. 传入所有的参数，包含类型参数(一般情况下没必要执行传入的类型，保持精简，除非编译器不能够推断出传入参数的类型)
const output = identify<string>('myString');
// 2. 更普遍的方法，利用类型推断---即编译器会根据传入的参数自动地帮助我们确定T的类型：
let output2 = identify('myString');

// 使用泛型变量
function loggingIdentify<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
// 或者
function loggingIdentify2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

// 泛型类型
// 我们可以使用不同的泛型参数名
function identity<T>(arg: T[]): T[] {
  return arg;
}
let myIdentity: <U>(arg: Array<U>) => Array<U> = identity;
// 还可以使用带有调用签名的对象字面量来定义泛型函数
function identity2<T>(arg: T): T {
  return arg;
}
let myIndentity2:{<T>(arg: T): T} = identity2;

// 第一个泛型接口
interface GenericIdentityFn {
  <T>(arg: T): T;
}
function identity3<U>(arg: U): U {
  return arg;
}
let mtIdentity: GenericIdentityFn = identity3;
// 将泛型参数当作整个接口的一个参数
interface GenericIdentityFn2<T> {
  (arg: T): T;
}
function identity4<T>(arg: T): T {
  return arg;
}
let mnIdentity: GenericIdentityFn2<number> = identity4;

// 创建泛型类(无法创建泛型枚举和泛型命名空间)
class GenericNumber<T> {
  static MM: T; // 静态属性不能使用类的泛型类型，仅允许使用在实例属性上
  zeroValue: T;
  add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {return x+y; };

// 泛型约束
interface lengthWise {
  length: number;
}
function loggingIdentify3<T extends lengthWise>(arg: T): T {
  console.log(arg.length); // 有了length属性
  return arg;
}
loggingIdentify3(3) // 类型被约束了

// 在泛型里使用类类型
// 在typescript中使用泛型创建工厂函数时，需要引用构造函数的类类型，如：
function create<T>(c: {new (): T;}): T {
  return new c();
}
// 看一个更高级的例子
class BeeKeeper {
  hasMask: boolean;
}
class ZooKeeper {
  nametag: string;
}
class Animal2 {
  numLegs: number;
}
class Bee extends  Animal2 {
  keeper: BeeKeeper;
}
class Lion extends Animal2 {
  keeper: ZooKeeper;
}
function createInstance<A extends Animal2>(c: new () => A): A {
  return new c();
}
createInstance(Bee).keeper.hasMask;
createInstance(Lion).keeper.nametag;