import config from '../config'
import imgUrl from '../static/images/straw/straw.png'

export default abstract class canvasAbstract {
  protected items = []
  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
  ) {
    this.createCanvas()
    this.drawModals()
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

  protected drawModals() {
    const img = document.createElement('img')
    img.src = imgUrl
    img.onload = () => {
      const position = this.getPosition()
      this.canvas.drawImage(
        img,
        position.x,
        position.y,
        config.model.straw.width,
        config.model.straw.height
      )
    }
  }

  protected getPosition() {
    return {
      x: 30,
      y: 50,
    }
  }
}
