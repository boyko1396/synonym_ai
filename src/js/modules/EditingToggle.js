import { CheckElement } from '../helpers/CheckElement.js';

export const EditingToggle = (checkboxSelector, contentSelector) => {
  const editCheckboxes = CheckElement(checkboxSelector);
  const contentEditableDivs = CheckElement(contentSelector);

  if (editCheckboxes && contentEditableDivs && editCheckboxes.length && contentEditableDivs.length) {
    editCheckboxes.forEach((editCheckbox, index) => {
      const contentEditableDiv = contentEditableDivs[index];

      const updateEditingState = () => {
        if (editCheckbox.checked) {
          contentEditableDiv.setAttribute('data-readonly', 'false');
          contentEditableDiv.setAttribute('contenteditable', 'true');
        } else {
          contentEditableDiv.setAttribute('data-readonly', 'true');
          contentEditableDiv.setAttribute('contenteditable', 'false');
        }
      };

      updateEditingState();
      editCheckbox.addEventListener('change', updateEditingState);
    });
  }
};