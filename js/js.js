// Fil Instragram
var userFeed = new Instafeed({
	get: 'user',
	userId: '1188398327',
	clientId: '1bd87e6cc22e47cfad37d35273e35634',
	accessToken: '1188398327.1677ed0.ca6dd113fa6143f4a6ff0aec79dfefab',
	resolution: 'standard_resolution',
	template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
	sortBy: 'most-recent',
	limit: 6,
	links: false
});
userFeed.run();

// Grille photo
var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  optionspercentPosition: true,
  itemSelector: '.grid-item'
});