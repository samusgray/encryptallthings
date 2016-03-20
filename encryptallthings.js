const workshopper = require('workshopper')
const path = require('path')

workshopper({
name : 'crypto'
, title : 'CRYPTO'
, exerciseDir : path.join(__dirname, 'exercises')
, appDir : __dirname
})
