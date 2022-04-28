const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    scheme: {
        type: String,
        required: true,
    },
    topLevelDomain: {
        type: String,
        required: true
    },
    subdomain: {
        type: String,
        required: true
    },
    subdirectory: {
        type: String
    }

})

module.exports = mongoose.model('url', urlSchema)