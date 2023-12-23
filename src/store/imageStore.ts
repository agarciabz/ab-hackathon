import { atom } from 'nanostores'
import type { Photo } from 'pexels'

export const imagesStore = atom<Photo[]>([])

export const updateStore = (images: Photo[]) => {
  imagesStore.set(images)
}

export const findImage = (id?: number) => {
  return imagesStore.get().find((image) => image.id === id)
}
