"use client"

import { motion, AnimatePresence } from "framer-motion"
import React from "react"
import { useLoader } from "@/context/Loader"
import Image from "next/image"

export default function Loader() {
  const { isLoading } = useLoader()

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm"
          initial={{ opacity: 0, y:0, borderBottomLeftRadius:0,borderBottomRightRadius:0 }}
          animate={{opacity: 1, x:0, borderBottomLeftRadius:500,borderBottomRightRadius:500 }}
          exit={{ opacity: 1, y:-900, borderTopLeftRadius:200,borderTopRightRadius:200}}
          transition={{ duration: 1 }}
        >
          <Image src={"/logo2.png"} alt="logo" width={200} height={120} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}