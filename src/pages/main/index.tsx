import { getImages } from '@/shared/api/get-images';
import { FlexGallery } from '@/widgets/flex-gallery';

export const MainPage: React.FC = async() => {
  const [images] = await Promise.all([getImages()]);

  return (
    <>
      {images && images?.length !== 0 && <FlexGallery images={images} />}
      <div />
    </>
  );
};
