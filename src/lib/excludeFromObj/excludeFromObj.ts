/**
 * Return a new object excluding the provided keys
 *
 * @param {Object} obj
 * The object to look in
 *
 * @param {Array} keys
 * The key value pairs to exclude
 */
const excludeFromObj = (obj: { [key: string]: any }, keys: string[]) =>
  Object.keys(obj).reduce((acc: any, x: any) => {
    if (keys.includes(x)) return acc
    acc[x] = obj[x]
    return acc
  }, {})

export default excludeFromObj
