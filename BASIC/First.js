console.clear();

console.log("HELLO JAVASCRIPT FROM FIRST.JS");

confirm("Are You Shure");

var A1 = 10;
console.log("A = ", A1);
let A2 = 10;
console.log("A = ", A2);
const A3 = 10;
console.log("A = ", A3);
{
  let Arr = {
    Name: "Js",
    Age: 1.5,
    Type: "Early",
  };
  console.log("ARR = ", Arr);

  console.log("ARR.Name = ", Arr.Name);
  console.log("ARR.Age = ", Arr.Age);
  console.log("ARR.Type = ", Arr.Type);

  console.log("ARR[Name] = ", Arr["Name"]);
  console.log("ARR[Age] = ", Arr["Age"]);
  console.log("ARR[Type] = ", Arr["Type"]);
}
console.log(eval(10 * 20));
{
  let N = 10;
  if (N === 10) {
    console.log("N === ", N);
  } else if (N == 20) {
    console.log("N == ", N);
  } else {
    console.log("N == ", N);
  }

  N = 20;
  if (N === 10) {
    console.log("N == ", N);
  } else if (N == 20) {
    console.log("N === ", N);
  } else {
    console.log("N == ", N);
  }

  N = 30;
  if (N === 10) {
    console.log("N == ", N);
  } else if (N == 20) {
    console.log("N == ", N);
  } else {
    console.log("N === ", N);
  }
}
{
  let N = 10 == "10" ? "String" : "Number";
  console.log("N == ", N);

  let X = prompt("Enter ");
  console.log("Type Of X is ", typeof X, " , X is ", X);

  Str = "This is Js Program";

  for (val of Str) console.log(val);

  let Arr = {
    Name: "Js",
    Age: 1.5,
    Type: "Early",
  };
  for (key in Arr) {
    console.log("ARR[Name] = ", Arr[key]);
  }

  console.log(Str.length);
  console.log(Str.toUpperCase());
  console.log(Str.toLowerCase());
  console.log(Str.slice(5, 10));
  console.log(Str.concat(" Learn"));
  console.log(Str.replace("Js", "JS"));
  console.log("Hi HELLO Hi HELLO Hi HELLO".replaceAll("Hi", "HI"));
  console.log(Str.charAt(0));
  console.log("    HEllO World   ".trim());

  let BIGSTR = `THIS IS THE USE OF STRING TEMPLATE LITERALS ${4 + 5}`;
  console.log(BIGSTR);
}
{
  let Arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let Arr2 = ["ONE", "TWO", "THREE"];
  let Arr3 = ["One", 2, "Three", 4];

  console.log("ARR1 = ", Arr1);
  console.log("ARR2 = ", Arr2);
  console.log("ARR3 = ", Arr3);

  Arr1.push(10);
  console.log("ARR1 = ", Arr1);
  Arr1.pop();
  console.log("ARR1 = ", Arr1);

  console.log("ARR1 = [", Arr1.toString(), "]");

  Arr1.unshift(10);
  console.log("ARR1 = ", Arr1);
  Arr1.shift();
  console.log("ARR1 = ", Arr1);

  console.log("ARR1.slice(0,5) ", Arr1.slice(0, 5));
  Arr1.splice(5, 0, "5");
  console.log('ARR1.splice(0,5,"5") ', Arr1);
  Arr1.splice(5, 1);
  console.log('ARR1.splice(0,5,"5") ', Arr1);

  function disp() {
    console.log("OKAY");
  }
  disp();
  let disp1 = () => {
    console.log("OKAY");
  };
  disp1();
}

let Arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("ARR1 = ", Arr1);

Arr1.forEach(function disp2(Val) {
  console.log(Val);
});

Arr1.forEach(
  (disp3 = (Val) => {
    console.log(Val);
  })
);

Arr1.forEach((Val) => {
  console.log(Val);
});

let Arr2 = Arr1.map((val) => {
  return val * 2;
});
console.log("ARR2 = ", Arr2);

Arr2 = Arr1.filter((val) => {
  if (val % 2 == 0) return val;
});
console.log("ARR2 = ", Arr2);

Arr2 = Arr1.reduce((prev, val) => {
  return prev + val;
});
console.log("ARR2 = ", Arr2);
