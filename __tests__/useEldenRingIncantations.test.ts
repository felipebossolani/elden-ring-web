import { renderHook, waitFor } from '@testing-library/react';
import { useEldenRingIncantations } from '@/hooks/useEldenRingIncantations';

const mockIncantations = [
  { id: 'i1', name: 'Fire', image: '', description: '', type: 'Incantation', cost: 10, slots: 1, effects: '', requires: [] }
];

describe('useEldenRingIncantations', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, data: mockIncantations, total: 1 }),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('fetches and returns incantations data', async () => {
    const { result } = renderHook(() => useEldenRingIncantations({ page: 0, limit: 10 }));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.incantations).toEqual(mockIncantations);
    expect(result.current.pagination).toEqual({
      currentPage: 1,
      totalItems: 1,
      itemsPerPage: 10,
      totalPages: 1,
    });
  });
});
