import { appState, render } from '../../app.js';
import { reset } from '../../helper-functions.js';
export function makeButton(text, goToPage) {
    const button = document.createElement('button');
    button.innerText = text;
    button.onclick = () => {
        reset();
        appState.page = goToPage;
        render();
    };
    return button;
}
