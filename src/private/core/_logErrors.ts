export const _logErrors = (error: Error, message: string = '') => {
  console.error('Error:', error.message, '\n', message);
  return error;
};
