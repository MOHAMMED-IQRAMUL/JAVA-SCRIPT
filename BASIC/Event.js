console.clear();

console.log("HELLO JAVASCRIPT FROM EVENT.JS");

{
  let E1 = document.querySelectorAll("button");
  for (let X of E1) {
    X.onclick = () => {
      console.log("BUTTON");
    };
  }
}

{
  let E1 = document.querySelectorAll("button");
  for (let X of E1) {
    X.onclick = (X) => {
      console.log("BUTTON", X);
    };
  }
}

let E1 = document.querySelectorAll("button");
for (let x of E1) {
  x.addEventListener("click", () => {
    console.log(x, " BTN");
  });
}

let E = document.querySelectorAll("button");
E.forEach((e) => {
  e.addEventListener("click", () => {
    e.style.backgroundColor = "red";
  });
});

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  console.log(e.code);
});
