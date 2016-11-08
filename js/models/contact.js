app.models = app.models || {};

app.models.Contact = Backbone.Model.extend({
	idAttribute: "_id",

	defaults: {
		name: {
			fist: "",
			second: "",
		},
		cell: "",
		phone: "",
		email: "",
		picture: {
			large: "img/red_hat.png"
		}
	}
});

app.models.Contacts = Backbone.Collection.extend({
	model: app.models.Contact,
	url: app.Config.api_url
});