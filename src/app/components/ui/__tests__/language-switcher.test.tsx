import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageSwitcher } from '../language-switcher';

// Mock i18next
const changeLanguageMock = vi.fn();
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        i18n: {
            changeLanguage: changeLanguageMock,
            language: 'en'
        }
    })
}));

describe('LanguageSwitcher Component', () => {
    it('renders a select trigger (combobox)', () => {
        render(<LanguageSwitcher />);
        const trigger = screen.getByRole('combobox');
        expect(trigger).toBeInTheDocument();
    });
    // Note: More complex tests would click the dropdown and select a language,
    // but Radix UI Select components require complex mock setups in jsdom.
});
