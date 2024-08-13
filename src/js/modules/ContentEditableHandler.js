import { CheckElement } from '../helpers/CheckElement.js';

export const ContentEditableHandler = (selector) => {
  const contentEditableDivs = CheckElement(selector);

  if (contentEditableDivs) {
    contentEditableDivs.forEach((contentEditableDiv) => {
      contentEditableDiv.addEventListener('input', function() {
        if (this.textContent.trim() === '') {
          this.classList.add('empty');
        } else {
          this.classList.remove('empty');
        }
      });

      if (contentEditableDiv.textContent.trim() === '') {
        contentEditableDiv.classList.add('empty');
      } else {
        contentEditableDiv.classList.remove('empty');
      }
    });
  }
};