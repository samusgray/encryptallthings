var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length)
}

function getRandomShiftLength() {
  return Math.floor(Math.random() * (25 - -25 + 1)) + -25
}

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

exercise.addSetup(function(mode, callback){
  strings = ["It's the end of the world as we know it.",
             "What's the matter with the clothes I'm wearing?",
             "Never eat glue.",
             "Dogs are the best."
            ]
  var args = [strings[getRandomIndex(strings)], getRandomShiftLength()]
  this.submissionArgs = this.solutionArgs = args
  process.nextTick(callback)
})


module.exports = exercise
