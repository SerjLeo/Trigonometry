export default class AddIcon {

    constructor(anchorEl){
        this.anchorEl = anchorEl
        this.render()
    }

    render(){
        this.el = document.createElement('div')
        this.el.setAttribute('class','custom_btn')
        this.el.innerHTML = `
            <svg version="1.1" class="custom_btn_icon" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 409.6 409.6" style="enable-background:new 0 0 409.6 409.6;" xml:space="preserve">
            <g>
                <g>
                    <path d="M392.533,187.733H221.867V17.067C221.867,7.641,214.226,0,204.8,0s-17.067,7.641-17.067,17.067v170.667H17.067
                        C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h170.667v170.667c0,9.426,7.641,17.067,17.067,17.067
                        s17.067-7.641,17.067-17.067V221.867h170.667c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"/>
                </g>
            </svg>`
        this.anchorEl.appendChild(this.el)
    }
}