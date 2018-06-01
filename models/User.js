const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * userSchema: represents a user of the application
 * @field {String} googleId: the googleId of the user used to uniquely identify them, obtains from google oauth
 * @field { Number } credits: available credits for use in charging user
 */

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
