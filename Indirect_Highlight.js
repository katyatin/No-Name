// ==UserScript==
// @name         Find People - EOS/BRK/START/BATCHING
// @namespace    https://drive.corp.amazon.com/personal/darshpat/AFTLite_Scripts
// @version      1.0
// @description  Highlights People in EOS / BRK / START / BATCHING
// @author       darshpat@
// @match        https://aftlite-na.amazon.com/labor_tracking/find_people*
// @match        https://aftlite-portal.amazon.com/labor_tracking/find_people*
// @grant        none
// ==/UserScript==

(function() {
    if(window.location.href.match("aftlite-na")) {
        let table = document.getElementById("recent_event_table");
        searchTable(table);
    }
    else {
        let portalTable = document.getElementsByTagName("tbody")[0];
        searchTable(portalTable);
    }
})();

function searchTable(t) {
    for(let row of t.rows) {
        if(row.rowIndex <= 1) continue; // first 2 rows of the table are not important
        let cell = row.cells[7].innerHTML.trim();
        let time = Number(row.cells[5].innerHTML.split("mins")[0]);
        if(cell.includes("EOS") && time >= 0) {
            if(window.location.href.match("aftlite-portal")) {
                row.cells[5].style.color = "white";
                row.cells[5].classList.remove("a-color-price");
            }
            row.cells[5].style.background = "purple"; //changes EOS color to purple
            row.cells[5].style.color = "white";
        }
        if(cell.includes("BRK") && time >= 20) {
            if(window.location.href.match("aftlite-portal")) {
                row.cells[5].style.color = "white";
                row.cells[5].classList.remove("a-color-price");
            }
            row.cells[5].style.background = "red"; //changes color to light red if greater than 20min
            row.cells[5].style.color = "white";
        }
        if(cell.includes("START") && time >= 5 && time <= 10) {
            if(window.location.href.match("aftlite-portal")) {
                row.cells[5].style.color = "white";
                row.cells[5].classList.remove("a-color-price");
            }
            row.cells[5].style.background = "yellow"; //changes color to light red if greater than 20min
            row.cells[5].style.color = "black";
        }
        if(cell.includes("START") && time >= 10) {
            if(window.location.href.match("aftlite-portal")) {
                row.cells[5].style.color = "white";
                row.cells[5].classList.remove("a-color-price");
            }
            row.cells[5].style.background = "red"; //changes color to light red if greater than 20min
            row.cells[5].style.color = "white";
        }
        if(cell.includes("BATCHING") && time >= 35) {
            if(window.location.href.match("aftlite-portal")) {
                row.cells[5].style.color = "white";
                row.cells[5].classList.remove("a-color-price");
            }
            row.cells[5].style.background = "red"; //changes color to light red if greater than 35min
            row.cells[5].style.color = "white";
        }
    }
}