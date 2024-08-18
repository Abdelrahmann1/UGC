
function show_forget() {
	const forgetpass = new bootstrap.Modal(document.getElementById('forgetpass'), {
		keyboard: false,
		backdrop: 'static'
	});
	forgetpass.show();
}
const loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'), {
    keyboard: false,
    backdrop: 'static'
});
// loadingModal.show();
// loadingModal.hide();

$(function() {
	$(".btn").click(function() {
	  $(".form-signin").toggleClass("form-signin-left");
	  $(".form-signup").toggleClass("form-signup-left");
	  $(".frame").toggleClass("frame-long");
	  $(".signup-inactive").toggleClass("signup-active");
	  $(".signin-active").toggleClass("signin-inactive");
	  $(".forgot").toggleClass("forgot-left");   
	  $(this).removeClass("idle").addClass("active");
	});
  });
