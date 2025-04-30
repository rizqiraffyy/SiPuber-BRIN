"use client"

import { SidebarIcon } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import Logo from '../public/logo2.png'
import Image from "next/image"
import router from "next/router"
import Link from "next/link"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="flex sticky top-0 z-50 w-full items-center border-b bg-background">
      <div className="flex my-4 h-[--header-height] w-full items-center gap-2 px-8 justify-between">
        {/* <Button
          className="h-8 w-8 cursor-pointer"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button> */}
        {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
        <div className="flex gap-4 items-center">
          <Image className="w-8" src={Logo} alt="Logo" />
          <h2 className="text-xl font-semibold">
            Sistem dan Instrumen Pemantauan Pencemaran Udara Bergerak
          </h2>
        </div>
        <Button className=" bg-[#C81D25] hover:bg-[#a8141c] text-white cursor-pointer">
          <Link href="/">
            Kembali
          </Link>
        </Button>
        {/* <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> */}
      </div>
    </header>
  )
}