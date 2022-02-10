import renderButton from '../components/stage1/renderSubmitButton.js';
import renderCode from '../components/stage1/renderCode.js';
import renderPhone from '../components/stage1/renderPhone.js';
import { makeButton } from '../components/stage2/makeButton.js';

function renderStage1() {
  renderPhone();
  renderCode();
  renderButton();
}

export default renderStage1;
