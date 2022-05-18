const fs = require('fs');
const chalk = require('chalk');

const getNotes =  () =>  {
    return 'Your notes...'
}

const addNotes =  (title, body) =>  {
    const notes = loadNotes()
    const dupliacateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (dupliacateNotes.length == 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('Title already taken!'))
    }


}
const removeNotes = (title) => {
    const notes = loadNotes()

    const new_notes = notes.filter(function (note) {
        return note.title !== title
    })
    if (notes.length > new_notes.length) {

        console.log(chalk.bgGreen('Note removed!'))
        saveNotes(new_notes)

    } else {
        console.log(chalk.bgRed('Note not found!'))
    }


}
const ListNotes =  () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Here are yout notes :'))
  notes.forEach(element => {
      console.log(element.title)
  });
}
const ReadNotes = (title) => {
    const notes = loadNotes()
const note = notes.find((note) => note.title == title)
if( note ){
console.log(chalk.inverse(note.title))
console.log(note.body)
}
else{
    console.log(chalk.red.inverse("Title Not Found! "))
}

}







const saveNotes =  (notes)=> {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}


const loadNotes =  ()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (err) {
        return []
    }


}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    ListNotes : ListNotes,
    ReadNotes : ReadNotes
}