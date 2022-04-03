$(document).ready(function () {
  $('#navbar').load('../include/navbar.html');
  $('#donateModalLoader').load('../include/donate-modal.html');
  var pageTitle = $('title').text();
  $('#section-title').text(pageTitle);
  getContent();
});
