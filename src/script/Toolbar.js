import CloseIcon from './Components/Close'

export default class Toolbar{
    constructor(name, id, color, drawCanvas, colorGenerator){
        this._name = name
        this._drawCanvas = drawCanvas
        this._id = id
        this.color = color
        this._colorGenerator = colorGenerator
        this._anchorEl = document.querySelector('.toolbar')
        this.destroyFunction = this.destroyFunction.bind(this)
        this.showFunction()
    }

    showFunction(){
        this._function = document.createElement('div')
        this._function.className = 'toolbar_card'

        this._removeBtn = document.createElement('div')
        this._removeBtn.className = 'toolbar_card_btn'
        this._removeBtn.onclick = this.destroyFunction

        this._text = document.createElement('div')
        this._text.className = 'toolbar_card_text'

        this._color = document.createElement('div')
        this._color.className = 'toolbar_card_color'
        this._color.setAttribute('style', `background-color: ${this.color};`)
        
        this._text.innerText = this._name

        this._function.appendChild(this._color)
        this._function.appendChild(this._text)
        this._function.appendChild(this._removeBtn)
        
        this._anchorEl.appendChild(this._function)
        new CloseIcon(this._removeBtn)
        setTimeout(() => {
            this._function.setAttribute("style", "visibility: visible; opacity: 1;")
        }, 0)
    }

    destroyFunction(){
        this._function.setAttribute("style", "visibility: hidden; opacity: 0;")
        setTimeout(() => {
            this._anchorEl.removeChild(this._function)
        }, 500)
        this._colorGenerator.removeColor(this.color)
        this._drawCanvas.deleteFunction(this._id)
    }
}