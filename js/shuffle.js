document.addEventListener("DOMContentLoaded", function() {
    var grid = document.getElementsByClassName("grid")[0];
    grid.style.visibility = "hidden";
    for (var i = grid.children.length; i >= 0; i--) {
        grid.appendChild(grid.children[Math.random() * i | 0]);
    }
    grid.style.visibility = "visible";
});