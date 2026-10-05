import { render, screen } from '@testing-library/react';
import Home from '../app/page';

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ status: 'ok', items: ['Configurar Docker', 'Automatizar CI'] }),
  });
});

test('renderiza os itens retornados pela API', async () => {
  render(<Home />);
  expect(await screen.findByText('Configurar Docker')).toBeInTheDocument();
  expect(screen.getByText('Automatizar CI')).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/api/health/'));
});