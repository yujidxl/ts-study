// 枚举(支持数字和字符串类型)
enum Direction {
  Up,
  Down,
  Left,
  Right
}
// 初始Up=0; Down=1; Left=2; Right=3;
enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right
}
// 初始化Up=1, 后面依次自增1, 即Down=2;

// 字符串的枚举，每一个成员都必须进行初始化

// 异构枚举（即既有字符串成员又有数字成员）
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = 'YES'
}

// 数字枚举成员具有反向映射，而字符串枚举成员不会生成反向映射
enum Enum {
  A
}
let b = Enum.A;
let nameOfA = Enum[b]; // "A"

// const枚举
const enum Enum2 {
  A = 1,
  B = A * 2
}
/**
 * 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，他们在编译阶段会被删除。
 */
const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

// 外部枚举: 描述已经存在的枚举类型的形状(不理解)
declare enum Enum3 {
  A = 1,
  B,
  C = 2
}
// 外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。
// 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。