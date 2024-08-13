import { CheckElement } from '../helpers/CheckElement.js';
import { ToggleClass } from '../helpers/ToggleClass.js';

export const ButtonToggle = (btnSelector, clearBtnSelector, toggleClassName = 'is-hide') => {
  const btns = CheckElement(btnSelector);
  const clearBtns = CheckElement(clearBtnSelector);

  if (btns && clearBtns && btns.length === clearBtns.length) {
    btns.forEach((btn, index) => {
      const clearBtn = clearBtns[index];

      if (btn && clearBtn) {
        const toggleVisibility = () => {
          ToggleClass(btn, toggleClassName);
          ToggleClass(clearBtn, toggleClassName);
        };

        btn.addEventListener('click', toggleVisibility);
        clearBtn.addEventListener('click', toggleVisibility);
      }
    });
  }
};