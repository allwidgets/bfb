
/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , user = require('./routes/user')
    , nodes = require('./routes/nodes')
    , seed = require('./routes/seed')
    , http = require('http')
    , path = require('path')
    , passport = require('passport')
    , FacebookStrategy = require('passport-facebook').Strategy;

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser()); 
  app.use(express.session({ secret: 'bfbtwabc3' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  //  app.use(express.errorHandler());
});

var facebookSetting = {
    clientID: '283426731686',
    clientSecret: '977707737983a783d6fea4ba94fe20d4',
    callbackURL: "http://slaskhas.azurewebsites.net/auth/facebook/callback",
		//		passReqToCallback: true
};

if ( process.env.USER == "claesnygren" ) {
    facebookSetting = {
	clientID: '12800296836',
	clientSecret: '3ca61fbc0460a2f82f34eb3868f8e5b8',
	callbackURL: "http://localhost:3000/auth/facebook/callback",
    }
};

passport.use(new FacebookStrategy(facebookSetting,
	function(accessToken, refreshToken, profile, done) {
	    console.log("profile:"+JSON.stringify(profile));
	    var udata={ "facebook_uid": profile.id , "name": profile.displayName , "given_name": profile.name.givenName };
	    	    user.findOrCreate(udata, function(err, user) {
	    		    if (err) { return done(err); }
	    		    done(null, user);
	    		});
	}
	));


passport.serializeUser(function(user, done) {
	console.log("U"+JSON.stringify(user));
	done(null, user);
    });

passport.deserializeUser(function(obj, done) {
	//console.log("DEZ:"+JSON.stringify(obj));
	//	User.findById(id, function(err, user) {
	//		done(err, user);
	//	    });
	done(null, obj);
    });

app.post('/login',
	 passport.authenticate('local', { successRedirect: '/',
		     failureRedirect: '/login' }));

app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.

app.get('/auth/facebook/callback', 
	passport.authenticate('facebook', { successRedirect: '/?',
		    failureRedirect: '/login' }));

app.get('/', routes.index);
app.get('/_=_', routes.index);
app.get('/users', user.list);
app.get('/users/me.json', user.me);
app.get('/nodes/art1.json', nodes.art1 );
app.get('/nodes', seed.list );
app.post('/nodes', nodes.create );
app.delete('/nodes/:id', seed.delete);
app.get('/nodes/:id', seed.show);
app.put('/nodes/:id', seed.update);


app.get('/seed', seed.list);
app.delete('/seed/:id', seed.delete);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

