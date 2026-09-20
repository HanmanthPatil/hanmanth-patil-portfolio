import { Navbar } from "@/components/layout/navbar";
import { GlassHero } from "@/components/hero/glass-hero";
import { AcademicsIntro } from "@/components/sections/academics-intro";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { Achievements } from "@/components/sections/achievements";
import { EventsCompetitions } from "@/components/sections/events-competitions";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-text-primary overflow-x-hidden selection:bg-accent-cyan/20 selection:text-text-primary">
      {/* Fixed Minimal Navigation */}
      <Navbar />

      {/* Main Single-Page Landmark Content */}
      <main>
        {/* Signature Interactive Hero */}
        <GlassHero />

        {/* 01. Profile & Verified Academics */}
        <AcademicsIntro />

        {/* 02. Flagship Systems & Products */}
        <ProjectsGrid />

        {/* 03. Major Competition Honors */}
        <Achievements />

        {/* 04. Technical Arena Ledger */}
        <EventsCompetitions />

        {/* 05. Direct Inquiries & Professional Network */}
        <ContactSection />
      </main>

      {/* Minimal Colophon Footer */}
      <Footer />
    </div>
  );
}
