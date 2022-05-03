import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PokeList from './PokeList';

describe('PokeList Behavior', () => {
  render(<PokeList />)
    it('should only display Pikachu on submit of Pikachu search', async () => {
        

        //wait waitForElementToBeRemoved(screen.getByText('Loading'))
        const loadingEl = screen.getByText('Loading');
        const search = await screen.findByPlaceholderText('search by name');

        const button = screen.getByRole('button');
        
        userEvent.type(search, 'pikachu');

        userEvent.click(button);
 
        const result = await screen.findByText('pikachu');

        expect(result.textContent).toEqual('pikachu');
        expect(loadingEl).toBeInTheDocument;
    })
});
