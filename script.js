//Funcion para el contador de visitas
var counters = [0, 0, 0, 0, 0];
function count(carrier) {
    counters[carrier - 1]++;
    return counters[carrier - 1];
};
function updateCounter(img) {
    document.getElementById("carrier_" + img).innerHTML = count(img);
}

// Funcion para el pop-up
var popWindow;
function openWindow(idx, title, path) {
    var popWindow = window.open("", "popWindow", "width=800,height=400");

    popWindow.document.write(
        "<html> <head> <title>" + title +
        '</title> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> <link rel="stylesheet" href="/assets/css/popup.css"> </head>',
        "<body><section><p><h1>" + title + "</h1></p>",
        '<img id="imgPop" src="' + path + '" width="100%">',
        '<div class="row buttons"><button class="btn btn btn-outline-dark" onClick="updateParentCounter()">OK</button>',
        '<button type="button" class="btn btn-outline-danger" onclick="self.close()">Close</button></div></section></body></html>'
    );

    popWindow.updateParentCounter = function() {
        updateCounter(idx);
    };
}

// Funcion para Ajax
document.querySelector('#button').addEventListener('click', getInformation);

function getInformation() {

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'home.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let data = JSON.parse(this.responseText);

            let res = document.querySelector('#res');

            res.innerHTML = `${data.texto}`;
        }
    }

}
