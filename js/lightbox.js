class Lightbox {
    constructor() {
        this.lightbox = document.getElementsByClassName("lightbox")[0];
        this.lightbox.onclick = (event) => { this.hide(event); };
        this.leftArrow = this.lightbox.children[0];
        this.leftArrow.onclick = (event) => { this.move(-1); event.stopPropagation(); };
        this.frame = this.lightbox.children[1];
        this.rightArrow = this.lightbox.children[2];
        this.rightArrow.onclick = (event) => { this.move(1); event.stopPropagation(); };
        this.target = null;
        this.image = null;
        document.onkeydown = (event) => { this.onKeyPressed(event) };
        this.thumbnails = [].slice.call(document.getElementsByClassName("thumbnail"));
        this.thumbnails.forEach((thumbnail) => { thumbnail.onclick = (event) => { this.showImage(thumbnail); }; });
        this.hide(null);
    }
    showImage(target) {
        let onImageLoaded = () => { this.frame.setAttribute("src", this.image.src); };
        this.target = target;
        this.frame.setAttribute("src", this.target.getAttribute("src"));
        if (this.image != null) { this.image.removeEventListener("load", onImageLoaded); }
        this.image = new Image();
        this.image.src = this.target.getAttribute("lightbox-src");
        if (this.image.complete) { onImageLoaded(); }
        else { this.image.addEventListener("load", onImageLoaded); }
        this.lightbox.style.display = "flex"; this.lightbox.style.flexDirection = "row"; document.body.style.overflow = "hidden";
    }
    hide(event) {
        if (event != null && (event.target == this.leftArrow || event.target == this.rightArrow || event.target == this.frame)) { return; }
        this.lightbox.style.display = "none"; document.body.style.overflow = "initial";
    }
    onKeyPressed(event) {
        const LEFT_KEY = 37, RIGHT_KEY = 39, ESC_KEY = 27;
        event = event || window.event;
        let key = event.which || event.keyCode;
        if (key == LEFT_KEY) { this.move (-1); } 
        else if (key == RIGHT_KEY) { this.move(1); }
        else if (key == ESC_KEY) { this.hide(null); }
    }
    move(offset) {
        let mod = function(n, m) { return ((n % m) + m) % m; };
        let preloadImage = function(target) { new Image().src = target.getAttribute("lightbox-src"); };
        let index = mod(this.thumbnails.indexOf(this.target) + offset, this.thumbnails.length);
        this.showImage(this.thumbnails[index]);
        preloadImage(this.thumbnails[mod(index - 1, this.thumbnails.length)])
        preloadImage(this.thumbnails[mod(index + 1, this.thumbnails.length)])
    }
}
document.addEventListener("DOMContentLoaded", function() { let lightbox = new Lightbox(); });