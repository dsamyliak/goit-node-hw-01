/* Розкоментуйте і запиши значення*/
const path = require("path");
const fs = require("fs/promises");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

const updateContacts = async (contacts) =>
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

// TODO: задокументувати кожну функцію
// function listContacts() { };
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

// function getContactById(contactId) { };
const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const id = String(contactId);
  const result = contacts.find((item) => item.id === id);
  return result || null;
};

// function removeContact(contactId) { };
const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [newContacts] = contacts.splice(index, 1);
  await updateContacts(contacts);
  return newContacts;
};

// function addContact(name, email, phone) { };
const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
