import { Header } from "@/components/header"
import { FakeNewsDetector } from "@/components/fake-news-detector"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FakeNewsDetector />
      <AboutSection />
      <Footer />
    </main>
  )
}
