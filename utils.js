const fs = require("fs");
const chalk = require("chalk");

const addNotes = function (title, body) {
  const loadedNotes = loadNotes();
  const titleDuplicateCheck = loadedNotes.filter((note) => {
    return note.title.toUpperCase() === title.toUpperCase();
  });
  if (titleDuplicateCheck == 0) {
    loadedNotes.push({
      title: title,
      body: body,
    });
    saveNotes(loadedNotes);
    console.log(chalk.greenBright.bold("Notes added successfully!"));
  } else {
    console.log(chalk.redBright.bold("Title already taken!"));
  }
};

const deleteNotes = function (title) {
  var isTitlePresent = false;
  const loadedNotes = loadNotes();
  const updatedNotes = loadedNotes.filter((note) => {
    if (note.title.toUpperCase() === title.toUpperCase()) isTitlePresent = true;
    return note.title.toUpperCase() !== title.toUpperCase();
  });

  if (isTitlePresent) {
    saveNotes(updatedNotes);
    console.log(chalk.greenBright.bold("Notes deleted successfully!"));
  } else {
    console.log(chalk.redBright.bold("Title not found!"));
  }
};

const viewNotes = function (title) {
  const loadedNotes = loadNotes();
  const updatedNotes = loadedNotes.filter((note) => {
    return note.title.toUpperCase() === title.toUpperCase();
  });
  if (updatedNotes != 0) {
    console.log(
      chalk.whiteBright.bold(
        updatedNotes[0].title + ":\n" + updatedNotes[0].body
      )
    );
  } else {
    console.log(chalk.redBright.bold("Title not found!"));
  }
};

const modifyNotes = function (title, body) {
  var loadedNotes = loadNotes();
  var i = -1;
  var index = 0;
  const titleCheck = loadedNotes.filter((note) => {
    i++;
    if (note.title.toUpperCase() === title.toUpperCase()) index = i;
    return note.title.toUpperCase() === title.toUpperCase();
  });
  if (titleCheck != 0) {
    loadedNotes[index].body = body;
    saveNotes(loadedNotes);
    console.log(chalk.greenBright.bold("Data modified successfully"));
  } else {
    console.log(chalk.redBright.bold("Title not found!"));
  }
};

const loadNotes = function () {
  try {
    const dataStored = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataStored);
  } catch {
    return [];
  }
};

const saveNotes = function (notes) {
  const data = JSON.stringify(notes);
  fs.writeFileSync("notes.json", data);
};

module.exports = {
  addNotes: addNotes,
  deleteNotes: deleteNotes,
  viewNotes: viewNotes,
  modifyNotes: modifyNotes,
};
