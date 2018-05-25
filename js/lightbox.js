document.addEventListener("DOMContentLoaded", function() {
    let image = null;
    let lightbox = document.getElementsByClassName("lightbox")[0];
    let createLightbox = function(object) {
        image = object;
        lightbox.children[0].setAttribute("src", image.getAttribute("lightbox-src"));
        lightbox.style.display = "flex";
    };
    let cancelLightbox = function() {
        lightbox.style.display = "none";
        image = null;
    };
    let keyHandler = function(event) {
        const LEFT_KEY = 37, RIGHT_KEY = 39;
        event = event || window.event;
        let key = event.which || event.keyCode;
        if (key == LEFT_KEY) {
            move (-1);
        } else if (key == RIGHT_KEY) {
            move(1);
        }
    };
    let move = function(offset) {
        if (image == null) {
            return;
        }
        let index = thumbnails.indexOf(image);
        if (index + offset < 0 || index + offset >= thumbnails.length) {
            return;
        }
        createLightbox(thumbnails[index + offset]);
    };
    lightbox.onclick = cancelLightbox;
    document.onkeydown = keyHandler;

    let thumbnails = [].slice.call(document.getElementsByClassName("thumbnail"));
    thumbnails.forEach(function(thumbnail) {
        thumbnail.onclick = function(event) { createLightbox(thumbnail); };
    });
});
