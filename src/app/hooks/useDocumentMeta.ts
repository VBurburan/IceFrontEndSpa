import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface DocumentMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

const SITE_URL = 'https://cryomedics.org';
const DEFAULT_OG_IMAGE = 'https://i.imgur.com/0uIOCcE.png';

export function useDocumentMeta({ title, description, ogTitle, ogDescription, ogImage }: DocumentMeta) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    const canonicalUrl = `${SITE_URL}${pathname}`;

    setMeta('description', description);
    setMeta('og:title', ogTitle || title, 'property');
    setMeta('og:description', ogDescription || description, 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('og:image', ogImage || DEFAULT_OG_IMAGE, 'property');
    setMeta('twitter:title', ogTitle || title, 'name');
    setMeta('twitter:description', ogDescription || description, 'name');
    setLink('canonical', canonicalUrl);
  }, [title, description, ogTitle, ogDescription, ogImage, pathname]);
}
