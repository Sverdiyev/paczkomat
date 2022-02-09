const container = <HTMLDivElement>document.getElementById('container');
import renderStage0 from './pages/renderStage0.js';
import renderStage1 from './pages/renderStage1.js';
import renderStage2 from './pages/renderStage2.js';

export const appState: appStateType = {
  page: 0,
  phone: '',
  code: '',
  codeIsValid: false,
  phoneIsValid: false,
  inputsTouched: false,
  buttonIsDisabled: false,
};

export function render() {
  container.textContent = '';

  if (appState.page === 0) renderStage0();

  if (appState.page === 1) renderStage1();
  if (appState.page === 2) renderStage2();
}

render();
