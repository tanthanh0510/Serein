var dataListPin = JSON.parse(localStorage.getItem('dataPinDoc'));

function checkUrl(arrData, url) {
    for (var index in arrData) {
        if (arrData[index]['url_owner'] == url) {
            return index;
        }
    }
    return -1;
}
