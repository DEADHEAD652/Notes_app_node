const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// add command 
yargs.command({
    command: 'add',
    describe: 'add a new note',

    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'

        }
    },
    handler:  (argv)=>  {
        notes.addNotes(argv.title, argv.body)
    }

})


//remove command
yargs.command({
    command: 'remove',
    decribe: 'remove a note',
    builder: {
        title: {
            describe: 'Note removal',
            demandOption: true,
            type: 'string'

        }


    },
    handler: function (argv) {

        notes.removeNotes(argv.title)
    },


})

//list comand
yargs.command({
    command: 'list',
    describe: 'lsiting all the notes',
     builder: {


     },
    handler:  () => {
        notes.ListNotes()
    }
})

//read command 
yargs.command({
    command: 'read',
    describe: 'reading all the notes',
    builder: {

    },
    handler:  (argv) =>  {
        notes.ReadNotes(argv.title)
    }

})

yargs.parse();