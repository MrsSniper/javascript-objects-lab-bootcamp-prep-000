var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

<<<<<<< HEAD
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
=======
>>>>>>> ec29ab45596258ce1761cb699f2c5f0fe3935583
