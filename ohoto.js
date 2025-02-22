/* JavaScript Function for Toggle Menu */
<script>
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}


function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const video = document.getElementById('lightbox-video');

    img.src = src;
    img.style.display = 'block';
    video.style.display = 'none';
    lightbox.classList.add('active');
}

function openLightboxVideo(videoElement) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const video = document.getElementById('lightbox-video');

    video.src = videoElement.src;
    video.style.display = 'block';
    video.play();
    img.style.display = 'none';
    lightbox.classList.add('active');
}
