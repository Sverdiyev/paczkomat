import { appState, render } from '../../app.js';
import { codeIsOk } from '../../helper-functions.js';

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

  codeInput.onchange = (e) => {
    const { value } = e.target as HTMLInputElement;

    appState.inputsTouched = true;
    appState.code = value;
    appState.codeIsValid = codeIsOk(value);

    if (appState.codeIsValid && appState.phoneIsValid) {
      appState.buttonIsDisabled = false;
    } else {
      appState.buttonIsDisabled = true;
    }
    render();
  };

  codeContainer.appendChild(codeLabel);
  codeContainer.appendChild(codeInput);

  container.appendChild(codeContainer);
}

export default renderCode;
