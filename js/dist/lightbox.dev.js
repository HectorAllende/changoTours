"use strict";

var imagenes = document.querySelectorAll('.img-galeria');
var imagenesLight = document.querySelector('.agregar-imagen');
var contenedorLight = document.querySelector('.imagen-light');
var hamburger1 = document.querySelector('.hamburger');
var imagenesNosotros = document.querySelectorAll('.nosotros .imagenes img');
imagenes.forEach(function (imagen) {
  imagen.addEventListener('click', function () {
    aparecerImagen(imagen.getAttribute('src'));
  });
});
contenedorLight.addEventListener('click', function (e) {
  if (e.target !== imagenesLight) {
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    hamburger1.style.opacity = '1';
  }
});

var aparecerImagen = function aparecerImagen(imagen) {
  imagenesLight.src = imagen;
  contenedorLight.classList.toggle('show');
  imagenesLight.classList.toggle('showImage');
  hamburger1.style.opacity = '0';
};

setInterval(function () {
  var indiceConActive;
  var indiceConPreactive;
  imagenesNosotros.forEach(function (imagen, i) {
    if (imagen.classList.contains('active')) {
      indiceConActive = i;
    }

    if (imagen.classList.contains('preactive')) {
      indiceConPreactive = i;
    }

    imagen.classList.remove('active');
    imagen.classList.remove('preactive');
  }); //active

  if (indiceConActive + 1 == imagenesNosotros.length) {
    imagenesNosotros[0].classList.add('active');
  } else {
    imagenesNosotros[indiceConActive + 1].classList.add('active');
  } //preactive


  if (indiceConPreactive + 1 == imagenesNosotros.length) {
    imagenesNosotros[0].classList.add('preactive');
  } else {
    imagenesNosotros[indiceConPreactive + 1].classList.add('preactive');
  }
}, 4000);