document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll("img[data-url]");
    
    imagenes.forEach(imagen => {
        imagen.addEventListener("click", function() {
            const url = this.getAttribute("data-url");
            window.location.href = url;
        });
    });
});