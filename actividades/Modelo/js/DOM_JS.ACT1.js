/*Vamos a aprender a seleccionar elementos en js*/

console.log(document.getElementsByTagName("h1"));//para etiqueta
console.log(document.getElementsByClassName("main_title"));//para Clase
console.log(document.getElementById("Titulo"));//para ID

console.log(document.querySelector("h1")); //por etiqueta
console.log(document.querySelector(".main-title"));//por clase
console.log(document.querySelector("#titulo"))// por id

console.log(document.querySelector(".heaeder_btn"));//Solo cogera el primero del array
console.log(document.querySelectorAll(".header_btn"));//Escogera todo el array
console.log(document.getElementsByClassName("header_btn"));//Me devuelve un array de objeto


//Ej1 :En la página web ves que tienes un titular Hola Mundo. Se trata de añadir una función javascript para que al pulsar el botón cambiar este título se convierta en Hola Mundo con Javascript . El unico cambio necesario es el bloque con el texto cambiar y  completar la función cambiar() que aparece en el código de la página.
// Debe cambiar de Hola Mundo a Hola Mundo Javascript
let titulo= document.querySelector("h1");
console.log(titulo.textContent) //visualizaoms el contenido de nuestro objeto
titulo.textContent = "Hola mundo con Javascript";
console.log(titulo.innerHTML);//accedo al contenido del objeto
titulo.innerHTML =  "<br><br><em> Hola mundo <em>";//Admite e interpreta los elementos
console.log(titulo.innerHTML);//accedo al contenido del objeto
      titulo.innerHTML =  "<br><br><em> Hola mundo <em>";//Admite e interpreta los elementos
// Para trabajar con eventos, vamos a utilizar la funcion add.EventListener//


function cambiar(){
    //Ej1
    let titulo= document.querySelector("h1");
    console.log(titulo.textContent) //visualizaoms el contenido de nuestro objeto
     titulo.textContent = "Hola mundo con Javascript";
    //EJ2
     titulo.style.color ="red";
     titulo.style.textAlign = "center";
     titulo.style.backgroundColor= "yellow";
}


const btn_tit = document.querySelector(".header__btn--change");

btn_tit.addEventListener("Click", function(){
    cambiar();
    this.classlist.toggle("header__btn--click")

});

btn_tit.toggle("header__btn--click");


//EJ3 Como crear nuevos elementos y objetos dentro de mi html
const btn_blq= document.querySelector(".header__btn--create");
function crearDiv(){
    const new_ele= document.createElement("div");// Crear un nuevo elemento
    new_ele.textContent= "Javascript permite crear paginas dinamicas";//Añadimos contenido
    new_ele.classList.add("texto");// Añadimos el estilo

    const padre= document.querySelector("main");
    padre.appendChild(new_ele);

    // Posicionamos nnuestro elemento detras de nuestra etiqueta titulo
    const titulo = document.querySelector("h1");// elemento de referencia
    titulo.parentNode.insertBefore(new_ele, titulo.nextSibling)
}




