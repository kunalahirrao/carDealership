const mongo = require("./database/mongo");
const responseGenerator = require("../../utils/responseGenerator");
const responseMessages = require("../../utils/responseMessages");

module.exports = {
    test: async (req, res, next) => {
        try {
            const {
                statusCode,
                msg,
                isShown,
            } = responseMessages.test.test;
            res
                .status(statusCode)
                .send(responseGenerator.getResponse(statusCode, msg, isShown));
        } catch (err) {
            next(err);
        }
    },
    createTest: async (req, res, next) => {
        const { test } = req.body
        try {
            const newTest = await mongo.createTest(test)
            const {
                statusCode,
                msg,
                isShown,
            } = responseMessages.test.test;
            res
                .status(statusCode)
                .send(responseGenerator.getResponse(statusCode, msg, isShown, newTest));
        } catch (err) {
            next(err)
        }
    }
};