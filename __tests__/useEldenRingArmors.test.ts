import { renderHook, waitFor } from '@testing-library/react';
import { useEldenRingArmors } from '@/hooks/useEldenRingArmors';

const mockArmors = [
  { id: 'a1', category: 'Helm' },
  { id: 'a2', category: 'Helm' },
];

const mockCategories = [
  { id: 'a1', category: 'Helm' },
  { id: 'a2', category: 'Chest Armor' },
];

describe('useEldenRingArmors', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true, data: mockCategories }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true, data: mockArmors, total: 4 }),
      });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns paginated armors data', async () => {
    const { result } = renderHook(() =>
      useEldenRingArmors({ page: 1, limit: 2 })
    );

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.armors).toEqual(mockArmors);
    expect(result.current.pagination).toEqual({
      currentPage: 2,
      totalItems: 4,
      itemsPerPage: 2,
      totalPages: 2,
    });
  });
});

