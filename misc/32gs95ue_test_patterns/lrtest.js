var spaceimage_src = 'a.png'

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


    const image = document.getElementById('spaceimage').src = spaceimage_src;

    document.addEventListener('keyup', (event) => {
        if (event.code === 'Space') {
            if (spaceimage_src == 'a.png') {
                spaceimage_src = 'b.png';
            }
            else {
                spaceimage_src = 'a.png';
            }

            const image = document.getElementById('spaceimage').src = spaceimage_src;
        }
    })



}
