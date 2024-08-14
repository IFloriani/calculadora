let valor1 = 0;
let valor2 = 0;

function soma(){
    valor1 = parseFloat(document.getElementById('valor1').value);
    valor2 = parseFloat(document.getElementById('valor2').value);

    document.getElementById('resultado').textContent = valor1 + valor2;
}

function subtracao(){
    valor1 = parseFloat(document.getElementById('valor1').value);
    valor2 = parseFloat(document.getElementById('valor2').value);

    document.getElementById('resultado').textContent = valor1 - valor2;
}

function multiplicacao(){
    valor1 = parseFloat(document.getElementById('valor1').value);
    valor2 = parseFloat(document.getElementById('valor2').value);

    document.getElementById('resultado').textContent = valor1 * valor2;
}

function divisao(){
    valor1 = parseFloat(document.getElementById('valor1').value);
    valor2 = parseFloat(document.getElementById('valor2').value);

    document.getElementById('resultado').textContent = valor1 / valor2;
}