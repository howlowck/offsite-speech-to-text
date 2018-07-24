require('dotenv').config()
let Mic = require('node-microphone')
let fs = require('fs')
let mic = new Mic()
let micStream = mic.startRecording()

var file = fs.createWriteStream('test.wav', { encoding: 'binary' })

micStream.pipe(file)

setTimeout(() => {
  console.log('stopped recording')
  mic.stopRecording()
}, 3000)
mic.on('info', (info) => {
  console.log(info)
})
mic.on('error', (error) => {
  console.log(error)
})
