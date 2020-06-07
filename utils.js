const fs = require("fs");
const chalk = require("chalk");

const addNotes = function(title, body) {
    const loadedNotes = loadNotes()
    const titleDuplicateCheck = loadedNotes.filter(
        note => {
            return note.title === title
        }
    )
    if (titleDuplicateCheck == 0) {
        loadedNotes.push({
            title: title,
            body: body
        })
        saveNotes(loadedNotes)
        console.log(chalk.greenBright.bold('Notes added successfully!'))
    } else {
        console.log(chalk.redBright.bold('Title already taken!'))
    }
}

const loadNotes = function(){
    try {
    const dataStored = fs.readFileSync('notes.json').toString()
    return JSON.parse(dataStored)
    } catch {
        return []
    }
}

const saveNotes = function(notes){
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json', data)
}

module.exports = {
    addNotes: addNotes
}