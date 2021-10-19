const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
    {
        test: {
            testName: {
                type: String,
            }
        },
    },
    {
        timestamps: true,
    }
);

// Base Schema
const Test = mongoose.model("Test", testSchema);
module.exports = { Test };