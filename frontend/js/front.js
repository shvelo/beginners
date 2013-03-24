(function() {
   var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
   po.src = 'https://apis.google.com/js/client:plusone.js?onload=render';
   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

function signinCallback(authResult) {
	return;
  if (authResult['code']) {
  	document.getElementById('log_gplus_token').value = authResult['code'];
  	document.getElementById('signin').submit();
  } else if (authResult['error']) {
  }
}

function signupCallback(authResult) {
	return;
  if (authResult['code']) {
  	document.getElementById('reg_gplus_token').value = authResult['code'];
  	document.getElementById('signup').submit();
  } else if (authResult['error']) {
  }
}

function render() {
    gapi.signin.render('plusLogin', {
      'callback': 'signinCallback',
      'clientid': '339844422377.apps.googleusercontent.com',
      'cookiepolicy': 'single_host_origin',
      'accesstype' : 'offline',
      'requestvisibleactions': 'http://schemas.google.com/AddActivity',
      'scope': 'https://www.googleapis.com/auth/plus.login'
    });
}