
import { useMemo } from 'react';

interface UseOptimizedImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
  position?: 'top' | 'right top' | 'right' | 'right bottom' | 'bottom' | 'left bottom' | 'left' | 'left top' | 'centre';
}

export const useOptimizedImage = (src: string, options: UseOptimizedImageOptions = {}) => {
  const {
    width,
    height,
    quality = 80,
    fit = 'cover',
    position = 'centre'
  } = options;

  const optimizedUrl = useMemo(() => {
    // If it's already an external URL or doesn't start with /, return as is
    if (src.startsWith('http') || src.startsWith('//')) {
      return src;
    }

    // Remove leading slash if present
    const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
    
    // Build query parameters
    const params = new URLSearchParams();
    
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    if (quality) params.append('q', quality.toString());
    if (fit) params.append('fit', fit);
    if (position) params.append('position', position);
    
    // Force modern formats
    params.append('f', 'auto');
    
    const queryString = params.toString();
    return `/.netlify/images?url=${encodeURIComponent(`/${cleanSrc}`)}${queryString ? `&${queryString}` : ''}`;
  }, [src, width, height, quality, fit, position]);

  return optimizedUrl;
};
