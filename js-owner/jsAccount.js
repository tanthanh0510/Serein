function changeReset() {
    $('#full-name').val('Ngô Duy Phúc');
    $('#phone-number').val('+84332222245');
    $('#dob').val('2000-06-26');
    $('#address').val('12 Nguyen Van Bao, 7 Ward, Go Vap District, Ho Chi Minh City.');
    $('#graduated').val('Graduated from IUH.');
    $('#work').val('Data Engineer at DamsanX.');
    $('#des-acc').val('I\'m a gnergetic, creative, hardworking person who likes explore good things.');
}

function checkName() {
    var fullName = $('#full-name').val();
    var reFullName = /^[A-Z]{1}[a-z]*(\s[A-Z]{1}[a-z]*)*/;
    if (reFullName.test(fullName)) {
        $('#er-name').text('');
        $('#full-name').val(fullName);
        return true;
    } else {
        $('#er-name').text('Names must be spaces between letters, starting with each letter must be capitalized');
        return false;
    }
}

function checkPhone() {
    var phone = $('#phone-number').val();

    var rePhone = /^(\+\d){1}\d{9,10}/;
    
    if (rePhone.test(phone)) {
        $('#er-phone').text('');
        $('#phone-number').val(phone);
        return true;
    } else {
        $('#er-phone').text('Phone numbers must start with the country code, and only contain 10-11 numbers. Ex: +84303030303');
        return false
    }
}

function checkDOB() {

    var dob = $('#dob').val();
    var ns = new Date(dob);
    var cur = new Date();
    if (cur.getFullYear() - ns.getFullYear() >= 15) {
        $('#er-dob').text('');
        $('dob').val(dob);
        return true;
    } else {
        $('#er-dob').text('Must be over 14 years old');
        return false
    }
}

function checkAddress() {

    var address = $('#address').val();

    if(address === "") {
        $('#er-address').text('Empty!');
        return false
    } else {
        $('#er-address').text('');
        $('#address').val(address);
        return true;
    }
}

function checkGraduated() {

    var graduated = $('#graduated').val();
    if(graduated === "") {
        $('#er-graduated').text('Empty!');
        return false
    } else {
        $('#er-graduated').text('');
        $('#graduated').val(graduated);
        return true;
    }
}

function checkWork() {
    
    var work = $('#work').val();
    if(work === "") {
        $('#er-work').text('Empty!');
        return false
    } else {
        $('#er-work').text('');
        $('#work').val(work);
        return true;
    }
}

function saveInfo() {
    var fullName = $('#full-name').val();
    var phone = $('#phone-number').val();
    var dob = $('#dob').val();
    var address = $('#address').val();
    var graduated = $('#graduated').val();
    var work = $('#work').val();
    var des = $('#des-acc').val();
    var img = $('#lbl-img-acc').text();
    if (img != "") {
        console.log(img);
        $('#img-avatar').attr("src", "../img/" + img);
    }
    if (checkName() && checkPhone() && checkDOB() && checkAddress() && checkGraduated() && checkWork()) {
        $('#txt-name').text(fullName);
        $('#txt-des').text(des);
        $('#txt-phone').text(phone);
        $('#txt-dob').text(dob);
        $('#txt-work').text(work);
        $('#txt-graduated').text(graduated);
        $('#txt-address').text(address);
    }

    
    
    
}