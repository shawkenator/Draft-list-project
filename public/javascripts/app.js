var app = app || {};

$(document).on('ready', function(){
	app.appView = new app.AppView();
	app.posts.reset(bootstrapPosts);
	//app.posts.fetch();
});