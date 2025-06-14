function getImgUrl(name) {
  return new URL(`../assets/vinyls/${name}`, import.meta.url)
}

export { getImgUrl }
