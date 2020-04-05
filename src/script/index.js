import '../styles/styles.css'
import Canvas from './Canvas'
import FunctionFactory from './Function'
import funcParser from './regexpParser'

const canvas = document.querySelector('#canvas')
const drawCanvas = new Canvas(canvas, 5)

const functionFactory = new FunctionFactory()
let input = ''

document.querySelector('.input').addEventListener('input', e => {
    input = e.target.value
    document.querySelector('.input').value = input
})
document.querySelector('.add-form').addEventListener('submit', e => {
    e.preventDefault()

    const result = funcParser(input)
    let {_yMult, _yShift, _xMult, _xShift, func} = result
    let newFunction
    functionFactory.create(func, canvas, _xShift, _yShift, _xMult, _yMult)
        .then(func => {
            newFunction = func
            drawCanvas.addInitiator(newFunction.init())
            drawCanvas.addTimer(newFunction.getTimer())
        })
        .catch(err => console.log(err))
    document.querySelector('.input').value = ''
    input = ''
})