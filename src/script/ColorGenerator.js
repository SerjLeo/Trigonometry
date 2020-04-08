export default class ColorGenerator {
    constructor(){
        this.usedColors = []
        this.defaultColors = [
            '#cf9115',
            '#cf5615',
            '#cf2115',
            '#cfb315',
            '#aacf15',
            '#5fcf15',
            '#15cf78',
            '#15cfc9',
            '#159acf',
            '#4d15cf',
            '#9715cf',
            '#cf15b9',
            '#cf1563'
        ]
    }

    randomColor(){
        let color = '#'
        for(let i = 0; i <3; i++) {
            let number = Math.floor(Math.random()*256)
            if (number < 17) {
                color += '0'+number.toString(16)
            } else {
                color += number.toString(16)
            }
        }
        return color
    }

    generateColor(){
        if(this.usedColors.length < this.defaultColors.length){
            let color = this.defaultColors[Math.floor(Math.random()*(this.defaultColors.length))]
            if (this.usedColors.find(el => el === color)) {
                return this.generateColor()
            } else {
                this.usedColors.push(color)
                return color
            }
        } else {
            let color = this.randomColor()
            if (this.usedColors.find(el => el === color)) {
                return this.generateColor()
            } else {
                this.usedColors.push(color)
                return color
            }
        }
    }

    removeColor(color){
        let index = this.usedColors.findIndex(el => el === color) + 1
        if(index) {
            this.usedColors.splice(index - 1, 1)
        }
    }
}