const screen = document.getElementById('screen')
const context = screen.getContext('2d');

const element = {
    'color': 'red',
    'positionX': 0,
    'positionY': 0,
    'width': 250,
    'height': 250
}

context.fillStyle = element.color
context.fillRect(element.positionX, element.positionY, element.width, element.height)
