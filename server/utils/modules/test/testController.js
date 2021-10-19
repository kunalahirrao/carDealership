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
            } = responseMessages.event.createBroadcastEvent;
            res
                .status(statusCode)
                .send(responseGenerator.getResponse(statusCode, msg, isShown));
        } catch (err) {
            next(err);
        }
    }
};