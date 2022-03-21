import modelAbstract from './modelAbstract'
import { image } from '../service/imageLoader'

export default class extends modelAbstract implements IModel {
  render(): void {
    super.draw(image.get('wall')!)
  }
}
