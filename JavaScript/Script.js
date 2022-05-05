// console.log("Welcome to smart note")

let body = document.querySelector("body");
let Cro = document.querySelector("section.Cro");
let Description = document.querySelector("section.Description");
let Pieces = document.querySelector("section.Piece");
let Price = document.querySelector("section.Price");
let Total_col = document.querySelector("section.Total");
let Cromic_nong = 1;

/////////////////////////////////////////////////////
/////////// CREATE DYNAMICALLY ELEMENTS /////////////
body.addEventListener("dblclick", () => {
    // console.log("dbl click success")
    //-------- CROMIC NONG -----------//

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
    Pieces_row.setAttribute("type", "number")
    Pieces_row.classList.add("Dynamic_row");

    //-------- ------------ -----------//
    //-------- ------------ -----------//
    //-------- PRICE -----------//

    let Price_row = document.createElement("input");
    Price.appendChild(Price_row);
    Price_row.setAttribute("type", "number")
    Price_row.classList.add("Dynamic_row");

    //-------- ------------ -----------//
    //-------- TOTAL -----------//

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
    let Totals_value = document.querySelectorAll(".Total > .Dynamic_row")
    Totals_value = Array.from(Totals_value);


    let Dynamic_rows_textarea = document.querySelectorAll(".Description > .Dynamic_row");
    Dynamic_rows_textarea = Array.from(Dynamic_rows_textarea); //MAKE NORMAL ARRAY

    Dynamic_rows_textarea.forEach(Element => {
        Element.addEventListener("keyup", e => {
            Element.style.height = `26px`; //MAKE DEFAULT HEIGHT
            SC_height = (e.target.scrollHeight) //INITIALIZE T.AREA HEIGHT

            Element.style.height = `${SC_height}px`; //SET HEIGHT DYNAMICALLY
            // console.log(typeof Element.value)

            let Cromic_of_row = Dynamic_rows_textarea.indexOf(Element) // INITIALIZE CROMIC OF LINES
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

    var New_arr = [];
    let Total_of_totals_value;
    let Total_of_totals_dis;


    function Total_cal(Element, Arr_cro) {
        Element.addEventListener("keyup", () => {

            // console.log(Element)
            let Price_row_no = Arr_cro.indexOf(Element);

            // console.log(Price_row_no)
            let Price = Number(Dynamic_rows_Price[Price_row_no].value);
            let Piece = Number(Dynamic_rows_Pieces[Price_row_no].value)
            let Total = Piece * Price;
            Total = Total.toLocaleString("en-US");
            Dynamic_rows_Total[Price_row_no].innerText = Total

            New_arr = [];
            for (let b of Totals_value) {
                b = b.innerText;
                b = Number(b.replace(/,/g, ''))
                New_arr.push(b)
                Total_of_totals_value = New_arr.reduce((acc, val) => {
                    return acc + val;
                }, 0)
            }

            // console.log(Total_of_totals_value)
            Total_of_totals_dis = document.querySelector(".Number_div > .Total_of_Totals");

            Total_of_totals_value = Total_of_totals_value.toLocaleString("en-US");
            // console.log(Total_of_totals_value)

            Total_of_totals_dis.innerText = Total_of_totals_value;
            if (Total_of_totals_dis.innerText == "0") {
                Total_of_totals_dis.innerText = "0000";
            }
        })

    }


    //==== WORK ON PIECE =======//
    Dynamic_rows_Pieces.forEach(Element => {
        Total_cal(Element, Dynamic_rows_Pieces);
    })
    //================= =============== =========//
    //========= WORK ON PRICE =========//


    Dynamic_rows_Price.forEach(Element => {
        Total_cal(Element, Dynamic_rows_Price);
    })

})