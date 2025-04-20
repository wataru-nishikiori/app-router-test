import useSWR from 'swr';
import axios from 'axios';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const fetcher = (url: string): Promise<User> =>
  axios.get<User>(url).then((res) => res.data);

export const useAuth = () => {
  const { data, error, isLoading, mutate } = useSWR<User>(
    'https://jsonplaceholder.typicode.com/users/1',
    fetcher
  );

  return {
    user: data,
    isLoading,
    isError: Boolean(error),
    mutate,
  };
};
