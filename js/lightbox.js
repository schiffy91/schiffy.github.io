document.addEventListener("DOMContentLoaded", function() {
    let lightbox = document.getElementsByClassName("lightbox")[0];
    let leftArrow = lightbox.children[0];
    let frame = lightbox.children[1];
    let rightArrow = lightbox.children[2];
    let div = null;
    let mod = function(n, m) {
        return ((n % m) + m) % m;
    };
    let preload = function(div) {
        var image = new Image();
        image.src = div.getAttribute("lightbox-src");
    }
    let createLightbox = function(event) {
        div = event;
        frame.setAttribute("src", div.getAttribute("lightbox-src"));
        lightbox.style.display = "flex";
        lightbox.style.flexDirection = "row";
    };
    let cancelLightbox = function(event) {
        if (event.target == leftArrow || event.target == rightArrow || event.target == frame) {
            return;
        }
        frame.removeAttribute("src");
        lightbox.style.display = "none";
        div = null;
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
        if (!frame.hasAttribute("src")) {
            return;
        }
        let index = mod(thumbnails.indexOf(div) + offset, thumbnails.length);
        let previous = thumbnails[mod(index - 1, thumbnails.length)];
        let current = thumbnails[index];
        let next = thumbnails[mod(index + 1, thumbnails.length)];
        preload(previous)
        createLightbox(current);
        preload(next)
    };
    lightbox.onclick = cancelLightbox;
    leftArrow.onclick = function(event) { move(-1); event.stopPropagation(); };
    rightArrow.onclick = function(event) { move(1); event.stopPropagation(); };
    document.onkeydown = keyHandler;

    let thumbnails = [].slice.call(document.getElementsByClassName("thumbnail"));
    thumbnails.forEach(function(thumbnail) {
        thumbnail.onclick = function(event) { createLightbox(thumbnail); };
    });
});
