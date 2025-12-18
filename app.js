// ===== main.js =====

// ===== Hamburger Menu Toggle =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// ===== Smooth Scrolling for Internal Links =====
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const href = item.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // offset for sticky header
          behavior: "smooth",
        });
      }

      // Close mobile menu after click
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("open");
      }
    }
  });
});

// ===== Image Hover Effects =====
const hoverImages = document.querySelectorAll(
  ".service-img, .testimonial-img, .hero-content"
);

hoverImages.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
    img.style.transition = "transform 0.5s ease";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

// ===== Back-to-Top Button =====
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.id = "back-to-top";
backToTop.style.position = "fixed";
backToTop.style.bottom = "30px";
backToTop.style.right = "30px";
backToTop.style.padding = "0.5rem 0.8rem";
backToTop.style.background = "#0EA5E9";
backToTop.style.color = "#fff";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";
document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
