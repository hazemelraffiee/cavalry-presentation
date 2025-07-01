import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useImagePreloader } from '@/hooks';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className }: LazyImageProps) => {
  const { isImageLoaded } = useImagePreloader();
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Check if image is already loaded from preloader
    if (isImageLoaded(src)) {
      setShowImage(true);
      return;
    }

    // If not preloaded, load it now
    const img = new Image();
    img.onload = () => setShowImage(true);
    img.src = src;
  }, [src, isImageLoaded]);

  if (!showImage) {
    return (
      <div className={`flex items-center justify-center bg-black/20 ${className}`}>
        <Loader2 className="w-12 h-12 text-white/60 animate-spin" />
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
    />
  );
};

export default LazyImage;