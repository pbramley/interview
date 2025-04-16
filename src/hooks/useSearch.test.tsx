// useSearch.test.tsx
import { render, screen, act } from '@testing-library/react';
import { useSearch } from './useSearch';

jest.useFakeTimers();

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
    render(<HookTestComponent query="Alice" />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  test('returns filtered results after timeout', () => {
    render(<HookTestComponent query="Alice" />);
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    expect(screen.queryByTestId('error')).not.toBeInTheDocument();
    expect(screen.getByTestId('results')).toHaveTextContent('Alice');
  });

  test('shows error when no match', () => {
    render(<HookTestComponent query="Zelda" />);
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    expect(screen.getByTestId('error')).toHaveTextContent('No data found');
    expect(screen.queryByTestId('results')).toBeInTheDocument(); // Empty list
  });

  test('shows all data if query is undefined', () => {
    render(<HookTestComponent />);
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByTestId('results').childElementCount).toBe(3);
  });
});