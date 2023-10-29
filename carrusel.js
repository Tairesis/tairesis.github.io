document.addEventListener('DOMContentLoaded', function() {
    const imagenes = ['galeriaMasters/master1.jpeg', 'galeriaMasters/master2.jpeg', 'galeriaMasters/master3.jpeg', 'galeriaMasters/master4.jpg', 'galeriaMasters/master5.jpeg'];
    
    const contenedorImagenes = document.getElementById('contenedor-imagenes');
    const btnAnterior = document.getElementById('btnAnterior');
    const btnSiguiente = document.getElementById('btnSiguiente');

    var indiceActual = 0;

    function actualizarGaleria() {
        contenedorImagenes.innerHTML = '';
        for (var i = 0; i < imagenes.length; i++) {
            const img = document.createElement('img');
            img.src = imagenes[i];
            img.classList.add('imagen-galeria');
            contenedorImagenes.appendChild(img);
        }

        contenedorImagenes.style.width = imagenes.length * 100 + 'px';
        contenedorImagenes.style.transform = 'translateX(' + (-indiceActual * 700) + 'px)';
    }

    function siguienteImagen() {
        indiceActual = (indiceActual + 1) % imagenes.length;
        actualizarGaleria();
    }

    function anteriorImagen() {
        indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
        actualizarGaleria();
    }

    btnSiguiente.addEventListener('click', siguienteImagen);
    btnAnterior.addEventListener('click', anteriorImagen);

    actualizarGaleria();
});
