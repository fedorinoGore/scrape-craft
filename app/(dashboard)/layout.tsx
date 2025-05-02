import { Separator } from "@radix-ui/react-context-menu";
import { DesktopSidebar } from "@/components/Sidebar";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import ThemeToggle from "@/components/ThemeToggle";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full">
      <DesktopSidebar />
      <div className="flex flex-col flex-1 min-h-screen w-full">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          <BreadcrumbHeader />
          <div className="gap-1 flex items-center">
            <ThemeToggle />
          </div>
        </header>
        <Separator className="h-[1px] bg-gray-200 my-2" />
        <div className="overflow-auto">
          <div className="flex-1 container py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
