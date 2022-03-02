import canvasAbstract from './canvasAbstract'
import config from '../config'

class straw extends canvasAbstract {
  public render(): void {
    super.drawModals(config.model.straw.num)
  }
}

export default new straw()
