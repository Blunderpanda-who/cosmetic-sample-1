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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Velora Beauty — Beauty Beyond Perfection" },
      {
        name: "description",
        content:
          "Velora is a modern luxury beauty atelier crafting limited-edition lipsticks, serums, foundations, and fragrances in Paris and Tokyo.",
      },
      { property: "og:title", content: "Velora Beauty — Beauty Beyond Perfection" },
      {
        property: "og:description",
        content: "A modern luxury beauty atelier — micro-batch formulas crafted in Paris and Tokyo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="bg-ivory text-ink font-sans antialiased">
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
