const boton = document.getElementById('calcularBtn');
const valorCreditos = document.getElementById('valorCreditos')
let resultado = document.getElementById('resultado')


boton.addEventListener('click', (e) => {
    e.preventDefault()
    let creditos = valorCreditos.value;

    creditos *= 520;
 
    resultado.innerHTML = creditos

    valorCreditos.value = ''
    
});