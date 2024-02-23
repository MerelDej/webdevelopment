let familie = ['Jef', 'Magda', 'Katrien', 'Peter', 'Linda', 'Alexandria']
console.log(familie.length)
console.log(familie[0] + " " + familie[2] + " " + familie[4])

function voegNaamToe() {
    let resultaat = window.prompt('Wat is je naam?')
    console.log(resultaat)
    familie.push(resultaat)
}
voegNaamToe()

console.log(familie.toString())