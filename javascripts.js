const cardBoard = document.querySelector("#cardBoard");
const images = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif",
];

let cardHTML = "";

images.forEach (img => {
    cardHTML += `
    <div class="memory-card">
        <img class="frente" src="img/${img}">
        <img class="verso" src="img//front.png">
    </div>
    `
});
cardBoard.innerHTML = cardHTML + cardHTML;