import { useState, useEffect } from "react";

const LazyImage = ({ src, alt, className, ...props }) => {
  // ✅ Extract just the filename from the full src
  const fileName = src.split("/").pop();

  // ✅ Point to placeholders folder instead
  const placeholder = `${
    import.meta.env.BASE_URL
  }assets/images/placeholders/product-groups${fileName}`;

  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setLoaded(true);
    };
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      style={{
        transition: "filter 0.5s ease",
        filter: loaded ? "blur(0)" : "blur(20px)",
      }}
      {...props}
    />
  );
};

export default LazyImage;
