const contacts = require("./db");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "getAll":
      const allContacts = await contacts.getAll();
      console.log(allContacts);
      break;
    case "getById":
      const oneContact = await contacts.getById(id);
      console.log(oneContact);
      break;
    case "add":
      const newContact = await contacts.add({ name, email, phone });
      console.log(newContact);
      break;
  }
};
// invokeAction({ action: "getAll" });
// invokeAction({ action: "getById", id: "1" });
invokeAction({
  action: "add",
  name: "Dmytro Samyliak",
  email: "dsamyliak@gmail.com",
  phone: "(050) 341-1752",
});
