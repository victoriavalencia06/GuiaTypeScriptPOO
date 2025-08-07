class Calculadora {
  sumar(a: number, b: number): number {
    return a + b;
  }

  restar(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    if (b === 0) throw new Error("No se puede dividir entre cero");
    return a / b;
  }

  potencia(base: number, exponente: number): number {
    return Math.pow(base, exponente);
  }

  factorial(n: number): number {
    if (n < 0) throw new Error("No se puede calcular el factorial de un número negativo");
    let resultado = 1;
    for (let i = 1; i <= n; i++) resultado *= i;
    return resultado;
  }
}

// caragamos el dom
window.addEventListener("DOMContentLoaded", () => {
  const calc = new Calculadora();

  const num1Input = document.getElementById("num1") as HTMLInputElement;
  const num2Input = document.getElementById("num2") as HTMLInputElement;
  const resultado = document.getElementById("resultado") as HTMLDivElement;

  function mostrarResultado(valor: number | string) {
    resultado.textContent = `Resultado: ${valor}`;
  }

  document.getElementById("btnSumar")?.addEventListener("click", () => {
    mostrarResultado(calc.sumar(+num1Input.value, +num2Input.value));
  });

  document.getElementById("btnRestar")?.addEventListener("click", () => {
    mostrarResultado(calc.restar(+num1Input.value, +num2Input.value));
  });

  document.getElementById("btnMultiplicar")?.addEventListener("click", () => {
    mostrarResultado(calc.multiplicar(+num1Input.value, +num2Input.value));
  });

  document.getElementById("btnDividir")?.addEventListener("click", () => {
    try {
      mostrarResultado(calc.dividir(+num1Input.value, +num2Input.value));
    } catch (error: any) {
      mostrarResultado(error.message);
    }
  });

  document.getElementById("btnPotencia")?.addEventListener("click", () => {
    mostrarResultado(calc.potencia(+num1Input.value, +num2Input.value));
  });

  document.getElementById("btnFactorial")?.addEventListener("click", () => {
    try {
      mostrarResultado(calc.factorial(+num1Input.value));
    } catch (error: any) {
      mostrarResultado(error.message);
    }
  });
});
