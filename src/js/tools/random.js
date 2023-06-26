export const random = (a, b) => {
  const randomIndex = Math.round(Math.random())
  return randomIndex === 0 ? a : b
}
