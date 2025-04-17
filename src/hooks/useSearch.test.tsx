// useSearch.test.tsx
import { render, screen, act } from '@testing-library/react';
import { useSearch } from './useSearch';

jest.useFakeTimers();

/**
 * Test component wrapping usage of the {@link useSearch} hook.
 * @param query Query string to be provided for data filtering.
 * @returns 
 */
const HookTestComponent = ({ query }: { query?: string }) => {
  const { data, loading, error } = useSearch({ query });

  return (
    <div>
      {loading && <p data-testid="loading">Loading...</p>}
      {error && <p data-testid="error">{error}</p>}
      {data && (
        <ul data-testid="results">
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

describe('useSearch', () => {
  test('shows loading initially', () => {
    render(<HookTestComponent query="Test User 1" />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  test('returns filtered results after timeout', async () => {
    render(<HookTestComponent query="Test User 1" />);
    await act(async () => {
        jest.advanceTimersByTime(2000);
      });

    screen.logTestingPlaygroundURL();
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    expect(screen.queryByTestId('error')).not.toBeInTheDocument();
    expect(screen.getByTestId('results')).toHaveTextContent('Test User 1');
  });

  test('shows error when no match', async () => {
    render(<HookTestComponent query="Zelda" />);
    await act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    expect(screen.getByTestId('error')).toHaveTextContent('No data found');
    expect(screen.queryByTestId('results')).toBeInTheDocument(); // Empty list
  });

  test('shows all data if query is undefined', async () => {
    render(<HookTestComponent />);
    await act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByTestId('results').childElementCount).toBe(3);
  });
});