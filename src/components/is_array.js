const isArray = (input) => {
  if (Array.isArray(input)) {
    return input
  } else {
    return [input]
  }
}
export default isArray
