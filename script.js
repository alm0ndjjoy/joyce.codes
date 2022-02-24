// CONTACT FORM ACTIONS
// grab elements
const form = document.getElementById("contact-form");
const firstName = document.getElementById("name");

// post form actions
form.addEventListener("submit", (e) => {
  e.preventDefault();
  postActionStyles();
});

// inline styling for post submit
function postActionStyles() {
  document.body.style.textAlign = "center";
  document.body.style.fontSize = "30px";
  document.body.textContent = `Thanks for your interest, ${firstName.value
    .charAt(0)
    .toUpperCase()}${firstName.value
    .slice(1)
    .toLowerCase()}! I will reach out via email within the next 24 hours.`;
}
