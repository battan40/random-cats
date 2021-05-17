export const cleanApiData = (kitty) => {
  return {
    "id": kitty.id,
    "webpurl": kitty.webpurl,
    "isFavorite": false,
  }
}
