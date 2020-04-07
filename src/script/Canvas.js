export default class Canvas {
    constructor(canvas, gap = 0) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')
        this.gap = gap
        this.initiators = []
        this.timers = []
        this.scaleCanvas()
        this.addListeners()

        this.clearTimeouts = this.clearTimeouts.bind(this)
        this.startInitiators = this.startInitiators.bind(this)
    } 
    
    drawAxis () {
        this.ctx.strokeStyle = 'black'
        this.ctx.lineWidth = 1
        this.ctx.beginPath()
        this.ctx.lineJoin = 'round'
        this.ctx.lineCap = 'round'
        this.ctx.font = "20px sans-serif"
        //X axis
        this.ctx.moveTo(this.gap, this.canvas.height/2)
        this.ctx.lineTo(this.canvas.width - this.gap, this.canvas.height/2)
        this.ctx.stroke()
        //arrow
        this.ctx.moveTo(this.canvas.width - 10 - this.gap, this.canvas.height/2 - 10)
        this.ctx.lineTo(this.canvas.width - this.gap, this.canvas.height/2)
        this.ctx.lineTo(this.canvas.width - 10 - this.gap, this.canvas.height/2 + 10)
        this.ctx.stroke()
        //Y axis
        this.ctx.moveTo(50, this.gap)
        this.ctx.lineTo(50, this.canvas.height - this.gap)
        this.ctx.stroke()
        //arrow
        this.ctx.moveTo(40 , 10 + this.gap)
        this.ctx.lineTo(50, this.gap)
        this.ctx.lineTo(60 , 10 + this.gap)
        this.ctx.stroke()
        //Axis signatures
        this.ctx.fillText('X', this.canvas.width - 15 - this.gap, this.canvas.height/2 + 28)
        this.ctx.fillText('Y', 30, this.gap + 28)
        this.ctx.fillText('0', 55 + this.gap, this.canvas.height/2 + this.gap + 15)
        this.ctx.closePath()
    }

    scaleCanvas(){
        this.canvas.width = this.canvas.getBoundingClientRect().width * window.devicePixelRatio
        this.canvas.height = this.canvas.getBoundingClientRect().height * window.devicePixelRatio
        this.drawAxis()
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.drawAxis()
    }

    addListeners(){
        document.querySelector('.refresh-btn').addEventListener('click', () => {
            this.scaleCanvas()
            this.clearTimeouts()
        })
        document.querySelector('.start-btn').addEventListener('click', () => {
            this.clearCanvas()
            this.clearTimeouts()
            this.startInitiators()
        })
        document.querySelector('.stop-btn').addEventListener('click', () => this.clearTimeouts())
    }

    addTimer(timer){
        this.timers = [...this.timers, timer]
    }

    clearTimeouts(){
        this.timers.length !== 0
            ?this.timers.forEach(t => t.timer())
            :null
    }

    startInitiators(){
        this.initiators.length !== 0
            ?this.initiators.forEach(i => i.initiator())
            :null
    }

    addInitiator(initiator){
        this.initiators = [...this.initiators, initiator]
    }

    deleteFunction(id){
        this.clearTimeouts()
        let removeIndex = this.timers.findIndex(el => el.id === id)
        this.timers.splice(removeIndex, 1)
        removeIndex = this.initiators.findIndex(el => el.id === id)
        this.initiators.splice(removeIndex, 1)
    }
}