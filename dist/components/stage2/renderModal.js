import { appState } from '../../app.js';
import { makeButton } from './makeButton.js';
const container = document.getElementById('container');
export function renderModal() {
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    const modal = document.createElement('div');
    modal.className = 'modal';
    const info = document.createElement('div');
    info.className = 'info';
    const phoneInfoLabel = document.createElement('p');
    const codeInfoLabel = document.createElement('p');
    phoneInfoLabel.innerText = `Entered phone number: ${appState.phone}`;
    codeInfoLabel.innerText = `Entered code: ${appState.code}`;
    info.appendChild(phoneInfoLabel);
    info.appendChild(codeInfoLabel);
    const actions = document.createElement('div');
    actions.className = 'actions';
    const buttonOver = makeButton('To wszystko na dzis', 0);
    const buttonAgain = makeButton('Odbierz kolejna paczke', 1);
    backdrop.appendChild(modal);
    modal.appendChild(info);
    modal.appendChild(actions);
    actions.appendChild(buttonOver);
    actions.appendChild(buttonAgain);
    container.appendChild(backdrop);
}
