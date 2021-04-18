let secuenciaMaquina = [];
let secuenciaUsuario = [];
let ronda = 0;

document.querySelector("#boton").onclick = startGame;

actualizarEstado("Que empiece el juego rey");

function startGame(){
    actualizarEstado("Turno de la maquina");
    manejarRondas();
}

function actualizarEstado(estado){
    let $estado = document.querySelector("#estado");
    $estado.textContent = estado;
}

function manejarRondas(){
    bloquearInputUsruario();
    resaltarCuadro(obtenerCuadroAleatorio());
    turnoUsuario();

}
//Copiada del profe
function obtenerCuadroAleatorio() {
    const $cuadros = document.querySelectorAll('.cuadro');
    const indice = Math.floor(Math.random() * $cuadros.length);//Ver como funciona el Math.floor y Math.random()/ No entiendo porque se multiplica con el . lenght
    return $cuadros[indice];
}
 function resaltarCuadro($cuadro){
    $cuadro.style.opacity = 1;
    setTimeout(function(){
        $cuadro.style.opacity = 0.5;
    }, 500);
}

function turnoUsuario(){
    desbloquearInputUsuario();

}

function bloquearInputUsruario(){
    $cuadros = document.querySelectorAll(".cuadros");
    $cuadros.forEach(function($cuadro){
        $cuadro.onclick = function(){
        };
        
    });
}

function desbloquearInputUsuario(){
    $cuadros = document.querySelectorAll(".cuadros");
    $cuadros.forEach(function($cuadro){
        $cuadro.onclick = cuadrosUsuario();
        
    }); 
}

function cuadrosUsuario(e){
    const $cuadro = e.target;
    resaltarCuadro($cuadro);

    secuenciaUsuario.push($cuadro);  

}