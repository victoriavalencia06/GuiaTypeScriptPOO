var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero) {
        this.autor = "";
        this.titulo = titulo;
        this.genero = genero;
    }
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.mostrar = function () {
        var card = document.createElement("div");
        card.className = "card text-white bg-dark m-2";
        card.style.width = "18rem";
        card.innerHTML = "\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">".concat(this.titulo, "</h5>\n        <p class=\"card-text\">G\u00E9nero: ").concat(this.genero, "</p>\n        <p class=\"card-text\"><small>Autor: ").concat(this.getAutor(), "</small></p>\n      </div>\n    ");
        return card;
    };
    return Cancion;
}());
window.addEventListener("DOMContentLoaded", function () {
    var canciones = [
        new Cancion("Bohemian Rhapsody", "Rock"),
        new Cancion("Shape of You", "Pop"),
        new Cancion("Blinding Lights", "Synthwave"),
        new Cancion("La La La", "Reggae")
    ];
    canciones[0].setAutor("Queen");
    canciones[1].setAutor("Ed Sheeran");
    canciones[2].setAutor("The Weeknd");
    canciones[3].setAutor("Shakira");
    var contenedor = document.getElementById("contenedor-canciones");
    canciones.forEach(function (cancion) { return contenedor.appendChild(cancion.mostrar()); });
});
