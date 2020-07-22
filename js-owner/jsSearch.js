function hideFilter() {
    var btnFilter = document.getElementById("btnFilter");
    var navFilter = document.getElementById("nav-filter-all");
    var listCourse = document.getElementById("list-courses");
    var imgCourse = document.getElementsByClassName('img-courses');
    var detailCourse = document.getElementsByClassName('detailCourses');

    if (navFilter.style.display === "none") {
        navFilter.style.display = "block";
        listCourse.setAttribute("class", "col-xl-9 col-sm-9 col-md-9 col-lg-9");
        listCourse.setAttribute("style", "padding-left: 3%");
        for (let index = 0; index < 10; index++) {            
            imgCourse[index].setAttribute("class", "img-courses col-xl-3 col-sm-3 col-md-3 col-lg-3");
            detailCourse[index].setAttribute("class", "detailCourses col-xl-7 col-sm-7 col-md-7 col-lg-7");
        }
    } else {
        navFilter.style.display = "none";
        listCourse.setAttribute("class", "col-xl-12 col-sm-12 col-md-12 col-lg-12");
        listCourse.setAttribute("style", "padding-left: 0");
        for (let index = 0; index < 10; index++) {
            imgCourse[index].setAttribute("class", "img-courses col-xl-2 col-sm-2 col-md-2 col-lg-2");
            detailCourse[index].setAttribute("class", "detailCourses col-xl-8 col-sm-8 col-md-8 col-lg-8");
        }
    }
}

function showFilter(index) {
    var iconFilter = document.getElementById("icon-title-" + String(index));
    var infoFilter = document.getElementById("infoFilter-" + String(index));

    if (infoFilter.style.display === "none") {
        iconFilter.setAttribute("class", "fa fa-angle-up");
        infoFilter.style.display = "block";
    } else {
        iconFilter.setAttribute("class", "fa fa-angle-down");
        infoFilter.style.display = "none";
    }
}

function checkUrl(arrData, url) {
    for (var index in arrData) {
        if (arrData[index]['url_owner'] == url) {
            return index;
        }
    }
    return -1;
}

function changePin(index) {
    var pin = $('#pin-' + String(index));
    flag = false;
    if(pin.attr("class") == "fas fa-bookmark text-warning") {
        pin.attr("class", "far fa-bookmark text-warning");
        flag = false;
    } else {
        pin.attr("class", "fas fa-bookmark text-warning");
        flag = true;
    }

    var doc = $('#course-' + String(index));
    // console.log(doc.text());
    var imgDocPin = doc.find('#img-course img').attr('src');
    var urlOwnerDocPin = doc.find('#url-owner').attr('href');
    var nameDocPin = doc.find('#name-course').text();
    var instructorDocPin = doc.find('#instructor-course').text();
    var ratingDocPin = String(doc.find('#rating-course').html());
    var srcDocPin = doc.find('#resource').text();
    var learnDocPin = doc.find('#learn-course').text();
    var levelDocPin = doc.find('#level-course').text();
    var timeDocPin = doc.find('#time-course').text();
    var priceDocPin = doc.find('#price-course').text();
    var ratingHTML = doc.find('#rating-course').html();

    var data = {
        'title': nameDocPin, 
        'url_owner': urlOwnerDocPin, 
        'img': imgDocPin, 
        'author': instructorDocPin,
        'quality': ratingDocPin,
        'src': srcDocPin,
        'learn': learnDocPin,
        'level': levelDocPin,
        'time': timeDocPin,
        'fee': priceDocPin,
        'rating_html': ratingHTML
    }
    console.log(flag);
    var arrData = JSON.parse(localStorage.getItem('dataPinDoc'));
    if (flag) {
        if(checkUrl(arrData, urlOwnerDocPin) == -1){
            arrData.push(data);
        }
    } else {
        if(checkUrl(arrData, urlOwnerDocPin) != -1){
            idx = checkUrl(arrData, urlOwnerDocPin);
            arrData.splice(idx, 1);
        }
    }
    console.log(arrData);
    localStorage.setItem('dataPinDoc', JSON.stringify(arrData));
}
