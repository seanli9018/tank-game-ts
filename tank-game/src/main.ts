import config from './config'
import './style.scss'
import { imagePromises, image } from './service/imageLoader'
import straw from './canvas/straw'
import wall from './canvas/wall'
import water from './canvas/water'
import steel from './canvas/steel'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'

async function bootstrap() {
  console.log(imagePromises)
  await Promise.all(imagePromises)
  console.log(image.get('straw'))
  straw.render()
  wall.render()
  water.render()
  steel.render()
}

void bootstrap()
