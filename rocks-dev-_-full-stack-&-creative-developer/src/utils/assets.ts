/**
 * Robust asset URL resolution utility.
 * 
 * Behavior:
 * 1. During local development (import.meta.env.DEV):
 *    Returns root-relative path (e.g. '/images/projects/analytics-pulse.webp')
 *    which Vite serves directly from the public/ directory.
 * 
 * 2. In production (e.g. GitHub Pages):
 *    If BASE_URL is set (e.g. '/rocks-dev/'), returns '/rocks-dev/images/...'.
 *    If BASE_URL is './' or unset, returns './images/...' to safely resolve
 *    relative to the hosting directory.
 */
export const getAssetUrl = (relativePath: string): string => {
  const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  const base = import.meta.env.BASE_URL;
  if (base && base !== './' && base !== '/') {
    return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
  }
  
  return `./${cleanPath}`;
};
