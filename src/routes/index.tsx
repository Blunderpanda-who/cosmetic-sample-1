import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/velora/Nav";
import { Hero } from "@/components/velora/Hero";
import { FeaturedCollection } from "@/components/velora/FeaturedCollection";
import { Story } from "@/components/velora/Story";
import { WhyVelora } from "@/components/velora/WhyVelora";
import { Ingredients } from "@/components/velora/Ingredients";
import { BestSellers } from "@/components/velora/BestSellers";
import { Philosophy } from "@/components/velora/Philosophy";
import { Testimonials } from "@/components/velora/Testimonials";
import { Awards } from "@/components/velora/Awards";
import { Instagram } from "@/components/velora/Instagram";
import { Newsletter } from "@/components/velora/Newsletter";
import { Footer } from "@/components/velora/Footer";
import { useReveal } from "@/components/velora/useReveal";
import { LoadingScreen } from "@/components/velora/LoadingScreen";
import { CustomCursor } from "@/components/velora/CustomCursor";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Velora Beauty — Luxury Cosmetics & Fragrance Atelier" },
      {
        name: "description",
        content:
          "Velora is a modern luxury beauty atelier crafting limited-edition lipsticks, serums, foundations, and fragrances in Paris and Tokyo.",
      },
      { property: "og:title", content: "Velora Beauty — Luxury Cosmetics & Fragrance Atelier" },
      {
        property: "og:description",
        content: "A modern luxury beauty atelier — micro-batch formulas crafted in Paris and Tokyo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Velora Beauty — Luxury Cosmetics" },
      { name: "twitter:description", content: "Beauty Beyond Perfection. Limited-edition cosmetics from Paris and Tokyo." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Velora Beauty",
          url: "/",
          potentialAction: {
            "@type": "SearchAction",
            target: "/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),

  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="bg-ivory text-ink font-sans antialiased">
      <LoadingScreen />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <FeaturedCollection />
        <Story />
        <WhyVelora />
        <Ingredients />
        <BestSellers />
        <Philosophy />
        <Testimonials />
        <Awards />
        <Instagram />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

