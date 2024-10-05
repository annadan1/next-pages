import { type IImageData } from '@/shared/types';
import Image from 'next/image';
import cn from 'classnames';
import styles from './flex-gallery.module.scss';

export const FlexGallery:FCClass<{ images: IImageData[] }> = ({ images }) => {
  return (
    <div className={cn(styles.container, 'container')}>
      <h1>Gallery</h1>
      <div className={styles.wrapper}>
        {images.map((image) => (
          <div key={image.name} className={styles.imageWrapper}>
            <Image src={image.url} alt={image.name} fill className={styles.image} />
            <p className={styles.imageName}>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
