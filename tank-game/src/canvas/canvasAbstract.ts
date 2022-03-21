import config from '../config'
import position from '../service/positionGenerator'

export default abstract class canvasAbstract {
  protected models: IModel[] = []
  protected items = []
  abstract render(): void //abstract function that requires class extended from this abstract class to have this func.
  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
  ) {
    this.createCanvas()
  }

  //create canvas
  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height

    //insert prepared canvas el to app div.
    this.app.insertAdjacentElement('afterbegin', this.el)
  }

  //create models and push them to models array.
  protected createModels(model: ModelConstructor, num: number) {
    const positionInstance = new position()
    positionInstance.positionCollection(num).forEach(position => {
      const instance = new model(this.canvas, position.x, position.y)
      this.models.push(instance)
    })
  }

  //use model.render to draw each model in model array.
  protected renderModels() {
    this.models.forEach(model => model.render())
  }
}
