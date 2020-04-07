export default class Toolbar{
    constructor(name, id, drawCanvas){
        this._name = name
        this._drawCanvas = drawCanvas
        this._id = id
        this._anchorEl = document.querySelector('.toolbar')
        this.destroyFunction = this.destroyFunction.bind(this)
        this.showFunction()
    }

    showFunction(){
        this._function = document.createElement('div')
        this._function.className = 'toolbarChild'

        this._removeBtn = document.createElement('button')
        this._removeBtn.className = 'toolbarChild_btn btn'
        this._removeBtn.onclick = this.destroyFunction
        
        this._btnFill = document.createElement('div')
        this._btnFill.className = 'toolbarChild_btn_fill'
        this._removeBtn.appendChild(this._btnFill)

        this._text = document.createElement('div')
        this._text.className = 'toolbarChild_text'
        
        this._text.innerText = this._name

        this._function.appendChild(this._text)
        this._function.appendChild(this._removeBtn)
        
        this._anchorEl.appendChild(this._function)
        setTimeout(() => {
            this._function.setAttribute("style", "visibility: visible; opacity: 1;")
        }, 0)
    }

    destroyFunction(){
        this._function.setAttribute("style", "visibility: hidden; opacity: 0;")
        setTimeout(() => {
            this._anchorEl.removeChild(this._function)
        }, 500)
        this._drawCanvas.deleteFunction(this._id)
    }
}