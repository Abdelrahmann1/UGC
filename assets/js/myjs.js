var radius = 240; // how big of the radius
var autoRotate = true; // auto rotate or not
var rotateSpeed = -60; // unit: seconds/360 degrees
var imgWidth = 120; // width of images (unit: px)
var imgHeight = 170; // height of images (unit: px)

// Link of background music - set 'null' if you dont want to play background music
var bgMusicURL = 'https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a';
var bgMusicControls = true; // Show UI music control

/*
     NOTE:
       + imgWidth, imgHeight will work for video
       + if imgWidth, imgHeight too small, play/pause button in <video> will be hidden
       + Music link are taken from: https://hoangtran0410.github.io/Visualyze-design-your-own-/?theme=HauMaster&playlist=1&song=1&background=28
       + Custom from code in tiktok video  https://www.facebook.com/J2TEAM.ManhTuan/videos/1353367338135935/
*/


// ===================== start =======================
// animation start after 1000 miliseconds
setTimeout(init, 1000);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid]; // combine 2 arrays

// Size of images
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// Size of ground - depend on radius
var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
}

var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

// auto spin
if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// add background music
if (bgMusicURL) {
  document.getElementById('music-container').innerHTML += `
<audio src="${bgMusicURL}" ${bgMusicControls? 'controls': ''} autoplay loop>    
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>
`;
}

// setup events
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

odrag.addEventListener('wheel', function(e) {
	e = e || window.event;
	var d = e.wheelDelta / 20 || -e.detail;
	radius += d;
	init(1);
  
	// Prevent the default behavior to avoid scrolling the page
	e.preventDefault();
  }, { passive: false });
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
  
  $(function() {
	// $(".btn-signup").click(function() {
	// // $(".nav").toggleClass("nav-up");
	// $(".form-signup-left").toggleClass("form-signup-down");
	// $(".success").toggleClass("success-left"); 
	// $(".frame").toggleClass("frame-short");
	// });
  });
  
//   $(function() {
// 	$(".btn-signin").click(function() {
// 	$(".btn-animate").toggleClass("btn-animate-grow");
// 	$(".welcome").toggleClass("welcome-left");
// 	$(".cover-photo").toggleClass("cover-photo-down");
// 	$(".frame").toggleClass("frame-short");
// 	$(".profile-photo").toggleClass("profile-photo-down");
// 	$(".btn-goback").toggleClass("btn-goback-up");
// 	$(".forgot").toggleClass("forgot-fade");
// 	});
//   });