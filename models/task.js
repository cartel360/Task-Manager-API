const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    is_completed: {
        type: Boolean,
        required: true
    },
});

module.exports = mongoose.model("Task", dataSchema);