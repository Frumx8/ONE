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


-HTML

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Inter:wght@400;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>JS Game</title>
</head>

<body>
    <div class="container">
        <div class="container__contenido">
            <img src="./img/robot.png" alt="Robot" class="container__imagen-robot" />
            <div class="container__informaciones">
                <img src="./img/trophy.png" alt="Icono de trofeo" />
                 <div class="container__texto">
                    <h1><span class="container__texto-azul">Correcto!</span></h1>
                    <h2>Descubriste el número secreto!</h2>
                </div>
            </div>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>
_CSS




* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: white;
}

body {
    background: linear-gradient(#1354A5 0%, #041832 33.33%, #041832 66.67%, #01080E 100%);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}


body::before {
    background-image: url("img/code.png");
    background-repeat: no-repeat;
    background-position: right;
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.4;
}

.container {
    width: 1200px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 24px;
    border: 1px solid #1875E8;
    box-shadow: 4px 4px 20px 0px rgba(1, 8, 14, 0.15);
    background-image: url("img/Ruido.png");
    background-size: 100% 100%;
    position: relative;
}

.container__contenido {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
}

.container__informaciones {
    flex: 1;
    padding: 20px;
}

.container__boton {
    border-radius: 16px;
    background: #1875E8;
    padding: 16px 24px;
    width: 100%;
    font-size: 24px;
    font-weight: 700;
    border: none;
    margin-top: 16px;
}

.container__texto {
    margin: 16px 0 16px 0;
}

.container__texto-azul {
    color: #1875E8;
}

h1 {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 72px;
}

h2,
p,
button {
    font-family: 'Inter', sans-serif;
}

h2 {
    font-size: 32px;
    font-weight: 400;
}
