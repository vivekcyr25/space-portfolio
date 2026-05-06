const repoBasePath = process.env.NODE_ENV === "production" ? "/space-portfolio" : "";

export const getAssetPath = (path: string): string => {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${repoBasePath}${path.startsWith("/") ? path : `/${path}`}`;
};
