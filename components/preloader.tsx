"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const timer = setTimeout(() => {
      setIsVisible(false)
      document.body.style.overflow = "unset"
    }, 3500)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dan-bg text-white"
        >
          <div className="relative flex items-center justify-center overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <Image
                src="/images/danverse-logo.png"
                alt="DANVERSE"
                width={400}
                height={160}
                className="h-32 md:h-48 lg:h-56 w-auto object-contain"
                priority
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 font-[family-name:var(--font-oswald)] text-sm md:text-base font-bold tracking-widest uppercase text-dan-acid"
          >
            AI CREATIVE STUDIO
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
