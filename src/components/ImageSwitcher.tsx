import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSwitcherProps {
  images: string[];
  className?: string;
  showControls?: boolean;
  aspectRatio?: string;
}

const ImageSwitcher: React.FC<ImageSwitcherProps> = ({ 
  images, 
  className = "",
  showControls = true,
  aspectRatio = "aspect-video"
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (images.length === 0) {
    return (
      <div className={`bg-muted rounded-lg ${aspectRatio} flex items-center justify-center ${className}`}>
        <span className="text-muted-foreground editorial-small">No images available</span>
      </div>
    );
  }

  return (
    <div className={`relative bg-muted rounded-lg overflow-hidden flex items-center justify-center ${className}`}>
      {/* Main Image */}
      <img 
        src={images[currentImageIndex]} 
        alt={`Image ${currentImageIndex + 1} of ${images.length}`}
        className="max-w-full max-h-full object-contain"
        style={{ objectFit: 'contain' }}
      />

      {/* Navigation Controls */}
      {showControls && images.length > 1 && (
        <>
          {/* Previous/Next Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'bg-primary' 
                    : 'bg-background/60 hover:bg-background/80'
                }`}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-background/80 rounded-full px-3 py-1">
            <span className="text-sm font-medium">
              {currentImageIndex + 1} / {images.length}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSwitcher;