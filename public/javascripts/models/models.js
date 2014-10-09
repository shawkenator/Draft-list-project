var app = app || {};

app.PostModel = Backbone.Model.extend({
	idAttribute: '_id',
	defaults: {
		title: '',
		content: '',
		location: '',
		rating: '',
		brand: '',
		pricea: '',
		priceb: '',
		pricec: '',
		posted: ''
	}
});

app.PostCollection = Backbone.Collection.extend({
	model: app.PostModel,
	url: '/api'
})

app.posts = new app.PostCollection();