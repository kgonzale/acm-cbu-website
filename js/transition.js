//credit https://github.com/kingdaro

import { shuffle } from "./slider";

let adjectives = [
    'create code',
    'think logically',
    'learn new languages'
];

let currentThing = 1;

document.addEventListener('DOMContentLoaded', () => {
const getAdj = document.getElementById("currently-displayed");
getAdj.style.transition = "all 0.3s";
getAdj.textContent = adjectives[0];

function newDisplay() {
    getAdj.style.opacity = 0;
    getAdj.style.transform = "translateY(10px)";

  setTimeout(() => {
    getAdj.textContent = adjectives[currentThing];
    getAdj.style.opacity = 1;
    getAdj.style.transform = "translateY(0px)"

    currentThing = (currentThing + 1) % adjectives.length
  }, 500)

  setTimeout(newDisplay, 3500)
} 


shuffle(adjectives);
newDisplay();
});