document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(
    ".category, .contact, .feedback-form"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form Submission
document
  .querySelector(".feedback-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your feedback!");
    this.reset();
  });
