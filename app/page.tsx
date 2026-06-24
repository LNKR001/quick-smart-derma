import Header from "@/components/blocks/header";
import Hero from "@/components/blocks/hero";
import Services from "@/components/blocks/services";
import PopularTreatments from "@/components/blocks/popular-treatments";
import AboutHospital from "@/components/blocks/about-hospital";
import WhyChoose from "@/components/blocks/why-choose";
import Metrics from "@/components/blocks/metrics";
import Testimonials from "@/components/blocks/testimonials";
import CTA from "@/components/blocks/cta";
import Footer from "@/components/blocks/footer";

/**
 * Quick Smart Derma — landing page.
 *
 * Visual treatment mirrors the Nuvica reference: a muted slate-blue canvas
 * (set on <body>) with the content floating inside a large rounded "page card"
 * over a giant faded brand watermark. Theme: icy-blue / ocean-blue / neon green.
 * Before/After comparison sections are intentionally omitted; imagery uses
 * placeholders.
 */
export default function Home() {
  return (
    <div className="px-3 py-6 sm:px-6 sm:py-8">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[2.5rem] bg-app-shell shadow-[0_30px_90px_rgba(0,40,90,0.35)] ring-1 ring-white/40">
        {/* Giant faded brand watermark behind the header */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-4 select-none text-center sm:-top-8"
        >
          <span className="text-[20vw] font-black leading-none tracking-tighter text-white/45 lg:text-[210px]">
            DERMA
          </span>
        </div>

        {/* Radial blur wrapper */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-radial-glow blur-3xl"
        />

        <div className="relative px-3 sm:px-5">
          <Header />
          <main>
            <Hero />
            <Services />
            <PopularTreatments />
            <AboutHospital />
            <WhyChoose />
            <Metrics />
            <Testimonials />
            <CTA />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
