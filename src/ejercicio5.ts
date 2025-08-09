abstract class Persona {
  constructor(
    protected nombre: string,
    protected apellido: string,
    protected direccion: string,
    protected telefono: string,
    protected edad: number
  ) {}

  esMayorEdad(): string {
    return this.edad >= 18 ? "Sí" : "No";
  }

  abstract mostrarDatos(): string;
}

class Empleado extends Persona {
  private sueldo: number;

  constructor(
    nombre: string,
    apellido: string,
    direccion: string,
    telefono: string,
    edad: number,
    sueldo: number
  ) {
    super(nombre, apellido, direccion, telefono, edad);
    this.sueldo = sueldo;
  }

  cargarSueldo(sueldo: number) {
    this.sueldo = sueldo;
  }

  imprimirSueldo(): string {
    return `$${this.sueldo.toFixed(2)}`;
  }

  mostrarDatos(): string {
    return `
      <div class="card shadow-sm m-3" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title">${this.nombre} ${this.apellido}</h5>
          <p class="card-text"><strong>Dirección:</strong> ${this.direccion}</p>
          <p class="card-text"><strong>Teléfono:</strong> ${this.telefono}</p>
          <p class="card-text"><strong>Edad:</strong> ${this.edad} (${this.esMayorEdad() === "Sí" ? "Mayor de edad" : "Menor de edad"})</p>
          <p class="card-text"><strong>Sueldo:</strong> ${this.imprimirSueldo()}</p>
        </div>
      </div>
    `;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const empleado1 = new Empleado("María", "López", "Santa Tecla", "1234-5678", 28, 950.25);
  const empleado2 = new Empleado("José", "Martínez", "San Salvador", "8765-4321", 17, 400.00);

  const contenedor = document.getElementById("empleados")!;
  contenedor.innerHTML = empleado1.mostrarDatos() + empleado2.mostrarDatos();
});
