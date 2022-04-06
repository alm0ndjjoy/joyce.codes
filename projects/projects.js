// const project = [
//   {
//     id: 0,
//     name: "Google Search Engine",
//     img: "https://res.cloudinary.com/alm0ndjjoy/image/upload/c_scale,h_556,w_998/v1646262405/portfolio-joyce.codes-imgs/Screen_Shot_2022-03-02_at_6.06.39_PM_gsrmax.png",
//     about: "Using Google Search API to create a mock Google Search engine",
//     link: "https://alm0ndjjoy.github.io/google-search/",
//   },
//   {
//     id: 1,
//     name: "RGB Generator",
//     img: "https://res.cloudinary.com/alm0ndjjoy/image/upload/c_scale,h_556,w_998/v1646262293/portfolio-joyce.codes-imgs/Screen_Shot_2022-03-02_at_6.04.48_PM_o0sq0m.png",
//     about: "Ever get bored using the same old colors in your project? Using DOM manipulation, I created an RGB generator to help you get creative in your styles!",
//     link: "https://alm0ndjjoy.github.io/RGB-generator/",
//   },
//   {
//     id: 2,
//     name: "Black Jack",
//     img: "https://res.cloudinary.com/alm0ndjjoy/image/upload/c_crop,h_556,w_988/v1646262080/portfolio-joyce.codes-imgs/Screen_Shot_2022-03-02_at_6.01.13_PM_fxcylh.png",
//     about: "Feeling stressed or burnt out? I used DOM manipulation to create a Black Jack game.",
//     link: "https://alm0ndjjoy.github.io/Blackjack/",
//   },
// ];

// const projectDisplay = (arr) => {
//   const projectCarousel = document.getElementById("project-carousel");

//   arr.map((project) => {
//     const outerCard = document.createElement("div");
//     const img = document.createElement("img");
//     const title = document.createElement("h5");
//     const desc = document.createElement("p");
//     const link = document.createElement("a");
//     img.src = project.img;
//     title.textContent = project.name;
//     desc.textContent = project.about;
//     link.href = project.link;
//     outerCard.append(img, title, desc, link);
//     projectCarousel.append(outerCard);
//   });
// };

// projectDisplay(project);
