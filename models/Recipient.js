const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * recipientSchema: represents a recipient of a survey
 * @field {String} email: the email of the recipient
 * @field { Boolean } responded: true = has responsed, false = has not responded
 */

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;
