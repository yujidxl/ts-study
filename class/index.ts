class Brid {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  say() {
    console.log(this.name);
  }
}

const brid = new Brid('Mary');
brid.say();

// 继承
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
class Shake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log('Slithering');
    super.move(distanceInMeters);
  }
}
class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}
let sam =  new Shake('Sammy ths Python');
let tom: Animal = new Horse('Tommy the Palomino');
sam.move();
tom.move(34);
class Dog extends Animal {
  constructor(name: string = 'dog') {
    super(name);
  }
  brak() {
    console.log('Woof! Woof');
  }
}
const dog = new Dog();
dog.brak();
dog.move(10);
dog.brak();

// 公有，私有与受保护的修饰符
// 默认public(在typescript里成员都默认为public)
// 私有(private): 当成员被标记为private时，它就不能在声明它的类的外部访问
class Check {
  private name: string;
  constructor(name) {
    this.name = name;
  }
}
const check = new Check('check').name;

