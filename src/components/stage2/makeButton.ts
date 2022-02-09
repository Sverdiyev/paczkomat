import { appState, render } from '../../app.js';
import { reset } from '../../helper-functions.js';

export function makeButton(text: string, goToPage: 0 | 1) {
  const button = document.createElement('button');
  button.innerText = text;
  button.onclick = () => {
    reset();
    appState.page = goToPage;
    render();
  };
  return button;
}
