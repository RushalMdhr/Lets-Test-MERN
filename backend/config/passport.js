import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import User from '../models/userModel.js';

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    throw new Error('Missing Google OAuth credentials in .env file');
}

passport.use(new GoogleStrategy({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_REDIRECT_URI
},
    async function (accessToken, refreshToken, profile, done) {
        try {
            let user = await User.findOne({ userId: profile.id })
            if (!user) {
                user = await User.create({
                    userId: profile.id,
                    displayName: profile.displayName,
                    avatar: {
                        data: profile.photos[0].value,
                        imgType: 'image/png'
                    },
                    emailId: profile.emails[0].value,
                });
            }
            return done(null, user)
        }
        catch (err) {
            return done(err, null)
        }
    }
));