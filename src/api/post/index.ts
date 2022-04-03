import { Post } from '@/types/post';
import { AxiosResponse } from 'axios';
import { Repository, url } from '../repository';

export type TSignup = { name: string; email: string };

export const postClient = (): Promise<AxiosResponse<Post[]>> => {
  return Repository.get(`${url}/post`);
};
