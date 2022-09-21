const fs = require("fs/promises");

const contactsPath = `${__dirname}/contacts.json`;

const getAll = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};
const getById = async (id) => {
  const contacts = await getAll();
  const result = contacts.find((item) => item.id === id);
  return result || null;
};

const add = async ({ name, email, phone }) => {
  const contacts = await getAll();
  let maxId = 10;
  const newContact = { id: ++maxId, name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
};

module.exports = { getAll, getById, add };
