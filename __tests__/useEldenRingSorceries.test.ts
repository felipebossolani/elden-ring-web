import { renderHook, waitFor } from '@testing-library/react';
import { useEldenRingSorceries } from '@/hooks/useEldenRingSorceries';

const mockSorceries = [
  { id: 's1', name: 'Magic 1' },
  { id: 's2', name: 'Magic 2' },
];

describe('useEldenRingSorceries', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, data: mockSorceries, total: 4 }),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns paginated sorcery data', async () => {
    const { result } = renderHook(() => useEldenRingSorceries({ page: 1, limit: 2 }));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.sorceries).toEqual(mockSorceries);
    expect(result.current.pagination).toEqual({
      currentPage: 2,
      totalItems: 4,
      itemsPerPage: 2,
      totalPages: 2,
    });
  });
});
