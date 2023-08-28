"use strict";
const portfolioList = [
  {
      name: "Banking App",
      type: "App",
        photo: {
            url: "./images/portfolio/prj-1-1@1x.jpg",
            alt: "Photo of Banking App project",
        },
    overlay: "14 Stylish and User-Friendly App Design Concepts",
  },     
    {
      name: "Cashless Payment",
      type: "Marketing",
        photo: {
            url: "./images/portfolio/prj-1-2@1x.jpg",
            alt: "Photo of Cashless Payment project",
        },
    overlay: "14 Stylish and User-Friendly App Design Concepts",
  }, 

  {
      name: "Meditation App",
      type: "App",
        photo: {
            url: "./images/portfolio/prj-1-3@1x.jpg",
            alt: "Photo of Meditation App",
        },
    overlay: "14 Stylish and User-Friendly App Design Concepts",
  },  

    {
      name: "Taxi Service",
      type: "Marketing",
        photo: {
            url: "./images/portfolio/prj-2-1@1x.jpg",
            alt: "Photo of Taxi Service project",
        },
    overlay: "14 Stylish and User-Friendly App Design Concepts",
  },  
    
    {
      name: "Screen Illustrations",
      type: "Design",
        photo: {
            url: "./images/portfolio/prj-2-3@1x.jpg",
            alt: "Photo ofScreen Illustrations project",
        },
    overlay: "14 Stylish and User-Friendly App Design Concepts",
  },
  
    {
      name: "Online Courses",
      type: "Marketing",
        photo: {
            url: "./images/portfolio/prj-2-2@1x.jpg",
            alt: "Photo of Online Courses project",
        },
    overlay: "14 Stylish and User-Friendly App Design Concepts",
  }  
];

const portfolioCardsList = document.querySelector('.portfolio-cards');

portfolioList.forEach(project => {
    const listItem = document.createElement('li');
    listItem.classList.add('portfolio-card');

    const overlayCard = document.createElement('div');
    overlayCard.classList.add('portfolio-overlay-card');

    const img = document.createElement('img');
    img.src = project.photo.url;
    img.alt = project.photo.alt;
    img.width = 360;
    img.height = 300;

    const overlay = document.createElement('p');
    overlay.classList.add('portfolio-overlay');
    overlay.textContent = project.overlay;

    overlayCard.appendChild(img);
    overlayCard.appendChild(overlay);

    const itemLabel = document.createElement('div');
    itemLabel.classList.add('portfolio-item-label');

    const name = document.createElement('h3');
    name.classList.add('portfolio-item-name');
    name.textContent = project.name;

    const type = document.createElement('p');
    type.classList.add('portfolio-item-type');
    type.textContent = project.type;

    itemLabel.appendChild(name);
    itemLabel.appendChild(type);

    listItem.appendChild(overlayCard);
    listItem.appendChild(itemLabel);

    portfolioCardsList.appendChild(listItem);
});
