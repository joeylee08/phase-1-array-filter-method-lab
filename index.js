function findMatching(collection, string) {
  return collection.filter(name => name.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(collection, string) {
  return collection.filter(name => name.startsWith(string))
}

function matchName(collection, string) {
  return collection.filter(obj => obj.name === string)
}