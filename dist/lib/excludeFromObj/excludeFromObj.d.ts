/**
 * Return a new object excluding the provided keys
 *
 * @param {Object} obj
 * The object to look in
 *
 * @param {Array} keys
 * The key value pairs to exclude
 */
declare const excludeFromObj: (obj: {
    [key: string]: any;
}, keys: string[]) => any;
export default excludeFromObj;
