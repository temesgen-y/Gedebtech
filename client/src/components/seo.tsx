import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product" | "service" | "organization";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
  alternateLanguages?: { lang: string; url: string }[];
  breadcrumbs?: { name: string; url: string }[];
  faq?: { question: string; answer: string }[];
  organization?: {
    name?: string;
    url?: string;
    logo?: string;
    sameAs?: string[];
  };
  article?: {
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
  };
  localBusiness?: {
    name?: string;
    address?: {
      streetAddress?: string;
      addressLocality?: string;
      addressRegion?: string;
      postalCode?: string;
      addressCountry?: string;
    };
    telephone?: string;
    priceRange?: string;
    openingHours?: string[];
    geo?: {
      latitude?: string;
      longitude?: string;
    };
  };
  service?: {
    name?: string;
    description?: string;
    provider?: string;
    areaServed?: string;
    serviceType?: string;
  };
  video?: {
    name?: string;
    description?: string;
    thumbnailUrl?: string;
    uploadDate?: string;
    duration?: string;
  };
  review?: {
    ratingValue?: number;
    bestRating?: number;
    worstRating?: number;
    reviewCount?: number;
  };
}

export function SEO({
  title = "Software Development Company in Ethiopia - Gedeb Technologies",
  description = "Leading software development company in Ethiopia. Custom software, web & mobile apps, ERP/LMS/CRM systems, cloud solutions, and SaaS development. IT company in Addis Ababa.",
  keywords = "Gedeb technologies, Gedeb Tech, software development company in Ethiopia, IT company in Ethiopia, custom software development Ethiopia, web development company in Ethiopia, mobile app development Ethiopia, cloud solutions Ethiopia, SaaS application development, ERP software development Ethiopia, technology company in Ethiopia, software company in Addis Ababa, IT solutions provider Ethiopia, business automation solutions Ethiopia, digital transformation Ethiopia, hire software developers in Ethiopia",
  image = "https://www.gedebtech.com/og-image.jpg",
  url,
  type = "website",
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false,
  canonical,
  alternateLanguages = [],
  breadcrumbs = [],
  faq = [],
  organization,
  article,
  localBusiness,
  service,
  video,
  review,
}: SEOProps) {
  useEffect(() => {
    const baseUrl = window.location.origin;
    const currentPath = window.location.pathname;
    const currentUrl = url 
      ? (url.startsWith("http") ? url : `${baseUrl}${url}`)
      : `${baseUrl}${currentPath}`;
    const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;
    const canonicalUrl = canonical 
      ? (canonical.startsWith("http") ? canonical : `${baseUrl}${canonical}`)
      : currentUrl;

    // Helper function to update or create meta tag
    const updateMetaTag = (selector: string, attribute: string, value: string, contentAttr = "content") => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        const [attrName, attrValue] = attribute.split("=");
        if (attrName && attrValue) {
          tag.setAttribute(attrName, attrValue.replace(/['"]/g, ""));
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute(contentAttr, value);
    };

    // Helper function to update or create link tag
    const updateLinkTag = (rel: string, href: string, attributes: Record<string, string> = {}) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
      Object.entries(attributes).forEach(([key, value]) => {
        link?.setAttribute(key, value);
      });
    };

    // Update title
    if (title) {
      document.title = title;
      updateMetaTag('meta[name="title"]', 'name="title"', title);
    }

    // Update description
    updateMetaTag('meta[name="description"]', 'name="description"', description);

    // Update keywords
    updateMetaTag('meta[name="keywords"]', 'name="keywords"', keywords);

    // Robots meta tag
    const robotsContent = [
      noindex ? "noindex" : "index",
      nofollow ? "nofollow" : "follow",
      "max-image-preview:large",
      "max-snippet:-1",
      "max-video-preview:-1",
    ].join(", ");
    updateMetaTag('meta[name="robots"]', 'name="robots"', robotsContent);

    // Author
    if (author) {
      updateMetaTag('meta[name="author"]', 'name="author"', author);
    }

    // Open Graph tags
    updateMetaTag('meta[property="og:title"]', 'property="og:title"', title);
    updateMetaTag('meta[property="og:description"]', 'property="og:description"', description);
    updateMetaTag('meta[property="og:image"]', 'property="og:image"', fullImageUrl);
    updateMetaTag('meta[property="og:url"]', 'property="og:url"', currentUrl);
    updateMetaTag('meta[property="og:type"]', 'property="og:type"', type);
    updateMetaTag('meta[property="og:site_name"]', 'property="og:site_name"', "Gedeb Technologies");
    updateMetaTag('meta[property="og:locale"]', 'property="og:locale"', "en_US");
    
    // Enhanced Open Graph for articles
    if (type === "article" && article) {
      if (article.publishedTime) {
        updateMetaTag('meta[property="article:published_time"]', 'property="article:published_time"', article.publishedTime);
      }
      if (article.modifiedTime) {
        updateMetaTag('meta[property="article:modified_time"]', 'property="article:modified_time"', article.modifiedTime);
      }
      if (article.author) {
        updateMetaTag('meta[property="article:author"]', 'property="article:author"', article.author);
      }
      if (article.section) {
        updateMetaTag('meta[property="article:section"]', 'property="article:section"', article.section);
      }
      article.tags?.forEach((tag, index) => {
        updateMetaTag(`meta[property="article:tag"]`, `property="article:tag"`, tag);
      });
    }

    // Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', 'name="twitter:card"', "summary_large_image");
    updateMetaTag('meta[name="twitter:title"]', 'name="twitter:title"', title);
    updateMetaTag('meta[name="twitter:description"]', 'name="twitter:description"', description);
    updateMetaTag('meta[name="twitter:image"]', 'name="twitter:image"', fullImageUrl);
    updateMetaTag('meta[name="twitter:url"]', 'name="twitter:url"', currentUrl);
    if (image) {
      updateMetaTag('meta[name="twitter:image:alt"]', 'name="twitter:image:alt"', title);
    }

    // Canonical URL
    updateLinkTag("canonical", canonicalUrl);

    // Alternate languages (hreflang)
    alternateLanguages.forEach(({ lang, url: altUrl }) => {
      const fullAltUrl = altUrl.startsWith("http") ? altUrl : `${baseUrl}${altUrl}`;
      updateLinkTag("alternate", fullAltUrl, { hreflang: lang });
    });

    // Structured Data (JSON-LD)
    const structuredData: any[] = [];

    // Organization schema
    const orgData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: organization?.name || "Gedeb Technologies",
      url: organization?.url || "https://www.gedebtech.com",
      logo: organization?.logo || "https://www.gedebtech.com/favicon.png",
      description: description,
      sameAs: organization?.sameAs || [
        "https://www.linkedin.com/company/gedeb-technologies",
        "https://twitter.com/gedebtech",
        "https://www.facebook.com/gedebtechnologies",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        email: "info@gedebtech.com",
        url: "https://www.gedebtech.com/contact",
        areaServed: "ET",
        availableLanguage: ["en", "am"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressCountry: "ET",
        addressRegion: "Addis Ababa",
      },
      areaServed: {
        "@type": "Country",
        name: "Ethiopia",
      },
    };
    structuredData.push(orgData);

    // WebSite schema
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Gedeb Technologies",
      url: "https://www.gedebtech.com",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.gedebtech.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    });

    // Breadcrumbs schema
    if (breadcrumbs.length > 0) {
      structuredData.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url.startsWith("http") ? crumb.url : `${baseUrl}${crumb.url}`,
        })),
      });
    }

    // FAQ schema
    if (faq.length > 0) {
      structuredData.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      });
    }

    // Article schema
    if (type === "article" && article) {
      structuredData.push({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: description,
        image: fullImageUrl,
        datePublished: article.publishedTime || publishedTime,
        dateModified: article.modifiedTime || modifiedTime || article.publishedTime || publishedTime,
        author: {
          "@type": "Person",
          name: article.author || author || "Gedeb Technologies",
        },
        publisher: {
          "@type": "Organization",
          name: "Gedeb Technologies",
          logo: {
            "@type": "ImageObject",
            url: "https://www.gedebtech.com/favicon.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": currentUrl,
        },
        articleSection: article.section || section,
        keywords: tags.length > 0 ? tags.join(", ") : keywords,
      });
    }

    // LocalBusiness schema
    if (localBusiness) {
      structuredData.push({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: localBusiness.name || "Gedeb Technologies",
        description: description,
        url: currentUrl,
        telephone: localBusiness.telephone,
        priceRange: localBusiness.priceRange,
        address: localBusiness.address
          ? {
              "@type": "PostalAddress",
              streetAddress: localBusiness.address.streetAddress,
              addressLocality: localBusiness.address.addressLocality || "Addis Ababa",
              addressRegion: localBusiness.address.addressRegion || "Addis Ababa",
              postalCode: localBusiness.address.postalCode,
              addressCountry: localBusiness.address.addressCountry || "ET",
            }
          : {
              "@type": "PostalAddress",
              addressLocality: "Addis Ababa",
              addressCountry: "ET",
            },
        geo: localBusiness.geo
          ? {
              "@type": "GeoCoordinates",
              latitude: localBusiness.geo.latitude,
              longitude: localBusiness.geo.longitude,
            }
          : undefined,
        openingHoursSpecification: localBusiness.openingHours?.map((hours) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: hours,
        })),
      });
    }

    // Service schema
    if (service) {
      structuredData.push({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name || title,
        description: service.description || description,
        provider: {
          "@type": "Organization",
          name: service.provider || "Gedeb Technologies",
        },
        areaServed: {
          "@type": "Country",
          name: service.areaServed || "Ethiopia",
        },
        serviceType: service.serviceType,
      });
    }

    // Video schema
    if (video) {
      structuredData.push({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: video.name || title,
        description: video.description || description,
        thumbnailUrl: video.thumbnailUrl || fullImageUrl,
        uploadDate: video.uploadDate,
        duration: video.duration,
      });
    }

    // Review/Rating schema
    if (review) {
      structuredData.push({
        "@context": "https://schema.org",
        "@type": "AggregateRating",
        ratingValue: review.ratingValue,
        bestRating: review.bestRating || 5,
        worstRating: review.worstRating || 1,
        reviewCount: review.reviewCount,
      });
    }

    // Remove old structured data scripts
    const oldScripts = document.querySelectorAll('script[type="application/ld+json"]');
    oldScripts.forEach((script) => {
      // Keep the base organization schema from index.html, remove others
      try {
        const data = JSON.parse(script.textContent || "{}");
        if (data["@type"] !== "Organization" && data["@type"] !== "WebSite") {
          script.remove();
        }
      } catch {
        script.remove();
      }
    });

    // Add new structured data
    structuredData.forEach((data) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });
  }, [
    title,
    description,
    keywords,
    image,
    url,
    type,
    author,
    publishedTime,
    modifiedTime,
    section,
    tags,
    noindex,
    nofollow,
    canonical,
    alternateLanguages,
    breadcrumbs,
    faq,
    organization,
    article,
    localBusiness,
    service,
    video,
    review,
  ]);

  return null;
}
