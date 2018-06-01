const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = './Recipient';

/**
 * surveySchema: represents the survey we send to users to fill
 * @field {String} title: the title of the survey
 * @field {String} body: the body of the survey
 * @field {String} subject: the subject of the survey
 * @field { [RecipientSchema] } recipients: a sub collection of users who have received this survey
 * @field { Number } yes: the amount of responses to the survey that indicate yes
 * @field { Number } no: the amoubt of reponses to the survey that indicate no
 * @field { Foriegn Key } _user: the reference to the user, survey belongs to a particular user
 * @field { Date } dateSent: the date the survey was sent
 * @field { Date } lastResponded: the date of the last response from the recipient
 */

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);
