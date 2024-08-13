export const CheckElement = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length ? elements : null;
};