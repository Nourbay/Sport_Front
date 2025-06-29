import { ClickOutsideDirective } from './click-outside.directive';
<<<<<<< HEAD

describe('ClickOutsideDirective', () => {
  it('should create an instance', () => {
    const directive = new ClickOutsideDirective();
=======
import { ElementRef } from '@angular/core';

describe('ClickOutsideDirective', () => {
  it('should create an instance', () => {
    const mockElement = new ElementRef(document.createElement('div'));
    const directive = new ClickOutsideDirective(mockElement, document);
>>>>>>> matchFront
    expect(directive).toBeTruthy();
  });
});
