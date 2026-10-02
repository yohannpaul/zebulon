import { useEffect } from "react";

/**
 * Sets the document title and meta description for the page that mounts it,
 * restoring the previous values on unmount. Lets each route carry its own
 * SEO-relevant <title>/<meta name="description"> in a single-page app
 * without pulling in a dependency like react-helmet.
 */
export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const descriptionTag = description
      ? document.querySelector<HTMLMetaElement>('meta[name="description"]')
      : null;
    const previousDescription = descriptionTag?.getAttribute("content") ?? null;

    if (description && descriptionTag) {
      descriptionTag.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;
      if (description && descriptionTag && previousDescription !== null) {
        descriptionTag.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}
