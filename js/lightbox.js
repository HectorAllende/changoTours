const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburger1 = document.querySelector('.hamburger')

const imagenesNosotros = document.querySelectorAll('.nosotros .imagenes img')

imagenes.forEach(imagen=>{
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src')) 
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburger1.style.opacity = '1'
    }
})


const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburger1.style.opacity = '0'
}


setInterval(() => {
    let indiceConActive
    let indiceConPreactive

    imagenesNosotros.forEach((imagen,i)=>{
        if(imagen.classList.contains('active')){
            indiceConActive = i
        }
        
        if(imagen.classList.contains('preactive')){
            indiceConPreactive = i
        }

        imagen.classList.remove('active')
        imagen.classList.remove('preactive')

    })

    //active

    if(indiceConActive + 1 == imagenesNosotros.length){
        imagenesNosotros[0].classList.add('active')
    }else{
        imagenesNosotros[indiceConActive + 1].classList.add('active')
    }

    //preactive

    if(indiceConPreactive + 1 == imagenesNosotros.length){
        imagenesNosotros[0].classList.add('preactive')
    }else{
        imagenesNosotros[indiceConPreactive + 1].classList.add('preactive')
    }
    
}, 4000);
