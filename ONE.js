-Java.scrip
alert("Xx Bienvenido al juego diabólico xX");
let numero_maximo = 100;
let numero_usuario = 0;
const numero_secreto = Math.floor(Math.random()*numero_maximo)+1;
let numero_intentos =1;
let palabra_intento = "intento";
let vidas = 10; 
console.log(numero_secreto);

while (numero_secreto !== numero_usuario) {
    numero_usuario = parseInt(prompt(`Escoge un número del 1 al ${numero_maximo}`));

    if (isNaN(numero_usuario) || numero_usuario < 1 || numero_usuario > 100) {
        alert("¡No has ingresado un número válido del 1 al 100! ¡Prepárate para morir!");
    } else {
        if (numero_usuario === numero_secreto) {
            alert(`¡Sobreviviste! El número correcto era ${numero_secreto}.Pero te tomo ${numero_intentos} ${numero_intentos == 1? "Intento": "intentos" } `);
        } else if (numero_usuario > numero_secreto) {
            alert("El número secreto es menor.");
        } else {
            alert("El número secreto es mayor.");
        }
        numero_intentos++;
        if (numero_intentos > vidas){
            alert(`saludame a san pedro, solo tenias ${vidas} vidas`);
            break;
        }

    }
}



