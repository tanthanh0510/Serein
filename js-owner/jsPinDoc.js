function changePin(index) {
    var pin = $('#pin-' + String(index));
    if(pin.attr("class") == "fas fa-bookmark text-warning") {
        pin.attr("class", "far fa-bookmark text-warning");
    } else {
        pin.attr("class", "fas fa-bookmark text-warning");
    }
}