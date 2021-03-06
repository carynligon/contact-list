import $ from 'jquery';
import Backbone from 'backbone';
import settings from './settings';
import session from './models/username';
import router from './router';

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  console.log('intercepted');
  if (session.authtoken) {
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + session.authtoken);
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);

  }
});

Backbone.history.start();

if (!session.username) {
  router.navigate('login', {trigger: true});
}
