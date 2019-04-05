//Model

var mongoose = require('mongoose'), 
Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;

var queueSchema = new Schema({
        "_id": ObjectId,
        "status": Number,
        "name": String,
        "email": String,
        "phone": {
            type: String,
            optional: true
        },
        "affiliation" : {
            "kind": String,
            "major": String,
            "department": String,
            "course": Boolean,
            "coursecode": String
        },
        "publicity": Boolean,
        "locationPref": String,
        "makerLoc": {
            type: String,
            optional: true
        },
        "cost": Number,
        "entryDate": String,
        "paymentDate": String,
        "updateDate": String,
        "staffNotes": String,
        "staffName": String
    }, {
        collection: "Queue"
    }
);

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
queueSchema.pre('save', function(next) {
    var currentTime = new Date;
    this.updated_at = currentTime;
    if(!this.created_at)
    {
        this.created_at = currentTime;
    }
    next();
});


var queue = mongoose.model('queue', queueSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = queue;
