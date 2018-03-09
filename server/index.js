require('dotenv').config()
const express = require('express'),
     session = require('express-session'),
     passport = require('passport'),
     Auth0Strategy = require('passport-auth0'),
     massive = require('massive'),
     bodyParser = require('body-parser'),
     productsController = require('./controllers/products_controller');


     

const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING).then( db => {
    app.set( 'db', db);
})


const app = express();
app.use(session({
    secret:'secret8979789',
    resave: false,
    saveUninitialized: true
}))
app.use( passport.initialize() );
app.use( passport.session() );
passport.use( new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL
  
}, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db')
    db.find_user([profile.id]).then( users => {
        if(!users[0]) {
            db.create_user([profile.id, profile.name.givenName, profile.name.familyName]).then(userCreated => {
                done(null, userCreated[0].user_id)
            })
        }else{
            done(null, users[0].user_id)
        }
    })
}))

passport.serializeUser( (id, done) =>{
    done(null, id)
})

passport.deserializeUser( (id, done) => {
    app.get('db').find_session_user([id]).then( user => {
        done(null, user[0]);
    })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/home',
    failureRedirect: 'http://localhost:3000',
}))

app.get('/auth/me', (req, res) => {
 
    if(req.user) {
        res.status(200).send(req.user)
    }else{
        res.status(401).send('didnt work')
    }
})

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect('http://localhost:3000/')
})

app.get('/cameras', productsController.getAll);


app.listen( SERVER_PORT, () => {console.log(`Server listening on port ${SERVER_PORT}`)});