import Header from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'
import CategoryRail from '@/components/CategoryRail'
import TopSellers from '@/components/FeaturedProducts'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />
      <main className="w-full flex-1">
        <HeroBanner />

        <div className="w-full px-6 md:px-12 lg:px-24 py-20 space-y-24">
          <CategoryRail />
          <TopSellers />
        </div>

        <Benefits />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
