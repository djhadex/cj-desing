document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-img');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-image');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            fullscreenImage.src = this.src;
            fullscreenOverlay.style.display = 'flex';
        });
    });

    fullscreenOverlay.addEventListener('click', function() {
        this.style.display = 'none';
    });
});
