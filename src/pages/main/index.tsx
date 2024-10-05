'use client';

import { useEffect, useState } from 'react';
import { api } from '@/shared/api';

interface ImageData {
  name: string;
  url: string;
}

export const MainPage: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    // Получение данных с API
    api.get('/images')
      .then((data) => setImages(data))
      .catch((error) => console.error('Ошибка при загрузке изображений:', error));
  }, []);

  return <div>Главная страница</div>;
};
