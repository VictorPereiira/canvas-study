const screen = document.getElementById('screen')
const context = screen.getContext('2d');
const currentPlayerId = 'player1'

const game = {
    players: {
        'player1': { x: 1, y: 1 },
        'player2': { x: 9, y: 9 }
    },
    fruits: {
        'fruit1': { x: 3, y: 1 }
    }
}

document.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    const keyPressed = event.key
    const player = game.players[currentPlayerId]

    if (keyPressed === 'ArrowUp' && player.y - 1 >= 0) {
        console.log('Up');
        player.y -= 1
    }

    if (keyPressed === 'ArrowRight' && player.x + 1 < screen.width) {
        console.log('Right');
        player.x += 1
    }

    if (keyPressed === 'ArrowDown' && player.y + 1 < screen.height) {
        console.log('Down');
        player.y += 1
    }

    if (keyPressed === 'ArrowLeft' && player.x - 1 >= 0) {
        console.log('Left');
        player.x -= 1
    }
}

renderScreen()

function renderScreen() {
    context.fillStyle = 'white'
    context.clearRect(0, 0, 10, 10)

    for (const playerId in game.players) {
        const player = game.players[playerId]
        context.fillStyle = 'black'
        context.fillRect(player.x, player.y, 1, 1)
    }
    for (const fruitId in game.fruits) {
        const fruit = game.fruits[fruitId]
        context.fillStyle = 'green'
        context.fillRect(fruit.x, fruit.y, 1, 1)
    }

    requestAnimationFrame(renderScreen)
}

