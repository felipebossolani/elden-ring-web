import { renderHook, waitFor } from '@testing-library/react';
import { useEldenRingAPI } from '@/hooks/useEldenRingAPI';
import { EldenRingItem } from '@/lib/types';

const mockItems: EldenRingItem[] = [
  { id: 'i1', name: 'Item 1', image: '', description: '', type: 'Reusable', effect: 'Effect' },
  { id: 'i2', name: 'Item 2', image: '', description: '', type: 'Key Item', effect: 'Effect' },
];

describe('useEldenRingAPI - items', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, data: mockItems }),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('fetches items data', async () => {
    const { result } = renderHook(() => useEldenRingAPI<EldenRingItem>('items'));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual(mockItems);
  });
});
