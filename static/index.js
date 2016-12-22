'use strict'

window.onload = () => {
  try {
    require('../src/renderer/main')

    let notification = new Notification('free-desktop-entry', {
      body: 'App ready'
    })
  } catch (err) {
    const currentWindow = require('electron').remote.getCurrentWindow()

    currentWindow.center()
    currentWindow.show()
    currentWindow.openDevTools()

    console.log(err.stack || err)
  }
}
