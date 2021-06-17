const width = 16;
const height = 16;
const fieldGrid = [];
const activeGrid = [];
const mineCount = 40;
const gameField = document.getElementById("game-container");

for (let i = 0; i < height; i++) {
    const fieldArrayRow = [];
    const activeArrayRow = [];

    const row = document.createElement('div');
    row.classList.add('row');
    gameField.appendChild(row);

    for (let j = 0; j < width; j++) {
        const field = document.createElement('button');
        field.classList.add('field');
        field.id = 'field-' + i.toString() + '-' + j.toString();
        field.onclick = function (event) {
            const x = event.target.id.split('-')[1];
            const y = event.target.id.split('-')[2];
            clearNeighbours(x, y);
        }
        row.appendChild(field);

        fieldArrayRow.push(0);
        activeArrayRow.push(true);
    }

    fieldGrid.push(fieldArrayRow);
    activeGrid.push(activeArrayRow);
}

for (let i = 0; i < mineCount; i++) {

    const x = Math.floor(Math.random() * 16);
    const y = Math.floor(Math.random() * 16);

    fieldGrid[x][y] = 9;

    // const target = document.getElementById('field-' + x.toString() + '-' + y.toString());
    // target.textContent = 'X';
    // target.style.color = 'red';
}

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        if (fieldGrid[i][j] !== 9) {
            for (let k = -1; k < 2; k++) {
                for (let l = -1; l < 2; l++) {
                    if (k !== 0 || l !== 0) {
                        if (getNeighbour(i + k, j + l) === 9) fieldGrid[i][j] += 1;
                    }
                }
            }
        }
    }
}

function getNeighbour(x, y) {
    if (fieldGrid[x] && fieldGrid[x][y] !== null) {
        return fieldGrid[x][y];
    }
    return -1;
}

function clearNeighbours(x, y) {

    if (fieldGrid[x][y] === 0) {
        console.log('Checking: ' + x + ' ' + y);
        setFieldChecked(x, y);

        for (let k = -1; k < 2; k++) {
            for (let l = -1; l < 2; l++) {
                if (k !== 0 || l !== 0) {
                    const nX = parseInt(x) + parseInt(k);
                    const nY = parseInt(y) + parseInt(l);
                    const currNeighbour = getNeighbour(nX, nY);
                    if (currNeighbour > -1 && currNeighbour < 9 && activeGrid[nX][nY] === true) {
                        clearNeighbours(nX, nY);
                    }
                }
            }
        }
    }
    else if (fieldGrid[x][y] !== 0 && fieldGrid[x][y] < 9) {
        console.log('Not zero: ' + x + ' ' + y);
        setFieldChecked(x, y);
    }

    else if (fieldGrid[x][y] === 9) {
        gameOver();
    }
}

function setFieldChecked(x, y) {
    const target = document.getElementById('field-' + x.toString() + '-' + y.toString());
    if (fieldGrid[x][y]) { target.textContent = fieldGrid[x][y]; }
    activeGrid[x][y] = false;
    target.disabled = true;
}

function gameOver() {
    alert('Game over!');
    window.location.reload();
}

