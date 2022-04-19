console.log("Welcome to smart note")

let body = document.querySelector("body");
let Cro = document.querySelector("section.Cro");
let a = 1;


body.addEventListener("dblclick", () => {
    console.log("dbl click success")
    // CREATE DYNAMIC_strong element
    let Dynamic_row_strong = document.createElement("strong");
    Cro.appendChild(Dynamic_row_strong);
    Dynamic_row_strong.classList.add("Dynamic_row");
    a = a+1;
    Dynamic_row_strong.innerText = a;

})