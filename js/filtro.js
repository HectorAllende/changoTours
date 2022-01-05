$(function () {

    // filtra la imagenes segun boton apretado
    $('.filter').click(function () {
        // Cambia el boton de activo a no activoy
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });


    // ir a las distintas secciones

    let somos = $('#somos').offset().top,
        excursiones = $('#excursiones').offset().top,
        ubicacion = $('#ubicacion').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let somos = $('#somos').offset().top,
        excursiones = $('#excursiones').offset().top,
        ubicacion = $('#ubicacion').offset().top,
        contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-somos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: somos -0
        },600);
    });

    $('#enlace-excursiones').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: excursiones +100
        },600);
    });

    $('#enlace-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion -0
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
});