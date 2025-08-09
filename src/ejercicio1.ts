class CabeceraPagina {
  private titulo: string = "";
  private color: string = "";
  private fuente: string = "";
  private alineacion: "left" | "center" | "right" = "left";

  // Método para definir título, color y fuente
  definirPropiedades(titulo: string, color: string, fuente: string): void {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
  }

  // Método para definir alineación
  definirAlineacion(alineacion: "left" | "center" | "right"): void {
    this.alineacion = alineacion;
  }

  // Método para renderizar el título con estilos
  imprimir(): void {
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
  header.definirPropiedades("Mi header automático", "#7c1515", "Georgia");
  header.definirAlineacion("center");
  header.imprimir();
});
