// Effet menu
//(window).scroll(function () {
	//$(this).scrollTop() > 1 ? $("header").css("margin-top", "5px") : $("header").css("margin-top", "20px")
	// $(this).scrollTop() > 1 ? $("#line").css("display", "none") : $("#line").css("display", "block")
//});//

// Vitesse carrousel
$('.carousel').carousel({
  interval: 2500
})

// Effet citation home page
$("#quote").fadeTo("slow", 1);

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

// Effet machine à écrire formulaire
$('#example1').typeIt({
     strings: 'Comment me contacter ?',
     speed: 70,
     autoStart: false
});

// Grille photo
var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  optionspercentPosition: true,
  itemSelector: '.grid-item'
});

