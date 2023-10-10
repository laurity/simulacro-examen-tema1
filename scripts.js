/**
 * 
 * @author Laura López
 * GitHub: https://github.com/laurity/simulacro-examen-tema1
 */

document.addEventListener("DOMContentLoaded", () =>{


const calculate = document.getElementById('calculate');
const resultsa = document.getElementById('resultsa');
const resultsp = document.getElementById('resultsp');
let area = '';
let parametrer = '';

calculate.addEventListener('click', ()=>{
    const lenght = parseFloat(document.getElementById('length').value);
    const weight = parseFloat(document.getElementById('weight').value);


if (!isNaN(lenght) && !isNaN(weight)){
    area = lenght*weight;
    parametrer = 2*(lenght+weight);
    resultsa.innerHTML = `El área del rectángulo es ${area}`;
    resultsp.innerHTML =`El parámetro del rectángulo es ${parametrer}`;
}

});

});
