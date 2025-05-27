export const withPublicUrl = (url: string): string => {
  if (process.env.NODE_ENV === "development" && url.startsWith("/")) {
    const startUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
    return `${startUrl}${url}`;
  }

  if (url.startsWith("/")) {
    const startUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || "";
    return `${startUrl}${url}`;
  }

  return url;
};
