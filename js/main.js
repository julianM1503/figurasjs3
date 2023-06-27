function circulo(){
    let figura=document.getElementById("figura");

    figura.classList.toggle("circulo");
    // LA FUNCION TOGGLE  agrega y quita segun los click
    //classlist hace referencia a todas 
}
function rectangulo(){
    let figura=document.getElementById("figura");

    figura.classList.toggle("rectangulo");
}
function degradado(){
    let figura=document.getElementById("figura");

    figura.classList.toggle("degradado");
}
function gif(){
    let figura=document.getElementById("figura");

    figura.classList.toggle("gif");
}
function arriba(){
    const figura=document.getElementById("figura");

    figura.classList.toggle("arriba");
}
function abajo(){
    const figura=document.getElementById("figura");

    figura.classList.toggle("abajo");
}
function derecha(){
    const figura=document.getElementById("figura");
    figura.classList.toggle("derecha");
}
function izquierda(){
    const figura=document.getElementById("figura");
    figura.classList.toggle("izquierda");
}
function diagonal(){
    const figura=document.getElementById("figura");
    figura.classList.toggle("diagonal");
}
function onda(){
    const figura=document.getElementById("figura");
    figura.classList.toggle("onda");
}
function panel(){
    const panel=document.querySelector(".panel");
    panel.classList.toggle('active');
}
function login(){
    let figura=document.getElementById("modal");
    figura.classList.toggle('activo');
}