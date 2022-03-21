import strawImage from './static/images/straw/straw.png'
import wallImage from './static/images/wall/wall.gif'
import waterImage from './static/images/water/water.gif'
import steelImage from './static/images/wall/steels.gif'

export default {
  canvas: {
    width: 1200,
    height: 800,
  },
  model: {
    straw: {
      width: 30,
      height: 30,
      num: 100,
    },
    wall: {
      width: 30,
      height: 30,
      num: 150,
    },
    water: {
      width: 30,
      height: 30,
      num: 10,
    },
    steel: {
      width: 30,
      height: 30,
      num: 50,
    },
  },
  images: {
    straw: strawImage,
    wall: wallImage,
    water: waterImage,
    steel: steelImage,
  },
}
