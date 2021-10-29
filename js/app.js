// Variables
const player = document.querySelector("#player");
const points = document.querySelector("#points");
const time = document.querySelector("#time");
const gameOver = document.querySelector("#game-over");
const jugador = document.querySelector("#jugador")

// Eventos
player.addEventListener("mouseover", (sumarPuntos));

// Funciones
let puntos = 0;
let tiempo = 30;
let necesarios = 20;

function sumarPuntos(){
    puntos++;
    points.innerHTML = `Puntos: <b> ${puntos} /${necesarios} </b>`;
    radNum = Math.round(Math.random()*490);
    radNum2 = Math.round(Math.random()*490);
    player.style.marginTop = radNum + "px";
    player.style.marginLeft = radNum2 + "px";

    if (puntos === 20){
        alert("Ganastes el Juego");
        jugador.play();
        puntos = 0;
        tiempo = 30; 
    }
}

function restarTiempo(){
    tiempo--;
    time.innerHTML = `&nbsp;&nbsp;&nbsp; Tiempo : <b> ${tiempo} </b>`;
    if (tiempo === 0){
        alert("El tiempo se acabo perdiste");
        gameOver.play();
        puntos = 0;
        tiempo = 30; 
    }
}

setInterval(restarTiempo, 1000);