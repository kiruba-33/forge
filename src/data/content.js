/**
 * FORGE DESIGN SYSTEM — CENTRALIZED CONTENT DATA STORE
 * 
 * Category-neutral concept copy, refined editorial typography,
 * and high-resolution local photography assets.
 */

export const FORGE_CONTENT = {
  brand: {
    name: "FORGE",
    tagline: "Form, Material & Considered Living",
    archiveYear: "MMXXVI",
    coordinateStamp: "Studio Archive"
  },

  navigation: {
    items: [
      { id: "nav-products", label: "Products", href: "#showcase" },
      { id: "nav-collections", label: "Collections", href: "#editions" },
      { id: "nav-about", label: "About Forge", href: "#manifesto" },
      { id: "nav-details", label: "Details", href: "#specifications" },
      { id: "nav-story", label: "Our Story", href: "#story" },
      { id: "nav-contact", label: "Contact", href: "#footer" }
    ],
    menuLabel: "MENU"
  },

  hero: {
    figureTag: "01 STUDIO STUDY",
    headline: "The Poetry of Form & Authenticity",
    subtext: "A disciplined study in proportion, natural light, and enduring materiality. Crafted for spaces of quiet intention.",
    ctaLabel: "Explore Editions",
    secondaryCta: "View Details",
    subCoordinates: "EDITION 01 • STUDIO ARCHIVE",
    image: "/images/hero-bg.jpg",
    imageAlt: "Sculptural ceramic vessel and geometric form study in natural studio light"
  },

  featuredShowcase: {
    sectionTag: "01 SHOWCASE",
    productTitle: "Edition 01 — Monolith Form",
    category: "Primary Objects",
    description: "A deliberate balance of mass and contour. Finished with tactile warmth and designed to age with quiet dignity.",
    materialOptions: [
      { id: "opt-1", name: "Natural Limestone", hex: "#EAE5DC" },
      { id: "opt-2", name: "Warm Terracotta", hex: "#C76B48" },
      { id: "opt-3", name: "Soft Sage", hex: "#A9B69F" }
    ],
    specifications: [
      { label: "Material Composition", value: "Natural Mineral Compound" },
      { label: "Finish Treatment", value: "Hand-Honed Matte Surface" },
      { label: "Origin", value: "Studio Atelier" }
    ],
    actionLabel: "View Specifications",
    angles: [
      {
        id: "ang-1",
        number: "01",
        label: "Front Aspect",
        image: "/images/showcase-angle-1.jpg"
      },
      {
        id: "ang-2",
        number: "02",
        label: "Profile Contour",
        image: "/images/showcase-angle-2.jpg"
      },
      {
        id: "ang-3",
        number: "03",
        label: "Surface Texture",
        image: "/images/showcase-angle-3.jpg"
      }
    ]
  },

  collections: {
    sectionTag: "CURATED EDITIONS",
    heading: "Quiet Statements for Intentional Spaces",
    items: [
      {
        id: "col-1",
        title: "Collection I — Foundation",
        count: "06 Objects",
        description: "Elementary geometries sculpted from tactile minerals and warm architectural tones.",
        aspectRatio: "4/5",
        image: "/images/collection-a.jpg",
        imageAlt: "Foundation Collection — Mineral Sculptural Objects",
        linkText: "Explore Collection"
      },
      {
        id: "col-2",
        title: "Collection II — Equilibrium",
        count: "04 Objects",
        description: "A dialogue between positive volume and negative space, balancing light and weight.",
        aspectRatio: "1/1",
        image: "/images/collection-b.jpg",
        imageAlt: "Equilibrium Collection — Geometric Balance Study",
        linkText: "Explore Collection"
      },
      {
        id: "col-3",
        title: "Collection III — Horizon",
        count: "08 Objects",
        description: "Expansive low-profile vessels and sculptural centerpieces finished in warm earthen glazes.",
        aspectRatio: "3/2",
        image: "/images/collection-c.jpg",
        imageAlt: "Horizon Collection — Spatial Centerpieces",
        linkText: "Explore Collection"
      }
    ]
  },

  storytelling: {
    sectionTag: "ORIGIN & DISCIPLINE",
    pullQuote: "“We do not design for the ephemeral. Every piece is an exercise in material honesty, structural balance, and lasting presence.”",
    body: "In an era of rapid obsolescence, FORGE operates with deliberate restraint. Our objects emerge from patient iteration, honoring raw elements and the sensory dialogue between form and atmosphere. We craft pieces that anchor a room without demanding attention.",
    ctaLabel: "Read the Monograph",
    image: {
      aspectRatio: "4/5",
      src: "/images/story-atelier.jpg",
      alt: "Crafting and Material Exploration in Studio Atelier"
    }
  },

  specifications: {
    sectionTag: "STRUCTURAL ANATOMY",
    heading: "Precision Craft & Material Calibrations",
    coordinateTag: "STUDIO RECORD • SPECIMEN 01",
    diagramImage: {
      aspectRatio: "16/10",
      src: "/images/specifications-specimen.jpg",
      alt: "Orthographic Specimen Anatomy"
    },
    items: [
      {
        id: "spec-1",
        number: "01",
        title: "Mineral Formulation & Density",
        detail: "Engineered from calibrated natural silicates and earthen aggregates, achieving balanced density and tactile permanence without superficial coatings.",
        markerPosition: { x: "32%", y: "28%" }
      },
      {
        id: "spec-2",
        number: "02",
        title: "Proportional Geometry & Center of Mass",
        detail: "Calibrated golden ratios define every contour, lowering the center of gravity for stable architectural presence and natural ergonomic comfort.",
        markerPosition: { x: "62%", y: "48%" }
      },
      {
        id: "spec-3",
        number: "03",
        title: "Matte Silicate & Natural Aging",
        detail: "A microporous natural finish developed to cultivate a gentle patina over years of interaction, deepening in character without degrading structural integrity.",
        markerPosition: { x: "42%", y: "76%" }
      }
    ]
  },

  manifesto: {
    sectionTag: "THE CORE THESIS",
    heading: "Principles of Permanence",
    thesis: "FORGE was founded upon a deliberate rejection of the disposable. We believe physical objects should bring lasting stillness to contemporary life, commanding respect through silent restraint.",
    pillars: [
      {
        number: "01",
        title: "RADICAL RESTRAINT",
        text: "The intentional removal of the superfluous. Every curve, plane, and joint serves an essential functional or spatial purpose."
      },
      {
        number: "02",
        title: "TACTILE HONESTY",
        text: "No imitation finishes or artificial weight. Materials remain true to their geological and organic origins."
      },
      {
        number: "03",
        title: "PERMANENCE",
        text: "Created to endure across chapters and generations, outliving seasonal trends with quiet timelessness."
      }
    ]
  },

  discovery: {
    sectionTag: "ARCHIVE DISCOVERY",
    figureTag: "CATALOGUE ACCESS",
    title: "Experience the Current Editions",
    subtext: "Explore the complete register of studio pieces, material studies, and newly curated editions.",
    primaryCta: {
      label: "Explore the Collection",
      href: "#editions"
    },
    secondaryCta: {
      label: "Technical Specifications",
      href: "#specifications"
    }
  },

  footer: {
    brandClaim: "Considered forms for enduring living.",
    newsletter: {
      label: "STUDIO JOURNAL",
      description: "Receive private studio dispatches, exhibition notes, and collection release announcements.",
      placeholder: "Enter your email address",
      submitLabel: "SUBSCRIBE",
      successMessage: "Thank you. Your address has been recorded for studio journal dispatches."
    },
    columns: [
      {
        title: "COLLECTIONS",
        links: [
          { label: "Featured Products", href: "#showcase" },
          { label: "All Editions", href: "#editions" },
          { label: "Archive Catalogue", href: "#editions" }
        ]
      },
      {
        title: "STUDIO",
        links: [
          { label: "About Forge", href: "#manifesto" },
          { label: "Our Story", href: "#story" },
          { label: "Principles", href: "#manifesto" }
        ]
      },
      {
        title: "DETAILS",
        links: [
          { label: "Material Specifications", href: "#specifications" },
          { label: "Craft & Geometry", href: "#specifications" },
          { label: "Care Guide", href: "#specifications" }
        ]
      },
      {
        title: "CONNECT",
        links: [
          { label: "Studio Inquiries", href: "#footer" },
          { label: "Press Dispatches", href: "#footer" },
          { label: "Contact", href: "#footer" }
        ]
      }
    ],
    copyright: "© 2026 FORGE. ALL RIGHTS RESERVED.",
    archiveNote: "STUDIO REGISTER • VOL. 01"
  }
};
