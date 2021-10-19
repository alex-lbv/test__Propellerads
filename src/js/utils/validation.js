import {EMAIL_REGEXP, formRegistration, formRegistrationInput, popupElement, video} from '../const.js';
import {closeFullScreen} from './toggle-full-screen.js';

export let isRegistered = false;

export const validation = () => {
  formRegistration.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (formRegistrationInput.validity) {
      validationSuccess();
    }
  })
};

const validateEmail = (value) => {
  return EMAIL_REGEXP.test(value);
}

const updateInput = () => {
  validateEmail(formRegistrationInput.value)
    ? formRegistrationInput.style.border = '2px solid green'
    : formRegistrationInput.style.border = '2px solid red';
}

const validationSuccess = () => {
  isRegistered = true;
  popupElement.remove();
  video.play();
};

export const registration = () => {
  setTimeout(() => {
    video.pause();
    closeFullScreen();
    openPopup();
    validation();
  }, 5000);
};

const openPopup = () => {
  popupElement.classList.add('opened');

  formRegistrationInput.addEventListener('input', updateInput);
};
