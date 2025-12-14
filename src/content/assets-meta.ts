/**
 * DANVERSE Asset Metadata
 * Central repository for all image and video metadata
 * DANVERSE: AI-powered creative studio specializing in cinematic brand systems,
 * high-end visuals, motion, interactive web experiences, and AI-assisted production
 */

export interface AssetMetadata {
  title: string
  description: string
  alt: string
}

export const assetsMetadata: Record<string, AssetMetadata> = {
  // Hero Images
  "/images/hero-off.png": {
    title: "Cyberpunk Digital Mind",
    description:
      "Surreal portrait featuring vintage TV monitors integrated into a bearded creator's face, showcasing DANVERSE's approach to blending analog aesthetics with cutting-edge AI production workflows.",
    alt: "Artistic portrait with vintage television screens integrated into face showing cyberpunk aesthetic",
  },
  "/images/hero-on.png": {
    title: "Neural Interface Portrait",
    description:
      "Cinematic close-up with holographic HUD overlays and golden circuit patterns, representing the fusion of human creativity and AI-assisted visual storytelling.",
    alt: "Portrait with futuristic HUD overlays on eyes and glowing circuit patterns",
  },

  // Logo & Brand Assets
  "/images/danverse-logo.png": {
    title: "DANVERSE Studio Mark",
    description:
      "Primary brand identity featuring dynamic V letterform in signature red-magenta gradient, embodying speed and creative momentum.",
    alt: "DANVERSE logo with stylized V in red gradient",
  },

  // Interactive Clean Section
  "/images/Lorenzo-SUJO.jpg": {
    title: "Before State",
    description: "Raw creative material in pre-production state, demonstrating DANVERSE's transformation process.",
    alt: "Before transformation image showing initial creative state",
  },
  "/images/Lorenzo-LIMPO.jpg": {
    title: "After Polish",
    description: "Final cinematic output after AI-assisted enhancement and production refinement.",
    alt: "After transformation image showing polished final result",
  },
  "/images/panov0.png": {
    title: "Interactive Demo Asset",
    description: "Visual element for interactive reveal demonstration.",
    alt: "Interactive demonstration visual element",
  },

  // Partner Logos
  "/images/partners/next-logo.png": {
    title: "Next.js Framework",
    description: "React framework powering high-performance web experiences for DANVERSE projects.",
    alt: "Next.js logo",
  },
  "/images/partners/turbo-logo.png": {
    title: "Turborepo Build System",
    description: "High-speed build tooling enabling rapid iteration workflows.",
    alt: "Turbo logo",
  },
  "/images/partners/v0green-logo.png": {
    title: "v0 AI Design Tool",
    description: "AI-powered design assistant for accelerating creative development.",
    alt: "v0 logo",
  },
  "/images/partners/aisdk-logo.png": {
    title: "AI SDK Integration",
    description: "Vercel AI SDK enabling advanced AI features in web applications.",
    alt: "AI SDK logo",
  },
  "/images/partners/vercel-logo.png": {
    title: "Vercel Platform",
    description: "Deployment platform for instant global delivery of digital experiences.",
    alt: "Vercel logo",
  },

  // Helmet Hall / Project Gallery
  "/futuristic-ai-brain-neural-network-holographic-blu.jpg": {
    title: "Neural Brand System",
    description:
      "Holographic brain visualization showcasing AI-driven brand architecture and conceptual design for forward-thinking tech clients.",
    alt: "Holographic neural network visualization in blue tones",
  },
  "/cyberpunk-neon-portrait-with-holographic-overlay.jpg": {
    title: "Cyberpunk Identity Design",
    description:
      "Neon-infused portrait with HUD overlays demonstrating DANVERSE's signature cinematic character work for brand campaigns.",
    alt: "Cyberpunk style portrait with neon accents and holographic interface elements",
  },
  "/cinematic-ai-generated-portrait-futuristic-style.jpg": {
    title: "AI Campaign Portrait",
    description:
      "High-end AI-generated character work for global brand campaigns, blending photorealism with conceptual storytelling.",
    alt: "Cinematic AI-generated portrait with futuristic styling",
  },
  "/abstract-digital-motion-graphics-particles.jpg": {
    title: "Motion Design System",
    description: "Abstract particle system created for dynamic brand animations and interactive visual experiences.",
    alt: "Abstract digital particles and motion graphics in dynamic composition",
  },
  "/futuristic-web-interface-holographic-design.jpg": {
    title: "Interactive Web Experience",
    description:
      "Holographic UI design for immersive web platforms, combining cutting-edge interaction patterns with cinematic aesthetics.",
    alt: "Futuristic holographic web interface design",
  },
  "/3d-rendered-abstract-shapes-glossy-metallic.jpg": {
    title: "3D Visual Assets",
    description:
      "Glossy metallic 3D renders for luxury brand campaigns, showcasing DANVERSE's material design expertise.",
    alt: "3D rendered abstract shapes with glossy metallic surfaces",
  },
  "/ai-robot-portrait-artistic-cinematic.jpg": {
    title: "AI Production Character",
    description: "Cinematic AI character design for brand storytelling and experiential marketing campaigns.",
    alt: "Artistic AI robot portrait with cinematic lighting",
  },
  "/digital-art-cinematic-scene-dramatic-lighting.jpg": {
    title: "Digital Storytelling Frame",
    description: "Dramatic scene composition demonstrating DANVERSE's approach to narrative-driven visual production.",
    alt: "Digital art scene with dramatic cinematic lighting",
  },
  "/social-media-content-creative-design-neon.jpg": {
    title: "Social Content System",
    description: "Neon-infused social media templates designed for high-impact brand presence across platforms.",
    alt: "Creative social media design with neon elements",
  },
  "/interactive-digital-art-installation-abstract.jpg": {
    title: "Interactive Art Installation",
    description: "Abstract digital installation design for experiential brand activations and immersive environments.",
    alt: "Abstract interactive digital art installation",
  },
  "/generative-art-algorithm-patterns-colorful.jpg": {
    title: "Generative Art Patterns",
    description: "Algorithmic pattern generation for dynamic brand systems and procedural visual identities.",
    alt: "Colorful generative art patterns created through algorithms",
  },
  "/cinematic-film-production-scene-dramatic.jpg": {
    title: "Brand Film Production",
    description: "Cinematic frame from brand film showcasing DANVERSE's full-service production capabilities.",
    alt: "Dramatic cinematic film production scene",
  },
  "/dark-mode-ui-design-sleek-minimal.jpg": {
    title: "Dark Mode Interface",
    description: "Sleek minimal UI design demonstrating DANVERSE's expertise in premium digital product interfaces.",
    alt: "Dark mode user interface with minimal design",
  },
  "/product-launch-event-futuristic-stage.jpg": {
    title: "Product Launch Visuals",
    description: "Futuristic stage design and event visuals for high-profile product launches and brand experiences.",
    alt: "Futuristic stage design for product launch event",
  },
  "/chrome-metallic-3d-abstract-sculpture.jpg": {
    title: "Chrome Series Sculpture",
    description: "Metallic 3D sculpture from brand identity series, exploring reflective materials and form language.",
    alt: "Chrome metallic abstract 3D sculpture",
  },

  // Masonry Gallery - Pilot/Race Images (repurposed for DANVERSE projects)
  "/images/lorenzo-piloto1.png": {
    title: "Creative Direction Session",
    description: "Behind-the-scenes from DANVERSE creative direction session for brand campaign development.",
    alt: "Creative professional during direction session",
  },
  "/images/lorenzo-piloto2.png": {
    title: "Production Moment",
    description: "On-set production moment capturing the intensity of DANVERSE's cinematic workflow.",
    alt: "Creative team member during production",
  },
  "/images/lorenzo-piloto5.png": {
    title: "Studio Portrait",
    description: "Studio portrait showcasing DANVERSE's approach to character-driven brand storytelling.",
    alt: "Professional studio portrait",
  },
  "/images/lorenzo-piloto7.png": {
    title: "Conceptual Shoot",
    description: "Conceptual photography from experimental brand campaign exploring motion and energy.",
    alt: "Dynamic conceptual photography",
  },

  // Lofan images (repurposed as team/client moments)
  "/images/lofan/lofan.jpg": {
    title: "Client Collaboration",
    description: "DANVERSE team collaborating with client during creative strategy session.",
    alt: "Creative collaboration moment",
  },
  "/images/lofan/lofan3.jpg": {
    title: "Production Environment",
    description: "Dynamic production environment showing DANVERSE's rapid iteration workflow in action.",
    alt: "Active production environment",
  },

  // Podium images (repurposed as success/delivery moments)
  "/images/lorenzo-podio2.png": {
    title: "Project Delivery",
    description: "Celebrating successful delivery of major brand campaign and creative milestone.",
    alt: "Professional celebrating project success",
  },
  "/images/lorenzo-podio3.png": {
    title: "Campaign Launch",
    description: "Moment from high-profile campaign launch, showcasing DANVERSE's end-to-end delivery.",
    alt: "Campaign launch moment",
  },
  "/images/lorenzo-podio5.png": {
    title: "Creative Achievement",
    description: "Recognition of creative excellence and innovative approach to brand storytelling.",
    alt: "Recognition moment for creative achievement",
  },

  // Box/Garage images (repurposed as studio/workspace)
  "/images/lorenzo-box.png": {
    title: "Studio Workspace",
    description: "DANVERSE studio environment featuring production equipment and creative workspace setup.",
    alt: "Creative studio workspace",
  },
  "/images/lorenzo-box2.png": {
    title: "Production Setup",
    description: "Professional production setup showcasing DANVERSE's technical capabilities and equipment.",
    alt: "Professional production equipment setup",
  },
  "/images/lorenzo-box3.png": {
    title: "Creative Lab",
    description: "Creative laboratory space where DANVERSE experiments with new AI tools and production techniques.",
    alt: "Creative laboratory workspace",
  },

  // Hand icons (animated sequence)
  "/images/icon/icon-hand1.png": {
    title: "Gesture Frame 1",
    description: "Animated gesture sequence representing creative interaction and human touch in AI workflows.",
    alt: "Hand gesture icon frame 1",
  },
  "/images/icon/icon-hand2.png": {
    title: "Gesture Frame 2",
    description: "Animated gesture sequence representing creative interaction and human touch in AI workflows.",
    alt: "Hand gesture icon frame 2",
  },
  "/images/icon/icon-hand3.png": {
    title: "Gesture Frame 3",
    description: "Animated gesture sequence representing creative interaction and human touch in AI workflows.",
    alt: "Hand gesture icon frame 3",
  },
  "/images/icon/icon-hand4.png": {
    title: "Gesture Frame 4",
    description: "Animated gesture sequence representing creative interaction and human touch in AI workflows.",
    alt: "Hand gesture icon frame 4",
  },
  "/images/icon/icon-hand5.png": {
    title: "Gesture Frame 5",
    description: "Animated gesture sequence representing creative interaction and human touch in AI workflows.",
    alt: "Hand gesture icon frame 5",
  },
  "/images/icon/icon-hand6.png": {
    title: "Gesture Frame 6",
    description: "Animated gesture sequence representing creative interaction and human touch in AI workflows.",
    alt: "Hand gesture icon frame 6",
  },

  // Decorative SVGs
  "/images/trilha2.svg": {
    title: "Energy Trail Divider",
    description: "Dynamic trail pattern serving as visual divider, representing creative energy and momentum.",
    alt: "Decorative energy trail pattern divider",
  },
  "/images/splash.svg": {
    title: "Impact Splash Element",
    description: "Visual splash element symbolizing creative impact and brand presence.",
    alt: "Decorative splash graphic element",
  },
  "/images/trilhadiee.svg": {
    title: "Motion Path Graphic",
    description: "Motion path visualization representing DANVERSE's dynamic creative journey.",
    alt: "Decorative motion path graphic",
  },
  "/images/curv.svg": {
    title: "Curve Texture",
    description: "Organic curve texture adding depth and movement to interface sections.",
    alt: "Decorative curved texture pattern",
  },
  "/images/footer-mask.svg": {
    title: "Footer Mask Shape",
    description: "Custom SVG mask creating smooth visual transition in footer section.",
    alt: "Footer mask shape graphic",
  },
}

/**
 * Get metadata for an asset by its path
 */
export function getAssetMetadata(path: string): AssetMetadata {
  return (
    assetsMetadata[path] || {
      title: "DANVERSE Creative Asset",
      description:
        "Visual asset from DANVERSE creative studio, specializing in AI-powered brand systems and cinematic production.",
      alt: "DANVERSE creative visual",
    }
  )
}
