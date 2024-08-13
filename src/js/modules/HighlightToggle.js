import { CheckElement } from '../helpers/CheckElement.js';

export const HighlightToggle = (checkboxSelector, inputSelector, outputSelector) => {
  const checkboxes = CheckElement(checkboxSelector);
  const inputDivs = CheckElement(inputSelector);
  const outputDivs = CheckElement(outputSelector);

  if (checkboxes && inputDivs && outputDivs && checkboxes.length && inputDivs.length && outputDivs.length) {
    checkboxes.forEach((checkbox, index) => {
      const inputDiv = inputDivs[index];
      const outputDiv = outputDivs[index];

      const updateHighlighting = () => {
        if (checkbox.checked) {
          inputDiv.classList.add('is-highlight');
          outputDiv.classList.add('is-highlight');
        } else {
          inputDiv.classList.remove('is-highlight');
          outputDiv.classList.remove('is-highlight');
        }
      };

      updateHighlighting();

      checkbox.addEventListener('change', updateHighlighting);
    });
  }
};