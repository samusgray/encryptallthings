const workshop = require('workshopper-adventure')({
    appDir      : __dirname
  , languages   : ['en']
  , header      : require('workshopper-adventure/default/header')
  , footer      : require('workshopper-adventure/default/footer')
})

workshop.addAll([
  'CAESAR_CIPHER'
])

module.exports = workshop
