//credit https://github.com/kingdaro

import { shuffle } from "./js/slider";

let adjectives = [
    'create code',
    'think logically',
    'learn new languages'
];

let currentThing = 1

const getAdj = document.getElementById("adjectives");
getAdj.style.transition = "250ms";
getAdj.style.textContent = adjectives[0];

function newDisplay() {
    getAdj.style.opacity = 0;
    getAdj.style.transform = "translateY(10px)"

  setTimeout(() => {
    getAdj.textContent = getAdj[currentThing]
    getAdj.style.opacity = 1
    getAdj.style.transform = "translateY(0px)"

    currentThing = (currentThing + 1) % getAdj.length
  }, 500)

  setTimeout(newDisplay, 3500)
}

shuffle(getAdj);
newDisplay();