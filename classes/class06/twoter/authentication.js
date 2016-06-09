var FacebookStrategy = require('passport-facebook').Strategy;

// Serialize and deserialize.
passport.serializeUser(function(user, done) {
done(null, user);
});
passport.deserializeUser(function(obj, done) {
done(null, obj);
});

// Config
passport.use(new FacebookStrategy({
 clientID: process.env.TWOTER_APP_ID,
 clientSecret: process.env.TWOTER_APP_SECRET,
 callbackURL: "http://twoter2.herokuapp.com/auth/facebook/callback"
},
function (accessToken, refreshToken, profile, done) {
 process.nextTick(function () {
   return done(null, profile);
 });
}
));