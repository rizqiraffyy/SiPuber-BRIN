"use client"

import React from "react"
import Link from "next/link"
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Logo from '../public/logo.png'
import Image from "next/image"

const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#service' },
    { name: 'FAQ', href: '#faq' },
]

export default function Navbar() {
    const [menuState, setMenuState] = React.useState(false)

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full border-b border-[#F3F4F6] bg-white backdrop-blur">
                <div className="m-auto max-w-5xl px-6 relative">
                    <div className="flex items-center justify-between py-2 lg:py-3 relative">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Image className="w-28" src={Logo} alt="Logo" />
                            </Link>
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-[#1F2937]" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-[#1F2937]" />
                            </button>
                        </div>
                        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-[#1F2937] hover:text-[#C81D25] font-medium duration-150">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="hidden lg:flex space-x-3">
                            <Button
                                asChild
                                size="sm"
                                className="bg-[#C81D25] hover:bg-[#a8141c] text-white">
                                <Link href="/login">
                                    <span>Login</span>
                                </Link>
                            </Button>
                        </div>
                        {menuState && (
                            <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t p-4 shadow-lg z-10">
                                <ul className="flex flex-col gap-4 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-[#1F2937] hover:text-[#C81D25] block font-medium duration-150">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}