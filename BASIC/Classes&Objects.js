console.clear();

console.log("FROM CLASSES & OBJECTS");

const Student = {
  Name: "XYZ",
  Age: 123,
  DispName: function () {
    console.log("Name : ", this.Name);
  },
  DispAge() {
    console.log("Age : ", this.Age);
  },
};

const Prog = {
  PName: "BTECH",
  Disp() {
    console.log("Age ", this.Age);
  },
};

Prog.__proto__ = Student;

class MyClass {
  constructor(M) {
    this.M = M;
  }
  Disp1() {
    console.log(this.M);
  }
}
class MyDerivedClass extends MyClass {
  constructor(M, N) {
    super(M);
    this.N = N;
  }
  Disp2() {
    super.Disp1();
    console.log(this.N);
  }
}

let M1 = new MyClass();
let M2 = new MyClass("THIS IS M2 OBJECT");

let MD1 = new MyDerivedClass();
let MD2 = new MyDerivedClass("THIS IS MD2 OBJECT", "THIS IS MD2 DERIVED");

try {
  console.log(A);
} catch (e) {
  console.log(e);
}

