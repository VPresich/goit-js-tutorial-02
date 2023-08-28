"use strict";

const footerSocialLinks = createSocialLinks(iconsArray, 'footer-social-links',
        'footer-social-icon-container', 'footer-social-link', 'footer-social-icon');
const divSocialMedia = document.querySelector('.footer-social-media');
divSocialMedia.appendChild(footerSocialLinks);




