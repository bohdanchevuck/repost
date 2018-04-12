src="form.js"
function checkEmail() {
  var emailAdress = document.getElementById('checkEmail').value;
  var validEmail =  /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
//початок від однієї букви до нескінченості, - + _, @, від онднієї букви до нескінченості
if (validEmail.test(emailAdress) === false) {  
      var error = generateError('Поле повинне містити символ @ і мати коректне доменне імя')
      email.parentElement.insertBefore(error, email)
      email.style.background = '#f9e7d9'
      return false;
  }
  return true;
}