/**
 * DANVERSE Asset Metadata
 * Central repository for all image and video metadata
 * DANVERSE: AI-powered creative studio specializing in cinematic brand systems,
 * high-end visuals, motion, interactive web experiences, and AI-assisted production workflows
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
  "/images/logo-color.png": {
    title: "DANVERSE Color Logo",
    description: "Full-color DANVERSE logo for light backgrounds and primary brand applications.",
    alt: "DANVERSE full color logo",
  },
  "/images/logo-white.png": {
    title: "DANVERSE White Logo",
    description: "White DANVERSE logo variant for dark backgrounds and reversed applications.",
    alt: "DANVERSE white logo",
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
  "/images/lorenzo-piloto.png": {
    title: "Studio Creative Director",
    description: "DANVERSE creative director portrait showcasing the human element behind AI-powered workflows.",
    alt: "Professional creative director portrait",
  },
  "/images/lorenzo-piloto3.png": {
    title: "Production Intensity",
    description: "Capturing the focus and precision required in high-stakes brand production environments.",
    alt: "Focused creative professional during production",
  },
  "/images/lorenzo-piloto4.png": {
    title: "Creative Vision",
    description: "Behind-the-scenes moment illustrating DANVERSE's hands-on approach to creative direction.",
    alt: "Creative professional reviewing work",
  },
  "/images/lorenzo-piloto6.png": {
    title: "Studio Session",
    description: "Active studio environment showcasing collaborative creative process and rapid iteration.",
    alt: "Studio creative session in progress",
  },
  "/images/lorenzo-piloto8.png": {
    title: "Direction Moment",
    description: "Creative direction in action, demonstrating DANVERSE's commitment to excellence.",
    alt: "Creative director providing direction",
  },
  "/images/lorenzo-piloto9.png": {
    title: "Production Flow",
    description: "Dynamic production moment capturing the energy and momentum of creative work.",
    alt: "Active production environment moment",
  },
  "/images/lorenzo-piloto10.png": {
    title: "Creative Process",
    description: "Intimate look at the creative process behind DANVERSE's cinematic outputs.",
    alt: "Creative professional in workflow",
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
  "/images/lofan/lofan2.jpg": {
    title: "Team Collaboration",
    description: "DANVERSE team members collaborating on complex brand challenge.",
    alt: "Creative team collaboration moment",
  },
  "/images/lofan/lofan4.jpg": {
    title: "Client Workshop",
    description: "Interactive workshop session with client stakeholders developing brand strategy.",
    alt: "Workshop collaboration session",
  },
  "/images/lofan/lofan5.jpg": {
    title: "Creative Energy",
    description: "High-energy creative session demonstrating DANVERSE's passionate approach.",
    alt: "Energetic creative session",
  },
  "/images/lofan/lofan6.jpg": {
    title: "Production Teamwork",
    description: "Coordinated team effort during intensive production sprint.",
    alt: "Production team working together",
  },
  "/images/lofan/lofan7.jpg": {
    title: "Strategy Session",
    description: "Strategic planning session for major brand campaign rollout.",
    alt: "Strategy planning session",
  },
  "/images/lofan/lofan8.jpg": {
    title: "Creative Momentum",
    description: "Capturing the momentum and flow of successful creative collaboration.",
    alt: "Dynamic collaboration moment",
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
  "/images/lorenzo-podio4.png": {
    title: "Campaign Success",
    description: "Celebrating successful campaign launch and positive client reception.",
    alt: "Professional celebrating campaign success",
  },
  "/images/lorenzo-podio6.png": {
    title: "Project Milestone",
    description: "Marking significant project milestone and creative breakthrough.",
    alt: "Project milestone celebration",
  },
  "/images/lorenzo-podio7.png": {
    title: "Excellence Recognition",
    description: "Recognition of creative excellence and innovative brand solutions.",
    alt: "Recognition moment for creative work",
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
  "/images/lorenzo-col.jpg": {
    title: "Collaborative Workspace",
    description: "Modern workspace designed for creative collaboration and rapid iteration.",
    alt: "Collaborative creative workspace",
  },
  "/images/lorenzo-col2.jpg": {
    title: "Studio Environment",
    description: "DANVERSE studio environment blending technology with creative atmosphere.",
    alt: "Creative studio environment",
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
  "/images/inspired-by-lando-norris.png": {
    title: "Creative Inspiration",
    description: "Visual inspiration representing speed, precision, and performance in creative work.",
    alt: "Creative inspiration imagery",
  },
  "/images/race-day.svg": {
    title: "Launch Day Graphic",
    description: "Campaign launch day visual representing preparation and execution excellence.",
    alt: "Campaign launch day graphic",
  },
  "/images/tras.svg": {
    title: "Background Texture 1",
    description: "Background texture pattern adding visual depth to interface sections.",
    alt: "Decorative background texture pattern",
  },
  "/images/trass.svg": {
    title: "Background Texture 2",
    description: "Alternative background texture for visual variety and depth.",
    alt: "Decorative background texture variation",
  },
  "/images/spla.svg": {
    title: "Impact Element",
    description: "Visual impact element symbolizing creative breakthrough and energy.",
    alt: "Decorative impact splash element",
  },
  "/images/trilha1.svg": {
    title: "Trail Pattern 1",
    description: "Motion trail pattern representing creative journey and momentum.",
    alt: "Decorative motion trail pattern",
  },
  "/images/trilha22.svg": {
    title: "Trail Pattern 2",
    description: "Variation of motion trail pattern for visual rhythm.",
    alt: "Decorative trail pattern variation",
  },
  "/images/trilhadir2.svg": {
    title: "Directional Trail",
    description: "Directional trail element guiding visual flow and narrative.",
    alt: "Decorative directional trail",
  },
  "/images/curveb.svg": {
    title: "Bottom Curve",
    description: "Bottom curve element creating smooth section transitions.",
    alt: "Decorative bottom curve element",
  },
  "/images/curvet.svg": {
    title: "Top Curve",
    description: "Top curve element for elegant section introductions.",
    alt: "Decorative top curve element",
  },
  "/images/curve-lines-texture.svg": {
    title: "Curve Lines Texture",
    description: "Linear curve texture adding subtle detail to interface elements.",
    alt: "Decorative curve lines texture",
  },
  "/images/mask-pneu.svg": {
    title: "Mask Shape",
    description: "Custom mask shape for creative visual treatments and overlays.",
    alt: "Decorative mask shape element",
  },
  "/images/v0mask.svg": {
    title: "V0 Mask Shape",
    description: "Specialized mask shape for advanced visual composition.",
    alt: "V0 decorative mask shape",
  },

  // Trophy images (repurposed as achievement/award icons)
  "/images/trofeus-lorenzo.PNG": {
    title: "Achievement Collection",
    description: "Collection of achievements and recognition in creative excellence.",
    alt: "Creative achievement awards collection",
  },
  "/images/trofeus/trofeu1.svg": {
    title: "Achievement Icon 1",
    description: "Award icon representing excellence in brand identity design.",
    alt: "Achievement award icon 1",
  },
  "/images/trofeus/trofeu2.svg": {
    title: "Achievement Icon 2",
    description: "Award icon representing excellence in motion graphics.",
    alt: "Achievement award icon 2",
  },
  "/images/trofeus/trofeu3.svg": {
    title: "Achievement Icon 3",
    description: "Award icon representing excellence in cinematic production.",
    alt: "Achievement award icon 3",
  },
  "/images/trofeus/trofeu4.svg": {
    title: "Achievement Icon 4",
    description: "Award icon representing excellence in interactive design.",
    alt: "Achievement award icon 4",
  },
  "/images/trofeus/trofeu5.svg": {
    title: "Achievement Icon 5",
    description: "Award icon representing excellence in AI-powered workflows.",
    alt: "Achievement award icon 5",
  },
  "/images/trofeus/trofeu6.svg": {
    title: "Achievement Icon 6",
    description: "Award icon representing excellence in 3D visualization.",
    alt: "Achievement award icon 6",
  },
  "/images/trofeus/trofeu7.svg": {
    title: "Achievement Icon 7",
    description: "Award icon representing excellence in brand storytelling.",
    alt: "Achievement award icon 7",
  },
  "/images/trofeus/trofeu8.svg": {
    title: "Achievement Icon 8",
    description: "Award icon representing excellence in experiential design.",
    alt: "Achievement award icon 8",
  },
  "/images/trofeus/trofeu9.svg": {
    title: "Achievement Icon 9",
    description: "Award icon representing excellence in generative art.",
    alt: "Achievement award icon 9",
  },

  // Pose/Portrait images
  "/images/lorenzo-pose.png": {
    title: "Brand Portrait",
    description: "Professional brand portrait emphasizing creative leadership and vision.",
    alt: "Professional brand portrait",
  },
  "/images/lorenzo-pose2.png": {
    title: "Studio Portrait Session",
    description: "Cinematic portrait showcasing DANVERSE's attention to visual storytelling.",
    alt: "Cinematic studio portrait",
  },
  "/images/lorenzo-pose3.png": {
    title: "Creative Leadership",
    description: "Portrait capturing the essence of creative direction and strategic thinking.",
    alt: "Creative leader portrait",
  },
  "/images/lorenzo-pose33.jpg": {
    title: "Tech Specs Portrait",
    description: "Technical specifications portrait blending human creativity with technological precision.",
    alt: "Technical portrait with specifications",
  },
  "/images/lorenzo-pose4.png": {
    title: "Vision Portrait",
    description: "Portrait emphasizing forward-thinking creative vision and innovation.",
    alt: "Visionary creative portrait",
  },
  "/images/lorenzo-pose5.png": {
    title: "Brand Identity Shot",
    description: "Identity portrait establishing DANVERSE's distinctive creative voice.",
    alt: "Brand identity portrait",
  },
  "/images/lorenzo-pose6.png": {
    title: "Professional Presence",
    description: "Professional portrait conveying expertise and creative confidence.",
    alt: "Professional creative portrait",
  },

  // Helmet/equipment images (repurposed as creative tools/assets)
  "/images/CAPACETE_LORENZO_OFICIAL.png": {
    title: "Signature Creative Tool",
    description: "Signature creative equipment representing DANVERSE's unique approach to production.",
    alt: "Signature creative production equipment",
  },
  "/images/lorenzo-off.png": {
    title: "Motion & Interactive Project",
    description: "Visual from motion graphics and interactive experience project showcase.",
    alt: "Motion graphics and interactive project visual",
  },
  "/images/cap-lorenzo.png": {
    title: "Brand Merchandise",
    description: "DANVERSE branded merchandise showcasing studio identity.",
    alt: "DANVERSE branded cap merchandise",
  },

  // Bike/Equipment images (repurposed as production equipment)
  "/images/moto.png": {
    title: "Production Equipment 1",
    description: "Professional production equipment utilized in DANVERSE's technical workflows.",
    alt: "Professional production equipment",
  },
  "/images/moto2.png": {
    title: "Production Equipment 2",
    description: "Advanced production technology enabling rapid creative iteration.",
    alt: "Advanced production technology",
  },
  "/images/moto3.png": {
    title: "Production Equipment 3",
    description: "State-of-the-art equipment supporting DANVERSE's cinematic output.",
    alt: "State-of-the-art production equipment",
  },

  // Icon images
  "/images/ico-helmet.png": {
    title: "Brand Icon",
    description: "DANVERSE brand icon representing creative protection and bold vision.",
    alt: "DANVERSE brand icon",
  },
  "/images/icon/ico-helmet-w.png": {
    title: "Brand Icon White",
    description: "White variant of DANVERSE brand icon for dark backgrounds.",
    alt: "DANVERSE white brand icon",
  },

  // Placeholder images
  "/placeholder.svg": {
    title: "Placeholder Image",
    description: "Temporary placeholder for content in development.",
    alt: "Placeholder image",
  },
  "/placeholder.jpg": {
    title: "Placeholder Photo",
    description: "Temporary photo placeholder for content in development.",
    alt: "Placeholder photo",
  },
  "/placeholder-logo.svg": {
    title: "Placeholder Logo",
    description: "Temporary logo placeholder for content in development.",
    alt: "Placeholder logo graphic",
  },
  "/placeholder-logo.png": {
    title: "Placeholder Logo PNG",
    description: "Temporary logo placeholder in raster format.",
    alt: "Placeholder logo image",
  },
  "/placeholder-user.jpg": {
    title: "Placeholder User",
    description: "Temporary user avatar placeholder for testimonials or team sections.",
    alt: "Placeholder user avatar",
  },

  // App icons
  "/icon.svg": {
    title: "DANVERSE App Icon",
    description: "Primary app icon for DANVERSE web application.",
    alt: "DANVERSE application icon",
  },
  "/icon-light-32x32.png": {
    title: "Light Theme Icon",
    description: "Small format icon optimized for light theme displays.",
    alt: "DANVERSE icon for light theme 32x32",
  },
  "/icon-dark-32x32.png": {
    title: "Dark Theme Icon",
    description: "Small format icon optimized for dark theme displays.",
    alt: "DANVERSE icon for dark theme 32x32",
  },
  "/apple-icon.png": {
    title: "Apple Touch Icon",
    description: "Icon optimized for Apple devices and home screen bookmarks.",
    alt: "DANVERSE Apple touch icon",
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
