import { v4 as uuidv4 } from 'uuid'

class Function {
    constructor(func, canvas, color, xShift = 0, yShift = 0, xMult = 1, yMult = 1){
        this.func = func || Math.sin
        this.yShift = yShift
        this.xShift = xShift
        this.yMult = yMult
        this.xMult = xMult
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')
        this.xPos = 0
        this.yPos = -this.yShift*50 - this.yMult*100*this.func(this.xMult*this.xPos/20 + this.xShift)
        this.startPoint = [50, this.canvas.height/2]
        this.id = uuidv4()
        this.color = color
        this.timer = null
        this.draw = this.draw.bind(this)
        this.start = this.start.bind(this)
        this.init = this.init.bind(this)
        this.clearTimer = this.clearTimer.bind(this)
        this.getTimer = this.getTimer.bind(this)
    }

    draw(){
        this.ctx.strokeStyle = this.color
        this.ctx.lineWidth = 2
        this.ctx.lineJoin = 'round'
        this.ctx.lineCap = 'round'
        this.ctx.beginPath()
        this.ctx.moveTo(this.xPos + this.startPoint[0], this.yPos + this.startPoint[1])
        this.xPos = this.xPos + 0.2
        this.yPos = -50*this.yShift - this.yMult*100*this.func(this.xMult*this.xPos/20 + this.xShift)
        if(Math.abs(this.yPos) > this.canvas.height/2) return null
        this.ctx.lineTo(this.xPos + this.startPoint[0], this.yPos + this.startPoint[1])
        this.ctx.stroke()
        this.ctx.closePath()
    }

    start(){
        this.draw()
        this.timer = setTimeout(this.start, 5)
        return {id: this.id, timer: this.timer} 
    }

    init(){
        return {id: this.id, initiator: this.start}
    }

    clearTimer(){
        this.xPos = 0
        this.yPos = -this.yShift - this.yMult*50*this.func(this.xMult*this.xPos/12 + this.xShift)
        clearTimeout(this.timer)
    }

    getTimer(){
        return {id: this.id, timer: this.clearTimer}
    }
    getId(){
        return this.id
    }
}

export default class FunctionFactory {

    static funcTypes = {
        cos: x => Math.cos(x),
        sin: x => Math.sin(x),
        tg: x => Math.tan(x),
        ctg: x => 1/Math.tan(x)
    }

    create(type, canvas, color, xShift = 0, yShift = 0, xMult = 1, yMult = 1) {
        return new Promise ((resolve, reject) => {
            if(!FunctionFactory.funcTypes[type]) reject('Неправильный тип функции')
            let func = FunctionFactory.funcTypes[type]
            resolve(new Function(func, canvas, color, xShift, yShift, xMult, yMult))
        })
    }
}