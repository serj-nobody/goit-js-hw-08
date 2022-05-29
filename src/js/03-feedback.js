import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = form.querySelector('input');
const message = form.querySelector('textarea');
const storageData = localStorage.getItem('feedback-form-state');
const retrievedData = JSON.parse(storageData);

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

document.addEventListener('DOMContentLoaded', () => {
  if (retrievedData !== null) {
    email.value = `${retrievedData.email}`;
    message.value = `${retrievedData.message}`;
  } else {
    email.value = '';
    message.value = '';
  }
})

function onFormInput(event) {
  const formData = { email: `${email.value}`, message: `${message.value}` }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  email.value = '';
  message.value = '';
  localStorage.clear();
}

