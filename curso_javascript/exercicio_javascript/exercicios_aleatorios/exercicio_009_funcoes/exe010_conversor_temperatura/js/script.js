

function converterTemperaturaFahrenheit(temperatura){
    return (temperatura * 1.8) + 32;
}

function converterTemperaturaKevin(temperatura){
    return temperatura + 273.15;
}

const celsiusParaFahrenheit = converterTemperaturaFahrenheit(32.5);
const celsiusParaKevin = converterTemperaturaKevin(32.5);

console.log(`Temperatura convertida para Fahrenheit é ${celsiusParaFahrenheit}ºF.`);
console.log(`Temperatura convertida para Celsius: ${celsiusParaKevin}`);