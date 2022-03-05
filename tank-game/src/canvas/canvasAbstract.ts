import config from '../config'

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

    //insert prepared canvas el to app div.
    this.app.insertAdjacentElement('afterbegin', this.el)
  }

  protected drawModals(model: ModelConstructor, num: number) {
    this.positionCollection(num).forEach(position => {
      const instance = new model(this.canvas, position.x, position.y)
      instance.render()
    })
  }

  //generate position array based on model config number.
  protected positionCollection(num: number) {
    type positionType = {
      x: number
      y: number
    }
    const collection = [] as positionType[]
    Array(num)
      .fill('modelPosition')
      .forEach(() => {
        while (true) {
          const position = this.getPosition()
          const isExist = collection.some(c => c.x === position.x && c.y === position.y)
          if (!isExist) {
            //if newly generated position not duplicate, push to collection, then break while loop.
            collection.push(position)
            break
          }
        }
      })
    return collection
  }

  protected getPosition() {
    const randomWidth =
      Math.floor(Math.random() * (config.canvas.width / config.model.straw.width)) *
      config.model.straw.width
    const randomHeight =
      Math.floor((Math.random() * config.canvas.height) / config.model.straw.height) *
      config.model.straw.height
    return {
      x: randomWidth,
      y: randomHeight,
    }
  }
}
