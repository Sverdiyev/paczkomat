import { appState, render } from '../../app.js';
// import renderStage1 from '../../pages/renderStage1.js';
import { phoneIsOk } from '../../validation.js';

function renderPhone() {
  const container = <HTMLDivElement>document.getElementById('container');

  const phoneContainer = document.createElement('div');
  const phoneLabel = document.createElement('label');
  const phoneInput = document.createElement('input');

  phoneLabel.htmlFor = 'phoneNumber';
  phoneLabel.innerText = 'Phone Number:';

  phoneInput.id = 'phoneNumber';
  phoneInput.type = 'tel';
  // phoneInput.pattern = '[+]{1}[0-9]{11,14}';
  phoneInput.maxLength = 9;
  if (appState.phone) phoneInput.value = appState.phone;

  phoneInput.onblur = (e) => {
    const { value } = e.target as HTMLInputElement;
    appState.inputsTouched = true;
    appState.phoneIsValid = phoneIsOk(value);
    appState.phone = value;

    if (appState.codeIsValid && appState.phoneIsValid) {
      console.log('phone and code are valid');
      appState.buttonIsDisabled = false;
    } else {
      console.log('phone and code are NOT valid');
      appState.buttonIsDisabled = true;
    }
    render();
    // renderStage1(appState);
  };

  phoneContainer.appendChild(phoneLabel);
  phoneContainer.appendChild(phoneInput);
  container.appendChild(phoneContainer);
}

export default renderPhone;
