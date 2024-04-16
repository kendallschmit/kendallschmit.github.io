function reset() {

    const images = document.querySelectorAll('.testimage')
    images.forEach((image) => {
        image.addEventListener('click', (e) => {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            else {
                image.requestFullscreen();
            }
        })
    })
}
