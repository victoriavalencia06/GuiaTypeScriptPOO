"use strict";
class Persona {
    constructor(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    esMayorEdad() {
        return this.edad >= 18 ? "Sí" : "No";
    }
}
class Empleado extends Persona {
    constructor(nombre, apellido, direccion, telefono, edad, sueldo) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }
    cargarSueldo(sueldo) {
        this.sueldo = sueldo;
    }
    imprimirSueldo() {
        return `$${this.sueldo.toFixed(2)}`;
    }
    mostrarDatos() {
        return `
      <div class="card shadow-sm m-2" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title">${this.nombre} ${this.apellido}</h5>
          <p class="card-text"><strong>Dirección:</strong> ${this.direccion}</p>
          <p class="card-text"><strong>Teléfono:</strong> ${this.telefono}</p>
          <p class="card-text"><strong>Edad:</strong> ${this.edad} (${this.esMayorEdad()} mayor de edad)</p>
          <p class="card-text"><strong>Sueldo:</strong> ${this.imprimirSueldo()}</p>
        </div>
      </div>
    `;
    }
}
window.addEventListener("DOMContentLoaded", () => {
    const empleado1 = new Empleado("María", "López", "Santa Tecla", "1234-5678", 28, 950.25);
    const empleado2 = new Empleado("José", "Martínez", "San Salvador", "8765-4321", 17, 400.00);
    const contenedor = document.getElementById("empleados");
    contenedor.innerHTML = empleado1.mostrarDatos() + empleado2.mostrarDatos();
});
