app.views = app.views || {};

app.views.ContactListItem = Backbone.View.extend({
	tagName: 'div',

	initialize: function() {
		this.template = app.template('#template-contact-list-item');

		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
    },

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
    },
});