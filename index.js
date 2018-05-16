const morgan = require('morgan');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const express = require('express');
const app = express();

const keys = require('./config/keys');

const PORT = process.env.PORT || 5150;

app.use(morgan('combined'));

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(`access token is ${accessToken}`);
      console.log(`refresh token is ${refreshToken}`);
      console.log('profile is ', profile);
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(PORT, () => {
  console.log(`listening on PORT:${PORT}`);
});
