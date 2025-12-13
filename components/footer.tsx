"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, PerspectiveCamera } from "@react-three/drei"
import { motion } from "framer-motion"
import Image from "next/image"
import Helmet3DModel from "./helmet-3d-model"
import InfiniteLogoSlider from "./infinite-logo-slider"

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 16, 16]} />
      <meshStandardMaterial color="#0f172a" wireframe />
    </mesh>
  )
}

export default function Footer() {
  return (
    <footer className="bg-dan-acid pt-0 px-4 md:px-8 min-h-screen flex flex-col justify-end relative pb-5">
      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-dan-bg to-dan-acid z-0" />

      <div className="relative flex-1 flex flex-col w-full max-w-[1688px] mx-auto mt-12 z-10">
        <div
          className="absolute inset-0 w-full h-full z-0 bg-dan-blue overflow-hidden"
          style={{
            maskImage: 'url("/images/footer-mask.svg")',
            WebkitMaskImage: 'url("/images/footer-mask.svg")',
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <div
            className="absolute inset-0 w-full h-full opacity-30"
            style={{
              backgroundImage: 'url("/images/curv.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>

        <div className="relative z-20 flex flex-col h-full px-8 md:px-24 py-12 md:py-20 md:pb-12 md:pl-0 md:pr-0">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mt-0">
            <div className="md:col-span-3 text-center order-2 md:order-1 md:pl-8 flex flex-col justify-center h-full">
              <h4 className="font-black text-xs uppercase mb-6 text-white/40 tracking-[0.2em]">NAVIGATE</h4>
              <ul className="space-y-2">
                {["WORK", "CAPABILITIES", "APPROACH", "ABOUT"].map((item) => (
                  <li className="leading-5" key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-white font-bold text-xl md:text-2xl uppercase hover:text-dan-acid transition-colors inline-block leading-4"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="mailto:danverseai@outlook.com"
                    className="text-dan-bg font-black text-xl md:text-2xl uppercase hover:text-white transition-colors inline-block"
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-6 flex flex-col items-center justify-center order-1 md:order-2 relative">
              <div className="absolute top-0 left-0 right-0 z-0 text-center transform -translate-y-1/4 md:-translate-y-0 mt-12">
                <Image
                  src="/images/danverse-logo.png"
                  alt="DANVERSE"
                  width={300}
                  height={120}
                  className="h-24 md:h-32 w-auto object-contain mx-auto mb-4"
                />
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-white mix-blend-overlay opacity-90"
                >
                  <span className="font-sans block">
                    ACCELERATE
                    <span className="font-brier text-dan-bg"> YOUR</span>
                  </span>
                  <span className="font-sans block">
                    <span className="font-brier text-dan-bg">VISION.</span>
                  </span>
                </motion.h2>
              </div>

              <div className="relative w-full h-[300px] md:h-[500px] z-10 mt-48 md:mt-56">
                <Canvas>
                  <PerspectiveCamera makeDefault position={[0, 0, 6.5]} />
                  <ambientLight intensity={0.8} />
                  <directionalLight position={[10, 10, 5]} intensity={1.5} />
                  <pointLight position={[-10, -10, -5]} intensity={0.8} color="#e63946" />
                  <Suspense fallback={<LoadingFallback />}>
                    <Helmet3DModel modelPath="/3d/helmet-lorenzo.glb" />
                  </Suspense>
                  <Environment preset="city" />
                </Canvas>
              </div>

              <motion.a
                href="mailto:danverseai@outlook.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute -bottom-12 z-20 bg-dan-bg text-white font-black uppercase px-8 py-4 rounded-[14px] text-sm tracking-wider hover:bg-white hover:text-dan-bg transition-colors flex items-center gap-2"
              >
                START A PROJECT
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </motion.a>
            </div>

            <div className="md:col-span-3 text-center order-3 md:order-2 md:pr-8 flex flex-col justify-center h-full">
              <h4 className="font-black text-xs uppercase mb-6 text-white/40 tracking-[0.2em]">CONNECT</h4>
              <ul className="space-y-2">
                {["INSTAGRAM", "LINKEDIN", "BEHANCE", "EMAIL"].map((platform) => (
                  <li className="leading-5" key={platform}>
                    <a
                      href={
                        platform === "INSTAGRAM"
                          ? "https://www.instagram.com/danverse.creative/"
                          : platform === "EMAIL"
                            ? "mailto:danverseai@outlook.com"
                            : "#"
                      }
                      target={platform !== "EMAIL" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-white font-bold text-xl md:text-2xl uppercase hover:text-dan-bg transition-colors inline-block leading-4"
                    >
                      {platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-white/10 border-t-0 mb-0 mt-32 pt-0">
            <InfiniteLogoSlider />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1688px] mx-auto px-8 md:px-12 relative z-20 pt-0">
        <div className="flex flex-col md:flex-row justify-between items-center text-dan-bg text-xs font-bold tracking-wider uppercase">
          <p>© 2025 DANVERSE. All rights reserved</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:opacity-60 transition-opacity">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity">
              TERMS
            </a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1688px] mx-auto px-8 md:px-12 relative z-20 pt-0">
        <div className="flex flex-col md:flex-row justify-between items-center text-dan-bg text-xs font-bold tracking-wider uppercase">
          <p className="text-xs mt-7 opacity-40 font-medium leading-4 text-left">
            DANVERSE is a full-stack AI-powered creative studio that designs and produces cinematic brand systems — from
            concept and storytelling to high-end visuals, motion, interactive web experiences, and final delivery.
          </p>
        </div>
      </div>
    </footer>
  )
}
