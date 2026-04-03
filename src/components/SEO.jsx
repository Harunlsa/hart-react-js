import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const SITE_NAME = "Hart Industries Ltd";
const BASE_URL = "https://www.hart-industries.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  image = DEFAULT_IMAGE,
  imageAlt = `${SITE_NAME}`,
  type = "website",
  noIndex = false,
  structuredData,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME}`;
  const resolvedCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      {/* ── Primary ─────────────────────────────────────── */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={resolvedCanonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* ── Open Graph ──────────────────────────────────── */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />

      {/* ── Twitter Card ────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* ── Structured Data (JSON-LD) ────────────────────── */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  canonical: PropTypes.string, // e.g. '/services' – relative path
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  type: PropTypes.oneOf(["website", "article", "product"]),
  noIndex: PropTypes.bool,
  structuredData: PropTypes.object,
};
