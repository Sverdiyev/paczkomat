import { appState } from './app.js';

export const phoneIsOk = (phone: string) => {
  if (phone.trim() === '') return false;
  if (phone.trim().length !== 9) return false;

  return true;
};

export const codeIsOk = (code: string) => {
  if (code.trim() === '') return false;
  if (code.trim().length !== 4) return false;

  return true;
};

export const reset = () => {
  Object.assign(appState, {
    page: 0,
    phone: '',
    code: '',
    codeIsValid: false,
    phoneIsValid: false,
    inputsTouched: false,
    buttonIsDisabled: false,
  });
};
