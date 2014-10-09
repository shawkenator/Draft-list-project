var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#blog',
	events: {
		'submit #newpost': 'newPostSubmit'
	},
	initialize: function(){
		this.listenTo(app.posts, 'add', this.addOne);
		this.listenTo(app.posts, 'reset', this.addAll);
	},
	addOne: function(post){
		var view = new app.PostView({
			model: post
		});
		this.$('#posts').append(
			view.render().el
		);
	},
	addAll: function(){
		this.$('posts').empty();
		app.posts.each(this.addOne, this);
	},
	newPostSubmit: function(e){
		e.preventDefault();
		var attributes = {
			title: this.$('[name="title"]').val(),
			content: this.$('[name="content"]').val(),
			location: this.$('[name="location"]').val(),
			rating: this.$('[name="rating"]').val(),
			brand: this.$('[name="brand"]').val(),
			pricea: this.$('[name="pricea"]').val(),
			priceb: this.$('[name="priceb"]').val(),
			pricec: this.$('[name="pricec"]').val(),
			posted: new Date()
		};
		app.posts.create(attributes);
		this.$('[type="text"]').val('');
	}
});