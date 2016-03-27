var text = process.argv[2]
var shift = parseInt(process.argv[3])

function caesarCypher(text, shift) {
  if (shift < 0)
    return caesarCypher(text, shift + 26)

  var output = ''

  for (var i = 0; i < text.length; i++) {
    var char = text[i]

    if (char.match(/[a-z]/i)) {
      var code = text.charCodeAt(i)

      if ((code >= 65) && (code <= 90)) // Uppercase
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65)

      else if ((code >= 97) && (code <= 122)) // Lowercase
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97)
    }

    output += char
  }
  return output
}

var result = caesarCypher(text, shift)
console.log(result)
