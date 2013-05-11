(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['admin_base'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<h3>Admin</h3>\n<div class=\"tabbable\"> <!-- Only required for left/right tabs -->\n  <ul class=\"nav nav-tabs\">\n    <li class=\"active\"><a href=\"#tab1\" data-toggle=\"tab\">Nodes</a></li>\n    <li><a href=\"#tab2\" data-toggle=\"tab\">New Node</a></li>\n    <li id=\"edit_tab\" style=\"display:none\"><a href=\"#tab3\" data-toggle=\"tab\">Edit Node</a></li>\n  </ul>\n  <div class=\"tab-content\">\n    <div class=\"tab-pane active\" id=\"tab1\">\n    <ul class=\"unstyled noderow_list\">\n    </ul>\n    </div>\n    <div class=\"tab-pane\" id=\"tab2\">\n\n     <form id=\"new_node_form\" class=\"form-horizontal\">\n       <div class=\"control-group\">\n         <label class=\"control-label\" for=\"template\">Template</label>\n         <div class=\"controls\">\n	   <select name=\"Template\">\n		<option value=\"paragraph\" >Paragraph</option>\n	     	<option value=\"title\">Title</option>\n	     	<option value=\"image\" >Image</option>\n	     	<option value=\"article\" >Article</option>\n  	   </select>\n         </div>\n       </div>\n       <div class=\"control-group\">\n         <label class=\"control-label\" for=\"template\">JSON encoded Data</label>\n         <div class=\"controls\">\n           <textarea name=\"Data\" placeholder=\"\"></textarea>\n         </div>\n       </div>\n       <div class=\"control-group\">\n         <label class=\"control-label\" for=\"template\">Parent</label>\n         <div class=\"controls\">\n           <input name=\"Parent\" placeholder=\"\">\n         </div>\n       </div>\n       <div class=\"control-group\">\n         <label class=\"control-label\" for=\"template\">Template</label>\n         <div class=\"controls\">\n           <input name=\"Template\" placeholder=\"\">\n         </div>\n       </div>\n       <div class=\"form-actions\">\n         <button id=\"save_new_node\" type=\"submit\" class=\"save_new_node btn btn-primary\">Save changes</button>\n       </div>\n     </form>\n\n    </div>\n    <div class=\"tab-pane\" id=\"tab3\">\n     <form id=\"edit_node_form\" class=\"form-horizontal\">\n       <input type=\"hidden\" id=\"edit_node_rowkey\" name=\"RowKey\">\n       <div class=\"control-group\">\n         <label class=\"control-label\" for=\"template\">Key</label>\n         <div class=\"controls\">\n           <div id=\"edit_disp_rowkey\" ></div>\n         </div>\n       </div>\n       <div class=\"control-group\">\n         <label class=\"control-label\" for=\"template\">Template</label>\n         <div class=\"controls\">\n	   <select id=\"edit_template\" name=\"Template\">\n		<option value=\"paragraph\">Paragraph</option>\n	     	<option value=\"title\" >Title</option>\n	     	<option value=\"image\" >image</option>\n	     	<option value=\"article\" >Article</option>\n  	   </select>\n         </div>\n       </div>\n       <div class=\"control-group\">\n         <label class=\"control-label\" for=\"template\">JSON encoded Data</label>\n         <div class=\"controls\">\n           <textarea id=\"edit_data\" name=\"Data\" ></textarea>\n         </div>\n       </div>\n       <div class=\"control-group\">\n         <label class=\"control-label\" for=\"template\">Parent</label>\n         <div class=\"controls\">\n           <input id=\"edit_parent\" name=\"Parent\" placeholder=\"\">\n         </div>\n       </div>\n       <div class=\"control-group\">\n         <label class=\"control-label\" for=\"template\">Nodeorder of subnodes</label>\n         <div class=\"controls\">\n           <input id=\"edit_nodeorder\" name=\"NodeOrder\" placeholder=\"[]\">\n         </div>\n       </div>\n       <div class=\"control-group\">\n         <label class=\"control-label\" for=\"template\">Template</label>\n         <div class=\"controls\">\n           <input id=\"edit_template\" name=\"Template\" placeholder=\"\">\n         </div>\n       </div>\n       <div class=\"form-actions\">\n         <button id=\"save_edit_node\" type=\"submit\" class=\"save_edit_node btn btn-primary\">Save changes</button>\n       </div>\n     </form>\n\n    </div>\n  </div>\n</div>\n";
  });
templates['admin_base_row'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "    <div class=\"admfld fld1\">";
  if (stack1 = helpers.RowKey) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.RowKey; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <div class=\"admfld fld2\">";
  if (stack1 = helpers.Template) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Template; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <div node=\"";
  if (stack1 = helpers.RowKey) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.RowKey; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"node_del\">Delete</div>\n";
  return buffer;
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
templates['app_login'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n  <h3 id=\"myModalLabel\">Log in to Gunno</h3>\n</div>\n<div class=\"modal-body\">\n  <form>\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <input type=\"text\" id=\"inputLoginEmail\" placeholder=\"Email\">\n      </div>\n    </div>\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <input type=\"password\" id=\"inputLoginPassword\" placeholder=\"Password\">\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button class=\"btn btn-success btn-large btn-log-in\">Log In</button>\n</div>";
  });
templates['app_navbar_logged_in'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"navbar-inner\">\n	<a href=\"/\">\n  	<img alt=\"Welcome to TWA\" class=\"brand\" src=\"http://www.gatesfoundation.org/~/media/GFO/Site/Footer%20Images/bg_bill_melinda_gates_foundation_visitor_center.jpg?mh=69&mw=150\">\n	</a>\n	<ul class=\"nav pull-right\">\n		<li><a href=\"#\">About</a></li>\n		<li class=\"divider-vertical\"></li>\n		<li class=\"dropdown\">\n			<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><span id=\"given_name\">";
  if (stack1 = helpers.given_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.given_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> <b class=\"caret\"></b></a>\n			<ul class=\"dropdown-menu\">\n			  <li><a href=\"#\">Action</a></li>\n			  <li><a href=\"#\">Another action</a></li>\n			  <li><a href=\"#\">Something else here</a></li>\n			  <li class=\"divider\"></li>\n			  <li><a href=\"#\">Separated link</a></li>\n			</ul>\n		</li>\n	</ul>\n</div>";
  return buffer;
  });
templates['app_navbar_logged_out'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"navbar-inner\">\n	<a href=\"/\">\n		<img alt=\"Welcome to TWA\" class=\"brand\" src=\"http://www.gatesfoundation.org/~/media/GFO/Site/Footer%20Images/bg_bill_melinda_gates_foundation_visitor_center.jpg?mh=69&mw=150\">\n	</a>\n	<ul class=\"nav pull-right\">\n		<li><a class=\"btn-sign-up\" href=\"#\">Sign Up</a></li>\n		<li><a class=\"btn-log-in\" href=\"#\">Log In</a></li>\n		<li><a class=\"btn-help\" href=\"#\">Help</a></li>\n	</ul>\n</div>";
  });
templates['app_sign_up'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n  <h3 id=\"signUpModalLabel\">Sign up for Uhura</h3>\n</div>\n<div class=\"modal-body\">\n  <form>\n    <div class=\"create-account\">\n      <div class=\"control-group\">\n        <div class=\"controls\">\n          <input type=\"text\" id=\"inputName\" placeholder=\"Name\">\n        </div>\n      </div>\n      <div class=\"control-group\">\n        <div class=\"controls\">\n          <input type=\"text\" id=\"inputEmail\" placeholder=\"Email\">\n        </div>\n      </div>\n      <div class=\"control-group\">\n        <div class=\"controls\">\n          <input type=\"password\" id=\"inputPassword\" placeholder=\"Password\">\n        </div>\n      </div>\n      <div class=\"control-group confirm-password\">\n        <div class=\"controls\">\n          <input type=\"password\" id=\"inputConfirmPassword\" placeholder=\"Confirm Password\">\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button class=\"btn btn-success btn-large btn-create-account\" disabled=\"true\">Create Account</button>\n</div>";
  });
templates['article_control'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "\n";
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
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>";
  return buffer;
  });
templates['paragraph'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<p>";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n";
  return buffer;
  });
templates['pieone'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img src=\"/images/pieone.png\">";
  });
})();