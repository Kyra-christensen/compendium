import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import PokeList from './PokeList';

describe('PokeList', () => {
    it('should render the Pokemon', async () => {
        render(<PokeList />)
        await waitForElementToBeRemoved(screen.getByText('Loading'));

        await screen.findAllByRole('img', { alt: 'pic of pokemon' });

        await screen.findByLabelText('Name');

        return waitFor(() => {
            const pikachuName = screen.getByText('pikachu');

            expect(pikachuName).toHaveTextContent('pikachu');
        }, { timeout: 5000 });
    });
});