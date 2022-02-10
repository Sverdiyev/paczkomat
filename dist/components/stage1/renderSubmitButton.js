import { appState, render } from '../../app.js';
function renderButton() {
    const container = document.getElementById('container');
    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    if (appState.codeIsTouched && appState.phoneIsTouched)
        appState.buttonIsDisabled = !appState.codeIsValid || !appState.phoneIsValid;
    if (!appState.codeIsTouched && !appState.phoneIsTouched)
        appState.buttonIsDisabled = false;
    if (appState.buttonIsDisabled)
        submitButton.disabled = appState.buttonIsDisabled;
    submitButton.onclick = () => {
        if (!appState.codeIsValid && !appState.phoneIsValid) {
            alert('please enter correct phone and code');
            appState.buttonIsDisabled = true;
            appState.codeIsTouched = true;
            appState.phoneIsTouched = true;
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
