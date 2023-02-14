let highScoresEl = document.querySelector("#highscores");
let clearButton = document.querySelector("#clear");
const highScores = JSON.parse(localStorage.getItem("username")) || [];

    highScoresEl.innerHTML = `
    ${highScores.map((player) =>
    `<li>Player: ${player.initials} - Score: ${player.scores}</li>`).join("")}`;

clearButton.addEventListener("click", clearStorage);

function clearStorage() {
    localStorage.getItem("username");
    localStorage.removeItem("username");
    highScoresEl.innerHTML = ``;
}