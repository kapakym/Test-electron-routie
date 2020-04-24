const { remote } = require('electron')
const dialog = remote.dialog
const routie = require("../libs/routie/routie")

routie({
    '': function() {
      
    },
    'hello': function() {
      alert('popup 1 alert');
    },
    'test2': function() {
      alert('popup 2 alert');
    }
  })

  let WIN      = remote.getCurrentWindow()

  
  

console.log("start")
WIN.on('close', (event) => {
//  let options = {}
 var choice = dialog.showMessageBoxSync(WIN,
  {
    type: 'question',
    buttons: ['Yes', 'No'],
    title: 'Confirm',
    message: 'Do you want exit?'
  });
  console.log(choice)
  if (choice==0)  WIN.destroy()

})