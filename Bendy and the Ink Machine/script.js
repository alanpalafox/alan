document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.getElementById('exploreButton');
    const hiddenMessage = document.getElementById('hiddenMessage');

    // Efecto de sonido (opcional, pero añade mucho a la atmósfera)
    // Puedes reemplazar con un archivo de sonido de tinta, un gruñido, etc.
    const inkSound = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Reemplaza con tu propio MP3
    inkSound.volume = 0.3; // Volumen bajo para no ser molesto

    let isRevealed = false;

    exploreButton.addEventListener('click', () => {
        if (!isRevealed) {
            hiddenMessage.style.display = 'block'; // Muestra el mensaje oculto
            exploreButton.textContent = 'Ocultar Mensaje'; // Cambia el texto del botón
            inkSound.play(); // Reproduce el sonido
            isRevealed = true;
        } else {
            hiddenMessage.style.display = 'none'; // Oculta el mensaje
            exploreButton.textContent = 'Explorar la Fábrica'; // Restaura el texto del botón
            inkSound.pause(); // Pausa el sonido
            inkSound.currentTime = 0; // Reinicia el sonido
            isRevealed = false;
        }
    });

    // Pequeño Easter Egg: cambiar el color del título al pasar el ratón
    const title = document.querySelector('.title');
    title.addEventListener('mouseover', () => {
        title.style.color = '#ff0000'; // Rojo de susto
        title.style.textShadow = '0 0 15px rgba(255, 0, 0, 1)';
    });

    title.addEventListener('mouseout', () => {
        title.style.color = '#ffcc00'; // Vuelve al color original
        title.style.textShadow = '0 0 10px rgba(255, 204, 0, 0.7)';
    });
});