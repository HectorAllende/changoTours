"use strict";

AOS.init();
var ubicacionPrincipal = window.pageYOffset; // esconder y volver a mostrar la barra de nav

window.addEventListener('scroll', function () {
  var desplazamientoActual = window.pageYOffset;

  if (ubicacionPrincipal >= desplazamientoActual) {
    document.getElementsByTagName('nav')[0].style.top = '0px';
  } else {
    document.getElementsByTagName('nav')[0].style.top = '-100px';
  }

  ubicacionPrincipal = desplazamientoActual;
}); // Menu de navegación

var enlacesHeader = document.querySelectorAll('.enlaces-header')[0];
var menu = document.querySelectorAll('.hamburger')[0];
var menuHamburguesa = document.querySelectorAll('.cambiar')[0];
var semaforo = true;
document.querySelectorAll('.hamburger')[0].addEventListener('click', function () {
  if (semaforo) {
    // document.querySelectorAll('.hamburger')[0].style.color = "#fff"
    menu.style.color = "#5d6678";
    menuHamburguesa.classList.remove('fa-bars');
    menuHamburguesa.classList.add('fa-times');
    semaforo = false;
  } else {
    // document.querySelectorAll('.hamburger')[0].style.color = "#000"
    menu.style.color = "#000";
    menuHamburguesa.classList.add('fa-bars');
    menuHamburguesa.classList.remove('fa-times');
    semaforo = true;
  }

  enlacesHeader.classList.toggle('menudos');
}); // para que cierre el menu al hacer click en los menus

enlacesHeader.addEventListener('click', function () {
  enlacesHeader.classList.remove('menudos');
  menuHamburguesa.classList.add('fa-bars');
  menuHamburguesa.classList.remove('fa-times');
  semaforo = true;
});