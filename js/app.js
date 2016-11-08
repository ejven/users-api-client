// main application object
var app = {
	// shorthand for template creation
	template: function(selector) {
		return _.template($(selector).html());
	},

	// show screen(view) and hide all others, trigger event screen:change
	screens: {},
	currentScreen: null,
	showScreen: function(view) {
		_.each(this.screens, function(screen) {
			screen.$el.hide();
		});

		view.$el.show();

		if ( typeof this.screens[view.cid] === "undefined" ) {
			this.screens[view.cid] = view;
		}

		this.currentScreen = view;
		this.trigger("screen:change");
	}
};

// events support for application object
_.extend(app, Backbone.Events);

// start application
$(function(){
	// view for top navigation bar
	app.navigation = new app.views.Navigation;
	// collection holding contacts
	app.contacts = new app.models.Contacts;

	// fetch contacts, than start routing
	app.contacts.fetch({
		reset: true,
		success: function() {
			app.router = new app.Router;
			Backbone.history.start();
		},
		error: function(model, response, options) {
			alert("Sorry, error while retrieving contacts: " + response.statusText);
		}
	});
});
