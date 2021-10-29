const mediums = [
  {text: "Charcoal", _id: 123 },
  {text: "Oils", _id: 231},
  {text: "Pastels", _id: 312},
]


const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, mediums)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const medium = mediums.find( medium => medium._id === parseInt(id))
    if (!medium) throw new Error ('No todo was found')
    return callback(null, medium)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(medium, callback) {
  // Add the id
  medium._id = Date.now() % 1000000
  // New todos wouldn't be done
  medium.done = false
  mediums.push(medium)
  return callback(null, medium)
}

function findByIdAndDelete(id, callback) {
  try { 
    // Find the index based on the _id of the todo object
    const idx = mediums.findIndex(mediums => mediums._id == parseInt(id))
    const deletedmediums = mediums.splice(idx, 1)
    if (!deletedmediums.length ) throw new Error ('No todo was deleted')
    return callback(null, deletedmediums[0])
  } catch(error) {
    return callback(error, null)
  }
}



export { 
	find,
  findById,
  create,
  findByIdAndDelete,
}