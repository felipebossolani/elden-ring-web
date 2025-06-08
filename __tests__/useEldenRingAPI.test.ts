import { renderHook, waitFor } from '@testing-library/react';
import { useEldenRingAPI } from '@/hooks/useEldenRingAPI';
import { EldenRingLocation } from '@/lib/types';

const mockLocations: EldenRingLocation[] = [
  { id: 'loc1', name: 'Stormveil Castle', image: 'img.png', region: 'Limgrave', description: 'test' },
];

describe('useEldenRingAPI', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, data: mockLocations }),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('fetches locations data', async () => {
    const { result } = renderHook(() => useEldenRingAPI<EldenRingLocation>('locations'));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual(mockLocations);
    expect(result.current.error).toBeNull();
  });
});

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
