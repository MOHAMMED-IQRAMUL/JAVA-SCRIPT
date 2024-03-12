console.clear();

console.log("FROM DOM ");

window.console.log("TEST");

document.designMode="on";
{
console.log(window);
console.dir(window);

console.log(window.document);
console.dir(window.document);

console.log(document);
console.dir(document);

console.log(document.body);
console.dir(document.body);
}
{
let EleById = document.getElementById("A1");
console.log(EleById);
console.dir(EleById);

let EleByClassName = document.getElementsByClassName("D1");
console.log(EleByClassName);
console.dir(EleByClassName);

let EleByTagName = document.getElementsByTagName("li");
console.log(EleByTagName);
console.dir(EleByTagName);

}
{
let QuerySelectId = document.querySelector("#A1");
console.log(QuerySelectId);
console.dir(QuerySelectId);

let QuerySelectClass = document.querySelector(".D2");
console.log(QuerySelectClass);
console.dir(QuerySelectClass);

let QuerySelectTag = document.querySelector("li");
console.log(QuerySelectTag);
console.dir(QuerySelectTag);

let QuerySelectIdAll = document.querySelectorAll("#A1");
console.log(QuerySelectIdAll);
console.dir(QuerySelectIdAll);

let QuerySelectClassAll = document.querySelectorAll(".D2");
console.log(QuerySelectClassAll);
console.dir(QuerySelectClassAll);

let QuerySelectTagAll = document.querySelectorAll("li");
console.log(QuerySelectTagAll);
console.dir(QuerySelectTagAll);

}
{
let EleById = document.getElementById("A1");
console.log(EleById.tagName);
console.dir(EleById.tagName);
console.log(EleById.innerText);
console.dir(EleById.innerText);
console.log(EleById.innerHTML);
console.dir(EleById.innerHTML);
console.log(EleById.textContent);
console.dir(EleById.textContent);

let EleByClassName = document.getElementsByClassName("D1")[0];
console.log(EleByClassName.tagName);
console.dir(EleByClassName.tagName);
console.log(EleByClassName.innerText);
console.dir(EleByClassName.innerText);
console.log(EleByClassName.innerHTML);
console.dir(EleByClassName.innerHTML);
console.log(EleByClassName.textContent);
console.dir(EleByClassName.textContent);

let EleByTagName = document.getElementsByTagName("li")[0];
console.log(EleByTagName.tagName);
console.dir(EleByTagName.tagName);
console.log(EleByTagName.innerText);
console.dir(EleByTagName.innerText);
console.log(EleByTagName.innerHTML);
console.dir(EleByTagName.innerHTML);
console.log(EleByTagName.textContent);
console.dir(EleByTagName.textContent);
}
{
let EleById = document.getElementById("A1");
EleById.innerText = "Changed";
EleById.innerHTML = "<h6>JK</h6>";

let El = document.querySelector("h1");
console.log(El.getAttribute("id"));
El.setAttribute("class", "A112");

let ELE = document.querySelector("h1");
ELE.style.color = "red";
ELE.style.fontFamily = "sans-serif";

let newELE = document.createElement("button");
newELE.innerText = "NEW!!";
newELE.style.color = "white";
newELE.style.backgroundColor = "pink";

let H1 = document.querySelector("h1");
H1.append(newELE);

let H2 = document.querySelector("h1");
H2.prepend(newELE);

let H3 = document.querySelector("h1");
H3.before(newELE);

let H4 = document.querySelector("h1");
H4.after(newELE);

let BA = document.querySelectorAll("button");
for (let N of BA) {
  N.classList.add("BA1");
}
for (let N of BA) {
  N.classList.remove("BA1");
}

let N = document.querySelector(".BX1");
N.insertAdjacentHTML("beforebegin", "<p>HELLO</p>");
N.insertAdjacentHTML("afterbegin", "<p>HELLO</p>");
N.insertAdjacentHTML("beforeend", "<p>HELLO</p>");
N.insertAdjacentHTML("afterend", "<p>HELLO</p>");
}