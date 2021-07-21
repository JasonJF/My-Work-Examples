/*The purpose of this module is to provide the back-end for a web app that I created to interface with our company's Syspro pages in a more convenient way*/
/* Name : Inventory_Landing_Page.js, Written by   : J FOLDING */

//Funtion to read CSV file into an Array

function loadFunctions(){
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      addRowHandlers();
    }
  }
}
function addRowHandlers() {
  
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

//-------------------------------------------------------------------------------------------------
//The following section contains the logic of the button functions.

// Get value of the radio buttons
function getRadioValue() {
  // document.getElementById("result").innerHTML = ""; 
  var wh = document.getElementsByName('warehouse');
  for (i = 0; i < wh.length; i++) {
      if (wh[i].type = "radio") {
          if (wh[i].checked)
              // var selector = 'label[for=' + ele[i].name + ']';
              // var label = document.querySelector(selector);
              // var text = label.innerHTML;
              // console.log(wh[i].value);
              var warehouse = wh[i].value;
      }
  }
  var ele = document.getElementsByName('completed');
  for (i = 0; i < ele.length; i++) {
      if (ele[i].type = "radio") {
          if (ele[i].checked)
              // var selector = 'label[for=' + ele[i].name + ']';
              // var label = document.querySelector(selector);
              // var text = label.innerHTML;
              // console.log(ele[i].value);
              var kitstatus = ele[i].value;


      }
  }
  var selectors = [warehouse, kitstatus]
  return (selectors)
}
function generateLink(stockCode){
  var STOCKNUMBER, WHNUMBER, JOBNUMBER, COMPLETESTATUS

  var radioSelection = getRadioValue();
  var activePage = getSelector();
  // console.log(activePage)

  STOCKNUMBER = stockCode;
  WHNUMBER = radioSelection[0];
  JOBNUMBER = ""
  COMPLETESTATUS = radioSelection[1];

  if(activePage=="ALL"){
      gotoAllJobs(STOCKNUMBER, WHNUMBER, JOBNUMBER, COMPLETESTATUS);
  }
  else if(activePage=="Possibly_Ready"){
      goToPossiblyReady(STOCKNUMBER, WHNUMBER, JOBNUMBER, COMPLETESTATUS);
  }
}
function gotoAllJobs(STOCKNUMBER, WHNUMBER, JOBNUMBER, COMPLETESTATUS) {
  

  var linkText = ""
 
  openInNewTab(linkText);
}
function goToPossiblyReady(STOCKNUMBER, WHNUMBER, JOBNUMBER, COMPLETESTATUS) {
  // var STOCKNUMBER, WHNUMBER, JOBNUMBER, COMPLETESTATUS

  // var radioSelection = getRadioValue()
  // console.log(radioSelection[0])

  // STOCKNUMBER = stockCode;
  // WHNUMBER = radioSelection[0];
  // JOBNUMBER = ""
  // COMPLETESTATUS = radioSelection[1];

  var linkText = ""
 
  openInNewTab(linkText);
}

function openInNewTab(url) {
  window.open(url)
  // var win = window.open(url, '_blank');
  // win.focus();
}

function selectorClick(element) {
  // console.debug(elementId)
  $(element).toggleClass('active').siblings().removeClass('active');
  // $('.selectorButton').removeClass('active');
  // document.getElementById(element.id).classList.add('active');
  // document.getElementById(elementId).classList.remove('hover'); 
  // jQuery(this).toggleClass('active');
  // var x = "0";

  //switch cases were used to change row hover colours
  switch (element.id) {
      case "ALL":
          // console.debug("All Jobs");
          $('tbody tr').hover(function () {
              $(this).removeClass();
              $(this).addClass('allJobs').siblings().removeClass('allJobs');
          });
      

          break;
      case "Possibly_Ready":
          // console.debug("Possibly Ready");
          $('tbody tr').hover(function () {
              $(this).removeClass();
              $(this).addClass('possiblyReady').siblings().removeClass('possiblyReady');
          });
          // $("td", row).each(function() {
          //     $(this).addClass("possiblyReady");  
          break;
      case "Completed_Kits":
          // console.debug("Completed Kits");
          $('tbody tr').hover(function () {
              $(this).removeClass();
              $(this).addClass('completedKits').siblings().removeClass('completedKits');
          });
          // $("td", row).each(function() {
          //     $(this).addClass("completedKits");
          break;
      default:
          // text = "No value found";
  }
}

function getSelector() {

  var selectors = document.getElementsByClassName('selectorButton');
  for (i = 0; i < selectors.length; i++) {
      if (selectors[i].classList.contains("active")) {
          // console.log(selectors[i].id)
          var selectedValue = selectors[i].id;
          

      }
  }
  return selectedValue;
}

function tableSelect(element) {
  //get key of button pressed
  $(element).toggleClass('active').siblings().removeClass('active');
  //get class name of table with that key
  switch (element.id) {

      case "partsTableSelector":
          // console.log("PARTS")
          $('#partsTable').removeClass('hidden').siblings().addClass('hidden');
      break;
      
      case "modulesTableSelector":
          // console.log("MODULES")
          $('#modulesTable').removeClass('hidden').siblings().addClass('hidden');
      break;
  //make selected table visible while making other tables hidden
}
}