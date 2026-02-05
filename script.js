const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const yesScreen = document.getElementById("yesScreen");
const music = document.getElementById("loveMusic");

let moves = 0;

/* NO button escape */
noBtn.addEventListener("click", () => {
    if (moves < 4) {
        moves++;
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * 80 + "%";
        noBtn.style.top = Math.random() * 80 + "%";
    } else {
        noBtn.style.position = "";
        moves = 0;
    }
});

/* YES button */
yesBtn.addEventListener("click", () => {
    yesScreen.classList.remove("hidden");
    music.play();
    typeText();
});

/* Typing Effect */
const text = "You are now Sidhant's Valentine! ❤️\nHehe! 💘";
let index = 0;

function typeText() {
    if (index < text.length) {
        const el = document.getElementById("typingText");
        el.innerHTML += text[index] === "\n" ? "<br>" : text[index];
        index++;
        setTimeout(typeText, 70);
    }
}

