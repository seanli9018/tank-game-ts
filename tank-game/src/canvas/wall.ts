import canvasAbstract from './canvasAbstract'
import config from '../config'
import wallModel from '../model/wall'

class wall extends canvasAbstract {
  constructor() {
    super()
    super.createModels(wallModel, config.model.wall.num)
  }
  public render(): void {
    super.renderModels()
  }
}

export default new wall()
