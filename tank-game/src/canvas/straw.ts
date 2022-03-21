import canvasAbstract from './canvasAbstract'
import config from '../config'
import strawModel from '../model/straw'

class straw extends canvasAbstract {
  constructor() {
    super()
    super.createModels(strawModel, config.model.straw.num)
  }
  public render(): void {
    super.renderModels()
  }
}

export default new straw()
