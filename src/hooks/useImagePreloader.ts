import { useEffect, useState } from 'react';

interface ImagePreloaderState {
  isLoading: boolean;
  loadedCount: number;
  totalCount: number;
  error: string | null;
}

export const useImagePreloader = () => {
  const [state, setState] = useState<ImagePreloaderState>({
    isLoading: true,
    loadedCount: 0,
    totalCount: 0,
    error: null
  });

  useEffect(() => {
    const baseUrl = import.meta.env.BASE_URL;
    
    // List all images to preload
    const imageUrls = [
      `${baseUrl}img/1.png`,
      `${baseUrl}img/2.png`,
      `${baseUrl}img/3.png`,
      `${baseUrl}img/4-A.png`,
      `${baseUrl}img/4-B.png`,
      `${baseUrl}img/5.png`,
      `${baseUrl}img/6.png`,
      `${baseUrl}img/7.png`,
      `${baseUrl}img/8.png`,
      `${baseUrl}img/9-A.png`,
      `${baseUrl}img/9-B.png`,
      `${baseUrl}img/10.png`,
      `${baseUrl}img/11.png`
    ];

    setState(prev => ({ ...prev, totalCount: imageUrls.length }));

    let loadedImages = 0;

    const preloadImage = (url: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          loadedImages++;
          setState(prev => ({ 
            ...prev, 
            loadedCount: loadedImages,
            isLoading: loadedImages < imageUrls.length 
          }));
          resolve();
        };
        
        img.onerror = () => {
          reject(new Error(`Failed to load image: ${url}`));
        };
        
        img.src = url;
      });
    };

    // Preload all images
    Promise.all(imageUrls.map(preloadImage))
      .then(() => {
        setState(prev => ({ 
          ...prev, 
          isLoading: false,
          loadedCount: imageUrls.length
        }));
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
        setState(prev => ({ 
          ...prev, 
          isLoading: false,
          error: error.message
        }));
      });
  }, []);

  return state;
};