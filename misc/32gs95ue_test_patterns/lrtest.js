var spaceimage_src = 'a.png'
var spaceimagebar_src = 'a.png'

function reset() {

    const images = document.querySelectorAll('.testimage');
    images.forEach((image) => {
        image.addEventListener('click', (e) => {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            else {
                image.requestFullscreen();
            }
        })
    });

}
