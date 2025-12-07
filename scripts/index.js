document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", () => {
      
      // fecha todos os itens, menos o clicado
      document.querySelectorAll(".faq-item").forEach((other) => {
        if (other !== item) {
          other.classList.remove("open");
        }
      });
  
      // abre/fecha o que você clicou
      item.classList.toggle("open");
    });
  });
  