import { type IImageData } from '@/shared/types';
import { api } from '.';

export const getImages = async():Promise<IImageData[] | null> => {
  try {
    const res = await api.get('/images');
    if (res) {
      return res;
    } return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
