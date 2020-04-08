import '../styles/style.scss'
import Canvas from './Canvas'
import FunctionFactory from './Function'
import funcParser from './regexpParser'
import Toolbar from './Toolbar'
import ColorGenerator from './ColorGenerator'

//Components
import AddIcon from './Components/Add'

const colorGenerator = new ColorGenerator()

const canvas = document.querySelector('#canvas')
const drawCanvas = new Canvas(canvas, 5)

new AddIcon(document.querySelector('.add-btn'))

const functionFactory = new FunctionFactory()
let input = ''

document.querySelector('.input').addEventListener('input', e => {
    input = e.target.value
    document.querySelector('.input').value = input
})
document.querySelector('.add-btn').addEventListener('click', e => {
    e.preventDefault()

    const result = funcParser(input.toLowerCase())
    let {_yMult, _yShift, _xMult, _xShift, func} = result
    let newFunction
    functionFactory.create(func, canvas, colorGenerator.generateColor(), _xShift, _yShift, _xMult, _yMult)
        .then(func => {
            newFunction = func
            drawCanvas.addInitiator(newFunction.init())
            drawCanvas.addTimer(newFunction.getTimer())
            new Toolbar(input.toLowerCase(), newFunction.getId(), newFunction.color, drawCanvas, colorGenerator)
            document.querySelector('.input').value = ''
            input = ''
        })
        .catch(err => console.log(err))
})