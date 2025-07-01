import { useEffect, useState, useRef } from 'react';

interface ImagePreloaderState {
  isInitialLoading: boolean;
  isBackgroundLoading: boolean;
  loadedCount: number;
  totalCount: number;
  error: string | null;
  loadedImages: Set<string>;
}

export const useImagePreloader = () => {
  const [state, setState] = useState<ImagePreloaderState>({
    isInitialLoading: true,
    isBackgroundLoading: true,
    loadedCount: 0,
    totalCount: 0,
    error: null,
    loadedImages: new Set()
  });
  
  const isPreloadingRef = useRef(false);

  useEffect(() => {
    if (isPreloadingRef.current) return;
    isPreloadingRef.current = true;

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

    const preloadImage = (url: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          setState(prev => ({ 
            ...prev, 
            loadedCount: prev.loadedCount + 1,
            loadedImages: new Set([...prev.loadedImages, url])
          }));
          resolve();
        };
        
        img.onerror = () => {
          reject(new Error(`Failed to load image: ${url}`));
        };
        
        img.src = url;
      });
    };

    // First, load the first image
    preloadImage(imageUrls[0])
      .then(() => {
        // Mark initial loading as complete after first image loads
        setState(prev => ({ 
          ...prev, 
          isInitialLoading: false 
        }));
        
        // Then load the rest in the background
        const remainingImages = imageUrls.slice(1);
        
        // Load remaining images sequentially to maintain order and avoid overwhelming the browser
        const loadRemainingImages = async () => {
          for (const url of remainingImages) {
            try {
              await preloadImage(url);
            } catch (error) {
              console.error('Error preloading image:', error);
            }
          }
          
          // Mark background loading as complete
          setState(prev => ({ 
            ...prev, 
            isBackgroundLoading: false 
          }));
        };
        
        loadRemainingImages();
      })
      .catch((error) => {
        console.error('Error preloading first image:', error);
        setState(prev => ({ 
          ...prev, 
          isInitialLoading: false,
          isBackgroundLoading: false,
          error: error.message
        }));
      });
  }, []);

  return {
    ...state,
    isImageLoaded: (url: string) => state.loadedImages.has(url)
  };
};