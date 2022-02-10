import { appState, render } from '../../app.js';
import { codeIsOk } from '../../helper-functions.js';
import makeInvalidInput from './makeInvalidInput.js';

function renderCode() {
  const container = <HTMLDivElement>document.getElementById('container');

  const codeContainer = document.createElement('div');
  codeContainer.className = 'input-container';
  const codeLabel = document.createElement('label');
  const codeInput = document.createElement('input');

  codeLabel.htmlFor = 'codeNumber';
  codeLabel.innerText = 'Code:';

  codeInput.id = 'codeNumber';
  codeInput.type = 'text';
  // codeInput.pattern = '[0-9]';
  if (appState.code) codeInput.value = appState.code;

  codeInput.maxLength = 4;
  codeInput.placeholder = '4-digit Code';

  codeInput.onchange = (e) => {
    const { value } = e.target as HTMLInputElement;

    appState.codeIsTouched = true;
    appState.code = value;
    appState.codeIsValid = codeIsOk(value);

    if (
      appState.codeIsValid &&
      (appState.phoneIsValid || !appState.phoneIsTouched)
    ) {
      appState.buttonIsDisabled = false;
    } else {
      appState.buttonIsDisabled = true;
    }
    render();
  };

  codeContainer.appendChild(codeLabel);
  codeContainer.appendChild(codeInput);

  container.appendChild(codeContainer);

  if (!appState.codeIsValid && appState.codeIsTouched) {
    console.log('code is not valid');

    codeContainer.classList.add('invalid');
    container.appendChild(makeInvalidInput('Invalid Code'));
  }
}

export default renderCode;
