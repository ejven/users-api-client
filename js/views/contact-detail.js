app.views = app.views || {};

app.views.ContactDetail = Backbone.View.extend({
	navigation: {
		title: "Contact Detail",
		buttons: ["back", "edit"]
	},

	initialize: function() {
		this.template = app.template('#template-contact-detail');
		this.listenTo(app.navigation, 'nav:edit', function () { app.router.navigate("contact/" + this.model.id + "/edit", {trigger: true}) });
    },

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
    },
});