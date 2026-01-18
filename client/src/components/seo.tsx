import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = "wODEB Technologies - Enterprise Software Development & Technology Services",
  description = "wODEB Technologies delivers innovative, scalable software solutions for enterprise, government, and startup clients. Custom development, talent sourcing, and digital transformation.",
  keywords = "software development, enterprise software, custom software, web development, mobile app development, technology services, digital transformation, software consulting, IT services, application development, cloud solutions, software engineering",
  image = "https://gedebtech.com/og-image.jpg",
  url = "https://gedebtech.com",
  type = "website",
}: SEOProps) {
  useEffect(() => {
    const baseUrl = window.location.origin;
    const currentUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;
    const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

    // Update title
    if (title) {
      document.title = title;
      
      // Update meta title
      let metaTitle = document.querySelector('meta[name="title"]');
      if (!metaTitle) {
        metaTitle = document.createElement("meta");
        metaTitle.setAttribute("name", "title");
        document.head.appendChild(metaTitle);
      }
      metaTitle.setAttribute("content", title);
    }

    // Update description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    } else {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      metaKeywords.setAttribute("content", keywords);
      document.head.appendChild(metaKeywords);
    }

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    updateOGTag("og:title", title);
    updateOGTag("og:description", description);
    updateOGTag("og:image", fullImageUrl);
    updateOGTag("og:url", currentUrl);
    updateOGTag("og:type", type);

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    updateTwitterTag("twitter:title", title);
    updateTwitterTag("twitter:description", description);
    updateTwitterTag("twitter:image", fullImageUrl);
    updateTwitterTag("twitter:url", currentUrl);

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);
  }, [title, description, keywords, image, url, type]);

  return null;
}
