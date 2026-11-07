import './App.css';
import {
  Navigation,
  CinematicHero,
  FeaturedShowcase,
  ProductCollections,
  ProductStorytelling,
  Specifications,
  BrandManifesto,
  ProductDiscovery,
  Footer
} from './components/sections';

/**
 * Forge Application Root
 * Assembles all 9 homepage sections in the refined warm architectural light direction:
 * 01. Navigation (Balanced perimeter bar with adaptive scroll blur and mobile drawer)
 * 02. Cinematic Hero (Full-screen 100svh natural light photography with Instrument Serif display)
 * 03. Featured Product Showcase (Working angle switching, material swatches, specs)
 * 04. Product Collections (Asymmetric editorial 12-column matrix on warm canvas #F7F5F0)
 * 05. Product Storytelling (Monograph spread with pull quote, narrative, and atelier visual)
 * 06. Features & Specifications (Technical matrix on #EAE5DC with interactive coordinate pips)
 * 07. Brand Manifesto (Spacious centered thesis and 3-pillar architectural ledger)
 * 08. Product Discovery / CTA (Architectural closing invitation on warm secondary surface)
 * 09. Premium Footer (Architectural ledger with functional newsletter on warm secondary surface)
 */
function App() {
  return (
    <div className="forge-app">
      {/* 01. NAVIGATION */}
      <Navigation />

      <main id="main-content">
        {/* 02. CINEMATIC HERO */}
        <CinematicHero />

        {/* 03. FEATURED PRODUCT SHOWCASE */}
        <FeaturedShowcase />

        {/* 04. PRODUCT COLLECTIONS */}
        <ProductCollections />

        {/* 05. PRODUCT STORYTELLING */}
        <ProductStorytelling />

        {/* 06. FEATURES & SPECIFICATIONS */}
        <Specifications />

        {/* 07. BRAND MANIFESTO */}
        <BrandManifesto />

        {/* 08. PRODUCT DISCOVERY / CTA */}
        <ProductDiscovery />
      </main>

      {/* 09. PREMIUM FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
