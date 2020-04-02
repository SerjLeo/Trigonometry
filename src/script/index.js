import '../styles/styles.css'

const canvas = document.querySelector('#canvas')


canvas.width = canvas.getBoundingClientRect().width * window.devicePixelRatio
canvas.height = canvas.getBoundingClientRect().height * window.devicePixelRatio

const ctx = canvas.getContext('2d')

document.querySelector('.btn').addEventListener('click', e => {
    clearTimeout(timer)
    clearTimeout(timer_2)
    clearTimeout(timer_3)
})
// ctx.beginPath()
let x = 0
let timer, timer_2, timer_3

function drawSin() {
    let y = 400 - 150 + 300*Math.cos(x/24 + Math.PI/3)
    x = x + 0.1
    ctx.fillStyle = 'red'
    ctx.fillRect(x,y,2,2)
    timer = setTimeout(drawSin, 10)
}

function drawSin_2() {
    let y = 400 + 50*Math.cos(x/24)
    x = x + 0.1
    ctx.fillStyle = 'black'
    ctx.fillRect(x,y,2,2)
    timer_2 = setTimeout(drawSin_2, 10)
}

function drawSin_3() {
    let y = 200 + 50*Math.cos(x/48)
    x = x + 0.1
    ctx.fillStyle = 'blue'
    ctx.fillRect(x,y,2,2)
    timer_3 = setTimeout(drawSin_3, 10)
}

drawSin()
drawSin_2()
// drawSin_3()