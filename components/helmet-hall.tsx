"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  { id: 1, name: "Neural Brand System", year: "2025", image: "/futuristic-ai-brain-neural-network-holographic-blu.jpg" },
  { id: 2, name: "Cyberpunk Identity", year: "2025", image: "/cyberpunk-neon-portrait-with-holographic-overlay.jpg" },
  { id: 3, name: "AI Campaign", year: "2025", image: "/cinematic-ai-generated-portrait-futuristic-style.jpg" },
  { id: 4, name: "Motion Design", year: "2024", image: "/abstract-digital-motion-graphics-particles.jpg" },
  { id: 5, name: "Web Experience", year: "2024", image: "/futuristic-web-interface-holographic-design.jpg" },
  { id: 6, name: "3D Visuals", year: "2024", image: "/3d-rendered-abstract-shapes-glossy-metallic.jpg" },
  { id: 7, name: "AI Production", year: "2025", image: "/ai-robot-portrait-artistic-cinematic.jpg" },
  { id: 8, name: "Digital Storytelling", year: "2025", image: "/digital-art-cinematic-scene-dramatic-lighting.jpg" },
  { id: 9, name: "Social Content", year: "2025", image: "/social-media-content-creative-design-neon.jpg" },
  { id: 10, name: "Interactive Art", year: "2024", image: "/interactive-digital-art-installation-abstract.jpg" },
  { id: 11, name: "Generative Art", year: "2024", image: "/generative-art-algorithm-patterns-colorful.jpg" },
  { id: 12, name: "Brand Film", year: "2024", image: "/cinematic-film-production-scene-dramatic.jpg" },
  { id: 13, name: "Dark Mode UI", year: "2024", image: "/dark-mode-ui-design-sleek-minimal.jpg" },
  { id: 14, name: "Product Launch", year: "2023", image: "/product-launch-event-futuristic-stage.jpg" },
  { id: 15, name: "Chrome Series", year: "2023", image: "/chrome-metallic-3d-abstract-sculpture.jpg" },
  { id: 16, name: "Summer Campaign", year: "2023", image: "/placeholder.svg?height=400&width=400" },
  { id: 17, name: "Event Visuals", year: "2023", image: "/placeholder.svg?height=400&width=400" },
  { id: 18, name: "Sports Branding", year: "2022", image: "/placeholder.svg?height=400&width=400" },
  { id: 19, name: "Tech Launch", year: "2020", image: "/placeholder.svg?height=400&width=400" },
  { id: 20, name: "Annual Report", year: "2021", image: "/placeholder.svg?height=400&width=400" },
]

export default function HelmetHall() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="approach" className="relative min-h-screen text-white py-24 px-6 md:px-12 bg-dan-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">
            <span className="text-white">SELECTED</span>
            <br />
            <span className="text-dan-acid font-brier text-8xl">PROJECTS</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 mt-6 max-w-2xl">
            From AI-assisted cinematic production to generative visual systems — explore our portfolio of high-end brand
            experiences and campaigns.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.03, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                gridRow: index % 4 === 1 ? "span 1" : "auto",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square overflow-hidden rounded-2xl bg-dan-blue/50 
                           border-2 border-dan-gray/20 
                           group-hover:border-dan-acid 
                           group-hover:shadow-2xl 
                           group-hover:shadow-dan-acid/20 
                           transition-all duration-300"
              >
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="absolute bottom-4 right-4 text-right bg-dan-bg/60 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <p className="text-xs md:text-sm font-bold text-white/70 group-hover:text-white transition-colors duration-300">
                    {project.name}
                  </p>
                  <p className="text-sm md:text-base font-black text-dan-acid group-hover:scale-110 group-hover:text-white transition-all duration-300 inline-block">
                    {project.year}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
