import { ClickOutsideDirective } from './click-outside.directive';
import { ElementRef } from '@angular/core';

describe('ClickOutsideDirective', () => {
  it('should create an instance', () => {
    const mockElement = new ElementRef(document.createElement('div'));
    const directive = new ClickOutsideDirective(mockElement, document);
    expect(directive).toBeTruthy();
  });
});
