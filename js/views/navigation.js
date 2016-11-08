app.views = app.views || {};

app.views.Navigation = Backbone.View.extend({
	el: "nav",
	events: {
		"click #back": function() { window.history.back() },
		"click #save": function() { this.trigger("nav:save") },
		"click #edit": function() { this.trigger("nav:edit") },
		"click #add":  function() { this.trigger("nav:add") }
	},

	initialize: function() {
		this.template = app.template('#template-nav');
		this.listenTo(app, "screen:change", this.render);
	},

	render: function() {
		this.$el.html(this.template({
			// show buttons defined for current view
			buttonclass: function(button) {
				return _.contains(app.currentScreen.navigation.buttons, button) ? "" : "hidden";
			},
			title: _.result(app.currentScreen.navigation, 'title')
		}))

		return this;
	}
});