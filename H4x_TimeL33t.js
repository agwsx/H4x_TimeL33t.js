// 🔥 Time Filter Script 🔥
// 💻 

// Variables necesarias
var time, choice, init;
init = false;

// Función para solicitar números con un rango dado
function getNumber(min, max, asked) {
    var number = javax.swing.JOptionPane.showInputDialog(null, asked, "Input", javax.swing.JOptionPane.QUESTION_MESSAGE);
    if (parseInt(number) >= min && parseInt(number) <= max) {
        return parseInt(number);
    } else {
        javax.swing.JOptionPane.showMessageDialog(null, "Choose number between " + min + " to " + max);
        return getNumber(min, max, asked); // Llamada recursiva para pedir el número de nuevo
    }
}

// Función que se llama antes de procesar el mensaje
function processMessage(utils, message) {
    if (init === false) {
        shouldInit();
    }
}

// Inicialización
function shouldInit() {
    var options = ["MORE", "LESS"]; // Opciones de elección
    time = getNumber(1, 50000, "What is the value of RTT (Request and Response Timing) you want?");
    choice = javax.swing.JOptionPane.showOptionDialog(
        null, 
        "Do you want the value to be greater or equal to the previous input (MORE) or smaller or equal (LESS)?", 
        "Confirm", 
        javax.swing.JOptionPane.YES_NO_OPTION,
        javax.swing.JOptionPane.QUESTION_MESSAGE,
        null,
        options,
        options[0]
    );
    init = true;
}

// Función para procesar los resultados del fuzzing
function processResult(utils, fuzzResult) {
    if (choice === javax.swing.JOptionPane.YES_OPTION && (fuzzResult.getHttpMessage().getTimeElapsedMillis() >= time)) {
        console.log("Match - Time: " + fuzzResult.getHttpMessage().getTimeElapsedMillis()); // Mostrar resultado en consola
        return true;
    } else if (choice === javax.swing.JOptionPane.NO_OPTION && (fuzzResult.getHttpMessage().getTimeElapsedMillis() <= time)) {
        console.log("Match - Time: " + fuzzResult.getHttpMessage().getTimeElapsedMillis()); // Mostrar resultado en consola
        return true;
    } else {
        return false;
    }
}
