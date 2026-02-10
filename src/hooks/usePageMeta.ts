import { useEffect } from "react";

type PageMeta = {
  title: string;
  description: string;
  canonicalPath?: string;
};

const BASE_URL = "https://jsr-solutions.ca";
const SITE_NAME = "JSR Solutions";

const setMetaTag = (selector: string, content: string) => {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) {
    element.setAttribute("content", content);
  }
};

const setCanonical = (href: string) => {
  const link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (link) {
    link.setAttribute("href", href);
  }
};

export const usePageMeta = ({ title, description, canonicalPath = "/" }: PageMeta) => {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const canonicalUrl = `${BASE_URL}${canonicalPath}`;

    document.title = fullTitle;

    setMetaTag('meta[name="description"]', description);
    setMetaTag('meta[property="og:title"]', fullTitle);
    setMetaTag('meta[property="og:description"]', description);
    setMetaTag('meta[property="og:url"]', canonicalUrl);
    setMetaTag('meta[name="twitter:title"]', fullTitle);
    setMetaTag('meta[name="twitter:description"]', description);
    setCanonical(canonicalUrl);
  }, [title, description, canonicalPath]);
};
