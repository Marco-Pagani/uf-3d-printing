 var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var modelSchema = new Schema({
      FileName: String,
      Dimensions: String,
      Requests: String,

      Color1: String,
      Color2: String,
      Color3: String,

      Weight: Number,
      PrintTime: Number
    
      });