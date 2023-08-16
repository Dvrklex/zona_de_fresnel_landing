document.getElementById('calculate').addEventListener('click', function() {
    const distance = parseFloat(document.getElementById('distance').value);
    const frequency = parseFloat(document.getElementById('frequency').value);
    
    if (isNaN(distance) || isNaN(frequency)) {
        document.getElementById('result').textContent = "Por favor, ingresa valores válidos.";
        return;
    }
    
    const result = 8.656 * Math.sqrt(distance / frequency);
    document.getElementById('result').textContent = `La zona de Fresnel es aproximadamente ${result.toFixed(2)} metros.`;
});
