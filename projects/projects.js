const project = [
  {
    id: 0,
    name: "RGB Generator",
    img: "https://res.cloudinary.com/alm0ndjjoy/image/upload/c_scale,h_556,w_998/v1646262293/portfolio-joyce.codes-imgs/Screen_Shot_2022-03-02_at_6.04.48_PM_o0sq0m.png",
    about:
      "When I transitioned into web development, I started to self-learn HTML, CSS, and JavaScript through YouTube, freeCodeCamp, and tech twitter. RGB-Generator was my first website I built and deployed via GitHub. I took the concepts I learned and put it together when I first learned about DOM manipulation via JavaScript . I created an RGB-generator to construct all the colors from the combination of Red, Green, and Blue colors and giving the values as well.",
    link: "https://alm0ndjjoy.github.io/RGB-generator/",
  },
  {
    id: 1,
    name: "Black Jack",
    img: "https://res.cloudinary.com/alm0ndjjoy/image/upload/c_crop,h_556,w_988/v1646262080/portfolio-joyce.codes-imgs/Screen_Shot_2022-03-02_at_6.01.13_PM_fxcylh.png",
    about:
      "Feeling stressed or burnt out? I used DOM manipulation to create a Black Jack game.",
    link: "https://alm0ndjjoy.github.io/Blackjack/",
  },
  {
    id: 2,
    name: "Google Search Engine",
    img: "https://res.cloudinary.com/alm0ndjjoy/image/upload/c_scale,h_556,w_998/v1646262405/portfolio-joyce.codes-imgs/Screen_Shot_2022-03-02_at_6.06.39_PM_gsrmax.png",
    about:
      "Using API's and HTTP requests to servers from web browsers, I created a mock Google engine using search, image and news endpoints to render information. Check out Joogle here!",
    link: "https://alm0ndjjoy.github.io/google-search/",
  },
  {
    id: 3,
    name: "Tasq-Team",
    img: "https://res.cloudinary.com/alm0ndjjoy/image/upload/c_scale,h_556,w_988/v1650253421/portfolio-joyce.codes-imgs/Screen_Shot_2022-04-17_at_8.43.00_PM_ts34sn.png",
    about:
      "Working together in a team, my colleagues and I have built a task planner web application that helps you organize and get tasks done efficiently. Get it done!",
    link: "https://alm0ndjjoy.github.io/tasq-team/",
  },
];

const projectDisplay = (arr) => {
  const cardBody = document.getElementById("container");
  const cardRow = document.getElementById("card-row");

  arr.map((project) => {
    const cardHolder = document.createElement("div");
    cardHolder.classList.add("col", "card");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    const para = document.createElement("p");
    para.classList.add("card-text");
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    const link = document.createElement("a");
    title.innerHTML = `<a href=${project.link} target="_blank">${project.name}</a>`;
    para.textContent = project.about;
    link.href = project.link;
    img.src = project.img;
    cardHolder.append(img, title, para, link);
    cardRow.append(cardHolder);
    cardBody.append(cardRow);
  });
};

projectDisplay(project);
