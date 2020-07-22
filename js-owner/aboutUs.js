function checkEmail(){
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email = document.getElementById("txtEmail").value;
    if(regex.test(email)){
        return true;
    }else{
        alert("Not email");
        return false;
    }
}
function checkName(){
    var name=document.getElementById("txtTen").value;
    if(name.lenght == 0){
        alert("Name not value")
    }
}