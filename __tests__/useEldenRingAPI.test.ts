import { renderHook, waitFor } from '@testing-library/react';
import { useEldenRingAPI } from '@/hooks/useEldenRingAPI';

const mockBosses = [
  { id: 'b1', name: 'Margit' },
  { id: 'b2', name: 'Godrick' },
];

describe('useEldenRingAPI - bosses', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, data: mockBosses }),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('fetches bosses list', async () => {
    const { result } = renderHook(() => useEldenRingAPI('bosses'));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual(mockBosses);
    expect(result.current.error).toBeNull();
  });
});
