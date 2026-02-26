"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"

export default function Header() {
  const pathname = usePathname() // current URL
  const [open, setOpen] = useState(false)

  // Close the sidebar whenever the URL changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="w-full border-b header_shape">
      <div className="container mx-auto h-24 grid grid-cols-2 justify-center items-center xl:grid-cols-5 px-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold col-span-1">
          <Image src="/logo2.png" alt="logo" height={100} width={200} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center gap-8 col-span-3">
          <Link href="/" className="border-r border-black/20 pr-3">Acceuil</Link>
          <Link href="/services" className="border-r border-black/20 pr-3">Services</Link>
          <Link href="/problematique" className="border-r border-black/20 pr-3">Problématiques des coûts obsèques</Link>
          <Link href="/contact" className="border-r border-black/20 pr-3">Contact</Link>
        </nav>

        <div className="hidden xl:block col-span-1">
          <a href="https://cares.innogarant.com/index.php/funeralCares/quotation/index?language=fr&brokernumber=20389" target="_blank">
            <button className="hover w-62.5 h-14 rounded-full text-white font-extrabold bg-[#16553C]">
              Calculer Ma Prime
            </button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="xl:hidden flex justify-end">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button>
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="p-6">
              <nav className="flex flex-col gap-6 text-lg">
                <Link href="/">Acceuil</Link>
                <Link href="/services">Services</Link>
                <Link href="/problematique">Problématiques des coûts obsèques</Link>
                <Link href="/contact">Contact</Link>
                <a href="https://cares.innogarant.com/index.php/funeralCares/quotation/index?language=fr&brokernumber=20389" target="_blank">
                  <button className="hover w-62.5 h-14 rounded-full text-white font-extrabold bg-[#16553C]">
                    Calculer Ma Prime
                  </button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}