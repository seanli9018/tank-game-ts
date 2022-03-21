import canvasAbstract from './canvasAbstract'
import config from '../config'
import waterModel from '../model/water'

class water extends canvasAbstract {
  constructor() {
    super()
    super.createModels(waterModel, config.model.water.num)
  }
  public render(): void {
    super.renderModels()
  }
}

export default new water()
