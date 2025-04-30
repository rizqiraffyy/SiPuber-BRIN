"use client"

import * as React from "react"
import {
  Bot,
  Command,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    // {
    //   title: "Playground",
    //   url: "#",
    //   isActive: true,
    // },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* Kosong karena tidak digunakan */}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* Navigasi utama */}
        <NavMain items={data.navMain} />

        {/* Tambahan: Pilih Layanan */}
        <div className="mt-6 px-4">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">
            Pilih Layanan
          </h3>
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100"
              >
                <Bot className="w-4 h-4" />
                SiPuber
              </a>
            </li>
            {/* Tambahkan layanan lain di sini jika perlu */}
          </ul>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
