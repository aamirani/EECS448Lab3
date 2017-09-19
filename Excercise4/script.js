function changestyle(){

    //Get all border element styles
    var rborder = document.getElementById('rborder').value;
    var gborder = document.getElementById('gborder').value;
    var bborder = document.getElementById('bborder').value;
    var wborder = document.getElementById('wborder').value;

    //Get all background style elements
    var rbackground = document.getElementById('rbackground').value;
    var gbackground = document.getElementById('gbackground').value;
    var bbackground = document.getElementById('bbackground').value;

    if (isNumber(rborder) && isNumber(gborder) && isNumber(bborder) && isNumber(wborder) && isNumber(rbackground) && isNumber(gbackground) && isNumber(bbackground)){
        if((rborder >= 0 && rborder <= 255) && (gborder >= 0 && gborder <= 255) && (bborder >= 0 && bborder <= 255) && (wborder >= 0 && wborder <= 100) && (rbackground >= 0 && rbackground <= 255) && (gbackground >= 0 && gbackground <= 255) && (bbackground >= 0 && bbackground <= 255)){
            var newstyle = "border: " + wborder + "px" + " solid " + "rgb(" + rborder+"," + gborder+"," +bborder+"); " + "background-color: rgb(" + rbackground + "," + gbackground + "," + bbackground + ");";

            var style = document.getElementById('news');
            style.setAttribute("style", newstyle);
        }
        else{
            alert("Your input must be within the correct ranges!");
        }
    }
    else{
        alert("Your input must a number!")
    }
}


function isNumber(num){ //Checks to see if value is number
    return !isNaN(parseFloat(num)) && isFinite(num);
}