function IMC(peso, altura) {
    return (peso / (altura**2));
}

function IMCAplicada() {
    const InputPeso = document.getElementById("peso");
    const PesoValue = Number(InputPeso.value);
    const InputAltura = document.getElementById("altura");
    const alturaValue = Number(InputAltura.value);
    const Division = IMC(PesoValue, alturaValue);
    const Resultado = document.getElementById("IMCcheck");
    Resultado.innerText = "Tu IMC (Índice de masa corporal) es " + Division.toFixed(2);
    if (Division < 18.5) {
        const imcBaja = document.getElementById("medio");
        imcBaja.innerText = "Tu IMC se encuentra dentro del rango insuficiente.";
        imcBaja.style.color = "rgb(128, 184, 230)"
    } else if (Division < 25) {
        const imcMedia = document.getElementById("medio");
        imcMedia.innerText = "Tu IMC se encuentra dentro del rango normal o saludable.";
        imcMedia.style.color = "black"
    } else {
        const imcAlta = document.getElementById("medio");
        imcAlta.innerText = "Tu IMC se encuentra dentro del rango de sobrepeso.";
        imcAlta.style.color = "red"
    }
}

