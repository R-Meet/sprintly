
import { Footer } from "@/modules/landing-page/footer";
import { Solutions } from "@/modules/landing-page/solutions";
import { Navigation } from "@/modules/landing-page/navigation";
import { CTA } from "@/modules/landing-page/cta";
import { About } from "@/modules/landing-page/about";
import { Features } from "@/modules/landing-page/features";
import { Hero } from "@/modules/landing-page/hero";
import { ProductStrip } from "@/modules/landing-page/product-strip";


export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProductStrip />
        <Features />
        <About />
        <Solutions />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
