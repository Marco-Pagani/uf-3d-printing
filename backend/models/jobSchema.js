  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var jobSchema = new Schema({
    Name:  String,
    Email: String,
    Phone: Number,
    Affiliation: {
        Type: String,
        Major: String,
        Department: String,
        ForCourse: Boolean,
        CourseCode: String
    },
    LocationPref: String,
    Publicity: Boolean,

    Models: [ _id ],

    Status: Number,
    EntryDate: Date,
    UpdateDate: Date,
    MakerLoc: String,
    Cost: Number,

    StaffNotes: String,
    StaffName: String

  });