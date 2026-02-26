"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const LoaderContext = createContext()

export function LoaderProvider({ children }) {
  const pathname = usePathname() // detects route change
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // When pathname changes → show loader
    setIsLoading(true)

    // Small delay so it’s visible (you can adjust/remove)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800) // duration of loader

    return () => clearTimeout(timer)
  }, [pathname]) // runs on EVERY navigation

  return (
    <LoaderContext.Provider value={{ isLoading }}>
      {children}
    </LoaderContext.Provider>
  )
}

export const useLoader = () => useContext(LoaderContext)