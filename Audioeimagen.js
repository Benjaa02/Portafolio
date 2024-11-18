
    // Abrir el modal con la imagen seleccionada
    function openModal(imageSrc) {
        var modal = document.getElementById("imageModal");
        var imgModal = document.getElementById("imgModal");
        imgModal.src = imageSrc;
        modal.style.display = "block";
    }

    // Cerrar el modal
    function closeModal() {
        var modal = document.getElementById("imageModal");
        modal.style.display = "none";
    }

   // Reproducir el audio
function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
}

// Detener el audio
function stopAudio() {
    var audio = document.getElementById("myAudio");
    audio.pause();
    audio.currentTime = 0;
}