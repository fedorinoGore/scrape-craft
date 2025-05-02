import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import * as React from "react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 m-auto">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          The page you are looking for does not exist.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-2 bg-primary/70 text-white dark:text-accent-foreground rounded-md shadow-sm hover:bg-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
          </Link>
        </div>
      </div>
      <footer className="text-center text-sm text-muted-foreground">
        <p className="mt-12 ">
          If you think this is a mistake, please contact support.
        </p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} ScrapeCraft. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
