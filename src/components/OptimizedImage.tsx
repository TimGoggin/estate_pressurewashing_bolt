
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
  // Detect if we're running on Netlify deployment
  const isNetlifyDeployment = () => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      return hostname.includes('.netlify.app') || 
             hostname.includes('.netlify.com') ||
             // Check for custom domains on Netlify (exclude local development)
             (hostname !== 'localhost' && 
              hostname !== '127.0.0.1' && 
              !hostname.includes('replit.') &&
              !hostname.includes('repl.co') &&
              !hostname.includes('.local'));
    }
    // Server-side: check for Netlify environment variables
    return process.env.NETLIFY === 'true' || process.env.CONTEXT === 'production';
  };

  // Build Netlify Image CDN URL
  const buildNetlifyImageUrl = (imageSrc: string, options: {
    width?: number;
    height?: number;
    quality?: number;
    fit?: string;
    position?: string;
  }) => {
    // If it's already an external URL, return as is
    if (imageSrc.startsWith('http') || imageSrc.startsWith('//')) {
      return imageSrc;
    }

    // Ensure the source starts with a slash for absolute path
    const cleanSrc = imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`;
    
    // Build query parameters for Netlify Image CDN
    const params = new URLSearchParams();
    params.append('url', cleanSrc);
    
    if (options.width) params.append('w', options.width.toString());
    if (options.height) params.append('h', options.height.toString());
    if (options.quality) params.append('q', options.quality.toString());
    if (options.fit) params.append('fit', options.fit);
    if (options.position) params.append('position', options.position);
    
    // Force modern formats
    params.append('f', 'auto');
    
    return `/.netlify/images?${params.toString()}`;
  };

  // Determine the image source based on environment
  const getImageSrc = () => {
    if (isNetlifyDeployment()) {
      // Use Netlify Image CDN on deployment
      return buildNetlifyImageUrl(src, {
        width,
        height,
        quality,
        fit,
        position,
      });
    } else {
      // Use original image path for development (Replit)
      return src;
    }
  };

  // Generate srcSet for responsive images (only on Netlify)
  const generateSrcSet = () => {
    if (!width || !isNetlifyDeployment()) return undefined;
    
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

  const optimizedSrc = getImageSrc();

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
