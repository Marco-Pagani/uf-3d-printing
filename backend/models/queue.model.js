var queueSchema = new Schema({
    _id:  Schema.Types.ObjectId,
    name: String,
    email: String,
    phone: String,
    affiliation: {

    },
    created: Date,
    last_modified: Date,
    status: {

    },
    models: [{

    }]


}, {
    collection: "Queue"
});