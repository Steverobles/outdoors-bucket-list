const mongoose = require('mongoose')
const Schema = mongoose.Schema

const backpackingSchema = new Schema ({
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
    }
})

module.exports = mongoose.model ('Backpacking', backpackingSchema)