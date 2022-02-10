import { appState } from './app.js';
export const phoneIsOk = (phone) => {
    if (phone.trim() === '')
        return false;
    if ((+phone.trim()).toString().length !== 9)
        return false;
    return true;
};
export const codeIsOk = (code) => {
    if (code.trim() === '')
        return false;
    if ((+code.trim()).toString().length !== 4)
        return false;
    return true;
};
export const reset = () => {
    Object.assign(appState, {
        page: 0,
        phone: '',
        code: '',
        codeIsValid: false,
        phoneIsValid: false,
        buttonIsDisabled: false,
        phoneIsTouched: false,
        codeIsTouched: false,
    });
};
