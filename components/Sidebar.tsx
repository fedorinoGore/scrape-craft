"use client";

import clsx from "clsx";
import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  MenuIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "./ui/button";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  Sheet,
  SheetTrigger,
} from "./ui/sheet";

const routes = [
  {
    href: "",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "workflows",
    label: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "credentials",
    label: "Credentials",
    icon: ShieldCheckIcon,
  },
  {
    href: "billing",
    label: "Billing",
    icon: CoinsIcon,
  },
];

export function DesktopSidebar() {
  const pathname = usePathname();
  const activeRoute =
    routes.find((route) => pathname.includes(route.href)) || routes[0];

  return (
    <div
      className={clsx(
        "hidden relative md:block min-w-[280px] max-w-[280px] h-screen w-full overflow-hidden",
        "bg-primary/5 text-muted-foreground",
        "border-r-2 border-separate",
        "dark:bg-secondary/30 dark:text-foreground",
      )}
    >
      <div className="flex items-center justify-center gap-2 border-b border-separate p-4">
        <Logo />
      </div>
      <div className="p-2">TODO CREDITS</div>
      <div className="flex flex-col p-2">
        {routes.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className={buttonVariants({
              variant: activeRoute.href === href ? "sidebarActive" : "sidebar",
            })}
          >
            <Icon size={20} />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function MobileSidebar() {
  const pathname = usePathname();
  const activeRoute =
    routes.find((route) => pathname.includes(route.href)) || routes[0];

  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[400px] sm:w-[540px] space-y-4"
            side="left"
          >
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1">
              {routes.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className={buttonVariants({
                    variant:
                      activeRoute.href === href ? "sidebarActive" : "sidebar",
                  })}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
