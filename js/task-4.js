const formEl = document.querySelector('.js-login-form');

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue.length === 0 || passwordValue.length === 0) {
    alert('All form fields must be filled in');
    return;
  }
  const formData = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(formData);
  e.currentTarget.reset();
});
