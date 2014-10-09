var app = app || {};

app.PostView = Backbone.View.extend({
	tagName: 'li',
	template: _.template( $('#post-template').html() ),
	events: {
		'click .delete': 'deletePost'
	},
	initialize: function(){
		this.listenTo(this.model, 'destroy', this.remove);
	},
	render: function(){
		this.$el.html(this.template(
			this.model.toJSON()
		));
		return this;
	},
	deletePost: function(){
		this.model.destroy();
	}
});