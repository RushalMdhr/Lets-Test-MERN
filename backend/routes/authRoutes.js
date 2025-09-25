import express from 'express';
import passport from 'passport';
const router = express.Router();

// Start Google login
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// Google callback
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/dashboard'
}));

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

export default router;