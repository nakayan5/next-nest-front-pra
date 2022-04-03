import { useGetPostList } from '@/hooks';
import { TopTemplate } from '@/template/top';
import { Post } from '@/types/post';
import React, { createContext, useEffect, useState } from 'react';

export const TopContext = createContext<{ list: Post[] }>(null);

export const TopContextProvider = () => {
  const [postList, setPostList] = useState<Post[]>(null);
  const getPostLIst = useGetPostList();

  useEffect(() => {
    const func = async () => {
      const res = await getPostLIst();

      if (!res) return setPostList([]);

      setPostList(res);
    };

    func();
  }, []);

  return (
    <TopContext.Provider value={{ list: postList }}>
      <TopTemplate />
    </TopContext.Provider>
  );
};
