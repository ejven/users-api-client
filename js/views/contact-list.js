app.views = app.views || {};

app.views.ContactList = Backbone.View.extend({
	navigation: {
		title: "Contacts",
		buttons: ["add"]
	},

	initialize: function() {
		this.listenTo(this.collection, 'reset', this.render);
		this.listenTo(app.navigation, 'nav:add', function () { app.router.navigate("contact/edit", {trigger: true}) });
    },

	render: function() {
		var self = this;
		this.collection.each(function(contact){
			var view = new app.views.ContactListItem({model: contact});

			var el = view.render().el;
			self.$el.append(el);
		});
		return this;
	}
});