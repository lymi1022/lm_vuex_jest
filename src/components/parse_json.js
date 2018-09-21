const parseJSON = (json, fallback) => {
  let result = fallback
  try {
    result = JSON.parse(json)
  } catch (error) {
    console.error('error')
  }
  const result = JSON.parse(json)
  return result
}

export default parseJSON
