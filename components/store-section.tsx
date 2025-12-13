"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function StoreSection() {
  return (
    <section id="about" className="relative min-h-screen bg-dan-bg py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div className="space-y-6">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-dan-acid/60">SERVICES:</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white leading-[0.9]">
              AI CREATIVE <span className="text-dan-acid font-brier">STUDIO</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-md leading-relaxed">
              Full-stack AI-powered creative production — from concept and storytelling to high-end visuals, motion, and
              interactive web experiences.
            </p>

            <Link
              href="mailto:danverseai@outlook.com"
              className="inline-flex items-center gap-3 bg-dan-acid text-dan-bg px-8 py-4 rounded-full text-sm font-black uppercase hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              START A PROJECT
              <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="glass-card relative aspect-square rounded-2xl overflow-hidden border-2 border-dan-acid/20 hover:border-dan-acid hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center p-4">
                <span className="text-white font-bold text-center text-sm">Brand Systems</span>
              </div>
              <div className="glass-card relative aspect-square rounded-2xl overflow-hidden border-2 border-dan-acid/20 hover:border-dan-acid hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center p-4">
                <span className="text-white font-bold text-center text-sm">Motion & Film</span>
              </div>
              <div className="glass-card relative aspect-square rounded-2xl overflow-hidden border-2 border-dan-acid/20 hover:border-dan-acid hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center p-4">
                <span className="text-white font-bold text-center text-sm">Web Experiences</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden border border-dan-acid/20"
          >
            <Image src="/images/lorenzo-piloto.png" alt="DANVERSE Creative Director" fill className="object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
