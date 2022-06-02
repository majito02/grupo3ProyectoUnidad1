//Atrapar los botones de cada seccion
let btn_mostrar = document.getElementById('btn_mostrar');
let btn_mostrar1 = document.getElementById('btn_mostrar1');
let btn_mostrar2 = document.getElementById('btn_mostrar2');
let btn_mostrar3 = document.getElementById('btn_mostrar3');

//Atrapar cada seccion a aparecer y desaparecer
let trabajos= document.getElementById('trabajos');
let trabajos1= document.getElementById('trabajos1');
let trabajos2= document.getElementById('trabajos2');
let trabajos3= document.getElementById('trabajos3');

//Dar eventos de click a cada boton
btn_mostrar.addEventListener('click', toggle);
btn_mostrar1.addEventListener('click', toggle1);
btn_mostrar2.addEventListener('click', toggle2);
btn_mostrar3.addEventListener('click', toggle3);

//Funciones de accion de cada evento
function toggle() {
    trabajos.classList.toggle('show');
}
function toggle1() {
    trabajos1.classList.toggle('show');
}
function toggle2() {
    trabajos2.classList.toggle('show');
}
function toggle3() {
    trabajos3.classList.toggle('show');
}

