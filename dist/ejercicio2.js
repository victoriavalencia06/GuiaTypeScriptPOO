"use strict";
class Calculadora {
    sumar(a, b) {
        return a + b;
    }
    restar(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0)
            throw new Error("No se puede dividir entre cero");
        return a / b;
    }
    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }
    factorial(n) {
        if (n < 0)
            throw new Error("No se puede calcular el factorial de un número negativo");
        let resultado = 1;
        for (let i = 1; i <= n; i++)
            resultado *= i;
        return resultado;
    }
}
// caragamos el dom
window.addEventListener("DOMContentLoaded", () => {
    var _a, _b, _c, _d, _e, _f;
    const calc = new Calculadora();
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultado = document.getElementById("resultado");
    function mostrarResultado(valor) {
        resultado.textContent = `Resultado: ${valor}`;
    }
    (_a = document.getElementById("btnSumar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        mostrarResultado(calc.sumar(+num1Input.value, +num2Input.value));
    });
    (_b = document.getElementById("btnRestar")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        mostrarResultado(calc.restar(+num1Input.value, +num2Input.value));
    });
    (_c = document.getElementById("btnMultiplicar")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        mostrarResultado(calc.multiplicar(+num1Input.value, +num2Input.value));
    });
    (_d = document.getElementById("btnDividir")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
        try {
            mostrarResultado(calc.dividir(+num1Input.value, +num2Input.value));
        }
        catch (error) {
            mostrarResultado(error.message);
        }
    });
    (_e = document.getElementById("btnPotencia")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
        mostrarResultado(calc.potencia(+num1Input.value, +num2Input.value));
    });
    (_f = document.getElementById("btnFactorial")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", () => {
        try {
            mostrarResultado(calc.factorial(+num1Input.value));
        }
        catch (error) {
            mostrarResultado(error.message);
        }
    });
});
