//credit to kingdaro

import { shuffle } from "./slider";

let adjectives = [
    'eat shit',
    'learn shit',
    'pray to shit'
];

let currentItem = 1; 

document.addEventListener('DOMContentLoaded', () => {
const getAdj = document.getElementById("currently-displayed");
getAdj.style.transition = "all 0.3s";
getAdj.textContent = adjectives[0];

function newDisplay() {
  getAdj.style.opacity = 0; //smooth transition
  getAdj.style.transform = "translateY(10px)"; //y direction

  setTimeout(() => {
    getAdj.textContent = adjectives[currentItem];
    getAdj.style.opacity = 1; //make text appear
    getAdj.style.transform = "translateY(0px)"; //y direction

    currentItem = (currentItem + 1) % adjectives.length
  }, 500);

  setTimeout(newDisplay, 3500);
} 

newDisplay();
shuffle(adjectives);
});