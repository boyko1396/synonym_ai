import { CheckElement } from '../helpers/CheckElement.js';

export const DropdownMenu = (toggleSelector, activeClass = 'is-show') => {
  const dropdownToggles = document.querySelectorAll(toggleSelector);

  if (dropdownToggles.length > 0) {
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();

        const isActive = this.classList.contains(activeClass);

        dropdownToggles.forEach(item => item.classList.remove(activeClass));

        if (!isActive) {
          this.classList.add(activeClass);
        }
      });
    });
  }
};