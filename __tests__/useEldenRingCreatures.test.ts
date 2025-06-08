import { renderHook, waitFor } from '@testing-library/react';
import { useEldenRingAPI } from '@/hooks/useEldenRingAPI';
import { Creature } from '@/lib/types';

const mockCreatures: Creature[] = [
  { id: 'c1', name: 'Rat', image: '', description: '', location: 'Sewer', drops: [] },
  { id: 'c2', name: 'Wolf', image: '', description: '', location: 'Forest', drops: ['Fur'] },
];

describe('useEldenRingAPI - creatures', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, data: mockCreatures }),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('fetches creatures data', async () => {
    const { result } = renderHook(() => useEldenRingAPI<Creature>('creatures'));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(global.fetch).toHaveBeenCalledWith('https://eldenring.fanapis.com/api/creatures');
    expect(result.current.data).toEqual(mockCreatures);
  });
});
