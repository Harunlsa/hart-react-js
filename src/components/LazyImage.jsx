import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// 🔄 Shimmer animation
const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  // display: inline-block;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: opacity 0.6s ease-in-out;
`;

// ✨ Shimmer overlay (only visible when loading)
const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(240, 240, 240, 0.6) 25%,
    rgba(220, 220, 220, 0.9) 50%,
    rgba(240, 240, 240, 0.6) 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s infinite;
  z-index: 1;
  border-radius: 8px;
`;

const LazyImage = ({ src, alt, className, ...props }) => {
  const fileName = src.split("/").pop();

  // ✅ Dynamic placeholder path
  const placeholder = `${
    import.meta.env.BASE_URL
  }assets/images/placeholders/${fileName}`;

  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder);

  useEffect(() => {
    setImageSrc(placeholder);
    setLoaded(false);

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setLoaded(true);
    };
  }, [src, placeholder]);

  return (
    <Wrapper className={className}>
      {!loaded && <Loader />} {/* show shimmer while loading */}
      <StyledImg src={imageSrc} alt={alt} loaded={loaded} {...props} />
    </Wrapper>
  );
};

export default LazyImage;
