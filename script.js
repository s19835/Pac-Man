//we are using script at the header so we need to complete loading html
document.addEventListener('DOMContentLoaded', () => {
    const scoreDisplay = document.getElementById('score');
    const level = document.getElementById('level');

    let score = 0;
    const width = 28;

    //when selecting classes use querySelector
    const gird = document.querySelector('.grid');

    //grid layout
    const gridLayout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
    /*keys
    0 - pac-dots
    1 - wall
    2 - ghost
    3 - power-pellet
    4 - empty
    */
    let squares = [];
    createBoard();

    function createBoard() {
        for (let index = 0; index < gridLayout.length; index++) {
            const square = document.createElement('div');
            square.id = index;
            gird.appendChild(square);

            squares.push(square);
            if (gridLayout[index] === 0) squares[index].classList.add('pac-dot');
            if (gridLayout[index] === 1) squares[index].classList.add('wall');
            //if (gridLayout[index] === 2) squares[index].classList.add('ghost');
            if (gridLayout[index] === 3) squares[index].classList.add('power-pellet');
            //if (gridLayout[index] === 4) squares[index].classList.add('empty');
        }
    }

    //create a character
    let pacmanCurrentIndex = 490;
    squares[pacmanCurrentIndex].classList.add('pack-man');

    document.addEventListener('keyup', e => {
        squares[pacmanCurrentIndex].classList.remove('pack-man');
        switch (e.key) {
            case 'ArrowLeft':
                if (
                    pacmanCurrentIndex % 28 !== 0 &&
                    !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex - 1].classList.contains('ghost')
                ){
                    pacmanCurrentIndex -= 1;
                    if (pacmanCurrentIndex === 364) pacmanCurrentIndex = 391;
                }
                break;
            case 'ArrowRight':
                if (
                    pacmanCurrentIndex % 28 !== 27 && 
                    !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex + 1].classList.contains('ghost')
                ){
                    pacmanCurrentIndex += 1;
                    if (pacmanCurrentIndex === 391) pacmanCurrentIndex = 364;
                }
                break;
            case 'ArrowUp':
                if (
                    !squares[pacmanCurrentIndex - 28].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex - 28].classList.contains('ghost')
                ) {
                    pacmanCurrentIndex -= 28;
                }
                break;
            case 'ArrowDown':
                if (
                    !squares[pacmanCurrentIndex + 28].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex + 28].classList.contains('ghost')
                ) {
                    pacmanCurrentIndex += 28;
                }
                break;
            default:
                break;
        }
        squares[pacmanCurrentIndex].classList.add('pack-man');
        pacDotEaten();
        powerPalletEaten();
        checkForWin();
    })

    /*
    ArrowUp
    ArrowDown
    ArrowRight
    ArrowLeft
    */
   let count;
   function checkForWin() {
    if (score == 274) {
        setTimeout(() => {
            alert('You Win');
        }, 500);
    }
   }

    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className;
            this.startIndex = startIndex;
            this.speed = speed;
            this.currentIndex = startIndex;
            this.isScared = false;
            this.timerId = NaN;
        }
    }

    let ghosts = [
        new Ghost('blinky', 379, 250),
        new Ghost('pinky', 405, 400),
        new Ghost('inky', 376, 350),
        new Ghost('clyd', 408, 500)
    ];

    function pacDotEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
         squares[pacmanCurrentIndex].classList.replace('pac-dot', 'pack-man');
         score++;
         // console.log(score);
         scoreDisplay.innerHTML = score;
        }
    }

    function powerPalletEaten() {
        if(squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
            squares[pacmanCurrentIndex].classList.replace('power-pellet', 'pack-man');
            score += 10;
            scoreDisplay.innerHTML = score;
            ghosts.forEach(ghost => {
                ghost.isScared = true;
            });
            setTimeout(unScardGhost, 10000);
        }
    }

    function unScardGhost() {
        ghosts.forEach(ghost => {
            ghost.isScared = false;
            squares[ghost.currentIndex].classList.add(ghost.className);
        });
    }

    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className);
        squares[ghost.currentIndex].classList.add('ghost');

        const directions = [1, -1, 28, -28];
        let direction = directions[Math.floor(Math.random() * directions.length)];

        ghost.timerId = setInterval(() => {
            if (
                !squares[ghost.currentIndex + direction].classList.contains('ghost') &&
                !squares[ghost.currentIndex + direction].classList.contains('wall')
            ) {
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'sacared-ghost');
                ghost.currentIndex += direction;
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
            } else {
                direction = directions[Math.floor(Math.random() * directions.length)];
            }
            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.remove(ghost.className);
                squares[ghost.currentIndex].classList.add('scared-ghost');
            }

            if (!ghost.isScared && squares[pacmanCurrentIndex].classList.contains(ghost.className)) {
                ghost.currentIndex = ghost.startIndex;
                ghosts.forEach(ghost => clearInterval(ghost.timerId));
                // document.removeEventListener('keyup', movePacman);
                setTimeout(() => alert('Game Over'), 500);
            }
        }, ghost.speed);
    })
})