export const createHeader = (token: string) => {
  return new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token ?? ''}`,
  });
};
