"use strict";

const iconsArray = [
    {        
        link: "https://www.instagram.com/",
        id: "./images/icons.svg#instagram",
    },
    {        
        link: "https://www.twitter.com/",
        id: "./images/icons.svg#twitter",
    },
    {        
        link: "https://www.facebook.com/",
        id: "./images/icons.svg#facebook",
    },
    {        
        link: "https://www.linkedin.com/",
        id: "./images/icons.svg#linkedin",
    },
];

    const createSocialLinks = (icons, classUl, classIconContainer, classlink, classIcon) => {
    const socialLinksList = document.createElement('ul');
    socialLinksList.classList.add(classUl); //'social-links'

    icons.forEach(icon => {
        const listItem = document.createElement('li');
        listItem.classList.add(classIconContainer); //'social-icon-container'

        const link = document.createElement('a');
        link.classList.add(classlink); //'social-link'
        link.href = icon.link;
        link.target = "_blank";

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add(classIcon); // 'social-icon'
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');

        const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        use.setAttribute('href', icon.id);

        svg.appendChild(use);
        link.appendChild(svg);
        listItem.appendChild(link);
        socialLinksList.appendChild(listItem);
    });

    return socialLinksList;
};





