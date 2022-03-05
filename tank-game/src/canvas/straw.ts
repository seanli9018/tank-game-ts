import canvasAbstract from './canvasAbstract'
import config from '../config'
import strawModel from '../model/straw'

class straw extends canvasAbstract {
  public render(): void {
    super.drawModals(strawModel, config.model.straw.num)
  }
}

export default new straw()
