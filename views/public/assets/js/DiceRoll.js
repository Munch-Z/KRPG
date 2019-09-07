const diceDiv = document.getElementById('diceBtns');

diceDiv.addEventListener('click', (e) => {
    const max = parseInt(e.target.dataset.max);

    if(e.target.classList[0] !== 'button') {
        return;
    } else {
        rollDice(max);
    }
})

function rollDice(max) {
    const displayDiv = document.getElementById('result');

    displayDiv.textContent = `You rolled: ${Math.floor(Math.random() * (max - 1 + 1)) + 1}`;
}