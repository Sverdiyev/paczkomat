import { appState, render } from '../../app.js';
// import renderStage1 from '../../pages/renderStage1.js';
import { codeIsOk } from '../../validation.js';

function renderCode() {
  const container = <HTMLDivElement>document.getElementById('container');

  const codeContainer = document.createElement('div');
  const codeLabel = document.createElement('label');
  const codeInput = document.createElement('input');

  codeLabel.htmlFor = 'codeNumber';
  codeLabel.innerText = 'Code:';

  codeInput.id = 'codeNumber';
  codeInput.type = 'text';
  // codeInput.pattern = '[0-9]';
  if (appState.code) codeInput.value = appState.code;

  codeInput.maxLength = 4;

  codeInput.onblur = (e) => {
    const { value } = e.target as HTMLInputElement;

    console.log('inside blur');
    appState.inputsTouched = true;
    appState.code = value;
    appState.codeIsValid = codeIsOk(value);

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

  codeContainer.appendChild(codeLabel);
  codeContainer.appendChild(codeInput);

  container.appendChild(codeContainer);
}

export default renderCode;
