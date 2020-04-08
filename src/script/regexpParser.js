export default function funcParser(string){
    if(typeof(string) !== 'string') return null

    let mainRegEx = /(?<yShift>^(?:\+|\-){0,1}\d*(?:\/\d*){0,}(?=\+|\-)){0,}(?<funcSign>\+|\-){0,}(?<yMult>\d*(pi){0,1}(?:\/\d*){0,}){0,}(?<func>cos|sin|tg|ctg)\((?<xMult>\d*(?:x)(?:\/\d*){0,}){0,}(?<xShift>(?:\+|\-){1}\d*(?:pi){0,1}(?:\/\d*){0,}){0,}\)/gmi

    let parsingResult = mainRegEx.exec(string)

    if(!parsingResult) {
        throw new Error("Wrong string")
    }

    let {yMult, yShift, xMult, xShift, func, funcSign} = parsingResult.groups

    let _yMult = 1
    let _yShift = 0
    let _xMult = 1
    let _xShift = 0

    if(yMult) {
        if(funcSign){
            _yMult = fractionParser(funcSign+yMult)
        } else {
            _yMult = fractionParser(yMult)
        }
    }
    yShift ?_yShift = fractionParser(yShift):null
    xMult ?_xMult = fractionParser(xMult):null
    xShift ?_xShift = fractionParser(xShift):null

    // console.log('yMult',_yMult)
    // console.log('xMult',_xMult)
    // console.log('_xShift',_xShift)
    // console.log('_yShift',_yShift)

    return func?{func, _xMult,_yMult, _xShift, _yShift}:new Error('Wrong function')
}


function fractionParser(fraction) {
    let regExp = /^(?<numerator>(?:\+|\-){0,1}\d*)(?<pi>pi){0,1}(?:x){0,1}(?:\^(?<exponent>\d*)){0,}(?:\/(?<denominator>\d*)){0,}/gi
    let parsingResult = regExp.exec(fraction)
    return parsingResult?calculator(parsingResult.groups):null
}

function calculator(parsedFraction) {
    if(!parsedFraction) return null
    let {numerator, denominator, pi, exponent} = parsedFraction
    let result = 1

    if(exponent && pi) {
        result = result*(Math.PI**exponent)
    } else if (exponent && numerator) {
        result = result*(numerator**exponent)
    } else {
        if(numerator === '-') numerator = -1
        if(numerator === '+') numerator = 1
        if(numerator) result = result*numerator
        if(pi) result = result*Math.PI
    }
    if(denominator) result = result/denominator

    return Number(result.toFixed(4))
}