var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    Persona.prototype.esMayorEdad = function () {
        return this.edad >= 18 ? "Sí" : "No";
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, direccion, telefono, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.cargarSueldo = function (sueldo) {
        this.sueldo = sueldo;
    };
    Empleado.prototype.imprimirSueldo = function () {
        return "$".concat(this.sueldo.toFixed(2));
    };
    Empleado.prototype.mostrarDatos = function () {
        return "\n      <div class=\"card shadow-sm m-3\" style=\"width: 20rem;\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">".concat(this.nombre, " ").concat(this.apellido, "</h5>\n          <p class=\"card-text\"><strong>Direcci\u00F3n:</strong> ").concat(this.direccion, "</p>\n          <p class=\"card-text\"><strong>Tel\u00E9fono:</strong> ").concat(this.telefono, "</p>\n          <p class=\"card-text\"><strong>Edad:</strong> ").concat(this.edad, " (").concat(this.esMayorEdad() === "Sí" ? "Mayor de edad" : "Menor de edad", ")</p>\n          <p class=\"card-text\"><strong>Sueldo:</strong> ").concat(this.imprimirSueldo(), "</p>\n        </div>\n      </div>\n    ");
    };
    return Empleado;
}(Persona));
window.addEventListener("DOMContentLoaded", function () {
    var empleado1 = new Empleado("María", "López", "Santa Tecla", "1234-5678", 28, 950.25);
    var empleado2 = new Empleado("José", "Martínez", "San Salvador", "8765-4321", 17, 400.00);
    var contenedor = document.getElementById("empleados");
    contenedor.innerHTML = empleado1.mostrarDatos() + empleado2.mostrarDatos();
});
