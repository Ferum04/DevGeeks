import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Test Infrastructure Validation', () => {
    it('vitest is running', () => {
        expect(true).toBe(true);
    });

    it('react-testing-library and jsdom are working', () => {
        render(<div data-testid="test-element">Hello Test</div>);
        const element = screen.getByTestId('test-element');
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('Hello Test');
    });
});
