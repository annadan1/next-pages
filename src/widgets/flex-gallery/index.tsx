import { type IImageData } from '@/shared/types';
import Image from 'next/image';

export const FlexGallery:FCClass<{ images: IImageData[] }> = ({ images }) => {
  return (
    <div>
      <h1>Gallery</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {images.map((image) => (
          <div key={image.name}>
            <Image src={image.url} alt={image.name} width={500} height={500} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
