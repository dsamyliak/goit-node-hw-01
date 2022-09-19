/*
 * Розкоментуйте і запиши значення*/
const path = require("path");
const fs = require("fs");

// const contactsPath = `${__dirname}/db/contacts.json`;
// const contactsPath =
//   path.dirname(`${__dirname}/db/contacts.json`) +
//   "/" +
//   path.basename(`${__dirname}/db/contacts.json`);
const contactsPath = path.join(__dirname, "db/contacts.json");

console.log(contactsPath);

// TODO: задокументувати кожну функцію
function listContacts() {
  const data = fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}
