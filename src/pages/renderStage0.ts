import { appState, render } from '../app.js';

function renderStage0() {
  const container = <HTMLDivElement>document.getElementById('container');
  const startButton = document.createElement('button');
  startButton.innerText = 'Odbierz Paczke';
  startButton.className = 'start-button';
  startButton.onclick = () => {
    appState.page = 1;
    render();
  };

  container.appendChild(startButton);
}

export default renderStage0;
