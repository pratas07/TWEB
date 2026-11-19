document.addEventListener("DOMContentLoaded", function() {
    const btnAbrir = document.getElementById("abrir-menu");
    const btnFechar = document.getElementById("fechar-menu");
    const menuOverlay = document.getElementById("menu-overlay");

    // Abrir o menu
    btnAbrir.addEventListener("click", function() {
        menuOverlay.classList.add("ativo");
        // Impede o scroll do site enquanto o menu está aberto
        document.body.style.overflow = "hidden"; 
    });

    // Fechar o menu no botão X
    btnFechar.addEventListener("click", function() {
        menuOverlay.classList.remove("ativo");
        // Devolve o scroll ao site
        document.body.style.overflow = "auto"; 
    });
});