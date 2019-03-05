/**
 *
 *	Designer / Developer Mode Toggle
 *
 */

// Cookie Toggle
$( document ).ready(function() {
	if ($('.uwds-view-mode').length > 0) {
		var viewMode = getCookie("view-mode");
		if (viewMode != "") {
			// Show saved mode
			$('.uwds-view-mode[data-mode="' + viewMode + '"]').show();
			// Toggle active button class
			$('.uwds-view-mode--toggle a[data-mode="' + viewMode + '"]').addClass('active');
		} else {
			// Show default mode
			$('.uwds-view-mode[data-mode="designer"]').show();
		}
	}
});

// Click Toggle
$('.uwds-view-mode--toggle a').on('click', function() {
	// Toggle active button class
	$('.uwds-view-mode--toggle a').removeClass('active');
	$(this).addClass('active');
	// Hide current mode
	$('.uwds-view-mode').hide();
	// Show selected mode
	$('.uwds-view-mode[data-mode="' + $(this).data('mode') + '"]').show();
	// Set Cookie
	setCookie('view-mode', $(this).data('mode'), 30);
});

/* End Designer / Developer Mode Toggle */


/**
 *
 *	Get / Set Cookies
 *
 */
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/* End Get / Set Cookies */