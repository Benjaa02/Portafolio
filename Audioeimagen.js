
    // Función para abrir el modal y mostrar la imagen en grande
    function openModal(imageSrc) {
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("imgModal");
        var captionText = document.getElementById("caption");

        modal.style.display = "block"; // Mostrar el modal
        modalImg.src = imageSrc; // Copiar la fuente de la imagen a la imagen del modal
        captionText.innerHTML = "Imagen ampliada"; // Leyenda
    }

    // Función para cerrar el modal
    function closeModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none"; // Ocultar el modal
    }

    // Función para reproducir audio cuando se hace clic en Proyecto 4
    function playAudio() {
        var audio = document.getElementById("audio");
        audio.style.display = "block"; // Mostrar el control del audio si es necesario
        audio.play(); // Reproducir el audio
    }

