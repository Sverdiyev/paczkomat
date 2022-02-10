function makeInvalidInput(text: string) {
  const invalidInput = document.createElement('p');
  invalidInput.innerText = text;
  invalidInput.className = 'invalid';
  return invalidInput;
}

export default makeInvalidInput;
