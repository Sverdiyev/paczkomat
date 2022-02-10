import { appState, render } from '../../app.js';
// import renderStage1 from '../../pages/renderStage1.js';
import { phoneIsOk } from '../../helper-functions.js';
import makeInvalidInput from './makeInvalidInput.js';
function renderPhone() {
    const container = document.getElementById('container');
    const phoneContainer = document.createElement('div');
    phoneContainer.className = 'input-container';
    const phoneLabel = document.createElement('label');
    const phoneInput = document.createElement('input');
    phoneLabel.htmlFor = 'phoneNumber';
    phoneLabel.innerText = 'Phone Number:';
    phoneInput.id = 'phoneNumber';
    phoneInput.type = 'tel';
    // phoneInput.pattern = '[+]{1}[0-9]{11,14}';
    phoneInput.maxLength = 9;
    phoneInput.placeholder = 'Phone Number';
    if (appState.phone)
        phoneInput.value = appState.phone;
    phoneInput.onblur = (e) => {
        const { value } = e.target;
        appState.phoneIsTouched = true;
        appState.phoneIsValid = phoneIsOk(value);
        appState.phone = value;
        if (appState.phoneIsValid &&
            (appState.codeIsValid || !appState.codeIsTouched)) {
            appState.buttonIsDisabled = false;
        }
        else {
            appState.buttonIsDisabled = true;
        }
        render();
    };
    phoneContainer.appendChild(phoneLabel);
    phoneContainer.appendChild(phoneInput);
    container.appendChild(phoneContainer);
    if (!appState.phoneIsValid && appState.phoneIsTouched) {
        console.log('phone is not valid');
        phoneContainer.classList.add('invalid');
        container.appendChild(makeInvalidInput('Invalid Phone Number'));
    }
}
export default renderPhone;
