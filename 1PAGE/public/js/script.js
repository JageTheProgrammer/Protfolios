// Toggle mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("nav ul");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_d89xw3e", "template_1drr0ir", this)
    .then(() => {
      alert("✅ Message sent successfully!");
      this.reset();
    }, (err) => {
      console.error("❌ Error:", err);
      alert("Something went wrong. Please try again.");
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
        });
    });
    }
);
