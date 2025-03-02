// Manejo de eventos para mostrar las imágenes de los aviones
document.getElementById('a330neo').addEventListener('mouseover', function() {
    document.getElementById('imageDisplay').src = 'ruta/a330neo.jpg';  // Actualiza las rutas de las imágenes
    document.getElementById('imageDisplay').style.display = 'block';
});

document.getElementById('a320').addEventListener('mouseover', function() {
    document.getElementById('imageDisplay').src = 'ruta/a320.jpg';
    document.getElementById('imageDisplay').style.display = 'block';
});

document.getElementById('b787').addEventListener('mouseover', function() {
    document.getElementById('imageDisplay').src = 'ruta/b787.jpg';
    document.getElementById('imageDisplay').style.display = 'block';
});

document.getElementById('a380').addEventListener('mouseover', function() {
    document.getElementById('imageDisplay').src = 'ruta/a380.jpg';
    document.getElementById('imageDisplay').style.display = 'block';
});

// Ocultar la imagen cuando el cursor deja el área de los aviones
document.querySelectorAll('.airplane').forEach(item => {
    item.addEventListener('mouseleave', function() {
        document.getElementById('imageDisplay').style.display = 'none';
    });
});

