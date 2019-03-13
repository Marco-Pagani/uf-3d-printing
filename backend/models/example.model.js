/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var exampleSchema = new Schema({
    "id": String,
    "items": [String]
	}, {
    collection: "Example"
  }
);

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
exampleSchema.pre('save', function(next) {
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
});

/* Use your schema to instantiate a Mongoose model */
var example = mongoose.model('decal', exampleSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = example;
