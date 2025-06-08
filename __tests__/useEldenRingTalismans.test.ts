import { renderHook, waitFor } from '@testing-library/react';
import { useEldenRingTalismans } from '@/hooks/useEldenRingTalismans';

const mockTalismans = [
  { id: 't1' },
  { id: 't2' },
];

describe('useEldenRingTalismans', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, data: mockTalismans, total: 4 }),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns paginated talismans data', async () => {
    const { result } = renderHook(() =>
      useEldenRingTalismans({ page: 1, limit: 2 })
    );

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.talismans).toEqual(mockTalismans);
    expect(result.current.pagination).toEqual({
      currentPage: 2,
      totalItems: 4,
      itemsPerPage: 2,
      totalPages: 2,
    });
  });
});
