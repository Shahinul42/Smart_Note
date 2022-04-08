console.log("Welcome to smart note")

let body = document.querySelector("body");
let Cro = document.querySelector(".Cro");


body.addEventListener("dblclick", ()=>{
    console.log("dbl click success")
    // CREATE DYNAMIC_ROW CLASS
    let Dynamic_row = document.createElement("div");
    Cro.appendChild(Dynamic_row);
    Dynamic_row = Dynamic_row.classList.add("Dynamic_row")
    ///////////////////
    let Strong = document.createElement("strong")
    Dynamic_row.appendChild(Strong);

})