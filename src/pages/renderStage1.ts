import renderButton from '../components/stage1/renderSubmitButton.js';
import renderCode from '../components/stage1/renderCode.js';
import renderPhone from '../components/stage1/renderPhone.js';
import { makeButton } from '../components/stage2/makeButton.js';

const container = <HTMLDivElement>document.getElementById('container');

function renderStage1() {
  renderPhone();
  renderCode();
  renderButton();

  container.appendChild(makeButton('return to page 0', 0));
}

export default renderStage1;
