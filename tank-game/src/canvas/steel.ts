import canvasAbstract from './canvasAbstract'
import config from '../config'
import steelModel from '../model/steel'

class steel extends canvasAbstract {
  constructor() {
    super()
    super.createModels(steelModel, config.model.steel.num)
  }
  public render(): void {
    super.renderModels()
  }
}

export default new steel()
