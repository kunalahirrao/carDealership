const { Test } = require("./schema");
const { QueryExecutionError } = require("../../../utils/errors");


module.exports = {
    createTest: async function (test) {
        try {
            const newTest = new Test({
                test,
            });
            await newTest.save();
            return newTest;
        } catch (err) {
            throw new QueryExecutionError();
        }
    }
};