//sudo npm i -g yarn

const path = require("path");
const fs = require("fs/promises");

const contactsPath = "./db/contacts1.json";
console.log(contactsPath);

//fileOperation
const fileOperation = async ({ action, data }) => {
  switch (action) {
    case "read":
      const text = await fs.readFile(contactsPath, "utf-8");
      console.log(text);
      break;
    case "add":
      await fs.appendFile(contactsPath, data);
      break;
    case "replace":
      await fs.writeFile(contactsPath, data);
      break;
    default:
      console.log("Unknown action");
  }
};
// fileOperation({ action: "read" });
// fileOperation({ action: "add", data: "\nAdd data to Old file" });
// fileOperation({ action: "replace", data: "Replace Old file with new data" });
