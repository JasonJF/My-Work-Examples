// file holds functions relating to the logic of the page
// created by J Folding

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
    

    var linkText = "http://rrsapp01/Production%20Planning%20Reports/All_Jobs.php?s_StockCode=" + STOCKNUMBER + "&s_Warehouse=" + WHNUMBER + "&s_Job=" + JOBNUMBER + "&s_JobDescription=&s_StockDescription=&s_Complete=" + COMPLETESTATUS + "&s_ConfirmedFlag=&s_DateTaken="
   
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

    var linkText = "http://rrsapp01/Production%20Planning%20Reports/Possibly_ready_for_population_JobNotTaken.php?s_Warehouse=" + WHNUMBER + "&s_ConfirmedFlag=&s_Job=&s_StockCode=" + STOCKNUMBER + "&s_JobDescription=&s_StockDescription=&s_Alloc_StockCode=&s_Alloc_StockDescription=&s_JobStartDate="
   
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