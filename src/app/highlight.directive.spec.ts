import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HighlightDirective', () => {
  let elementRef: ElementRef;
  let renderer2: Renderer2;

  // beforeEach is a function provided by Jasmine, a behavior-driven development framework for testing JavaScript code. In the context of testing, beforeEach is used to set up a block of code that will run before each individual test (it block). This is useful for setting up common initialization logic that needs to be run before each test case.
  beforeEach(() => {
    elementRef = new ElementRef(document.createElement('div'));
    renderer2 = jasmine.createSpyObj('Renderer2', ['setStyle']);
  });

  // elementRef = new ElementRef(document.createElement('div'));: This line creates a new ElementRef pointing to a newly created div element.
  // renderer2 = jasmine.createSpyObj('Renderer2', ['setStyle']);: This line creates a mock object for Renderer2 with a spy on the setStyle method.
  // jasmine.createSpyObj
  // jasmine.createSpyObj is a function provided by Jasmine that allows you to create an object with spy methods. A spy in Jasmine is a mock function that tracks if and how it was called. This is useful for testing purposes, as it allows you to verify interactions with the object, such as method calls, arguments passed, and the number of times methods are called.
  it('should create an instance', () => {
    const directive = new HighlightDirective(elementRef, renderer2);
    expect(directive).toBeTruthy();
  });
});
