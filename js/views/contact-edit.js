app.views = app.views || {};

app.views.ContactEdit = Backbone.View.extend({
	navigation: {
		title: function() {
			return app.contactEdit.model ? "Contact Edit" : "Add Contact";
		},
		buttons: ["back", "save"]
	},

	initialize: function() {
		this.template = app.template('#template-contact-edit');

		this.listenTo(app.navigation, 'nav:save', this.save);
    },

	render: function() {
		this.$el.html(this.template(this.model ? this.model.toJSON() : (new app.models.Contact).defaults));
		return this;
    },

    save: function() {
    	//fill model
    	var model = {
    		name: {
    			first: this.$el.find('#name\\.first').val(),
    			last: this.$el.find('#name\\.last').val()
    		},
    		cell: this.$el.find('#cell').val(),
    		phone: this.$el.find('#phone').val(),
    		email: this.$el.find('#email').val()
    	};

    	if (this.model) {
			this.model.save(model, {
				wait: true,
				error: function(model, response, options) {
					alert("Sorry, error while saving contact: " + response.statusText);
				}
		    });
    	} else {
    		app.contacts.create(model, {
				wait: true,
				error: function(model, response, options) {
					alert("Sorry, error while saving contact: " + response.statusText);
				}
			});
		}
    }
});