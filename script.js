
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector(".footer");
  if (footer) footer.textContent = `© ${year} Dominion Security and Protection Services, LLC. All Rights Reserved.`;

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("This form is a static demo. Connect it to Formspree, Netlify Forms, Google Forms, or your preferred email workflow.");
    });
  });
});
