import './styles.css';
import { load } from './home';
import { loadMenu } from './menu';
import { loadAboutUs } from './about-us';
import { contactLoad } from './contact';
document.addEventListener('DOMContentLoaded', () => {
    load();
})

const div = document.querySelector('#content');

const homeBtn = document.querySelector('#homeBtn');
const menuBtn = document.querySelector('#menuBtn');
const aboutBtn = document.querySelector('#aboutBtn');
const contactBtn = document.querySelector('#contactBtn');

homeBtn.addEventListener('click', () => {
    div.replaceChildren();
    load();
})
menuBtn.addEventListener('click', () => {
    div.replaceChildren();
    loadMenu();
})
aboutBtn.addEventListener('click', () => {
    div.replaceChildren();
    loadAboutUs();
})
contactBtn.addEventListener('click', () => {
    div.replaceChildren();
    contactLoad();
})

console.log('test');