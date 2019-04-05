//Model

var mongoose = require('mongoose'), 
Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;

var fileSchema = new Schema({
        "_id": ObjectId,
        "name": String,
        "img": {
            type: String,
            optional: true
        },
        "quantity": Number,
        "dimensions": {
            type: {
                x: Number,
                y: Number,
                z: Number
            },
            optional: true
        },
        "color": [String],
        "weight": {
            type: Number,
            optional: true
        },
        "printTime": {
            type: Number, // In minutes
            optional: true
        },
        "extra": String
    }
    , {
        collection: "File"
    }
);

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
fileSchema.pre('save', function(next) {
    var currentTime = new Date;
    this.updated_at = currentTime;
    if(!this.created_at)
    {
        this.created_at = currentTime;
    }
    next();
});


var file = mongoose.model('file', fileSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = file;
