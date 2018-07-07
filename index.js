var katzDeli = []

function takeANumber(katzDeliLine, name) {
  var numberOnLine = katzDeliLine[name] + 1
  return numberOnLine
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var firstPerson = katzDeliLine[0]
    katzDeliLine.shift()
    return firstPerson
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var returnLine = "The line is currently:"
    for (var i = 0; i < katzDeliLine.length; i++) {
      returnLine = returnLine + ` ${i + 1}. ${katzDeliLine[i]}`
    }
    return returnLine
  }
}