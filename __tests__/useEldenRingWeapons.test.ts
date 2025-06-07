import { renderHook, waitFor } from '@testing-library/react';
import { useEldenRingWeapons } from '@/hooks/useEldenRingWeapons';

const mockWeapons = [
  { id: 'w1', category: 'Sword' },
  { id: 'w2', category: 'Sword' },
];

const mockCategories = [
  { id: 'w1', category: 'Sword' },
  { id: 'w2', category: 'Axe' },
];

describe('useEldenRingWeapons', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true, data: mockCategories }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true, data: mockWeapons, total: 4 }),
      });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns paginated weapons data', async () => {
    const { result } = renderHook(() =>
      useEldenRingWeapons({ page: 1, limit: 2 })
    );

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.weapons).toEqual(mockWeapons);
    expect(result.current.pagination).toEqual({
      currentPage: 2,
      totalItems: 4,
      itemsPerPage: 2,
      totalPages: 2,
    });
  });
});
