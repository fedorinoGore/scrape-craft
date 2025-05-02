import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";

export interface ILogoProps {
  fontSize?: string;
  iconSize?: number;
}

export default function Logo({
  fontSize = "text-2xl",
  iconSize = 20,
}: ILogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "text-2xl font-extrabold",
        "flex items-center gap-2",
        fontSize,
      )}
    >
      <div className="rounded-xl bg-gradient-to-r from-gray-500 to-emerald-600 p-2 flex items-center justify-center">
        <SquareDashedMousePointer size={iconSize} className="stroke-white" />
      </div>
      <div>
        <span className="text-stone-700 dark:text-stone-300">Scrape</span>
        <span className="bg-gradient-to-r bg-clip-text text-transparent from-gray-500 to-emerald-600">
          Craft
        </span>
      </div>
    </Link>
  );
}
