import { renderHook, waitFor } from '@testing-library/react';
import { useEldenRingAPI } from '@/hooks/useEldenRingAPI';

describe('useEldenRingAPI', () => {
  const mockData = [{ id: 'a1', name: 'Ash' }];

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, data: mockData }),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('fetches data from the provided endpoint', async () => {
    const { result } = renderHook(() => useEldenRingAPI('ashes'));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });
});
