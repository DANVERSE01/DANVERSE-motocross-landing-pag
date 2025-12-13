"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const galleryItems = [
  { type: "quote", content: "ACCELERATE YOUR VISION", rotate: -2 },
  { type: "image", src: "/placeholder.svg?height=600&width=400", rotate: 3 },
  {
    type: "text",
    content:
      "AI-assisted cinematic production pipelines delivering high-end visuals and motion at unprecedented speed.",
    rotate: 1,
  },
  { type: "quote", content: "CINEMATIC STORYTELLING", rotate: -3 },
  { type: "image", src: "/placeholder.svg?height=600&width=400", rotate: 2 },
  {
    type: "text",
    content: "From concept to final delivery — generative visual systems for brand identities and campaigns.",
    rotate: -1,
  },
  { type: "quote", content: "RAPID ITERATION", rotate: 2 },
  { type: "image", src: "/placeholder.svg?height=600&width=400", rotate: -2 },
  {
    type: "text",
    content: "Real-time creative iteration without traditional production bottlenecks. Ideas to execution in hours.",
    rotate: 1,
  },
  { type: "image", src: "/placeholder.svg?height=600&width=400", rotate: 1 },
  { type: "quote", content: "FUTURE-READY", rotate: -1 },
  { type: "image", src: "/placeholder.svg?height=600&width=400", rotate: 2 },
  { type: "image", src: "/placeholder.svg?height=600&width=400", rotate: -1 },
  { type: "image", src: "/placeholder.svg?height=600&width=400", rotate: 3 },
  { type: "image", src: "/placeholder.svg?height=600&width=400", rotate: -2 },
  { type: "image", src: "/placeholder.svg?height=600&width=400", rotate: 1 },
]

function MasonryItem({ item, index }: { item: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 0.03])
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
        rotate: item.rotate,
      }}
      whileHover={{
        scale: 1.02,
        rotate: 0,
        zIndex: 10,
        transition: { duration: 0.3 },
      }}
      className={`${index === 1 || index === 7 ? "md:col-span-1 md:row-span-2" : ""}`}
    >
      {item.type === "quote" && (
        <div className="glass-card glass-card-acid bg-dan-acid text-white p-10 rounded-2xl border-4 border-dan-acid h-full flex flex-col items-center justify-center shadow-2xl">
          <p className="text-3xl md:text-4xl font-black text-center uppercase leading-tight">{item.content}</p>
        </div>
      )}

      {item.type === "image" && (
        <div className="relative h-full min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl hover:scale-102 transition-transform duration-300">
          <Image src={item.src || "/placeholder.svg"} alt="DANVERSE project showcase" fill className="object-cover" />
        </div>
      )}

      {item.type === "text" && (
        <div className="glass-card border-2 border-dan-acid/20 p-8 rounded-2xl h-full flex items-center justify-center shadow-xl">
          <p className="text-lg md:text-xl font-medium text-center leading-relaxed text-white">{item.content}</p>
        </div>
      )}
    </motion.div>
  )
}

export default function GallerySection() {
  return (
    <section id="work" className="relative min-h-screen bg-dan-bg text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
          {galleryItems.map((item, index) => (
            <MasonryItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
