// console.log("Welcome to smart note")

let body = document.querySelector("body");
let Cro = document.querySelector("section.Cro");
<<<<<<< HEAD
let Description = document.querySelector("section.Description");
let Pieces = document.querySelector("section.Piece");
let Price = document.querySelector("section.Price");
let Total_col = document.querySelector("section.Total");
let Cromic_nong = 1;
=======
let a = 1;
>>>>>>> a7f9bfb7882bd01e13ac159bb31cfe34b3d4d7ff

/////////////////////////////////////////////////////
/////////// CREATE DYNAMICALLY ELEMENTS /////////////
body.addEventListener("dblclick", () => {
    // console.log("dbl click success")
    //-------- CROMIC NONG -----------//

<<<<<<< HEAD
    let Dynamic_row_strong = document.createElement("strong");
    Cro.appendChild(Dynamic_row_strong);
    Dynamic_row_strong.classList.add("Dynamic_row");
    Cromic_nong = Cromic_nong + 1;
    Dynamic_row_strong.innerText = Cromic_nong;

    //-------- -------------- -----------//
    //-------- DESCRIPTION -----------//

    var Text_area_row = document.createElement("textarea");
    Description.appendChild(Text_area_row);
    Text_area_row.classList.add("Dynamic_row");

    //-------- ------------ -----------//
    //-------- PIECE -----------//

    let Pieces_row = document.createElement("input");
    Pieces.appendChild(Pieces_row);
    Pieces_row.classList.add("Dynamic_row");

    //-------- ------------ -----------//
    //-------- ------------ -----------//
    //-------- PRICE -----------//

    let Price_row = document.createElement("input");
    Price.appendChild(Price_row);
    Price_row.classList.add("Dynamic_row");

    //-------- ------------ -----------//
    //-------- PRICE -----------//

    let Total_row = document.createElement("strong");
    Total_col.appendChild(Total_row);
    Total_row.classList.add("Dynamic_row");

    //-------- ------------ -----------//
})

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////// MAKE AUTO ADJUST HEIGHT ////////

let SC_height;

body.addEventListener("click", () => {

    let Dynamic_rows_Pieces = document.querySelectorAll(".Piece > .Dynamic_row");
    Dynamic_rows_Pieces = Array.from(Dynamic_rows_Pieces)

    let Dynamic_rows_Price = document.querySelectorAll(".Price > .Dynamic_row");
    Dynamic_rows_Price = Array.from(Dynamic_rows_Price);

    let Dynamic_rows_Total = document.querySelectorAll(".Total > .Dynamic_row");
    Dynamic_rows_Total = Array.from(Dynamic_rows_Total);

    let Dynamic_rows_textarea = document.querySelectorAll(".Description > .Dynamic_row");
    Dynamic_rows_textarea = Array.from(Dynamic_rows_textarea);//MAKE NORMAL ARRAY

    Dynamic_rows_textarea.forEach(Element => {
        Element.addEventListener("keyup", e => {
            Element.style.height = `26px`;//MAKE DEFAULT HEIGHT
            SC_height = (e.target.scrollHeight)//INITIALIZE T.AREA HEIGHT

            Element.style.height = `${SC_height}px`;//SET HEIGHT DYNAMICALLY 

            let Cromic_of_row = Dynamic_rows_textarea.indexOf(Element)// INITIALIZE CROMIC OF LINES
            // console.log(Cromic_of_row)

            //SET DYNAMIC HEIGHT OF CROMIC
            let Dynamic_rows_Cro = document.querySelectorAll(".Cro > .Dynamic_row");
            // console.log(Dynamic_rows_Cro)
            Dynamic_rows_Cro[Cromic_of_row].style.height = `${SC_height}px`;

            //SET DYNAMIC HEIGHT OF PIECES

            // console.log(Dynamic_rows_Pieces)
            Dynamic_rows_Pieces[Cromic_of_row].style.height = `${SC_height}px`;

            //SET DYNAMIC HEIGHT OF PRICES

            // console.log(Dynamic_rows_Price)
            Dynamic_rows_Price[Cromic_of_row].style.height = `${SC_height}px`;

            //SET DYNAMIC HEIGHT OF TOTAL

            // console.log(Dynamic_rows_Price)
            Dynamic_rows_Total[Cromic_of_row].style.height = `${SC_height}px`;

        })
    });

    //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\///////////////
    ////////// MAKE SURE (PIECES * PRICE = TOTAL) ////////

    //==== WORK ON PIECE =======//
    Dynamic_rows_Pieces.forEach(Element => {

        Element.addEventListener("keyup", () => {
            // console.log(Element)
            let Piece_row_no = Dynamic_rows_Pieces.indexOf(Element);

            let Piece = Number(Dynamic_rows_Pieces[Piece_row_no].value)
            let Price = Number(Dynamic_rows_Price[Piece_row_no].value);
            let Total = Piece * Price;
            // let Total_str = toString(Total)

            Dynamic_rows_Total[Piece_row_no].innerText = Total
            // console.log(Total)

        })
    })
//================= =============== =========//
//========= WORK ON PRICE =========//

Dynamic_rows_Price.forEach(Element => {

    Element.addEventListener("keyup", () => {
        // console.log(Element)
        let Price_row_no = Dynamic_rows_Price.indexOf(Element);

        let Piece = Number(Dynamic_rows_Pieces[Price_row_no].value)
        let Price = Number(Dynamic_rows_Price[Price_row_no].value);
        let Total = Piece * Price;
        // let Total_str = toString(Total)

        Dynamic_rows_Total[Price_row_no].innerText = Total
        // console.log(Total)

    })
})
=======
body.addEventListener("dblclick", () => {
    console.log("dbl click success")
    // CREATE DYNAMIC_strong element
    let Dynamic_row_strong = document.createElement("strong");
    Cro.appendChild(Dynamic_row_strong);
    Dynamic_row_strong.classList.add("Dynamic_row");
    a = a+1;
    Dynamic_row_strong.innerText = a;
>>>>>>> a7f9bfb7882bd01e13ac159bb31cfe34b3d4d7ff

})