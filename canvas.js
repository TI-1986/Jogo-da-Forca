const tela = document.querySelector('canvas')

const base = tela.getContext('2d')
const tronco = tela.getContext('2d')
const galho = tela.getContext('2d')
const corda = tela.getContext('2d')
const cabeca = tela.getContext('2d')
const corpo = tela.getContext('2d')
const bracoD = tela.getContext('2d')
const bracoE = tela.getContext('2d')
const pernaD = tela.getContext('2d')
const pernaE = tela.getContext('2d')

//base
base.fillStyle = '#0A3871'
base.fillRect(0, 355, 250, 5)
//tronco
tronco.fillStyle = '#0A3871'
tronco.fillRect(80, 0, 5, 360)
//galho
galho.fillStyle = '#0A3871'
galho.fillRect(80, 0, 178, 5)
//corda
corda.fillStyle = '#0A3871'
corda.fillRect(253.5, 0, 5, 50)
//cabeça
cabeca.strokeStyle = '#0A3871'
cabeca.beginPath()
cabeca.lineWidth = 5
cabeca.arc(257, 74, 25, 0, 2 * Math.PI)
cabeca.stroke()
//corpo
corpo.fillStyle = '#0A3871'
corpo.fillRect(253.5, 96, 5, 120)
//braçoD
bracoD.fillStyle = '#0A3871'
bracoD.beginPath()
bracoD.moveTo(256, 108)
bracoD.lineTo(292, 149)
bracoD.closePath()
bracoD.stroke()
//braçoE
bracoE.fillStyle = '#0A3871'
bracoE.beginPath()
bracoE.moveTo(256, 108)
bracoE.lineTo(219, 149)
bracoE.closePath()
bracoE.stroke()
