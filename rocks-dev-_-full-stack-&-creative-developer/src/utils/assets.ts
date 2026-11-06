/**
 * Utility for resolving public asset paths.
 * Compatible with local dev, production builds, and GitHub Pages repository subdirectory deployments.
 * 
 * Example:
 * getAssetUrl('images/projects/analytics-pulse.webp')
 * -> If BASE_URL is '/', returns '/images/projects/analytics-pulse.webp'
 * -> If BASE_URL is '/rocks-dev/', returns '/rocks-dev/images/projects/analytics-pulse.webp'
 * -> If BASE_URL is './', returns './images/projects/analytics-pulse.webp'
 */
export const getAssetUrl = (relativePath: string): string => {
  const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  const base = import.meta.env.BASE_URL || '/';
  
  if (base.endsWith('/')) {
    return `${base}${cleanPath}`;
  }
  return `${base}/${cleanPath}`;
};
