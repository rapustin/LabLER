let desarrollo = document.getElementById('desarrollo');

let email = document.getElementById('email');
let whatsapp = document.getElementById('whatsapp');


let labler = document.getElementById('labler');
let sistemas = document.getElementById('sistemas');
let seguridad = document.getElementById('seguridad');
let acesoramiento = document.getElementById('acesoramiento');

let sistemasDesarrollo = document.getElementById('sistemasDesarrollo');
let seguridadDesarrollo = document.getElementById('seguridadDesarrollo');
let acesoramientoDesarrollo = document.getElementById('acesoramientoDesarrollo');





let informateSobreSistemas = document.getElementById('informateSobreSistemas');
let informateSobreSeguridad = document.getElementById('informateSobreSeguridad');
let informateSobreAcesoramiento = document.getElementById('informateSobreAcesoramiento');

let atrasHome = document.querySelector('#atrasHome');
let atrasHomeAll = document.querySelectorAll('#atrasHome');



email.addEventListener('click', ()=>{
    alert('Email');
});

whatsapp.addEventListener('click', ()=>{
    alert('Whatsapp');
});

informateSobreSistemas.addEventListener('click', ()=>{
    labler.classList.add('oculto');
    sistemas.classList.add('oculto');
    seguridad.classList.add('oculto');acesoramiento.classList.add('oculto');
    sistemasDesarrollo.classList.remove('oculto');
});


informateSobreSeguridad.addEventListener('click', ()=>{
    labler.classList.add('oculto');
    sistemas.classList.add('oculto');
    seguridad.classList.add('oculto');acesoramiento.classList.add('oculto');
    seguridadDesarrollo.classList.remove('oculto');
});


informateSobreAcesoramiento.addEventListener('click', ()=>{
    labler.classList.add('oculto');
    sistemas.classList.add('oculto');
    seguridad.classList.add('oculto');acesoramiento.classList.add('oculto');
    acesoramientoDesarrollo.classList.remove('oculto');
});



for (let atrasHome of atrasHomeAll){

atrasHome.addEventListener('click', ()=>{
    labler.classList.remove('oculto');
    sistemas.classList.remove('oculto');
    seguridad.classList.remove('oculto');acesoramiento.classList.remove('oculto');

    acesoramientoDesarrollo.classList.add('oculto');
    seguridadDesarrollo.classList.add('oculto');
    sistemasDesarrollo.classList.add('oculto');
})}