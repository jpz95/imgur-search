export default function useSwrState(data: any, error: any) {
  if (error) {
    return 'error'
  } else if (!data) {
    return 'loading'
  }
  return 'complete';
}