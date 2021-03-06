const container = document.getElementById('container');
import renderStage0 from './pages/renderStage0.js';
import renderStage1 from './pages/renderStage1.js';
import renderStage2 from './pages/renderStage2.js';
const storedAppState = localStorage.getItem('appState');
export const appState = storedAppState
    ? JSON.parse(storedAppState)
    : {
        page: 0,
        phone: '',
        code: '',
        codeIsValid: false,
        phoneIsValid: false,
        buttonIsDisabled: false,
        phoneIsTouched: false,
        codeIsTouched: false,
    };
export function render() {
    localStorage.setItem('appState', JSON.stringify(appState));
    // if (storedAppState) {
    //   Object.assign(appState, JSON.parse(storedAppState));
    // }
    // Object.assign(appState, JSON.parse(storedAppState));
    container.textContent = '';
    if (appState.page === 0)
        renderStage0();
    if (appState.page === 1)
        renderStage1();
    if (appState.page === 2)
        renderStage2();
}
render();
