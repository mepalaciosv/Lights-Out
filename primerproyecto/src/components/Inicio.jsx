import React from 'react';

const Inicio = () => {

    // Antes del return se puede poner codigo JS
    
    return (

        // En el return se puede escribir codigo .html

        <div class="m-0 row justify-content-center align-items-center">    
            <div class = "col-auto p-5 text-center">     
            <div class="row">          
                <div class="col">
                    <button id = "1" type="button" onClick={ () => { document.getElementById("1").style.background === "yellow" ? document.getElementById("1").style.background = "black": document.getElementById("1").style.background = "yellow"} } class="btn btn-dark p-4 rounded-0"> Light </button>
                    <button id = "2" type="button" onClick={ () => { document.getElementById("2").style.background === "yellow" ? document.getElementById("2").style.background = "black": document.getElementById("2").style.background = "yellow"} } class="btn btn-dark p-4 rounded-0"> Light </button>
                    <button id = "3" type="button" onClick={ () => { document.getElementById("3").style.background === "yellow" ? document.getElementById("3").style.background = "black": document.getElementById("3").style.background = "yellow"} } class="btn btn-dark p-4 rounded-0"> Light </button>
                    <button id = "4" type="button" onClick={ () => { document.getElementById("4").style.background === "yellow" ? document.getElementById("4").style.background = "black": document.getElementById("4").style.background = "yellow"} } class="btn btn-dark p-4 rounded-0"> Light </button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button id = "5" type="button" onClick={ () => { document.getElementById("5").style.background === "yellow" ? document.getElementById("5").style.background = "black": document.getElementById("5").style.background = "yellow"} } class="btn btn-dark p-4 rounded-0"> Light </button>
                    <button id = "6" type="button" onClick={ () => { document.getElementById("6").style.background === "yellow" ? document.getElementById("6").style.background = "black": document.getElementById("6").style.background = "yellow"} } class="btn btn-dark p-4 rounded-0"> Light </button>
                    <button id = "7" type="button" onClick={ () => { document.getElementById("7").style.background === "yellow" ? document.getElementById("7").style.background = "black": document.getElementById("7").style.background = "yellow"} } class="btn btn-dark p-4 rounded-0"> Light </button>
                    <button id = "8" type="button" onClick={ () => { document.getElementById("8").style.background === "yellow" ? document.getElementById("8").style.background = "black": document.getElementById("8").style.background = "yellow"} } class="btn btn-dark p-4 rounded-0"> Light </button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button id = "9" type="button" onClick={ () => { document.getElementById("9").style.background === "yellow" ? document.getElementById("9").style.background = "black": document.getElementById("9").style.background = "yellow"} } class="btn btn-dark p-4 rounded-0"> Light </button>
                    <button id = "10" type="button" onClick={ () => { document.getElementById("10").style.background === "yellow" ? document.getElementById("10").style.background = "black": document.getElementById("10").style.background = "yellow"} } class="btn btn-dark p-4 rounded-0"> Light </button>
                    <button id = "11" type="button" onClick={ () => { document.getElementById("11").style.background === "yellow" ? document.getElementById("11").style.background = "black": document.getElementById("11").style.background = "yellow"} } class="btn btn-dark p-4 rounded-0"> Light </button>
                    <button id = "12" type="button" onClick={ () => { document.getElementById("12").style.background === "yellow" ? document.getElementById("12").style.background = "black": document.getElementById("12").style.background = "yellow"} } class="btn btn-dark p-4 rounded-0"> Light </button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button id = "13" type="button" onClick={ () => { document.getElementById("13").style.background === "yellow" ? document.getElementById("13").style.background = "black": document.getElementById("13").style.background = "yellow"} } class="btn btn-dark p-4 rounded-0"> Light </button>
                    <button id = "14" type="button" onClick={ () => { document.getElementById("14").style.background === "yellow" ? document.getElementById("14").style.background = "black": document.getElementById("14").style.background = "yellow"} } class="btn btn-dark p-4 rounded-0"> Light </button>
                    <button id = "15" type="button" onClick={ () => { document.getElementById("15").style.background === "yellow" ? document.getElementById("15").style.background = "black": document.getElementById("15").style.background = "yellow"} } class="btn btn-dark p-4 rounded-0"> Light </button>
                    <button id = "16" type="button" onClick={ () => { document.getElementById("16").style.background === "yellow" ? document.getElementById("16").style.background = "black": document.getElementById("16").style.background = "yellow"} } class="btn btn-dark p-4 rounded-0"> Light </button>
                </div>
            </div>
            </div> 
        </div>
    )
}

export default Inicio;