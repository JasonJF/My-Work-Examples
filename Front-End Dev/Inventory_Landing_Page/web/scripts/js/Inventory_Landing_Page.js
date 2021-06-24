/*The purpose of this module is to provide the back-end for a web app that I created to interface with our company's Syspro pages in a more convenient way*/
/* Name : Inventory_Landing_Page.js, Written by   : J FOLDING */

//Funtion to read CSV file into an Array


function csvToArray() {

    var csvFile = 'U:\Projects\Coding\Syspro_Frontend_Project\files\RGR_PCB_List.csv'
    d3.csv("/files/RGR_PCB_List.csv", function (data) {
        console.log(data);
    });
    // console.log(csvFile)
}

function importTable() {
    $.ajax({
        url: "tableIndex.html",
        dataType: "text"
    }).done(
        function (data) {
            $('tablespace').html(data);
        });
}
function loadFunctions(){
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      addRowHandlers();
    }
  }
}
function addRowHandlers() {
  
    // var table = document.getElementById('pcbTable');
    // var table = document.getElementsByClassName('table');
    var rows = document.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
      // var currentRow = table.rows[i];
      var currentRow = rows[i];
      var createClickHandler = function(row) {
        return function() {
          var cell = row.getElementsByTagName("td")[0];
          var id = cell.innerHTML;
        //   alert("id:" + id);
        // getRadioValue();
        // getSelector();
        // rowSelected(row);
        generateLink(id);
        // $(this).toggleClass('rowSelected');
                };
      };
      currentRow.onclick = createClickHandler(currentRow);
    }
  }
  function rowSelected(row) {
    //check if row is currently active, and toggle its state
    }
  function includeHTML() {
      var z, i, elmnt, file, xhttp;
      /* Loop through a collection of all HTML elements: */
      z = document.getElementsByTagName("*");
      for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
          /* Make an HTTP request using the attribute value as the file name: */
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              if (this.status == 200) {elmnt.innerHTML = this.responseText;}
              if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
              /* Remove the attribute, and call this function once more: */
              elmnt.removeAttribute("w3-include-html");
              includeHTML();
            }
          }
          xhttp.open("GET", file, true);
          xhttp.send();
          /* Exit the function: */
          return;
        }
      }
    }

