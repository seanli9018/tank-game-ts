import config from './config'
import './style.scss'
import straw from './canvas/straw'
import { imagePromises, image } from './service/imageLoader'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'

async function bootstrap() {
  console.log(imagePromises)
  await Promise.all(imagePromises)
  console.log(image.get('straw'))
  straw.render()
}

void bootstrap()
