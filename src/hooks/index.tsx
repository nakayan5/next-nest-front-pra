import { postClient } from '@/api/post';
import { useCallback } from 'react';

export const useGetPostList = () => {
  return useCallback(async () => {
    try {
      const { data } = await postClient();

      return data;
    } catch (error: any) {
      console.log(error);
    }
  }, []);
};
