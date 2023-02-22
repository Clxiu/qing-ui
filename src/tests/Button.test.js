import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button/Button';

describe('Button', () => {
  it('renders correctly with text', () => {
    render(<Button text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('executes onClick callback when clicked', () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders correctly with type', () => {
    render(<Button text="Click me" type="primary" />);
    expect(screen.getByText('Click me')).toHaveClass('primary');
  });

  it('renders correctly when disabled', () => {
    render(<Button text="Click me" disabled />);
    expect(screen.getByText('Click me')).toBeDisabled();
  });
});
