wordList = ["¿A qué hora es...?", "¿Qué hora es?", "A la(s)...", "Es la.../Son las...", "de la mañana",
"de la tarde", "de la noche", "la hora", "el horario", "menos",
"el minuto", "...y cuatro", "...y (diez)", "...y media", "de vez en cuando",
"mucho", "nunca", "siempre", "todos los dias", "casi",
"¿Cuántos(as)...?", "difícil", "en", "el examen (pl. los exámenes)", "fácil", "hay...", "mucho(as)", "tarde",
"temprano", "tener que", "el arte", "las ciencias", "el español", "la historia", "el inglés", "las matemáticas",
"contestar", "enseñar", "llegar", "neccesitar", "sacar una buena/mala nota", "tomar apuntes", "usar la computadora"];

document.getElementById('randomizeButton').onclick = function() {
    var selectedValue = wordList.length, randomValue;
    while (selectedValue != 0) {
        randomValue = Math.floor(Math.random() * selectedValue);
        selectedValue = selectedValue - 1;
        [wordList[selectedValue], wordList[randomValue]] = [wordList[randomValue], wordList[selectedValue]];
    }
    document.getElementById('wordTextArea').innerHTML = wordList.join('\n');
};