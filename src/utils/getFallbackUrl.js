export const getFallbackUrl = (source) => {
  if (!source) return "";
  if (Array.isArray(source)) {
    return source[0]?.srcset?.split(" ")[0] || source[0]?.src || "";
  }
  return source;
};
