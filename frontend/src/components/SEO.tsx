import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
  schema?: object;
}

const SEO = ({
  title = "TYC - Consultoría y Asesoría Empresarial",
  description = "Expertos en consultoría estratégica, capacitación corporativa y asesoría especializada para potenciar tu empresa.",
  canonical = "https://tyc-consultoria.com", // Replace with real domain when available
  ogType = "website",
  ogImage = "/og-image.jpg", // Create this asset later
  twitterHandle = "@tyc_consultoria",
  schema
}: SEOProps) => {
  const siteTitle = title.includes("TYC") ? title : `${title} | TYC`;

  return (
    <Helmet>
      {/* Standard tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={twitterHandle} />
    </Helmet>
  );
};

export default SEO;
