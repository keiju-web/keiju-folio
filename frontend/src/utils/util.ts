/**
 * Calculate the current age from the birthdate of the argument.
 * @param birthdate
 * @returns the current age
 */
export const calculateAge = (birthdate: Date): number => {
  const today = new Date()
  let age = today.getFullYear() - birthdate.getFullYear()
  const m = today.getMonth() - birthdate.getMonth()

  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age--
  }

  return age
}

/**
 * Download file.
 * @param url File url
 * @param fileName File Name when downloaded
 */
export const handleDownload = (url: string, fileName: string): void => {
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.click()
}
