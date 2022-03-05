import { image } from '../service/imageLoader'
import config from '../config'

export default abstract class modelAbstract {
  abstract render(): void
  constructor(
    protected canvas: CanvasRenderingContext2D,
    protected x: number,
    protected y: number
  ) {}
  protected draw(): void {
    this.canvas.drawImage(
      image.get('straw')!,
      this.x,
      this.y,
      config.model.straw.width,
      config.model.straw.height
    )
  }
}
