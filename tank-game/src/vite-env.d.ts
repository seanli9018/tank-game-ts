/// <reference types="vite/client" />

//interface for model constructor
interface ModelConstructor {
  new (canvas: CanvasRenderingContext2D, x: number, y: number): IModel
}

//interface for model overall
interface IModel {
  render(): void
}
