import { getByText, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Testing', () => {
  it('should render a list of pokemon', async () => {
    render(<App />);
    const pokemonList = await screen.findAllByLabelText('pokemon card');
  });

  it('should be able to search for a pokemon', () => {
    render(<App />);
    const searchBox = screen.getByPlaceholderText('search for a pokemon');

    userEvent.type(searchBox, 'pikachu');

    return waitFor(() => {
      const pikachu = screen.getByText(/pikachu/i);
      expect(pikachu).toBeInTheDocument();
    });
  });
});
// netlify
