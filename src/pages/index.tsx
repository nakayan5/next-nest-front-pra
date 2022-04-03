import React, { Suspense } from 'react';
import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { postClient } from '@/api/post';

export const Home = () => {
  const [data] = useState(async () => {
    try {
      const res = await postClient();

      if (!res) return null;

      return res.data;
    } catch (error: any) {
      console.log(error);
      return null;
    }
  });

  return (
    <Suspense fallback={<div>loadig ...</div>}>
      <Button>{data}</Button>
    </Suspense>
  );
};

export default Home;
