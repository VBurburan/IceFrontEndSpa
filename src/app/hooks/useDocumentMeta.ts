import { useEffect } from 'react';

interface DocumentMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

export function useDocumentMeta({ title, description, ogTitle, ogDescription }: DocumentMeta) {
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

    setMeta('description', description);
    setMeta('og:title', ogTitle || title, 'property');
    setMeta('og:description', ogDescription || description, 'property');
    setMeta('twitter:title', ogTitle || title, 'name');
    setMeta('twitter:description', ogDescription || description, 'name');
  }, [title, description, ogTitle, ogDescription]);
}
