import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };
const mockToggleModal= jest.fn();
  afterEach(cleanup)



  describe('Nav component', () => {
    // baseline test
    render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />);
  
    // snapshot test
    it('matches snapshot', () => {
      const { asFragment } = render();
      // assert value comparison
      <Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />
    });
  })

  describe('Click Event', () => {
    it('calls onClose handler', () => {
      // Arrange: Render Modal
      // Act: Simulate click event
      // Assert: Expected matcher

      const { getByText } = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />);
      fireEvent.click(getByText('Close this modal'));
      expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
  })  