let dead = 0;
let lost = 0;
const maxDead = 10;
const maxLost = 5;

const deadCount = document.getElementById("dead");
const lostCount = document.getElementById("lost");

function getHole(index) {
	return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
	getHole(i).onclick = () => {
		if (getHole(i).className.includes("hole_has-mole")) {
			dead++;
			deadCount.textContent = dead;
		} else {
			lost++;
			lostCount.textContent = lost;
		}

		if (dead >= maxDead) {
			alert('Вы выиграли!');
			resetGame();
		} else if (lost >= maxLost) {
			alert('Вы проиграли!');
			resetGame();
		}
	};
}

function resetGame() {
	dead = 0;
	lost = 0;
	deadCount.textContent = dead;
	lostCount.textContent = lost;
}

