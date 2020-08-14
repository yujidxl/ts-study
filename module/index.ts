/**
 * 关于术语的一点说明: 请务必注意一点，TypeScript 1.5里术语名已经发生了变化。
 * “内部模块”现在称做“命名空间”。 “外部模块”现在则简称为“模块”，
 * 这是为了与 ECMAScript 2015里的术语保持一致，(也就是说 module X { 相当于现在推荐的写法 namespace X {)。
 * 介绍
 * @description 大家最熟知的JavaScript模块加载器是服务于Node.js的 CommonJS和服务于Web应用的Require.js。
 */

 // 外部模块
/**
 * 在Node.js里大部分工作是通过加载一个或多个模块实现的。 我们可以使用顶级的 export声明来为每个模块都定义一个.d.ts文件，
 * 但最好还是写在一个大的.d.ts文件里。 我们使用与构造一个外部命名空间相似的方法，但是这里使用 module关键字并且把名字用引号括起来，
 * 方便之后import。 例如： 
 */
declare module "url" {
  export interface Url {
      protocol?: string;
      hostname?: string;
      pathname?: string;
  }

  export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}

declare module "path" {
  export function normalize(p: string): string;
  export function join(...paths: any[]): string;
  export let sep: string;
}
