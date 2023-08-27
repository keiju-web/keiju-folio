// Need tp match with "REACT_APP_SUPABSE_URL" of "env.local"
const MOCK_SERVER_URL = 'https://mocks.local'

export const getMethodUrl = (path: string): string => {
  return `${MOCK_SERVER_URL}${path}`
}
