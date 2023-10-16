var clatter = "";
var scoreVariabel = 0;
function createBubble() {
    let area = document.querySelector('#area');
    for (var i = 1; i <= 133; i++) {
        clatter += `<div class="bubble">${Math.ceil(Math.random() * 10)}</div>`;
    }
    area.innerHTML = " ";
    area.innerHTML += clatter;

}
let time = 30; //sec
function timer() {
    let timeH3 = document.querySelector(".time");

    var id = setInterval(() => {
        timeH3.textContent = time;
        time--;
        if (time == -1) {
            area.innerHTML = `<div class="gameOver">
              <h1>Score : ${scoreVariabel}</h1>
              <button class="btn">Re-Start</button>
            </div>`;
            clearTimeout(id);
        }
    }, 1000)
}
function target() {
    document.querySelector(".targetValue").textContent = Math.ceil(Math.random() * 10);
}

createBubble();
timer();
target();



function regBubble() {
    if(timer >0){
        setInterval(() => {
            clatter = "";
            createBubble();
        }, 2000)
    }
}
regBubble()



let socDiv = document.querySelector(".scoreValue");
document.querySelector("#area").addEventListener("click", (e) => {
    if (e.target.className = "bubble") {
        var targetValue = document.querySelector(".targetValue").textContent;
        var clickValue = e.target.textContent;
        if (targetValue == clickValue) {
            scoreVariabel += 10;
            socDiv.textContent = scoreVariabel;
        } else {

        }
        clatter = "";
        createBubble()
        target();
    }
})


document.querySelector(".btn").addEventListener("click", () => {
    time = 60;
    createBubble();
    timer();
    target();
})


