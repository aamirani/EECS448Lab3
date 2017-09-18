function validateform() {
    var first = document.getElementById("firstpassword").value;
    var second = document.getElementById("secondpassword").value;
    if(first != second){
        alert("Passwords do not match!")
    }
    else if(first.length < 8 && second.length < 8){
        alert("Your password must be longer than eight characters")
    }
    else{
        alert("Validation succeeded!")
    }
}