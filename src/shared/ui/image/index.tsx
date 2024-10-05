import { convertPath } from '@/shared/api';
import cn from 'classnames';
import NextImage from 'next/image';
import styles from './image.module.scss';

export interface IImage {
  name: string;
  url: string;
}

/** Next Image with convertPath */
export const Image:FCClass<IImage> = ({ url, name, className }) => {
  return (
    <NextImage src={convertPath(url)} alt={name} fill className={cn(styles.image, className)} />
  );
};
