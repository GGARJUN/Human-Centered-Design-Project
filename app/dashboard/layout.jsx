"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  School,
  LayoutDashboard,
  Calendar,
  MessageSquare,
  BookOpen,
  Users,
  Settings,
  Menu,
  X,
  Bot
} from "lucide-react";
import { UserButton } from "@stackframe/stack";
import AppHeader from "./_components/AppHeader";


export default function DashboardLayout({
  children,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navigation = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Events", href: "/dashboard/events", icon: Calendar },
    { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
    { name: "Resources", href: "/dashboard/resources", icon: BookOpen },
    // { name: "AI Voice Agent", href: "/ai-voice-agent", icon: Bot },
    { name: "Community", href: "/dashboard/community", icon: Users },
    { name: "Settings", href: "/handler/account-settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed w-full bg-white z-50">
        <AppHeader />
      </div>
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed mt-20 inset-y-0 left-0 z-40 w-64 bg-card transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="h-full flex flex-col">
          {/* <div className="flex items-center gap-2 px-6 py-5 border-b">
            <School className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EduConnect</span>
          </div> */}

          <nav className="flex-1 px-4 py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                    }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t flex justify-end items-center ">
            <UserButton />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`lg:pl-64 pt-18 min-h-screen`}>
        <main className="py-6 px-4 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}