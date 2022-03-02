import config from '../config'
import { image } from '../service/imageLoader'

export default abstract class canvasAbstract {
  protected items = []
  abstract render(): void //abstract function that requires class extended from this abstract class to have this func.
  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
  ) {
    this.createCanvas()
  }

  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height

    // define canvas style
    // this.canvas.fillStyle = '#fff'
    // draw canvas react
    // this.canvas.fillRect(0, 0, config.canvas.width, config.canvas.height)

    //insert prepared canvas el to app div.
    this.app.insertAdjacentElement('afterbegin', this.el)
  }

  protected drawModals(num: number) {
    Array(num)
      .fill('strawPatter')
      .forEach((item) => {
        const position = this.getPosition()
        this.canvas.drawImage(
          image.get('straw')!,
          position.x,
          position.y,
          config.model.straw.width,
          config.model.straw.height
        )
      })
  }

  protected getPosition() {
    const randomWidth = Math.random() * config.canvas.width - config.model.straw.width
    const randomHeight = Math.random() * config.canvas.height - config.model.straw.height
    return {
      x: randomWidth >= 0 ? randomWidth : 0,
      y: randomHeight >= 0 ? randomHeight : 0,
    }
  }
}
