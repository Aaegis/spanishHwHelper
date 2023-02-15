wordList = ["El problema", "¿Qué hora es?", "¿A dónde?", "Triste", "Tranquilo",
"Ocupado", "Nervioso", "Enojado", "Emociando", "Deprimido",
"Contento", "Cansado", "El pasillo", "Oficina del director", "El gimnasio",
"La cafetería", "La biblioteca", "El baño", "Lejos de", "Encima de",
"Detrás de", "Dentro de", "Delante de", "Debajo de", "Cerca de", "Al lado de", "interesante", "Divertido",
"Aburrido", "La ventana", "La tiza", "La silla", "El reloj", "La puerta", "La pluma", "El pizarrón",
"El papel", "La mochila", "El mapa", "El lápiz", "El escritorio", "El cuaderno", "la calculadora", "El borrador"];

document.getElementById('randomizeButton').onclick = function() {
    var selectedValue = wordList.length, randomValue;
    while (selectedValue != 0) {
        randomValue = Math.floor(Math.random() * selectedValue);
        selectedValue = selectedValue - 1;
        [wordList[selectedValue], wordList[randomValue]] = [wordList[randomValue], wordList[selectedValue]];
    }
    document.getElementById('wordTextArea').innerHTML = wordList.join('\n');
};