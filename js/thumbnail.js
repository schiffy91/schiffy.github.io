document.addEventListener("DOMContentLoaded", function() {
    let thumbnails = [].slice.call(document.getElementsByClassName("thumbnail"));
    let modal = document.getElementsByClassName("modal")[0];
    let frame = modal.children[0];
    modal.onclick = function() {
        modal.style.display = "none";
    };
    thumbnails.forEach(function(thumbnail) {
        thumbnail.onclick = function() {
            modal.style.display = "flex";
            frame.setAttribute("src", thumbnail.getAttribute("frame-src"));
        };
    });
});