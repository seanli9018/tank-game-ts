import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const el = document.querySelector<HTMLCanvasElement>('#canvas')!
console.log(el)
const canvasEl = el.getContext('2d')!
canvasEl.fillStyle = '#ccc'
canvasEl.fillRect(0, 0, 300, 300)
