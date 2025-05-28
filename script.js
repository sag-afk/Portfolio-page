// Particle system
function createParticles() {
  const container = document.getElementById("particles");

  setInterval(() => {
    const particle = document.createElement("div");
    particle.className = "particle";

    const size = Math.random() * 4 + 2;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";
    particle.style.animationDelay = Math.random() * 2 + "s";

    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 22000);
  }, 300);
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Form submission
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");
  const originalText = button.textContent;
  button.textContent = "Sending...";
  button.style.background = "linear-gradient(45deg, #00ccff, #ff0080)";

  setTimeout(() => {
    button.textContent = "Message Sent!";
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = "linear-gradient(45deg, #00ff88, #00ccff)";
      e.target.reset();
    }, 2000);
  }, 1000);
});

// Mouse cursor effect
document.addEventListener("mousemove", (e) => {
  const cursor = document.createElement("div");
  cursor.style.position = "fixed";
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursor.style.width = "4px";
  cursor.style.height = "4px";
  cursor.style.background = "#00ff88";
  cursor.style.borderRadius = "50%";
  cursor.style.pointerEvents = "none";
  cursor.style.zIndex = "9999";
  cursor.style.opacity = "0.7";
  cursor.style.animation = "cursorFade 1s ease-out forwards";

  document.body.appendChild(cursor);

  setTimeout(() => {
    cursor.remove();
  }, 1000);
});

// Add cursor fade animation
const style = document.createElement("style");
style.textContent = `
                @keyframes cursorFade {
                    0% {
                        transform: scale(1);
                        opacity: 0.7;
                    }
                    100% {
                        transform: scale(3);
                        opacity: 0;
                    }
                }
            `;
document.head.appendChild(style);

// Initialize particles
createParticles();

// Add typing effect to hero text
const heroTitle = document.querySelector(".hero-content h1");
const text = heroTitle.textContent;
heroTitle.textContent = "";

let i = 0;
const typeWriter = () => {
  if (i < text.length) {
    heroTitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
};

setTimeout(typeWriter, 500);
