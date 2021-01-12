const name = document.querySelector("#name");
const email = document.querySelector("#email");
const text = document.querySelector("#text");

$(function() {
	$(".menu-toggle").click(function() {
		$(".nav-bar").toggleClass('active');
		$("#menuIcon").toggleClass('fa-times');
	});
	$(".header .nav-bar ul li a").click(function() {
		$(".nav-bar").toggleClass('active');
		$("#menuIcon").toggleClass('fa-times');
	});
	$(".btn-1").click(function(){
		$('html,body').animate({
			scrollTop: $("#resume").offset().top="680"},0);
	});
	$('form').submit(function(event) {
		event.preventDefault();

		if ((name.value =='') || (email.value=='') || (text.value=='')) {
			$('.error').css({
				"display": 'block',
			});
			setTimeout( ()=>{
				$('.error').css({"display": 'none',});
			},2000);
		}
		else{
			$('form').hide();
			$('.message').append("Thank you for Contact Me");
		}
		
	});
	$('.tab-container .ul ul li').hover(function() 
		{
			$(this).addClass('active-link');
			$('.activeOne').removeClass('active-link');

		}, function() {
			$(this).removeClass('active-link');
			$('.activeOne').addClass('active-link');

	});
	$(window).on('load',function(){
		$('.loader').hide();
	});
	
});

function showTab (tabNumber) {
	$('.show:first').addClass('hide');
	$('.show:first').removeClass('show');
	$('#tabs-'+tabNumber).addClass('show');
	$('#tabs-'+tabNumber).removeClass('hide');
	$('.active-link:first').removeClass('active-link');
	$('.activeOne:first').removeClass('activeOne');
	$('#tab-'+tabNumber).addClass('active-link');
	$('#tab-'+tabNumber).addClass('activeOne');
}

