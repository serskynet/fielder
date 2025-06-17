// Carga inicial
setTimeout(() => {
  document.querySelector('.loader').style.display = 'none';
  const content = document.getElementById('mainContent');
  content.classList.add('active');
}, 3000);

// Traducciones y animaciones
const translations = {
  en: {
    title: "From Más que Vendedores to Fielder Church",
    message: "Thank you for your love and generosity toward our church. Your support inspires us to keep serving with faith, passion, and hope. God bless you abundantly!"
  },
  es: {
    title: "De Más que Vendedores para la Iglesia Fielder",
    message: "Gracias por su amor y generosidad hacia nuestra iglesia. Su apoyo nos inspira a seguir sirviendo con fe, pasión y esperanza. ¡Que Dios los bendiga abundantemente!"
  }
};

let currentLang = 'en';
setInterval(() => {
  const title = document.getElementById('titleText');
  const message = document.getElementById('messageText');

  title.classList.remove('fade-in');
  message.classList.remove('fade-in');
  title.classList.add('fade-out');
  message.classList.add('fade-out');

  setTimeout(() => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    title.textContent = translations[currentLang].title;
    message.textContent = translations[currentLang].message;

    title.classList.remove('fade-out');
    message.classList.remove('fade-out');
    title.classList.add('fade-in');
    message.classList.add('fade-in');
  }, 1000);
}, 8000);

// Partículas
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numberOfParticles = 100;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
// Habilitar audio en la primera interacción
function enableAudioPlayback() {
  const audio = document.getElementById("bgMusic");
  if (audio.paused) {
    audio.play().catch((e) => {
      console.warn("Autoplay bloqueado, esperando interacción del usuario.");
    });
  }
  // Solo una vez
  document.removeEventListener("click", enableAudioPlayback);
  document.removeEventListener("touchstart", enableAudioPlayback);
}
document.addEventListener("click", enableAudioPlayback);
document.addEventListener("touchstart", enableAudioPlayback);
