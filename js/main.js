

let send = document.getElementById("send").addEventListener("click", () => {

    let lastname = document.getElementById("lastname").value;
    let name = document.getElementById("name").value;
    let fecha = document.getElementById("fecha").value;
    let title = document.getElementById("title").value;
    let namePage = document.getElementById("namePage").value;
    let link = document.getElementById("linkPage").value;

    let resultado = '<p>' + lastname + ', ' + name.charAt(0) + '.' + '(' + fecha + '). ' +
        '<i>' + title + '.</i> ' + namePage + '. ' + link;


    document.getElementById("resultado").innerHTML = resultado;

});