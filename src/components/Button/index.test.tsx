import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from '.';


describe('Button', () => {
  it('should render the button text', () => {
    render(<Button>Hola</Button>);

    // Assert
    expect(screen.getByText('Hola')).toBe(screen.getByRole('button'))
  })
});