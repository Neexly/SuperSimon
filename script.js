let manche;
let score;
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const startButton = document.querySelector("#submit");
const resetButton = document.querySelector("#submit2");
var message = document.getElementById('message');
var score = document.getElementById('footer');

resetButton.addEventListener('click', (event) => {
    reset();
});

startButton.addEventListener('click', (event) => {
    play();
});

function reset() {
	manche = 0;
	score = 0;
}

function play() {
	score.innerHTML = '<p>Manche : 0   Score : 0</p>';
}

function draw() {
	topLeft.addEventListener('mousedown', function(e) { // 
    topLeft.style.backgroundColor = "lightgreen";
    message.innerHTML = '<h3>VERT</h3>';
	});
	topLeft.addEventListener('mouseup', function(e) { // 
    topLeft.style.backgroundColor = "darkgreen";
    message.innerHTML = '<h3>Appuyez sur une couleur</h3>';
	});

	topRight.addEventListener('mousedown', function(e) { // 
    topRight.style.backgroundColor = "yellow";
    message.innerHTML = '<h3>JAUNE</h3>';
	});
	topRight.addEventListener('mouseup', function(e) { // 
    topRight.style.backgroundColor = "goldenrod";
    message.innerHTML = '<h3>Appuyez sur une couleur</h3>';
	});

	bottomLeft.addEventListener('mousedown', function(e) { // 
    bottomLeft.style.backgroundColor = "lightskyblue";
    message.innerHTML = '<h3>BLEU</h3>';
	});
	bottomLeft.addEventListener('mouseup', function(e) { // 
    bottomLeft.style.backgroundColor = "darkblue";
    message.innerHTML = '<h3>Appuyez sur une couleur</h3>';
	});

	bottomRight.addEventListener('mousedown', function(e) { // 
    bottomRight.style.backgroundColor = "tomato";
    message.innerHTML = '<h3>ROUGE</h3>';
	});
	bottomRight.addEventListener('mouseup', function(e) { // 
    bottomRight.style.backgroundColor = "darkred";
    message.innerHTML = '<h3>Appuyez sur une couleur</h3>';
	});
}

draw();