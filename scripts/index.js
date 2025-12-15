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

  const feedbacks = document.querySelectorAll('.feedback');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentSlide = 0;

  function showSlide(index) {
    // Remove a classe active de todos
    feedbacks.forEach(slide => slide.classList.remove('active'));

    // Garante que o índice seja cíclico (loop infinito)
    if (index >= feedbacks.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = feedbacks.length - 1;
    } else {
      currentSlide = index;
    }

    // Adiciona a classe active no slide atual
    feedbacks[currentSlide].classList.add('active');
  }

  nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
  });

  prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
  });

  