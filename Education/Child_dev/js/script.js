var today = new Date();
var year = today.getFullYear();
var est = new Date('May 11, 2001 21:35:00')
var dif = today.getTime() - est.getTime();
dif = (dif /31556900000);
var elMsg = document.getElementById('js-message-footer');
elMsg.textContent = "We are already " +Math.floor(dif)+" years in business!" ;