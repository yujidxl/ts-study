// 数组泛型的定义
let list: Array<number> = [1, 2, 3];

// 一般定义
let arr: number[] = [1, 2, 3];

// 元组
let x: [string, number] = ['name', 1];
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// ts2.7后不支持访问超出元组长度的元素了，所以这种及后面的都会报错
// error, 字符串可以赋值给(string | number)类型 
x[3] = 'world'; 
// error, 'string' 和 'number' 都有 toString
console.log(x[5].toString());
x[6] = true; // Error, 布尔不是(string | number)类型

// 枚举enum
enum Color {Red = 1, Green, Blue};
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(colorName); //显示'Green'因为上面代码里它的值是2

// 类型断言
let someValue: any = 'this is string';
let strLength: number = (<string>someValue).length;
// as方式的类型断言(jsx语法时必须使用as方式的断言)
let strLength2: number = (someValue as string).length;

