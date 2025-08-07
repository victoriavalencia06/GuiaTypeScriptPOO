class Cancion {
  public titulo: string;
  public genero: string;
  private autor: string = "";

  constructor(titulo: string, genero: string) {
    this.titulo = titulo;
    this.genero = genero;
  }

  setAutor(autor: string): void {
    this.autor = autor;
  }

  getAutor(): string {
    return this.autor;
  }

  mostrar(): HTMLDivElement {
    const card = document.createElement("div");
    card.className = "card text-white bg-dark m-2";
    card.style.width = "18rem";

    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${this.titulo}</h5>
        <p class="card-text">Género: ${this.genero}</p>
        <p class="card-text"><small>Autor: ${this.getAutor()}</small></p>
      </div>
    `;

    return card;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const canciones: Cancion[] = [
    new Cancion("Ecos del Silencio", "Balada"),
    new Cancion("Tormenta Solar", "Rock"),
    new Cancion("Alma de Cristal", "Pop")
  ];

  canciones[0].setAutor("Lucía Méndez");
  canciones[1].setAutor("Carlos Vega");
  canciones[2].setAutor("Ana Torres");

  const contenedor = document.getElementById("contenedor-canciones")!;
  canciones.forEach(cancion => contenedor.appendChild(cancion.mostrar()));
});
