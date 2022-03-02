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

// project display
project = [
  {
    id: 1,
    name: "Google Search Engine",
    img: "",
    about: "fsdfsdfsdfsfdsdfsfsf",
  },
  {
    id: 2,
    name: "RGB Generator",
    img: "",
    about: "fsdfsdfsfsfsfsdfsdfsdffsdf",
  },
  {
    id: 3,
    name: "Black Jack",
    img: "",
    about: "fsdfsfsdfsffsdfsdfsfsffsdf",
  },
];

project.map((projectDisplay) => {
  const title = document.createElement("h4");
  const img = document.createElement("img");
  const desc = document.createElement("p");
  title.textContent = projectDisplay.name;
  img.src = projectDisplay.img;
  desc.textContent = projectDisplay.about;
});
