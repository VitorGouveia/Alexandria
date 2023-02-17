const wrapPipe = (value) => {
  let modifiedValue = value
  
  return {
    pipe: function(callback) {
      modifiedValue = callback(modifiedValue) ?? modifiedValue
      
      return this
    }
  }
}

wrapPipe("Essa é a minha string")
  .pipe(string => String(string))
  .pipe(string => string.replaceAll(" ", "-"))
  .pipe(string => string.normalize('NFD'))
  .pipe(string => string.replace(/[\u0300-\u036f]/g, ""))
  .pipe(string => string.toLowerCase())
  .pipe(console.log) // resultado: "essa-e-a-minha-string"