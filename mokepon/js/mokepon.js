
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

$('#seleccionar-ataque').hide();
$('#reiniciar').hide();
$('#boton-mascota').on('click',  seleccionarMascotaJugador);
$('#boton-fuego').on('click', ataqueFuego);
$('#boton-agua').on('click', ataqueAgua);
$('#boton-tierra').on('click', ataqueTierra);
$('#boton-reiniciar').on('click', reiniciarJuego);
let spanVidasJugador = $('#vidas-jugador');
let spanVidasEnemigo = $('#vidas-enemigo');


function seleccionarMascotaJugador(){ 
    $('#seleccionar-mascota').hide();
    $('#seleccionar-ataque').show();
       
    if ($('#hipodoge').prop('checked')){
         $('#mascota-jugador').html('Hipodoge');
    }
    else if ($('#capipepo').prop('checked')){
         $('#mascota-jugador').html('Capipepo');
    }
    else if ($('#ratigueya').prop('checked')){
         $('#mascota-jugador').html('Ratigueya');
    }else{
        alert('Selecciona una mascota');
    }
    seleccionarMascotaEnemigo();   
    
    }


function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1, 3);
    
        
    if (mascotaAleatorio == 1 ){
        $('#mascota-enemigo').html('Hipodoge');
    }else if (mascotaAleatorio == 2){
        $('#mascota-enemigo').html('Capipepo');
    }else{
        $('#mascota-enemigo').html('Ratigueya');
    }

}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo();
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo();
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3);

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO';
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA';
    }else{
        ataqueEnemigo = 'TIERRA';
    }
   combate();
     
}

function combate() {
  
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE");
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE");
        vidasEnemigo--
        spanVidasEnemigo.html(vidasEnemigo)
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE");
        vidasEnemigo--
        spanVidasEnemigo.html(vidasEnemigo);
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.html(vidasEnemigo);
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.html(vidasJugador);
    }

    revisarVidas()
}



function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES! Ganaste 😀");
    }else if (vidasJugador == 0){
        crearMensajeFinal("lo siento, perdiste  😔");

    }
}
function  crearMensaje(resultado){
    let sectionMensaje = resultado
    let ataquesJugador = ataqueJugador
    let ataquesEnemigo = ataqueEnemigo

    $('#resultado').html(sectionMensaje) 
    let nuevoAtaqueJugador = $('<p>').html(ataquesJugador);
    let nuevoAtaqueEnemigo = $('<p>').html(ataquesEnemigo);

    nuevoAtaqueJugador.appendTo('#ataque-del-jugador');
    nuevoAtaqueEnemigo.appendTo('#ataque-del-enemigo');
}

function crearMensajeFinal(resultadoFinal){
   $('#resultado').html(resultadoFinal);

   $('#boton-fuego').prop('disabled', true);
    $('#boton-agua').prop('disabled', true);
    $('#boton-tierra').prop('disabled', true);
    

    $('#reiniciar').show();
    
}

function reiniciarJuego(){
 
    location.reload();
}
 

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min  +1) + min );
}



