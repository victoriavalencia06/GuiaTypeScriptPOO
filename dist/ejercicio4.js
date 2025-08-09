var Cuenta = /** @class */ (function () {
    function Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    Cuenta.prototype.depositar = function (monto) {
        if (monto < 5) {
            return "El valor a depositar debe ser mayor a $5.00";
        }
        this.cantidad += monto;
        return "Dep\u00F3sito exitoso: Se han depositado $".concat(monto.toFixed(2), ". Saldo actual: $").concat(this.cantidad.toFixed(2));
    };
    Cuenta.prototype.retirar = function (valor) {
        if (valor < 5) {
            return "El valor a retirar debe ser mayor a $5.00";
        }
        if (valor > this.cantidad) {
            return "No hay fondos suficientes en la cuenta";
        }
        this.cantidad -= valor;
        return "Retiro exitoso: Has retirado $".concat(valor.toFixed(2), ". Saldo restante: $").concat(this.cantidad.toFixed(2));
    };
    Cuenta.prototype.mostrarDatos = function () {
        return "Titular: ".concat(this.nombre, "<br>Tipo de cuenta: ").concat(this.tipoCuenta, "<br>N\u00FAmero de cuenta: ").concat(this.numeroCuenta);
    };
    return Cuenta;
}());
window.addEventListener("DOMContentLoaded", function () {
    var cuenta = new Cuenta("Andrea Castillo", 20, "Ahorros", "3456-7890-1234");
    var div = document.getElementById("info-cuenta");
    var resultado = document.getElementById("resultado-cuenta");
    div.innerHTML = cuenta.mostrarDatos();
    // Simulación estática con montos de depósito y retiro preestablecidos
    var mensajeDeposito = cuenta.depositar(20);
    var mensajeRetiro = cuenta.retirar(10);
    resultado.innerHTML = "\n    <p>".concat(mensajeDeposito, "</p>\n    <p>").concat(mensajeRetiro, "</p>\n  ");
});
