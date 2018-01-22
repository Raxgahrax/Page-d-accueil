// Init function called at the end of the loading of each components
function init() {

  // Background managment with the plugin backstretch
  // Get 1 images from the var.js array of images for the background
  $("body").backstretch("images/"+images[Math.round(Math.random()*(images.length-1))],{fade: 300});

  // Scroll managment for each pannel (smarter screen and after insert of multiple cff informations)
  // Use the plugin mCustomScrollbar.jquery.min.js
  $(".left-pannel, .mid-pannel, .right-pannel").mCustomScrollbar({
    scrollInertia: 300
  });

  // Call of all the function init of each components and size adapter
  initSearch();;

  // Play the loading animation
  tlLoading.play();

  // If all the images are loaded, pause the animation of the loading and call the display timeline
  $("img").on('load',function() {
    tlLoading.pause();
    tlDisplay.play();
  })
  
}

// On ready
$(document).ready(function() {
  init();
  setTimeout(function() {
    initSize();
  }, 2500)
});

// For each resize
$(window).resize(function() {
  initSize();
})
