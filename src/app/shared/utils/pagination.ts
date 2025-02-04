export const getLimitAndOffset = (page: number) => {
  const limit = 10
  const offset = page * limit

  return { limit, offset }
}
