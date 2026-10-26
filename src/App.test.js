// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DaoFuse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DaoFuse/i);
    expect(titleElement).toBeInTheDocument();
});
