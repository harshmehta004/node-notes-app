const chalk = require('chalk')
const yargs = require('yargs')
const yourNotes=require('./notes.js')
// add, remove,read and list
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe:'Note title',
            demandOption : true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Adding a new note',argv)
        console.log('TItle:',argv.title)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note')
    }
})
yargs.command({
    command: 'list',
    describe: 'List of note',
    handler: function(){
        console.log('Listing of all the notes')
    }
})
yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function(){
        console.log('Reading a note')
    }
})
yargs.parse()

// console.log(yargs.argv)

// -----------------------------------------
// const command = process.argv[2]
// if(command === 'add'){
//     console.log('Adding...')
// }else if(command === 'remove'){
//     console.log('Removing....')
// }

// console.log(chalk.blue.inverse('Success!'))

// ---------------------------------------
// console.log(process.argv[2])

// ----------------------------------
// const validator = require('validator')
// console.log(validator.isURL('www.healcn.uivebsdiuc'))
// ---------------------------------
const msg=yourNotes()
console.log(msg)




// -------------------------------------------
// const add=require('./utils.js')
// const sum=add(22,34)
// console.log(sum)
// -------------------------------------
// const name='Harsh'
// console.log(name)
// ---------------------------------------
// const fs=require('fs')
// // fs.writeFileSync('note.txt','This module was ')
// fs.appendFileSync('note.txt','\n My name is Harsh.')