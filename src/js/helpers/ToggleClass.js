export const ToggleClass = (element, className) => {
  if (element) {
    element.classList.toggle(className);
  }
};