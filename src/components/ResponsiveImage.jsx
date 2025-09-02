const ResponsiveImage = ({ imageObj, alt, className }) => {
  if (!imageObj) return null;

  return (
    <picture>
      {imageObj.sources.map((source) => (
        <source key={source.type} srcSet={source.srcset} type={source.type} />
      ))}
      <img
        src={imageObj.img.src}
        srcSet={imageObj.img.srcset}
        sizes={imageObj.img.sizes}
        alt={alt}
        className={className}
        loading="lazy"
      />
    </picture>
  );
};

export default ResponsiveImage;
