const { Contact } = require("./schema");
const { QueryExecutionError } = require("../../../utils/errors");


module.exports = {
    createContact: async function (profile) {
        try {
            const newContact = new Contact({
                ...profile,
            });
            await newContact.save();
            return newContact;
        } catch (err) {
            throw new QueryExecutionError();
        }
    }
};