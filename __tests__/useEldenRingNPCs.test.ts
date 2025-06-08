import { renderHook, waitFor } from '@testing-library/react';
import { useEldenRingNPCs } from '@/hooks/useEldenRingNPCs';

const mockNPCs = [
  { id: 'n1', name: 'NPC 1' },
  { id: 'n2', name: 'NPC 2' },
];

describe('useEldenRingNPCs', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, data: mockNPCs, total: 4 }),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns paginated NPC data', async () => {
    const { result } = renderHook(() => useEldenRingNPCs({ page: 1, limit: 2 }));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.npcs).toEqual(mockNPCs);
    expect(result.current.pagination).toEqual({
      currentPage: 2,
      totalItems: 4,
      itemsPerPage: 2,
      totalPages: 2,
    });
  });
});
