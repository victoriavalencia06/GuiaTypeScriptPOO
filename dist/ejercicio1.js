"use strict";
class CabeceraPagina {
    constructor() {
        this.titulo = "";
        this.color = "";
        this.fuente = "";
        this.alineacion = "left";
    }
    // Método para definir título, color y fuente
    obtenerPropiedades(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }
    // Método para definir alineación
    definirAlineacion(alineacion) {
        this.alineacion = alineacion;
    }
    // Método para renderizar el título con estilos
    imprimir() {
        const encabezado = document.createElement("h1");
        encabezado.textContent = this.titulo;
        encabezado.style.color = this.color;
        encabezado.style.fontFamily = this.fuente;
        encabezado.style.textAlign = this.alineacion;
        encabezado.classList.add("cabecera-estilizada");
        document.body.appendChild(encabezado);
    }
}
// Esperar que el DOM cargue
window.addEventListener("DOMContentLoaded", () => {
    const header = new CabeceraPagina();
    header.obtenerPropiedades("Mi header automático", "#7c1515", "Georgia");
    header.definirAlineacion("center");
    header.imprimir();
});
