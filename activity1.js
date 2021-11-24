score = 0
function update() {
    score += 1;
    document.getElementById("score").innerHTML = score;
}

function save() {
    localStorage.setItem("Score", score);
}

function next() {
    window.location = "activity_2.html";
}