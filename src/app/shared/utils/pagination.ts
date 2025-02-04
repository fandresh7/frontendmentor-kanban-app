export const getLimitAndOffset = (page: number) => {
  const limit = 15
  const offset = page * limit

  return { limit, offset }
}
