const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentsSchema = new Schema ({
    text: {
        type: String,
        required: true
    }
})

const hikingSchema = new Schema ({
    trail: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required:true
    },
    distance: {
        type: String,
        validate: {
            validator: function(value) {
                return /^\d+(\.\d+)?\s*miles$/.test(value)
            },
            message: 'Invalid format. Please enter number with \'miles\' (e.g., 5 miles, 17.5 miles).' 
        }
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard']
    },
    comments:[commentsSchema]
})

module.exports = mongoose.model('Hiking', hikingSchema )