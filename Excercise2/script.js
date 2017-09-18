var imgarray = ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg"] //stores img URL
var index = 0; //Variable to store index of imgarray
function next(){ //Gets next image
    if(index == imgarray.length-1){
        index = 0;
    }
    else{
        index++;
    }
    document.getElementById('ss').src = imgarray[index];
}