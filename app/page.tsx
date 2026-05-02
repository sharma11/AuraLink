import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { ProductTeaserCard } from "@/components/ProductTeaserCard"
import { BankingScaleHero } from "@/components/BankingScaleHero"
import { CaseStudiesCarousel } from "@/components/CaseStudiesCarousel"
import { IntegrationCarousel } from "@/components/IntegrationCarousel"
import { AIChatbotSection } from "@/components/AIChatbotSection"
import { PricingSection } from "@/components/PricingSection"
import { FAQSection } from "@/components/FAQSection"
import { Footer } from "@/components/Footer"
import { GsapReveal } from "@/components/GsapReveal"




export default function Page() {
  return (
    <>
      <PortfolioNavbar />

      <GsapReveal direction="right">
        <ProductTeaserCard />
      </GsapReveal>
      <GsapReveal direction="left" delay={0.05}>
        <BankingScaleHero />
      </GsapReveal>
      <GsapReveal direction="left" delay={0.1}>
        <CaseStudiesCarousel />
      </GsapReveal>
      <GsapReveal direction="up" delay={0.15}>
        <IntegrationCarousel />
      </GsapReveal>
      <GsapReveal direction="down" delay={0.2}>
        <PricingSection />
      </GsapReveal>
      <GsapReveal direction="left" delay={0.25}>
        <FAQSection />
      </GsapReveal>
      <GsapReveal direction="up" delay={0.3}>
        <Footer />
      </GsapReveal>
      <AIChatbotSection />
      </>
  )
}
