import { render, screen, waitFor } from '@testing-library/react';
import PokeList from './PokeList';

describe('PokeList', () => {
    it('should render the Pokemon', async () => {
        render(<PokeList />)

        return waitFor(() => {
            const pikachuName = screen.getByText('pikachu');

            expect(pikachuName).toHaveTextContent('pikachu');
        });
    });
});