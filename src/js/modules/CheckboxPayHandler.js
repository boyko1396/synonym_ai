export default class CheckboxPayHandler {
  constructor(checkboxSelector, buttonSelector) {
    this.checkboxes = document.querySelectorAll(checkboxSelector);
    this.button = document.querySelector(buttonSelector);

    if (this.checkboxes.length && this.button) {
      this.init();
    }
  }

  init() {
    this.updateButtonState();
    this.checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => this.updateButtonState());
    });
  }

  updateButtonState() {
    const allChecked = Array.from(this.checkboxes).every(checkbox => checkbox.checked);

    if (allChecked) {
      this.button.classList.remove('disabled');
      this.button.removeAttribute('disabled');
    } else {
      this.button.classList.add('disabled');
      this.button.setAttribute('disabled', 'disabled');
    }
  }
}