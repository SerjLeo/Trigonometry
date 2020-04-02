import '../styles/styles.css'

const canvas = document.querySelector('#canvas')


canvas.width = canvas.getBoundingClientRect().width * window.devicePixelRatio
canvas.height = canvas.getBoundingClientRect().height * window.devicePixelRatio

const ctx = canvas.getContext('2d')

document.querySelector('.btn').addEventListener('click', e => {
    clearTimeout(timer)
})
// ctx.beginPath()
let x = 0
let timer

function drawSin() {
    let y = 200 + 100*Math.sin(x/24)
    x = x + 0.1
    ctx.fillStyle = 'red'
    ctx.fillRect(x,y,2,2)
    timer = setTimeout(drawSin, 10)
}

function drawSin_2() {
    let y = 200 + 100*Math.sin(x/4)
    x = x + 0.1
    ctx.fillStyle = 'blue'
    ctx.fillRect(x,y,2,2)
    timer = setTimeout(drawSin_2, 10)
}

drawSin()
drawSin_2()