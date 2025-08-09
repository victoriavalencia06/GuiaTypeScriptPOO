var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina() {
        this.titulo = "";
        this.color = "";
        this.fuente = "";
        this.alineacion = "left";
    }
    // Método para definir título, color y fuente
    CabeceraPagina.prototype.definirPropiedades = function (titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    };
    // Método para definir alineación
    CabeceraPagina.prototype.definirAlineacion = function (alineacion) {
        this.alineacion = alineacion;
    };
    // Método para renderizar el título con estilos
    CabeceraPagina.prototype.imprimir = function () {
        var encabezado = document.createElement("h1");
        encabezado.textContent = this.titulo;
        encabezado.style.color = this.color;
        encabezado.style.fontFamily = this.fuente;
        encabezado.style.textAlign = this.alineacion;
        encabezado.classList.add("cabecera-estilizada");
        document.body.appendChild(encabezado);
    };
    return CabeceraPagina;
}());
// Esperar que el DOM cargue
window.addEventListener("DOMContentLoaded", function () {
    var header = new CabeceraPagina();
    header.definirPropiedades("Mi header automático", "#7c1515", "Georgia");
    header.definirAlineacion("center");
    header.imprimir();
});
