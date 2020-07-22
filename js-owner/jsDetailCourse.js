function changeRead() {
    var txtBtn = document.getElementById('readmore');
    var dot = document.getElementById('dots');
    var moretxt = document.getElementById('read-more');

    if (dot.style.display === "none") {
        dot.style.display = "inline";
        txtBtn.innerHTML = "Read More";
        moretxt.style.display = "none";
    } else {
        dot.style.display = "none";
        txtBtn.innerHTML = "Read Less";
        moretxt.style.display = "inline";
    }
}

function showInfoCourse(index) {
    var iconPlus = document.getElementById('icon-title-course-' + String(index));
    var detailCourse = document.getElementById('detail-sub-course-' + String(index));
    if (detailCourse.style.display === "none") {
        detailCourse.style.display = "block";
        iconPlus.setAttribute("class", "fa fa-minus")
    } else {
        detailCourse.style.display = "none";
        iconPlus.setAttribute("class", "fa fa-plus")
    }
}