import { renderHook, waitFor } from '@testing-library/react';
import { useEldenRingShields } from '@/hooks/useEldenRingShields';

const mockShields = [
  { id: 's1', category: 'Small Shield' },
  { id: 's2', category: 'Small Shield' },
];

const mockCategories = [
  { id: 's1', category: 'Small Shield' },
  { id: 's2', category: 'Greatshield' },
];

describe('useEldenRingShields', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true, data: mockCategories }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true, data: mockShields, total: 4 }),
      });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns paginated shields data', async () => {
    const { result } = renderHook(() =>
      useEldenRingShields({ page: 1, limit: 2 })
    );

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.shields).toEqual(mockShields);
    expect(result.current.pagination).toEqual({
      currentPage: 2,
      totalItems: 4,
      itemsPerPage: 2,
      totalPages: 2,
    });
  });
});
