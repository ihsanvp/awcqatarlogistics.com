import type {IMAGE} from "*.jpg?responsive"

type Source = {
  width: number
  height: number
  srcset: string
}

export type ImageSource = {
  [key: string]: Source
}

export default function getImageSource(images: typeof IMAGE[]): ImageSource {
  const formats = [...new Set(images.map(i => i.format))]

  const source = Object.fromEntries(formats.map(f => {
    let key: string = f
    const value = getSourceObject(images.filter(i => i.format == f))

    if (f == "jpg") {
      key = "fallback"
    }

    return [key, value]
  }))

  return source
}

function getSourceObject(images: typeof IMAGE[]): Source {
  return {
    width: images[images.length - 1].width,
    height: images[images.length - 1].height,
    srcset: images.map(i => `${i.src} ${i.width}w`).join(", ")
  }
}