function checkOldPass(){
    
    var oldpass = $('#old-pass').val();
    var loginPass = JSON.parse(localStorage.getItem('login'));
    var pass = ""
    for (let index = 0; index < loginPass.length; index++) {
        if (loginPass[index].indexOf('ngoduyphuc@gmail.com') != -1) {
            idx = loginPass[index].indexOf('-');
            pass = loginPass[index].substring(idx + 2, loginPass[index].length);
        }
    }
    if(pass != oldpass){
        $('#er-old-pass').text('Mismatched');
        return false;
    }else{
        $('#er-old-pass').text('');
        return true;
    }
}
function checkNewPass(){
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    var newpass = $("#new-pass").val();
    if (re.test(newpass)){
        $("#er-new-pass").text("");
        return true;
    }else{
        $("#er-new-pass").text("Minimum of eight characters, at least one uppercase letter, one lowercase letter and one number");
        return false;
    }
}
function checkComfirmPass(){
    var newpass = $('#new-pass').val();
    var cfpass = $('#confirm-pass').val();
    if (newpass != cfpass){
        $("#er-confirm-pass").text("Mismatched");
        return false;
    }else{
        $("#er-confirm-pass").text("");
        return true;
    }
}
function changePass(){
    var oldpass = $('#old-pass').val();
    var newpass = $('#new-pass').val();
    var cfpass = $('#confirm-pass').val();
    if(checkComfirmPass() && checkNewPass() && checkOldPass()){
        alert("Change password success!");
        var loginPass = JSON.parse(localStorage.getItem('login'));

        for (let index = 0; index < loginPass.length; index++) {
            if (loginPass[index].indexOf('ngoduyphuc@gmail.com') != -1) {
                idx = loginPass[index].indexOf('-');
                loginPass[index].push('ngoduyphuc@gmail.com - ' + newpass);
            }
        }
        localStorage.setItem("login",JSON.stringify(loginPass));
        $('#old-pass').val("");
        $('#new-pass').val("");
        $('#confirm-pass').val("");
    }else{
        alert("Error");
    }
}