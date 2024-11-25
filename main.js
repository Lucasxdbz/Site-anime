
const toggleTheme = () => {
  
  document.body.classList.toggle("tema-escuro");

  
  const isDarkTheme = document.body.classList.contains("tema-escuro");
  localStorage.setItem("tema", isDarkTheme ? "tema-escuro" : "tema-claro");

  
  botaoToggle.textContent = isDarkTheme ? "🌞 Tema Claro" : "🌙 Tema Escuro";
};


const botaoToggle = document.getElementById("toggle-tema");
botaoToggle.addEventListener("click", toggleTheme);


document.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");
  const body = document.body;

  
  if (temaSalvo === "tema-escuro") {
    body.classList.add("tema-escuro");
  }

  
  botaoToggle.textContent = body.classList.contains("tema-escuro")
    ? "🌞 Tema Claro"
    : "🌙 Tema Escuro";

  
  const personagensInfo = {
    jinwoo: "O protagonista, o caçador mais poderoso.",
    chaehaein: "Uma poderosa caçadora e aliada de Jin-Woo.",
    gogunhee: "O líder da Associação de Caçadores."
  };

  const balaoInfo = document.createElement("div");
  balaoInfo.classList.add("balao-info");
  document.body.appendChild(balaoInfo);

  
  document.querySelectorAll(".galeria .card h3").forEach(nome => {
    nome.addEventListener("mouseover", event => {
      const personagemId = event.target.textContent.toLowerCase().replace(/\s+/g, '');
      if (personagensInfo[personagemId]) {
        balaoInfo.textContent = personagensInfo[personagemId];
        balaoInfo.style.display = "block";
        const rect = event.target.getBoundingClientRect();
        balaoInfo.style.top = `${rect.bottom + window.scrollY + 5}px`;
        balaoInfo.style.left = `${rect.left + window.scrollX}px`;
      }
    });

    nome.addEventListener("mouseout", () => {
      balaoInfo.style.display = "none";
    });
  });
});
