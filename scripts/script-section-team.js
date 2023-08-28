"use strict";

const team = [
    {
        name: "Mark Guerrero",
        photo: {
            url: "./images/team/card-1@1x.jpg",
            alt: "Photo of Mark Guerrero"
        },
        position: "Product Designer",
    },  
    {
        name: "Tom Ford",
        photo: {
            url: "./images/team/card-2@1x.jpg",
            alt: "Photo of Tom Ford"
        },
        position: "Frontend Developer",
    },
    {
        name: "Camila Garcia",
        photo: {
            url: "./images/team/card-3@1x.jpg",
            alt: "Photo of Camila Garcia"
        },
        position: "Marketing",
    },    
  {
        name: "Daniel Wilson",
        photo: {
            url: "./images/team/card-4@1x.jpg",
            alt: "Photo of Daniel Wilson",
        },
        position: "UI Designer",
  }
];


const teamList = document.querySelector('.team-list');

team.forEach(member => {
    const listItem = document.createElement('li');
    listItem.classList.add('team-card');

    const img = document.createElement('img');
    img.src = member.photo.url;
    img.alt = member.photo.alt;
    img.width = 264;
    img.height = 260;

    const cardLabel = document.createElement('div');
    cardLabel.classList.add('team-card-label');

    const name = document.createElement('h3');
    name.classList.add('team-card-name');
    name.textContent = member.name;

    const position = document.createElement('p');
    position.classList.add('team-card-position');
    position.textContent = member.position;

    cardLabel.appendChild(name);
    cardLabel.appendChild(position);
    const socialLinks = createSocialLinks(iconsArray, 'social-links',
        'social-icon-container', 'social-link', 'social-icon');
    cardLabel.appendChild(socialLinks);
    listItem.appendChild(img);
    listItem.appendChild(cardLabel);
    
    teamList.appendChild(listItem);
});

