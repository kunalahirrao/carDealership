const mongo = require("./database/mongo");
const responseGenerator = require("../../utils/responseGenerator");
const responseMessages = require("../../utils/responseMessages");

module.exports = {
    listCars: async (req, res, next) => {
        const cars = [
            {
                carName:"Alto",
                img:"https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=678&q=80",
                description:"Car description"
            },
            {
                carName:"Tata Nano",
                img:"https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
                description:"Car description"
            },
            {
                carName:"Tata Ciaz",
                img:"https://images.unsplash.com/photo-1565793979206-10951493332d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
                description:"Car description"
            },
            {
                carName:"Ritz",
                img:"https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
                description:"Car description"
            },
            {
                carName:"Palo",
                img:"https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
                description:"Car description"
            },
            {
                carName:"Punch",
                img:"https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                description:"Car description"
            },
            {
                carName:"Tesla",
                img:"https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1237&q=80",
                description:"Car description"
            },
            {
                carName:"Tiago",
                img:"https://images.unsplash.com/photo-1554223090-7e482851df45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1103&q=80",
                description:"Car description"
            },
            {
                carName:"Tata Sumo",
                img:"https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1602&q=80",
                description:"Car description"
            }
        ]
        try {
            const {
                statusCode,
                msg,
                isShown,
            } = responseMessages.listCars.codes;
            res
                .status(statusCode)
                .send(responseGenerator.getResponse(statusCode, msg, isShown,cars));
        } catch (err) {
            next(err);
        }
    },   
    createContact: async (req, res, next) => {  
        const {name,email,message} = req.body                
        const profile = {
            name,email,message
        }                 
        try {
            await mongo.createContact(profile)
            const {
                statusCode,
                msg,
                isShown,
            } = responseMessages.contacts.codes;
            res
                .status(statusCode)
                .send(responseGenerator.getResponse(statusCode, msg, isShown));
        } catch (err) {
            next(err);
        }
    }
};