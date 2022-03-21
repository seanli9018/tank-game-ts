import config from '../config'

type positionType = {
  x: number
  y: number
}

export default class position {
  protected collections: positionType[] = []
  constructor() {}
  //generate position array based on model config number.
  public positionCollection(num: number) {
    const collection = [] as positionType[]
    Array(num)
      .fill('modelPosition')
      .forEach(() => {
        while (true) {
          const position = this.getPosition()
          const isExist = this.collections.some(c => c.x === position.x && c.y === position.y)
          if (!isExist) {
            //if newly generated position not duplicate, push to collection, then break while loop.
            this.collections.push(position)
            collection.push(position)
            break
          }
        }
      })
    return collection
  }

  protected getPosition() {
    const randomWidth =
      Math.floor(Math.random() * (config.canvas.width / config.model.straw.width)) *
      config.model.straw.width
    const randomHeight =
      Math.floor(Math.random() * (config.canvas.height / config.model.straw.height - 5)) *
        config.model.straw.height +
      config.model.straw.height * 2
    return {
      x: randomWidth,
      y: randomHeight,
    }
  }
}
