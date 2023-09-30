import Modal from './modal';

import { fireEvent } from '@testing-library/dom';
import { describe, beforeEach, afterEach, test, expect } from '@jest/globals'

describe('Modal Component', () => {
  let modal: any;

  beforeEach(() => {
    modal = new Modal('Test Title', 'Test Content');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('modal should be hidden initially', () => {
    expect(modal).toMatchSnapshot();
    expect(modal.modalElement.style.display).toBe('none');
  });

  test('modal should show when open() is called', () => {
    modal.open();
    expect(modal).toMatchSnapshot();
    expect(modal.modalElement.style.display).toBe('block');
  });

  test('modal should hide when close() is called', () => {
    modal.open();
    modal.close();
    expect(modal.modalElement.style.display).toBe('none');
  });

  test('close button should call close() when clicked', () => {
    modal.open();

    const closeButton = modal.modalElement.querySelector('.close-btn');
    fireEvent.click(closeButton);

    expect(modal.modalElement.style.display).toBe('none');
  });

  test('modal should close when clicking outside the modal content', () => {
    modal.open();

    const modalContent = modal.modalElement.querySelector('.modal-content');
    fireEvent.click(modalContent); // Simulate click inside modal content

    expect(modal.modalElement.style.display).toBe('block');
  });
});
