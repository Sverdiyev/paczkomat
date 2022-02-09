import { appState, render } from '../../app.js';
function renderButton() {
    const container = document.getElementById('container');
    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    if (appState.inputsTouched === true)
        appState.buttonIsDisabled = !appState.codeIsValid || !appState.phoneIsValid;
    if (appState.inputsTouched !== true)
        appState.buttonIsDisabled = false;
    if (appState.buttonIsDisabled)
        submitButton.disabled = appState.buttonIsDisabled;
    submitButton.onclick = () => {
        if (!appState.codeIsValid && !appState.phoneIsValid) {
            alert('please enter correct phone and code');
            appState.buttonIsDisabled = true;
            submitButton.disabled = appState.buttonIsDisabled;
            render();
            return;
        }
        appState.page = 2;
        render();
    };
    container.appendChild(submitButton);
}
export default renderButton;
