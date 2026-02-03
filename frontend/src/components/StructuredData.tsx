import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
    const primaryDomain = "https://tyc-consultoria.com";

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "TYC Consultoría",
        "url": primaryDomain,
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${primaryDomain}/recursos/blog?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "TYC - Desarrollo y Estrategia",
        "url": primaryDomain,
        "logo": `${primaryDomain}/logo.png`,
        "sameAs": [
            "https://www.facebook.com/tyc_consultoria",
            "https://www.linkedin.com/company/tyc_consultoria"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+51-999-999-999",
            "contactType": "customer service"
        }
    };

    const sitelinksSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "SiteNavigationElement",
                "position": 1,
                "name": "Servicios de Asesoría",
                "url": `${primaryDomain}/asesoria-consultoria`
            },
            {
                "@type": "SiteNavigationElement",
                "position": 2,
                "name": "Sobre Nosotros",
                "url": `${primaryDomain}/nosotros`
            },
            {
                "@type": "SiteNavigationElement",
                "position": 3,
                "name": "Cursos y Capacitación",
                "url": `${primaryDomain}/recursos/cursos`
            },
            {
                "@type": "SiteNavigationElement",
                "position": 4,
                "name": "Blog y Noticias",
                "url": `${primaryDomain}/recursos/blog`
            },
            {
                "@type": "SiteNavigationElement",
                "position": 5,
                "name": "Contacto Directo",
                "url": `${primaryDomain}/contacto`
            }
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(sitelinksSchema)}
            </script>
        </Helmet>
    );
};

export default StructuredData;
