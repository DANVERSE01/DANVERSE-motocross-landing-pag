/**
 * DANVERSE Portfolio Data
 * Centralized content for AI-powered creative studio
 * Extracted from legacy portfolio and adapted for DANVERSE brand
 */

export interface PortfolioProject {
  id: string
  title: string
  subtitle: string
  year: string
  category: string
  description: string
  role: string
  tools: string[]
  thumbnail: string
  featured: boolean
}

export interface ServiceItem {
  title: string
  description: string
  capabilities: string[]
}

export interface ExperienceItem {
  title: string
  organization: string
  period: string
  description: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "neural-brand-system",
    title: "Neural Brand System",
    subtitle: "AI-Driven Identity Architecture",
    year: "2025",
    category: "Brand Identity",
    description:
      "Holographic brand architecture leveraging generative AI for adaptive visual identity system. Developed algorithmic pattern generation creating unique brand expressions across touchpoints.",
    role: "Creative Director & AI Production Lead",
    tools: ["Midjourney", "ComfyUI", "After Effects", "Cinema 4D"],
    thumbnail: "/futuristic-ai-brain-neural-network-holographic-blu.jpg",
    featured: true,
  },
  {
    id: "cyberpunk-identity",
    title: "Cyberpunk Identity Campaign",
    subtitle: "Cinematic Character Design",
    year: "2025",
    category: "Brand Campaign",
    description:
      "High-end character design and cinematic visuals for global tech brand launch. Integrated HUD overlays and neon aesthetics with AI-assisted production pipeline.",
    role: "Creative Director & Visual Designer",
    tools: ["Stable Diffusion", "Runway", "DaVinci Resolve", "Blender"],
    thumbnail: "/cyberpunk-neon-portrait-with-holographic-overlay.jpg",
    featured: true,
  },
  {
    id: "ai-campaign-portrait",
    title: "AI Campaign Series",
    subtitle: "Photorealistic Brand Storytelling",
    year: "2025",
    category: "Photography & Motion",
    description:
      "AI-generated photorealistic campaign imagery blending conceptual storytelling with hyper-real execution. Delivered complete visual system in 48-hour sprint.",
    role: "AI Creative Producer",
    tools: ["DALL-E 3", "Midjourney", "Photoshop", "Lightroom"],
    thumbnail: "/cinematic-ai-generated-portrait-futuristic-style.jpg",
    featured: true,
  },
  {
    id: "motion-design-system",
    title: "Motion Design System",
    subtitle: "Dynamic Brand Animations",
    year: "2024",
    category: "Motion Graphics",
    description:
      "Abstract particle system and motion design framework for brand animations across digital platforms. Real-time generative visuals synchronized with brand interactions.",
    role: "Motion Designer & Technical Director",
    tools: ["TouchDesigner", "After Effects", "Houdini", "Unreal Engine"],
    thumbnail: "/abstract-digital-motion-graphics-particles.jpg",
    featured: false,
  },
  {
    id: "web-experience",
    title: "Immersive Web Experience",
    subtitle: "Holographic UI Design",
    year: "2024",
    category: "Web & Interactive",
    description:
      "Holographic interface design for luxury brand digital platform. Combined Three.js, GLSL shaders, and AI-generated textures for next-generation web experience.",
    role: "Creative Technologist",
    tools: ["Next.js", "Three.js", "GLSL", "Framer Motion"],
    thumbnail: "/futuristic-web-interface-holographic-design.jpg",
    featured: false,
  },
  {
    id: "3d-visual-assets",
    title: "Luxury 3D Assets",
    subtitle: "Material Design Exploration",
    year: "2024",
    category: "3D & CGI",
    description:
      "Glossy metallic 3D renders for luxury brand campaigns. Explored advanced material systems and lighting setups for photorealistic product visualization.",
    role: "3D Artist & Visual Designer",
    tools: ["Cinema 4D", "Octane Render", "Substance Designer"],
    thumbnail: "/3d-rendered-abstract-shapes-glossy-metallic.jpg",
    featured: false,
  },
  {
    id: "ai-production-character",
    title: "AI Character Production",
    subtitle: "Cinematic Brand Storytelling",
    year: "2025",
    category: "Character Design",
    description:
      "Cinematic AI character design for experiential marketing campaign. Created fully articulated digital character with emotion-driven animations.",
    role: "Character Designer & AI Director",
    tools: ["Midjourney", "Character Creator", "Unreal Engine", "MotionBuilder"],
    thumbnail: "/ai-robot-portrait-artistic-cinematic.jpg",
    featured: false,
  },
  {
    id: "digital-storytelling",
    title: "Digital Storytelling Series",
    subtitle: "Narrative-Driven Visuals",
    year: "2025",
    category: "Film & Video",
    description:
      "Dramatic scene compositions for brand narrative campaign. Directed lighting, color grading, and cinematic framing for emotional brand storytelling.",
    role: "Director & Cinematographer",
    tools: ["DaVinci Resolve", "After Effects", "Premiere Pro"],
    thumbnail: "/digital-art-cinematic-scene-dramatic-lighting.jpg",
    featured: false,
  },
  {
    id: "social-content-system",
    title: "Social Content System",
    subtitle: "High-Impact Templates",
    year: "2025",
    category: "Social Media",
    description:
      "Neon-infused social media template system designed for maximum engagement. Created modular design system adaptable across platforms.",
    role: "Social Creative Lead",
    tools: ["Figma", "After Effects", "Canva Pro", "Photoshop"],
    thumbnail: "/social-media-content-creative-design-neon.jpg",
    featured: false,
  },
  {
    id: "interactive-art-installation",
    title: "Interactive Art Installation",
    subtitle: "Experiential Brand Activation",
    year: "2024",
    category: "Installation & Experience",
    description:
      "Abstract digital installation for brand experiential activation. Real-time audience interaction driving generative visual responses.",
    role: "Experience Designer",
    tools: ["TouchDesigner", "Processing", "Arduino", "Kinect"],
    thumbnail: "/interactive-digital-art-installation-abstract.jpg",
    featured: false,
  },
  {
    id: "generative-art-patterns",
    title: "Generative Art System",
    subtitle: "Algorithmic Brand Patterns",
    year: "2024",
    category: "Generative Design",
    description:
      "Procedural pattern generation for dynamic brand identity. Created algorithmic system producing infinite unique variations while maintaining brand coherence.",
    role: "Creative Coder",
    tools: ["Processing", "P5.js", "Houdini", "Python"],
    thumbnail: "/generative-art-algorithm-patterns-colorful.jpg",
    featured: false,
  },
  {
    id: "brand-film-production",
    title: "Brand Film Production",
    subtitle: "Full-Service Cinematic Campaign",
    year: "2024",
    category: "Film Production",
    description:
      "End-to-end brand film production from concept to final delivery. Directed full crew, managed production pipeline, and delivered cinematic storytelling.",
    role: "Director & Producer",
    tools: ["RED Camera", "DaVinci Resolve", "After Effects"],
    thumbnail: "/cinematic-film-production-scene-dramatic.jpg",
    featured: false,
  },
  {
    id: "dark-mode-ui",
    title: "Premium UI System",
    subtitle: "Sleek Digital Product Interface",
    year: "2024",
    category: "Product Design",
    description:
      "Minimal dark mode interface for luxury digital product. Focused on typography, micro-interactions, and seamless user experience.",
    role: "Product Designer",
    tools: ["Figma", "Framer", "React", "Tailwind CSS"],
    thumbnail: "/dark-mode-ui-design-sleek-minimal.jpg",
    featured: false,
  },
  {
    id: "product-launch-visuals",
    title: "Product Launch Event",
    subtitle: "Futuristic Stage Design",
    year: "2023",
    category: "Event Design",
    description:
      "Stage design and event visuals for high-profile product launch. Created immersive environment blending physical and digital elements.",
    role: "Event Creative Director",
    tools: ["Cinema 4D", "Notch", "Resolume", "TouchDesigner"],
    thumbnail: "/product-launch-event-futuristic-stage.jpg",
    featured: false,
  },
  {
    id: "chrome-series",
    title: "Chrome Series Sculpture",
    subtitle: "Material Exploration",
    year: "2023",
    category: "3D Art",
    description:
      "Metallic 3D sculpture series exploring reflective materials and abstract form language for brand visual identity.",
    role: "3D Artist",
    tools: ["Cinema 4D", "Octane Render", "Photoshop"],
    thumbnail: "/chrome-metallic-3d-abstract-sculpture.jpg",
    featured: false,
  },
]

export const services: ServiceItem[] = [
  {
    title: "AI-Powered Production",
    description:
      "Leverage cutting-edge AI tools to accelerate creative workflows. From concept to delivery in hours, not weeks.",
    capabilities: [
      "Generative AI imagery and video",
      "Rapid iteration and A/B testing",
      "AI-assisted editing and enhancement",
      "Real-time style transfer",
    ],
  },
  {
    title: "Brand Identity Systems",
    description:
      "Build cohesive visual systems that scale across all touchpoints. Algorithmic and adaptive brand architectures.",
    capabilities: [
      "Logo and visual identity design",
      "Motion graphics and animation",
      "Pattern and texture generation",
      "Digital brand guidelines",
    ],
  },
  {
    title: "Cinematic Storytelling",
    description:
      "Create high-impact visual narratives that captivate audiences. Film, photography, and motion design excellence.",
    capabilities: [
      "Brand films and commercials",
      "Character design and animation",
      "Conceptual photography",
      "Color grading and post-production",
    ],
  },
  {
    title: "Interactive Experiences",
    description:
      "Design immersive digital experiences that engage and inspire. Web, mobile, and experiential installations.",
    capabilities: [
      "3D web experiences (Three.js/R3F)",
      "Interactive installations",
      "Custom UI/UX design",
      "Real-time generative visuals",
    ],
  },
]

export const experience: ExperienceItem[] = [
  {
    title: "Creative Director & AI Strategist",
    organization: "DANVERSE Studio",
    period: "2023 - Present",
    description:
      "Founded AI-powered creative studio specializing in rapid brand production and cinematic storytelling. Led 15+ brand campaigns leveraging generative AI workflows.",
  },
  {
    title: "Senior Motion Designer",
    organization: "Global Creative Agency",
    period: "2021 - 2023",
    description:
      "Directed motion graphics and visual effects for international brands. Pioneered AI-assisted production pipelines reducing delivery time by 60%.",
  },
  {
    title: "Visual Designer & Creative Technologist",
    organization: "Digital Innovation Lab",
    period: "2019 - 2021",
    description:
      "Developed interactive installations and experiential design for brand activations. Specialized in generative art systems and real-time visuals.",
  },
  {
    title: "Freelance Designer & 3D Artist",
    organization: "Independent Practice",
    period: "2017 - 2019",
    description:
      "Provided creative services for startups and established brands. Built expertise in 3D visualization, motion design, and brand identity.",
  },
]

export const contactInfo = {
  email: "hello@danverse.studio",
  instagram: "@danverse.creative",
  linkedin: "danverse-studio",
  location: "Remote / Global",
}

export const stats = {
  projectsCompleted: 101,
  clientsSatisfied: 47,
  yearsExperience: 8,
  aiToolsMastered: 12,
}
