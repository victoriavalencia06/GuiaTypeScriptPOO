class Cuenta {
  private nombre: string;
  private cantidad: number;
  private tipoCuenta: string;
  private numeroCuenta: string;

  constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipoCuenta = tipoCuenta;
    this.numeroCuenta = numeroCuenta;
  }

  depositar(monto: number): string {
    if (monto < 5) {
      return `El valor a depositar debe ser mayor a $5.00`;
    }
    this.cantidad += monto;
    return `Depósito exitoso: Se han depositado $${monto.toFixed(2)}. Saldo actual: $${this.cantidad.toFixed(2)}`;
  }

  retirar(valor: number): string {
    if (valor < 5) {
      return `El valor a retirar debe ser mayor a $5.00`;
    }
    if (valor > this.cantidad) {
      return `No hay fondos suficientes en la cuenta`;
    }
    this.cantidad -= valor;
    return `Retiro exitoso: Has retirado $${valor.toFixed(2)}. Saldo restante: $${this.cantidad.toFixed(2)}`;
  }

  mostrarDatos(): string {
    return `Titular: ${this.nombre}<br>Tipo de cuenta: ${this.tipoCuenta}<br>Número de cuenta: ${this.numeroCuenta}`;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const cuenta = new Cuenta("Andrea Castillo", 20, "Ahorros", "3456-7890-1234");

  const div = document.getElementById("info-cuenta")!;
  const resultado = document.getElementById("resultado-cuenta")!;

  div.innerHTML = cuenta.mostrarDatos();

  // Simulación estática con montos de depósito y retiro preestablecidos
  const mensajeDeposito = cuenta.depositar(20);
  const mensajeRetiro = cuenta.retirar(10);

  resultado.innerHTML = `
    <p>${mensajeDeposito}</p>
    <p>${mensajeRetiro}</p>
  `;
});
