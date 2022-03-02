import config from '../config'

type mapKey = keyof typeof config.images

export const image = new Map<mapKey, HTMLImageElement>()

export const imagePromises = Object.entries(config.images).map(([key, value]) => {
  return new Promise((resolve) => {
    //return a array of loaded image promises.
    const img = document.createElement('img')
    img.src = value
    img.onload = () => {
      image.set(key as mapKey, img)
      resolve(img)
    }
  })
})
