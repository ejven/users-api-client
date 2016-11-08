app.Router = Backbone.Router.extend({
	routes: {
		""					: "contacts",
		"contact(/:id)/edit": "contact-edit",
		"contact/:id"		: "contact"
	},

	contacts: function() {
		// create view of not exists
		if (typeof app.contactList === "undefined") {
			app.contactList = new app.views.ContactList({
				collection: app.contacts,
				el: $('#contact-list')
			});
		}

		app.contactList.render();
		app.showScreen(app.contactList);
	},

	contact: function(id) {
		if (typeof app.contactDetail === "undefined") {
			app.contactDetail = new app.views.ContactDetail({
				el: $('#contact-detail')
			});
		}

		app.contactDetail.model = app.contacts.get(id)
		app.contactDetail.render();
		app.showScreen(app.contactDetail);
	},

	"contact-edit": function(id) {
		if (typeof app.contactEdit === "undefined") {
			app.contactEdit = new app.views.ContactEdit({
				el: $('#contact-edit')
			});
		}

		if (id) {
			app.contactEdit.model = app.contacts.get(id);
		} else {
			app.contactEdit.model = null;
		}

		app.contactEdit.render();
		app.showScreen(app.contactEdit);
	}
});