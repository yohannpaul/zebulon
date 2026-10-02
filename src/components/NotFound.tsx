import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function NotFound() {
  useDocumentMeta(
    "Page Not Found | Zebulon Consulting",
    "The page you're looking for doesn't exist. Return to Zebulon Consulting's homepage."
  );

  return (
    <div className="pt-20 min-h-[70vh] flex items-center justify-center bg-bg-light">
      <div className="text-center px-6">
        <p className="text-gold-accent font-bold tracking-[0.2em] uppercase mb-4">404 Error</p>
        <h1 className="text-5xl md:text-7xl font-bold text-deep-navy mb-6">Page Not Found</h1>
        <p className="text-deep-navy/70 text-lg max-w-lg mx-auto mb-10">
          The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
        </p>
        <Button asChild className="h-12 px-8 rounded-xl font-bold">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
