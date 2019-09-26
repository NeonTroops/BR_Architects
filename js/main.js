// Animate Smooth Scroll for Home
$('#first').on('click', function() {
	const home = $('#showcase').position().top;

	$('html, body').animate({
		scrollTop: home
	}, 900);
});

// Animate Smooth Scroll for Projects
$('#second').on('click', function() {
	const project = $('#projects').position().top;

	$('html, body').animate({
		scrollTop: project
	}, 900);
});

// Animate Smooth Scroll for About
$('#third').on('click', function() {
	const about = $('#about').position().top;

	$('html, body').animate({
		scrollTop: about
	}, 900);
});

// Animate Smooth Scroll for Contact
$('#fourth').on('click', function() {
	const contact = $('#contact').position().top;

	$('html, body').animate({
		scrollTop: contact
	}, 900);
});

// Responsive Menu-Bar 

$('#responsive-menu').click(function () {
	$('.menu').toggleClass('close');
	$('.hide').toggleClass('show');
});


