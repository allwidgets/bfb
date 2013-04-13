(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['pieone'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img src=\"/images/pieone.png\">";
  });
templates['paragraph'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>";
  if (stack1 = helpers.data) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.data; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n";
  return buffer;
  });
templates['app_sign_up'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n  <h3 id=\"signUpModalLabel\">Sign up for Uhura</h3>\n</div>\n<div class=\"modal-body\">\n  <form>\n    <div class=\"create-account\">\n      <div class=\"control-group\">\n        <div class=\"controls\">\n          <input type=\"text\" id=\"inputName\" placeholder=\"Name\">\n        </div>\n      </div>\n      <div class=\"control-group\">\n        <div class=\"controls\">\n          <input type=\"text\" id=\"inputEmail\" placeholder=\"Email\">\n        </div>\n      </div>\n      <div class=\"control-group\">\n        <div class=\"controls\">\n          <input type=\"password\" id=\"inputPassword\" placeholder=\"Password\">\n        </div>\n      </div>\n      <div class=\"control-group confirm-password\">\n        <div class=\"controls\">\n          <input type=\"password\" id=\"inputConfirmPassword\" placeholder=\"Confirm Password\">\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button class=\"btn btn-success btn-large btn-create-account\" disabled=\"true\">Create Account</button>\n</div>";
  });
templates['app_login'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n  <h3 id=\"myModalLabel\">Log in to Gunno</h3>\n</div>\n<div class=\"modal-body\">\n  <form>\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <input type=\"text\" id=\"inputLoginEmail\" placeholder=\"Email\">\n      </div>\n    </div>\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <input type=\"password\" id=\"inputLoginPassword\" placeholder=\"Password\">\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button class=\"btn btn-success btn-large btn-log-in\">Log In</button>\n</div>";
  });
templates['article_control'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "\n";
  });
templates['app_navbar_logged_out'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"navbar-inner\">\n	<a href=\"/\">\n		<img alt=\"Welcome to TWA\" class=\"brand\" src=\"http://www.gatesfoundation.org/~/media/GFO/Site/Footer%20Images/bg_bill_melinda_gates_foundation_visitor_center.jpg?mh=69&mw=150\">\n	</a>\n	<ul class=\"nav pull-right\">\n		<li><a class=\"btn-sign-up\" href=\"#\">Sign Up</a></li>\n		<li><a class=\"btn-log-in\" href=\"#\">Log In</a></li>\n		<li><a class=\"btn-help\" href=\"#\">Help</a></li>\n	</ul>\n</div>";
  });
templates['app_container'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"calendar-wrapper\">\nTEST<br>\nTEST<br>\nTEST\n</div>";
  });
templates['app_footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "Copyright © 2013 TWA. All rights reserved.";
  });
templates['book_control'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"static-controllers\">\n</div>\n";
  });
templates['headerh3'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h3>";
  if (stack1 = helpers.data) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.data; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>";
  return buffer;
  });
templates['app_navbar_logged_in'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"navbar-inner\">\n	<a href=\"/\">\n  	<img alt=\"Welcome to TWA\" class=\"brand\" src=\"http://www.gatesfoundation.org/~/media/GFO/Site/Footer%20Images/bg_bill_melinda_gates_foundation_visitor_center.jpg?mh=69&mw=150\">\n	</a>\n	<ul class=\"nav pull-right\">\n		<li><a href=\"#\">About</a></li>\n		<li class=\"divider-vertical\"></li>\n		<li class=\"dropdown\">\n			<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Username <b class=\"caret\"></b></a>\n			<ul class=\"dropdown-menu\">\n			  <li><a href=\"#\">Action</a></li>\n			  <li><a href=\"#\">Another action</a></li>\n			  <li><a href=\"#\">Something else here</a></li>\n			  <li class=\"divider\"></li>\n			  <li><a href=\"#\">Separated link</a></li>\n			</ul>\n		</li>\n	</ul>\n</div>";
  });
})();