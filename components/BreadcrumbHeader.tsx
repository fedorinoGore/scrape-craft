"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Fragment } from "react";
import { MobileSidebar } from "./Sidebar";

export default function BreadcrumbHeader() {
  const pathname = usePathname();
  const pathSegments = pathname
    .split("/")
    .filter((segment, index) => segment !== "" || index === 0);

  return (
    <div className="flex items-center flex-start">
      <MobileSidebar />
      <Breadcrumb className="flex flex-start items-center">
        <BreadcrumbList className="flex items-center">
          {pathSegments.map((segment, index) => (
            <Fragment key={index}>
              <BreadcrumbItem className="text-sm font-medium">
                <BreadcrumbLink
                  href={`/${segment}`}
                  className="text-gray-500 dark:text-accent-foreground hover:text-gray-900 dark:hover:text-gray-500 capitalize"
                >
                  {segment === "" ? "Home" : segment}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < pathSegments.length - 1 && (
                <span className="mx-2 text-gray-400">
                  <BreadcrumbSeparator />
                </span>
              )}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
