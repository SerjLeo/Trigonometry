import '../styles/styles.css'

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

function drawAxis (gap = 0) {
    ctx.fillStyle = 'black'
    ctx.beginPath()
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.font = "20px sans-serif"
    //X axis
    ctx.moveTo(gap, canvas.height/2)
    ctx.lineTo(canvas.width - gap, canvas.height/2)
    ctx.stroke()
    //arrow
    ctx.moveTo(canvas.width - 10 - gap, canvas.height/2 - 10)
    ctx.lineTo(canvas.width - gap, canvas.height/2)
    ctx.lineTo(canvas.width - 10 - gap, canvas.height/2 + 10)
    ctx.stroke()
    //Y axis
    ctx.moveTo(50, gap)
    ctx.lineTo(50, canvas.height - gap)
    ctx.stroke()
    //arrow
    ctx.moveTo(40 , 10 + gap)
    ctx.lineTo(50, gap)
    ctx.lineTo(60 , 10 + gap)
    ctx.stroke()
    //Axis signatures
    ctx.fillText('X', canvas.width - 15 - gap, canvas.height/2 + 28)
    ctx.fillText('Y', 60, gap + 28)
    ctx.fillText('0', 55 + gap, canvas.height/2 + gap + 15)
    ctx.closePath()
}

function scaleCanvas(gap){
    canvas.width = canvas.getBoundingClientRect().width * window.devicePixelRatio
    canvas.height = canvas.getBoundingClientRect().height * window.devicePixelRatio
    drawAxis(gap)
}

scaleCanvas(5)

document.querySelector('.stop-btn').addEventListener('click', e => {
    clearTimeout(timer)
    clearTimeout(timer_2)
    clearTimeout(timer_3)
})

document.querySelector('.refresh-btn').addEventListener('click', () => {
    scaleCanvas(5)
})

regEx = '\(?<yShift>\d*\W)(?<yMult>\d*)(?<func>cos|sin|tg|ctg)\W(?<xMult>\d)x(?<xShift>\W\d*pi)\W\gm'

function drawSin() {
    let y = canvas.height/2 + 50*Math.cos(x/12)
    x = x + 0.1
    ctx.fillStyle = 'red'
    ctx.fillRect(x,y,2,2)
    timer = setTimeout(drawSin, 10)
}

function drawSin_2() {
    let y = canvas.height/2 + 50*Math.sin(x/24 + Math.PI)
    x = x + 0.1
    ctx.fillStyle = 'red'
    ctx.fillRect(x,y,2,2)
    timer_2 = setTimeout(drawSin_2, 10)
}

function drawSin_3() {
    let y = canvas.height/2 + 50*Math.cos(x/24 + Math.PI)
    x = x + 0.1
    ctx.fillStyle = 'blue'
    ctx.fillRect(x,y,2,2)
    timer_3 = setTimeout(drawSin_3, 10)
}

function drawSin_4() {
    let y = canvas.height/2 + 50*Math.cos(x/6)
    x = x + 0.1
    ctx.fillStyle = 'green'
    ctx.fillRect(x,y,2,2)
    timer_4 = setTimeout(drawSin_4, 10)
}

// drawSin()
// drawSin_2()
// drawSin_3()
// drawSin_4()