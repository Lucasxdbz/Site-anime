
document.addEventListener("DOMContentLoaded", () => {
    const botaoToggle = document.getElementById("toggle-tema");
    const temaAtual = localStorage.getItem("tema");
    
    if (temaAtual === "tema-escuro") {
        document.body.classList.add("tema-escuro");
        if (botaoToggle) botaoToggle.textContent = "🌞 Tema Claro";
    }
    
    if (botaoToggle) {
        botaoToggle.addEventListener("click", () => {
            document.body.classList.toggle("tema-escuro");
            const novoTema = document.body.classList.contains("tema-escuro") ? "tema-escuro" : "tema-claro";
            localStorage.setItem("tema", novoTema);
            botaoToggle.textContent = novoTema === "tema-escuro" ? "🌞 Tema Claro" : "🌙 Tema Escuro";
        });
    }
});
