// console.clear();

console.log("Script File 1 "); 
 
let e = document.querySelectorAll("button")
let b = document.querySelector(".Cont")
let F = true
for(let r of e ){
    r.onclick=()=>{

        if(F==true){
      b.style.backgroundColor=" rgb(105, 200, 245)"
    F = false}
    else {
    b.style.backgroundColor="aquamarine"
F=true}


    }
}