"use client"

import { useLoader } from "@/context/Loader"
import { motion } from "framer-motion"

export default function ContentWrapper({ children }) {
  const { isLoading } = useLoader()

  return (
    <motion.div
      animate={{
        filter: isLoading ? "blur(6px)" : "blur(0px)",
        opacity: isLoading ? 0.6 : 1,
        scale: isLoading ? 0.995 : 1,
      }}
      transition={{
        duration: 0.45,
        ease: [0.4, 0, 0.2, 1], // smooth cubic-bezier (Material-like)
      }}
      className="min-h-screen"
      style={{ pointerEvents: isLoading ? "none" : "auto" }}
    >
      {children}
    </motion.div>
  )
}