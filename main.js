
window.addEventListener('keydown', function(event) { 
    const key = event.key; 
    switch (event.key) {
        case "ArrowLeft":
            window.scrollBy(-window.innerWidth,0);
            break;
        case "ArrowRight":
            window.scrollBy(window.innerWidth,0);
            break;
    }
});