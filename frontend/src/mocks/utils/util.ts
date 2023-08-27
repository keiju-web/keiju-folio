/** Need to match with "REACT_APP_SUPABSE_URL" of the file "env.local" */
const MOCK_SERVER_URL = 'https://mocks.local'

export const getAuthMethodUrl = (path: string): string => {
  return `${MOCK_SERVER_URL}/auth/v1${path}`
}
export const getRestMethodUrl = (path: string): string => {
  return `${MOCK_SERVER_URL}/rest/v1${path}`
}
