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
    new Cancion("Bohemian Rhapsody", "Rock"),
    new Cancion("Shape of You", "Pop"),
    new Cancion("Blinding Lights", "Synthwave"),
    new Cancion("La La La", "Reggae")
  ];

  canciones[0].setAutor("Queen");
  canciones[1].setAutor("Ed Sheeran");
  canciones[2].setAutor("The Weeknd");
  canciones[3].setAutor("Shakira");

  const contenedor = document.getElementById("contenedor-canciones")!;
  canciones.forEach(cancion => contenedor.appendChild(cancion.mostrar()));
});
