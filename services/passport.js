const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true // @TODO when done with dev make sure to hardcode the ab path of the callback url
    },
    createUser
  )
);

/**
 * createUser: creates a user if not already created and saves to mongodb
 * all params are supplied by a successful return from google oauth
 * @param {string} accessToken: the access token returned from google oauth
 * @param {string} refreshToken: the refresh token returend from google oauth
 * @param {object} profile: the profile of the oauth'ed user in json format
 * @param {function} done: the done callback - takes an err object and a return value of your choice -- we will return the user
 */

async function createUser(accessToken, refreshToken, profile, done) {
  let user;

  try {
    user = await User.findOne({ googleId: profile.id });

    if (user) {
      return done(null, user);
    }

    user = await new User({ googleId: profile.id }).save();
    return done(null, user);
  } catch (e) {
    console.log(e);
  }
}
