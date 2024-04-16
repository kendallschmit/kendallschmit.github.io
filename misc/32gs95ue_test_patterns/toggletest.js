var spaceimage_src = 'a.png'
var spaceimagebar_src = 'abar.png'

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


    let image = document.getElementById('spaceimage').src = spaceimage_src;
    image = document.getElementById('spaceimagebar').src = spaceimagebar_src;

    document.addEventListener('keyup', (event) => {
        if (event.code === 'Space') {
            if (spaceimage_src == 'a.png') {
                spaceimage_src = 'b.png';
            }
            else {
                spaceimage_src = 'a.png';
            }
            let image = document.getElementById('spaceimage').src = spaceimage_src;

            if (spaceimagebar_src == 'abar.png') {
                spaceimagebar_src = 'bbar.png';
            }
            else {
                spaceimagebar_src = 'abar.png';
            }
            image = document.getElementById('spaceimagebar').src = spaceimagebar_src;
        }
    })

}
