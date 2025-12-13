"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoColor, setLogoColor] = useState<"white" | "dark">("dark")

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrolled(currentScroll >= 300)

      let newColor: "white" | "dark" = "dark"

      if (currentScroll > 2) {
        newColor = "white"
      }

      const headerOffset = 100

      const masonry = document.getElementById("masonry-gallery")
      if (masonry) {
        const rect = masonry.getBoundingClientRect()
        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
          const progress = (headerOffset - rect.top) / rect.height
          if (progress > 0.65) {
            newColor = "dark"
          }
        }
      }

      const helmets = document.getElementById("helmets")
      if (helmets) {
        const rect = helmets.getBoundingClientRect()
        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
          newColor = "white"
        }
      }

      const social = document.getElementById("social-section")
      if (social) {
        const rect = social.getBoundingClientRect()
        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
          newColor = "dark"
        }
      }

      const techSpecs = document.getElementById("tech-specs")
      if (techSpecs) {
        const rect = techSpecs.getBoundingClientRect()
        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
          newColor = "dark"
        }
      }

      setLogoColor(newColor)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <Image
              src="/images/danverse-logo.png"
              alt="DANVERSE"
              width={160}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mix-blend-difference"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 bg-dan-acid/90 border border-white/30 hover:bg-dan-acid rounded-lg transition-colors text-white px-3 py-2.5"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-dan-blue/95 backdrop-blur-xl z-40 flex items-center justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
              className="text-center"
            >
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -20 },
                }}
                className="mb-12"
              >
                <Image
                  src="/images/danverse-logo.png"
                  alt="DANVERSE"
                  width={200}
                  height={80}
                  className="h-20 w-auto object-contain mx-auto"
                />
              </motion.div>

              <motion.ul className="space-y-6 text-4xl md:text-6xl font-black uppercase text-white">
                {["WORK", "CAPABILITIES", "APPROACH", "ABOUT", "CONTACT"].map((item, index) => (
                  <motion.li
                    key={item}
                    variants={{
                      open: { opacity: 1, y: 0, rotate: 0 },
                      closed: { opacity: 0, y: 20, rotate: -5 },
                    }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="inline-block hover:text-dan-acid transition-colors duration-300 hover:scale-110 transform"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                className="mt-12 flex justify-center gap-6"
              >
                {["INSTAGRAM", "LINKEDIN", "BEHANCE"].map((social) => (
                  <motion.a
                    key={social}
                    whileHover={{ scale: 1.1, color: "#e63946" }}
                    href={social === "INSTAGRAM" ? "https://www.instagram.com/danverse.creative/" : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white/60 hover:text-dan-acid transition-colors"
                  >
                    {social}
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
