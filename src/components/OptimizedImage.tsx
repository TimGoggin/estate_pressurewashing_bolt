
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
  position?: 'top' | 'right top' | 'right' | 'right bottom' | 'bottom' | 'left bottom' | 'left' | 'left top' | 'centre';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  quality = 80,
  className = '',
  loading = 'lazy',
  fit = 'cover',
  position = 'centre',
}) => {
  // Build Netlify Image CDN URL
  const buildNetlifyImageUrl = (imageSrc: string, options: {
    width?: number;
    height?: number;
    quality?: number;
    fit?: string;
    position?: string;
  }) => {
    // If it's already an external URL or doesn't start with /, return as is
    if (imageSrc.startsWith('http') || imageSrc.startsWith('//')) {
      return imageSrc;
    }

    // Remove leading slash if present
    const cleanSrc = imageSrc.startsWith('/') ? imageSrc.slice(1) : imageSrc;
    
    // Build query parameters
    const params = new URLSearchParams();
    
    if (options.width) params.append('w', options.width.toString());
    if (options.height) params.append('h', options.height.toString());
    if (options.quality) params.append('q', options.quality.toString());
    if (options.fit) params.append('fit', options.fit);
    if (options.position) params.append('position', options.position);
    
    // Force modern formats
    params.append('f', 'auto');
    
    const queryString = params.toString();
    return `/.netlify/images?url=${encodeURIComponent(`/${cleanSrc}`)}${queryString ? `&${queryString}` : ''}`;
  };

  const optimizedSrc = buildNetlifyImageUrl(src, {
    width,
    height,
    quality,
    fit,
    position,
  });

  // Generate srcSet for responsive images
  const generateSrcSet = () => {
    if (!width) return undefined;
    
    const sizes = [1, 1.5, 2]; // 1x, 1.5x, 2x
    return sizes
      .map(multiplier => {
        const scaledWidth = Math.round(width * multiplier);
        const scaledHeight = height ? Math.round(height * multiplier) : undefined;
        
        const url = buildNetlifyImageUrl(src, {
          width: scaledWidth,
          height: scaledHeight,
          quality,
          fit,
          position,
        });
        
        return `${url} ${multiplier}x`;
      })
      .join(', ');
  };

  return (
    <img
      src={optimizedSrc}
      srcSet={generateSrcSet()}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  );
};

export default OptimizedImage;
