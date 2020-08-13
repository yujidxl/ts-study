class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) { 
    // 相当于声明且定义了this.firstName, this.middleInitial, this.lastName
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function gretters(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = new Student('Jane', 'M.', 'User');

document.body.innerHTML = gretters(user);