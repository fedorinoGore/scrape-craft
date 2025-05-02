"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
export interface IAppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: IAppProvidersProps) {
  return (
    <ClerkProvider afterSignOutUrl={"/sign-in"}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
