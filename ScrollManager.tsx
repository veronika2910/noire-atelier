import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On every route change: scroll to top, unless the URL carries a hash
 * (e.g. /#work), in which case scroll the matching element into view.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Wait a tick for the destination page to render.
      const frame = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}
