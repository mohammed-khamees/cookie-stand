'use strict';

const navBtn = document.querySelector('.nav-btn');
const closeBtn = document.querySelector('.close');
const nav = document.querySelector('.nav');

navBtn.addEventListener('click', () => {
	nav.classList.add('nav-click');
});

closeBtn.addEventListener('click', () => {
	nav.classList.remove('nav-click');
});
