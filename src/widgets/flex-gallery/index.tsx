import cn from 'classnames';
import { Image, IImage } from '@/shared/ui/image';
import styles from './flex-gallery.module.scss';

export const FlexGallery:FCClass<{ images: IImage[] }> = ({ images }) => {
  return (
    <div className={cn(styles.container, 'container')}>
      <h1>Gallery</h1>
      <div className={styles.wrapper}>
        {images.map((image) => (
          <div key={image.name} className={styles.imageWrapper}>
            <Image {...image} />
            <p className={styles.imageName}>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
