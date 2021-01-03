function fadeIn(element, seconds) {
    var opacity = 0;
    var previousTime = Date.now();
    var timer = setInterval(function () {
        var currentTime = Date.now();
        var deltaTime = (currentTime - previousTime) / 1000.0;
        previousTime = currentTime;
        if (opacity >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        element.style.filter = `alpha(opacity=\"${opacity * 100}\")`;
        element.style.display = "block";
        opacity += ((1 / seconds) * deltaTime);
    }, 16); // Update every 16ms (i.e. 60 FPS)
}

window.addEventListener("load", function() {
    let fades = [].slice.call(document.getElementsByClassName("fade"));
    fades.forEach(function(element) {
        fadeIn(element, .2);
    });
});