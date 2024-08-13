/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

import { SetVH } from './modules/SetVH.js';
import BaseHelpers from './helpers/BaseHelpers.js';
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';
import { DropdownMenu } from './modules/DropdownMenu.js';
import PopupManager from './modules/PopupManager.js';
import { InitializePhoneInputs } from './modules/InputMaskTel.js';
import CharCount from './modules/CharCount.js';
import FaqCard from './modules/FaqCard.js';
import CheckboxPayHandler from './modules/CheckboxPayHandler.js';
import { ContentEditableHandler } from './modules/ContentEditableHandler.js';
import { HighlightToggle } from './modules/HighlightToggle.js';
import { EditingToggle } from './modules/EditingToggle.js';
import { ButtonToggle } from './modules/ButtonToggle.js';

// set vh
SetVH();

// check webp/loaded page/device type
BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // header nav mobile toggle
  new HeaderBtnToggle();
  // header mobile dropdown toggle
  DropdownMenu('.js-nav-dropdown-toggle');
  // modal init
  new PopupManager();
  // input mask tel
  InitializePhoneInputs('.js-input-tel');
  // char limit form
  new CharCount('.js-rewriting-textarea-input', '.js-rewriting-limitation');
  // faq card
  new FaqCard();
  // checkbox pay modal
  new CheckboxPayHandler('.js-checkbox-pay', '.js-checkbox-btn');
  // form rewriting
  ContentEditableHandler('.js-rewriting-textarea-input');
  HighlightToggle('.js-rewriting-toggle-highlight', '.js-rewriting-textarea-input', '.js-rewriting-textarea-output');
  EditingToggle('.js-rewriting-toggle-editing', '.js-rewriting-textarea-output');
  ButtonToggle('.js-btn-synonyms', '.js-btn-synonyms-clear');
  ButtonToggle('.js-btn-uniqueness', '.js-btn-uniqueness-clear');
});