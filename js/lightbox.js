document.addEventListener("DOMContentLoaded", function() {
    let thumbnails = [].slice.call(document.getElementsByClassName("thumbnail"));
    let modal = document.getElementsByClassName("modal")[0];
    let lightbox = modal.children[0];
    let element = null;
    modal.onclick = function() {
        modal.style.display = "none";
        element = null;
    };
    thumbnails.forEach(function(thumbnail) {
        thumbnail.onclick = function() {
            element = thumbnail;
            modal.style.display = "flex";
            lightbox.setAttribute("src", thumbnail.getAttribute("lightbox-src"));
        };
    });
});