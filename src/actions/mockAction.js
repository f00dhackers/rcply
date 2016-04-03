export const MOCK_ACTION = 'MOCK_ACTION';

export function mockAction(data) {
  return {
    type: MOCK_ACTION,
    data
  };
}
