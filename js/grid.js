function fadeIn(element, seconds) {
    var opacity = 0.1;
    element.style.display = "block";
    var timer = setInterval(function () {
        if (opacity >= 1){
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        element.style.filter = `alpha(opacity=\"${opacity * 100}\")`;
        opacity += opacity * 0.1;
    }, seconds);
}

document.addEventListener("DOMContentLoaded", function() {
	let grid = document.getElementsByClassName("grid")[0];
	grid.style.display = "block"
    fadeIn(grid, 1)
});