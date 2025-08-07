"use strict";
class Cuenta {
    constructor(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    depositar() {
        if (this.cantidad < 5) {
            return `El valor a depositar debe ser mayor a $5.00`;
        }
        else {
            return `Depósito exitoso: Se han depositado $${this.cantidad.toFixed(2)}`;
        }
    }
    retirar(valor) {
        if (this.cantidad === 0 || valor > this.cantidad) {
            return `No hay fondos suficientes en la cuenta`;
        }
        if (valor < 5) {
            return `El valor a retirar debe ser mayor a $5.00`;
        }
        this.cantidad -= valor;
        return `Retiro exitoso: Has retirado $${valor.toFixed(2)}. Saldo restante: $${this.cantidad.toFixed(2)}`;
    }
    mostrarDatos() {
        return `Titular: ${this.nombre}<br>Tipo de cuenta: ${this.tipoCuenta}<br>Número de cuenta: ${this.numeroCuenta}`;
    }
}
window.addEventListener("DOMContentLoaded", () => {
    const cuenta = new Cuenta("Andrea Castillo", 20, "Ahorros", "3456-7890-1234");
    const div = document.getElementById("info-cuenta");
    const resultado = document.getElementById("resultado-cuenta");
    div.innerHTML = cuenta.mostrarDatos();
    const mensajeDeposito = cuenta.depositar();
    const mensajeRetiro = cuenta.retirar(8);
    resultado.innerHTML = `
    <p>${mensajeDeposito}</p>
    <p>${mensajeRetiro}</p>
  `;
});
