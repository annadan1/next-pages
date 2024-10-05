import { type IImage } from '@/shared/ui/image';
import { api } from '.';

export const getImages = async():Promise<IImage[] | null> => {
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
