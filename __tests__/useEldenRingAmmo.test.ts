import { renderHook, waitFor } from '@testing-library/react';
import { useEldenRingAmmo } from '@/hooks/useEldenRingAmmo';

const mockAmmos = [
  { id: 'a1', name: 'Arrow' },
  { id: 'a2', name: 'Bolt' },
];

describe('useEldenRingAmmo', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, data: mockAmmos }),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns ammo data', async () => {
    const { result } = renderHook(() => useEldenRingAmmo());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.ammos).toEqual(mockAmmos);
  });
});
