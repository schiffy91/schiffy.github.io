window.addEventListener("load", function() {
    let lazies = [].slice.call(document.getElementsByClassName("lazy"));
    let observer = new IntersectionObserver(function(entries, _) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                let lazy = entry.target;
                // Start lazy loading an image an internval randomly chosen between [0, 128ms]
                setTimeout(function() {
                    lazy.src = lazy.getAttribute("lazy-src");
                    lazy.removeAttribute("lazy-src");
                }, Math.floor(Math.random() * 128));
                lazy.classList.remove("lazy");
                observer.unobserve(lazy);
            }
        });
    });
    lazies.forEach(function(lazy) {
        observer.observe(lazy);
    });
});