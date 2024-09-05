export const formatDate = (dateInput: string | Date | number): string => {
  const date = new Date(dateInput)
  const day: string = String(date.getDate()).padStart(2, '0')
  const month: string = String(date.getMonth() + 1).padStart(2, '0')
  const year: number = date.getFullYear()
  return `${day}/${month}/${year}`
}
