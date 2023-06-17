const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.join(__dirname, 'db', 'contacts.json');
const listContacts = async () => {
    try {
      const data = await fs.readFile(contactsPath, 'utf-8');
      const contacts = JSON.parse(data);
      return contacts;
    } catch (error) {
      throw error;
    }
  };
  
  const getContactById = async (contactId) => {
    try {
      const data = await fs.readFile(contactsPath, 'utf-8');
      const contacts = JSON.parse(data);
      const contact = contacts.find((item) => item.id === contactId);
      return contact;
    } catch (error) {
      throw error;
    }
  };
  
  const addContact = async (newContact) => {
    try {
      const data = await fs.readFile(contactsPath, 'utf-8');
      const contacts = JSON.parse(data);
      contacts.push(newContact);
      await fs.writeFile(contactsPath, JSON.stringify(contacts));
    } catch (error) {
      throw error;
    }
  };
  
  const updateContact = async (contactId, updatedContact) => {
    try {
      const data = await fs.readFile(contactsPath, 'utf-8');
      const contacts = JSON.parse(data);
      const index = contacts.findIndex((item) => item.id === contactId);
      if (index === -1) {
        throw new Error('Contact not found');
      }
      contacts[index] = { ...contacts[index], ...updatedContact };
      await fs.writeFile(contactsPath, JSON.stringify(contacts));
    } catch (error) {
      throw error;
    }
  };
  
  const removeContact = async (contactId) => {
    try {
      const data = await fs.readFile(contactsPath, 'utf-8');
      const contacts = JSON.parse(data);
      const updatedContacts = contacts.filter((item) => item.id !== contactId);
      await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = {
    listContacts,
    getContactById,
    addContact,
    updateContact,
    removeContact,
  };